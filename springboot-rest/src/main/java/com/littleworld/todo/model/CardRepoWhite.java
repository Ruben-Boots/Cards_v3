package com.littleworld.todo.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepoWhite extends CrudRepository<WhiteCard, Long> {

}
