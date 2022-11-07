package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LocationDTO {

    private double lat;
    private double lon;
    private String photo;
    private String name;
    private String rating;
}
