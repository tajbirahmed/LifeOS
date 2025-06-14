package org.lifeos.quiz.service_clients;

import org.lifeos.quiz.dto.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "lifeos-AI-microservice")
public interface AIServiceClient {
    @PostMapping("/generate-quiz-by-prompt")
    String generateQuizByPrompt(@RequestBody QuizByPromptDTO quizByPromptDTO);

    @PostMapping("/generate-quiz-by-youtube")
    String generateQuizByYoutube(@RequestBody QuizByYoutubeDTO quizByYoutubeDTO);

    @PostMapping("/generate-quiz-by-article")
    String generateQuizByArticle(@RequestBody QuizByArticleDTO quizByArticleDTO);

    @PostMapping("/generate-quiz-by-notes")
    String generateQuizByNotes(@RequestBody QuizByNotesDTO quizByNotesDTO);

    @PostMapping("/evaluate-short-answer-questions")
    List<ShortAnswerQuestionCheckingResDTO> evaluateShortAnswerQuestions(@RequestBody List<ShortAnswerQuestionCheckingReqDTO> questions);
}

