package com.littleworld.todo.services;

import com.littleworld.todo.model.WhiteCard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhiteCardService extends CrudRepository<WhiteCard, Long> {

}
