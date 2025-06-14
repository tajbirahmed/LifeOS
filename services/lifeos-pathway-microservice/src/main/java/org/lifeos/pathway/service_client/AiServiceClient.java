package org.lifeos.pathway.service_client;

import org.lifeos.pathway.dto.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "lifeos-AI-microservice")
public interface AiServiceClient {
    @PostMapping("/generate-questions")
    String generatePathwayQuestions(
            @RequestBody StageCreationDTO stageCreationDTO
    );
    @PostMapping("/generate-pathway")
    String generatePathwayByPrompt(StageCreationDTO stageCreationDTO);

    @PostMapping("/generate-substages")
    String generateSubStagePrompt(
            @RequestBody SubStageGenerationDTO subStageGenerationDTO
    );

    @PostMapping("/generate-task")
    String generateTask(
            @RequestBody TaskGenerationDTO taskGenerationDTO
    );

    @PostMapping("/generate-stage-by-name")
    String generateStageByName(
            @RequestBody SubStageGenerationDTO subStageGenerationDTO
    );
}
