package de.neuefische.backend.controller;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.model.LocationDTO;
import de.neuefische.backend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
public class LocationController {

    private LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @PostMapping
    public Location addLocation(@RequestBody LocationDTO locationDTO) {
        return locationService.addNewLocation(locationDTO);
    }

    @GetMapping
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }
}
