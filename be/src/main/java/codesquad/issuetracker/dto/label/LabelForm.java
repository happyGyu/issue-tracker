package codesquad.issuetracker.dto.label;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class LabelForm {

    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @NotBlank
    private String color;
    @NotNull
    private boolean isDarkText;
}
