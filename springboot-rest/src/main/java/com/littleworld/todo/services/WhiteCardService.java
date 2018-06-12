package com.littleworld.todo.services;

import com.littleworld.todo.model.WhiteCard;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface WhiteCardService extends CrudRepository<WhiteCard, Long> {

    @Query("select id from WhiteCard where cardset = :cardsetsearch")
    ArrayList<Long> findWhiteByCardset(@Param("cardsetsearch") String cardsetsearch);
}
