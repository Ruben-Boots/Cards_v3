package com.littleworld.todo.services;

import com.littleworld.todo.model.BlackCard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackCardService extends CrudRepository<BlackCard, Long> {

}
