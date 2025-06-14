package org.lifeos.feed.dto;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FeedInsightDTO {
    private String insightId;
    private String title;
    private String content;
}
