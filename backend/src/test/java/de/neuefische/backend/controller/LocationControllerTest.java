package de.neuefische.backend.controller;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repository.LocationRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
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

    @MockBean
    private IdService idService;

    @Test
    void addNewLocation() throws Exception {
        //GIVEN
        when(idService.generateId()).thenReturn("1");
        String requestBody = """
                        {
                        "id": "1",
                        "lat": 150,
                        "lon": 200,
                        "photo": "photo1",
                        "name": "Nike Platz",
                        "rating": "4"
                        }           
                """;

        String exceptionJSON = """
                        {
                        "id": "1",
                        "lat": 150,
                        "lon": 200,
                        "photo": "photo1",
                        "name": "Nike Platz",
                        "rating": "4"
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
            Location location1 = new Location("1", 100, 200, "photo1", "Nike Platz", "4");
            Location location2 = new Location("2", 300, 400, "photo2", "Stadtgarten", "3");
            locationRepo.save(location1);
            locationRepo.save(location2);

            String expectedJSON = """
            [
                {
                "id": "1",
                "lat": 100,
                "lon": 200,
                "photo": "photo1",
                "name": "Nike Platz",
                "rating": "4"
                },
                {
                "id": "2",
                "lat": 300,
                "lon": 400,
                "photo": "photo2",
                "name": "Stadtgarten",
                "rating": "3"
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