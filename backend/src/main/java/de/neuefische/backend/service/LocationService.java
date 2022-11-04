package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.model.LocationDTO;
import de.neuefische.backend.repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationRepo locationRepo;
    private IdService idService;

    @Autowired
    public LocationService(LocationRepo locationRepo, IdService idService) {
        this.locationRepo = locationRepo;
        this.idService = idService;
    }

    public List<Location> getAllLocations() {
        return locationRepo.findAll();
    }

    public Location addNewLocation(LocationDTO locationDTO) {
        Location newLocation = Location.builder()
                .id(idService.generateId())
                .lat(locationDTO.getLat())
                .lon(locationDTO.getLon())
                .photo(locationDTO.getPhoto())
                .name(locationDTO.getName())
                .rating(locationDTO.getRating())
                .build();
        return locationRepo.save(newLocation);
    }
}
