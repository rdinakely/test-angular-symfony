<?php

namespace App\DataFixtures;

use App\Entity\Exam;
use App\Entity\User;
use App\Enum\ExamStatusEnum;
use App\State\UserPasswordHasher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $passwordHasher
    ){
    }

    public function load(ObjectManager $manager): void
    {
        $this->loadUser($manager);
        $this->loadExams($manager);
    }

    private function loadUser(ObjectManager $manager): void
    {
        $user = new User();
        $user
            ->setEmail('john@doe.com')
            ->setName('John Doe');

        $user->setPassword($this->passwordHasher->hashPassword($user, 'lorem'));

        $manager->persist($user);
        $manager->flush();
    }

    private function loadExams(ObjectManager $manager): void
    {
        $exams = [
            [
                'studentName' => 'John Doe',
                'location' => 'Room 101',
                'date' => new \DateTimeImmutable('2024-12-18'),
                'time' => new \DateTimeImmutable('10:00:00'),
                'status' => ExamStatusEnum::Confirmed,
            ],
            [
                'studentName' => 'Jane Smith',
                'location' => null,
                'date' => new \DateTimeImmutable('2024-12-20'),
                'time' => new \DateTimeImmutable('14:30:00'),
                'status' => ExamStatusEnum::ToBeScheduled,
            ],
            [
                'studentName' => 'David Lee',
                'location' => 'Library',
                'date' => new \DateTimeImmutable('2024-12-17'),
                'time' => new \DateTimeImmutable('16:00:00'),
                'status' => ExamStatusEnum::Cancelled,
            ],
            [
                'studentName' => 'Sarah Jones',
                'location' => null,
                'date' => new \DateTimeImmutable('2024-12-21'),
                'time' => new \DateTimeImmutable('09:00:00'),
                'status' => ExamStatusEnum::SearchingForPlace,
            ],
            [
                'studentName' => 'Michael Brown',
                'location' => 'Classroom A',
                'date' => new \DateTimeImmutable('2024-12-19'),
                'time' => new \DateTimeImmutable('11:30:00'),
                'status' => ExamStatusEnum::Confirmed,
            ],
        ];

        foreach ($exams as $item) {
            $exam = new Exam();
            $exam
                ->setStudentName($item['studentName'])
                ->setLocation($item['location'])
                ->setDate($item['date'])
                ->setTime($item['time'])
                ->setStatus($item['status']);

            $manager->persist($exam);
        }

        $manager->flush();
    }
}
