package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
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

    LocationRepo locationRepo = mock(LocationRepo.class);

    LocationService locationService = new LocationService(locationRepo);

    @Test
    void addLocation_ShouldReturn_AddedLocation(){
        //GIVEN
        Location location = new Location("1", "Köln", "photo1");
        when(locationRepo.save(any())).thenReturn(location);

        //WHEN
        Location actual = locationService.addLocation(location);

        //THEN
        Location expected = new Location("1", "Köln", "photo1");
        assertEquals(expected, actual);
    }

    @Test
    void getAllLocation_ShouldReturn_AllLocationInRepo() {
        //GIVEN
        Location location1 = new Location("1", "Köln", "photo1");
        Location location2 = new Location("2", "Leverkusen", "photo2");
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