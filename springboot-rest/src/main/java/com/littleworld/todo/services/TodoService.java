
package com.littleworld.todo.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.littleworld.todo.model.Todo;

@Repository
public interface TodoService extends CrudRepository<Todo, Integer> {

}

