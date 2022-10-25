package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationRepo locationRepo;

    @Autowired
    public LocationService(LocationRepo locationRepo) {
        this.locationRepo = locationRepo;
    }

    public Location addLocation(Location location) {
        return locationRepo.save(location);
    }

    public List<Location> getAllLocations() {
        return locationRepo.findAll();
    }
}
