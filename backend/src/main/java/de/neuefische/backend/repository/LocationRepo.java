package de.neuefische.backend.repository;

import de.neuefische.backend.model.Location;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends MongoRepository<Location, String> {
}
