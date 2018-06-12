package com.littleworld.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BlackCard
{
	@Id
	protected long id;
	protected int num_picks;
	protected String text;
	protected String cardset;

	public BlackCard(){

	}

	public BlackCard(String txt,long id,int picks, String cardset) {
		this.text = txt;
		this.id = id;
		this.num_picks = picks;
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
	
	public int getNumPicks()
	{
		return this.num_picks;
	}
	
	public void setNumPicks(int num)
	{
		this.num_picks = num;
	}
	
}
