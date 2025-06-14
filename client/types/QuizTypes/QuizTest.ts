import {Quiz} from "@/types/QuizTypes/Quiz";
import {User} from "@/types/User";

export interface QuizTest {
  quizTestId: string,
  quiz:Quiz,
  user: User,
  quizTestScore?: number; // Score, can be null
  testTakenAt: string;    // Timestamp
}
