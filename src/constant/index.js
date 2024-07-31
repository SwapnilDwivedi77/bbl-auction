export const PLAYER_CATEGORY ={
    MARQUEE:'MARQUEE',
    CHAMPION : 'CHAMPION',
    ELITE : 'ELITE',
    CHALLENGER : 'CHALLENGER'
}

export const CATEGORY_COLOR = {
    [PLAYER_CATEGORY.MARQUEE] : '#FF007F',
    [PLAYER_CATEGORY.CHAMPION] : '#00BFFF',
    [PLAYER_CATEGORY.ELITE] : '#FFFF00',
    [PLAYER_CATEGORY.CHALLENGER] : '#FF7F50',

}

export const TOTAL_PURSE = 125000

export const BASE_PRICE = {
    [PLAYER_CATEGORY.MARQUEE] : 15000,
    [PLAYER_CATEGORY.CHAMPION] : 12000,
    [PLAYER_CATEGORY.ELITE] : 9000,
    [PLAYER_CATEGORY.CHALLENGER] : 6000

}

export const CAPTAIN_COST_FACTOR = {
    [PLAYER_CATEGORY.MARQUEE] : 1.75,
    [PLAYER_CATEGORY.CHAMPION] : 1.5,
    [PLAYER_CATEGORY.ELITE] : 1.25,
    [PLAYER_CATEGORY.CHALLENGER] : 1

}

export const teamDropdownValue =  [
    {teamName : 'Jasprit Bumrah',key:'FAN'},
    {teamName : 'Ravindra Jadeja',key:'GOG'},
    {teamName : 'Rishabh Pant',key:'HLS'},
    {teamName : 'Rohit Sharma',key:'MRW'},
    {teamName : 'Sanju Samson',key:'THP'},
    {teamName : `SuryaKumar`,key:'THT'},
    {teamName : `Virat Kohli`,key:'WSA'},
  ]



export const IMG_BASE_URL = '/Users/nil_07/Desktop/My_Folder/bbl-auction/public/data'