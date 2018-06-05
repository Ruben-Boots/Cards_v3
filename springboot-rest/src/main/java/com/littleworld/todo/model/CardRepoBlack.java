package com.littleworld.todo.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepoBlack extends CrudRepository<BlackCard, Long> {

}
