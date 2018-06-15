package com.littleworld.todo.model;


import com.littleworld.todo.services.BlackCardService;
import com.littleworld.todo.services.WhiteCardService;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class ReadCards {


    public ArrayList<Long> trackblack;
    public ArrayList<Long> trackwhite;


    public String[] cardsets;

    public ReadCards() {
        trackwhite = new ArrayList<>();
        trackblack = new ArrayList<>();

        File folder = new File("src/main/resources/Cardsets/");
        File[] listOfDecks = folder.listFiles();
        ArrayList<String> tmpnames = new ArrayList();


        for (File file : listOfDecks) {
            if (file.isFile()) {
                tmpnames.add(file.getName().substring(0,file.getName().indexOf(".")));
            }
        }
        this.cardsets = tmpnames.toArray(new String[tmpnames.size()]);
    }

    public String[] getCardsets()
    {
        return this.cardsets;
    }


    public void read(BlackCardService repob, WhiteCardService repow) {
        int idxp = 0, numpicks;
        long idB = 0, idW = 0;
        String cardset;
        Scanner sc = null;

        BlackCard tmpb;
        WhiteCard tmpw;

        String line;
        String[] lineseg;

        File folder = new File("src/main/resources/Cardsets/");

        File[] listOfDecks = folder.listFiles();

        for (File file : listOfDecks) {
            if (!file.isFile()) {
                continue;
            }

            cardset = file.getName();
            cardset = cardset.substring(0, cardset.indexOf('.'));

            try {
                sc = new Scanner(file);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }

            while (sc.hasNextLine()) {
                line = sc.nextLine();

                line = line.replaceAll("\"\"", "'");
                line = line.replaceAll("\"", "");

                lineseg = line.split(";");

                if (line.length() > 15 && line.substring(0, 10).toLowerCase().contains("prompt")) {
                    if ((idxp = line.indexOf("PICK")) > 0) {
                        numpicks = line.charAt(idxp + 5) - 48;
                    } else {
                        numpicks = 1;
                    }

                    tmpb = new BlackCard(lineseg[1], idB++, numpicks, cardset);

                    if (tmpb != null) {
                        repob.save(tmpb);
                    }

                } else if (line.length() > 15 && line.substring(0, 10).toLowerCase().contains("response")) {
                    tmpw = new WhiteCard(lineseg[1], idW++, cardset);
                    if (tmpw != null) {
                        repow.save(tmpw);
                    }
                }
            }
        }
    }

    public synchronized void resetTrack(BlackCardService repob, WhiteCardService repow, String[] sets) {
        this.trackblack.clear();
        this.trackwhite.clear();

        for (int i = 0; i < sets.length; ++i) {
            this.trackblack.addAll(repob.findBlackByCardset(sets[i]));
            this.trackwhite.addAll(repow.findWhiteByCardset(sets[i]));
        }
    }

    public BlackCard drawBlack(BlackCardService repob) {
        int idx;
        BlackCard res = null;
        if (trackblack.size() > 0) {
            idx = (int) (Math.random() * trackblack.size());
            res = repob.findOne(trackblack.get(idx));
            trackblack.remove(trackblack.get(idx));
        }

        return res;
    }

    public WhiteCard[] drawWhite(int numCards, WhiteCardService repow) {
        WhiteCard[] res = new WhiteCard[numCards];
        int idx;


        if (numCards < trackwhite.size()) {
            for (int i = 0; i < numCards; ++i) {
                idx = (int) (Math.random() * trackwhite.size());
                res[i] = repow.findOne(trackwhite.get(idx));
                trackwhite.remove(idx);
            }
        }


        return res;
    }



}
