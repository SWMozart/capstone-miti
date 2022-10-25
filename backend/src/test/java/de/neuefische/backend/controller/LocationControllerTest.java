package de.neuefische.backend.controller;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repository.LocationRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class LocationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private LocationRepo locationRepo;

    @Test
    void addLocation() throws Exception {
        //GIVEN
        String requestBody = """
                        {
                        "id": "1",
                        "place": "Köln",
                        "photo": "pic1" 
                        }           
                """;

        String exceptionJSON = """
                {
                "id": "1",
                "place": "Köln",
                "photo": "pic1" 
                }           
        """;

        //WHEN & THEN
        mockMvc.perform(
                post("/api/locations")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(exceptionJSON));
        }

    @Test
    void getAllLocations() throws Exception {
        //GIVEN
            Location location1 = new Location("1", "Köln", "pic1");
            Location location2 = new Location("2", "Leverkusen", "pic2");
            locationRepo.save(location1);
            locationRepo.save(location2);

            String expectedJSON = """
            [
                {
                "id": "1",
                "place": "Köln",
                "photo": "pic1"
                },
                {
                "id": "2",
                "place": "Leverkusen",
                "photo": "pic2"
                }
            ]   
        """;

        //WHEN & THEN
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/locations"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }
}