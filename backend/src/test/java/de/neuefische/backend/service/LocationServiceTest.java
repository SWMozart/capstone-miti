package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.model.LocationDTO;
import de.neuefische.backend.repository.LocationRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class LocationServiceTest {

    private final LocationRepo locationRepo = mock(LocationRepo.class);

    private final IdService idService = mock(IdService.class);

    private final LocationService locationService = new LocationService(locationRepo, idService);

    @Test
    void addNewLocation_ShouldReturn_AddedLocation(){
        //GIVEN
        LocationDTO locationDTO = new LocationDTO(100, 200, "photo1", "Nike Platz", "4");
        when(idService.generateId()).thenReturn("1");
        when(locationRepo.save(any()))
                .thenReturn(Location.builder()
                        .id("1")
                        .lat(locationDTO.getLat())
                        .lon(locationDTO.getLon())
                        .photo(locationDTO.getPhoto())
                        .name(locationDTO.getName())
                        .rating(locationDTO.getRating())
                        .build());

        //WHEN
        Location actual = locationService.addNewLocation(locationDTO);

        //THEN
        Location expected = new Location("1", 100, 200, "photo1", "Nike Platz", "4");
        assertEquals(expected, actual);
    }

    @Test
    void getAllLocation_ShouldReturn_AllLocationInRepo() {
        //GIVEN
        Location location1 = new Location("1", 100, 200, "photo1", "Nike Platz", "4");
        Location location2 = new Location("2", 300, 400, "photo3", "Stadtgarten", "3");
        locationRepo.save(location1);
        locationRepo.save(location2);
        when(locationRepo.findAll()).thenReturn(List.of(location1, location2));

        //WHEN
        List<Location> actual = locationService.getAllLocations();

        //THEN
        List<Location> expected = List.of(location1, location2);
        assertEquals(expected, actual);
    }
}