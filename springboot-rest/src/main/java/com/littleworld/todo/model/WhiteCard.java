package com.littleworld.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WhiteCard
{
	@Id
	protected long id;
	protected String text;
	protected String cardset;

	public WhiteCard()
	{

	}

	public WhiteCard(String txt, long id, String cardset)
	{
		this.id = id;
		this.text = txt;
		this.cardset = cardset;
	}

	public void setText(String text)
	{
		this.text = text;
	}

	public String getText()
	{
		return this.text;
	}

	public void setCardset(String cardset)
	{
		this.cardset = cardset;
	}

	public String getCardset()
	{
		return this.cardset;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public long getId()
	{
		return this.id;
	}

	public String toString()
	{
		return this.text;
	}
}
