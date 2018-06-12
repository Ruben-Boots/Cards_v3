package com.littleworld.todo.services;

import com.littleworld.todo.model.BlackCard;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface BlackCardService extends CrudRepository<BlackCard, Long> {

    @Query("select id from BlackCard where cardset = :cardsetsearch")
    ArrayList<Long> findBlackByCardset(@Param("cardsetsearch") String cardsetsearch);
}
