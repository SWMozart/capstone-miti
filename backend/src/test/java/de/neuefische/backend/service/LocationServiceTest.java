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
    void addLocation_ShouldReturn_AddedLocation(){
        //GIVEN
        Location location = new Location("1", 100, 200, "photo1", "Nike Platz", "4");
        when(idService.generateId()).thenReturn("1", "2");
        when(locationRepo.findAll())
                .thenReturn(List.of(location));

        //WHEN
        Location actual = locationService.addNewLocation(new LocationDTO());

        //THEN
        Location expected = new Location("2", 300, 400, "photo2", "Stadtgarten", "3");
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