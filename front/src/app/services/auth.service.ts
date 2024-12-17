import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, of, tap} from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly httpClient = inject(HttpClient)
  private readonly router = inject(Router)

  login(credentials: { email: string, password: string }) {
    return this.httpClient
      .post<{ token: string }>('/auth', credentials)
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('token', token)
        }),
        map(() => ({
          isAuthenticated: true,
        })),
        catchError(() => of({ isAuthenticated: false }))
      )
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  isAuthenticated(): boolean {
    return !this.isTokenExpired()
  }

  private getToken(): string|null {
    return localStorage.getItem('token')
  }

  private isTokenExpired(): boolean {
    const token = this.getToken()
    if (!token) {
      return true
    }

    const decodedToken = jwtDecode(token)
    const expiryTime = decodedToken.exp;
    if (!expiryTime) {
      return true;
    }

    return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
  }
}
