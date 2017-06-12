/* eslint-env jest */
import makeSummary from './index';

const player = {
  steamid: '76561197962529615',
  communityvisibilitystate: 3,
  profilestate: 1,
  personaname: 'Beyinsiz',
  lastlogoff: 1497212247,
  profileurl: 'http://steamcommunity.com/profiles/76561197962529615/',
  avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f0/f067c34fd39721bf44aad7df426f3c885f54c38a.jpg',
  avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f0/f067c34fd39721bf44aad7df426f3c885f54c38a_medium.jpg',
  avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f0/f067c34fd39721bf44aad7df426f3c885f54c38a_full.jpg',
  personastate: 0,
  realname: 'Kivanc Kaynar',
  primaryclanid: '103582791429521408',
  timecreated: 1067890706,
  personastateflags: 0,
  loccountrycode: 'TR',
  locstatecode: '68',
  loccityid: 44776,
};

const state =
  {
    summaries: [{
      steamid: '76561197963736982',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'TenToe',
      lastlogoff: 1497210889,
      profileurl: 'http://steamcommunity.com/id/TenToe/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9a/9a5690fadc8218014d0710c6ad4a9656b7a43683.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9a/9a5690fadc8218014d0710c6ad4a9656b7a43683_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9a/9a5690fadc8218014d0710c6ad4a9656b7a43683_full.jpg',
      personastate: 0,
      primaryclanid: '103582791434636960',
      timecreated: 1073258979,
      personastateflags: 0,
      loccountrycode: 'DE',
    }, {
      steamid: '76561198121178470',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'Le QuacK',
      lastlogoff: 1497214488,
      profileurl: 'http://steamcommunity.com/profiles/76561198121178470/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cb/cbf2963f950f2f026406b6635280ed974594f073.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cb/cbf2963f950f2f026406b6635280ed974594f073_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cb/cbf2963f950f2f026406b6635280ed974594f073_full.jpg',
      personastate: 0,
      realname: 'Michael',
      primaryclanid: '103582791429521408',
      timecreated: 1388541112,
      personastateflags: 0,
      loccountrycode: 'LB',
      locstatecode: '04',
      loccityid: 26521,
    }, {
      steamid: '76561198013622539',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'Inziladunn',
      lastlogoff: 1497211788,
      profileurl: 'http://steamcommunity.com/profiles/76561198013622539/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/107a3992b28c031f876222fead661efb7514d834.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/107a3992b28c031f876222fead661efb7514d834_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/107a3992b28c031f876222fead661efb7514d834_full.jpg',
      personastate: 3,
      primaryclanid: '103582791431110569',
      timecreated: 1252804964,
      personastateflags: 0,
      loccountrycode: 'VC',
      locstatecode: '03',
    }, {
      steamid: '76561198139217062',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'PRO_STO NAYANKA',
      lastlogoff: 1497213024,
      profileurl: 'http://steamcommunity.com/profiles/76561198139217062/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/69/69a15c9577177d1086cdd6a9590861c4232ba987.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/69/69a15c9577177d1086cdd6a9590861c4232ba987_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/69/69a15c9577177d1086cdd6a9590861c4232ba987_full.jpg',
      personastate: 1,
      primaryclanid: '103582791429521408',
      timecreated: 1401931849,
      personastateflags: 0,
      loccountrycode: 'RU',
      locstatecode: '39',
      loccityid: 41611,
    }, player, {
      steamid: '76561197997309439',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'Azalx',
      lastlogoff: 1497263579,
      profileurl: 'http://steamcommunity.com/profiles/76561197997309439/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/af/af0b87cad2ebb69fc0e8e29195911978c58a8282.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/af/af0b87cad2ebb69fc0e8e29195911978c58a8282_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/af/af0b87cad2ebb69fc0e8e29195911978c58a8282_full.jpg',
      personastate: 0,
      primaryclanid: '103582791430345851',
      timecreated: 1205703992,
      personastateflags: 0,
    }, {
      steamid: '76561198133363360',
      communityvisibilitystate: 2,
      profilestate: 1,
      personaname: 'King.Dante_Nephilim',
      lastlogoff: 1497212925,
      profileurl: 'http://steamcommunity.com/profiles/76561198133363360/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5a/5a4931eabea371e0d78924ae3ff6ff31f895aebd.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5a/5a4931eabea371e0d78924ae3ff6ff31f895aebd_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5a/5a4931eabea371e0d78924ae3ff6ff31f895aebd_full.jpg',
      personastate: 0,
    }, {
      steamid: '76561198147413229',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'FlowerPower',
      lastlogoff: 1497213887,
      profileurl: 'http://steamcommunity.com/profiles/76561198147413229/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/68/68fa668b7df0dc21c5f28e4db76bb6b89aa424f4.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/68/68fa668b7df0dc21c5f28e4db76bb6b89aa424f4_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/68/68fa668b7df0dc21c5f28e4db76bb6b89aa424f4_full.jpg',
      personastate: 0,
      primaryclanid: '103582791429521408',
      timecreated: 1406668637,
      personastateflags: 0,
    }, {
      steamid: '76561197999037786',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'garip',
      lastlogoff: 1497210111,
      profileurl: 'http://steamcommunity.com/profiles/76561197999037786/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ee/ee938a5ca4375e79662e0d37fd39bd3de03c5fef.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ee/ee938a5ca4375e79662e0d37fd39bd3de03c5fef_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ee/ee938a5ca4375e79662e0d37fd39bd3de03c5fef_full.jpg',
      personastate: 0,
      realname: 'kerem aynur',
      primaryclanid: '103582791429521408',
      timecreated: 1212410248,
      personastateflags: 0,
      loccountrycode: 'TR',
    }, {
      steamid: '76561198049888611',
      communityvisibilitystate: 3,
      profilestate: 1,
      personaname: 'Pine apple pen !',
      lastlogoff: 1497208793,
      profileurl: 'http://steamcommunity.com/profiles/76561198049888611/',
      avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b5/b5236c405bb0a1e999722d376bd67b83ebc651b7.jpg',
      avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b5/b5236c405bb0a1e999722d376bd67b83ebc651b7_medium.jpg',
      avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b5/b5236c405bb0a1e999722d376bd67b83ebc651b7_full.jpg',
      personastate: 0,
      primaryclanid: '103582791429521408',
      timecreated: 1317578693,
      personastateflags: 0,
    }],
    players: [{
      steamID3: '187147501',
      steamID64: '76561198147413229',
      inMyParty: false,
    }, {
      steamID3: '38772058',
      steamID64: '76561197999037786',
      inMyParty: false,
    }, {
      steamID3: '2263887',
      steamID64: '76561197962529615',
      inMyParty: false,
    }, {
      steamID3: '173097632',
      steamID64: '76561198133363360',
      inMyParty: false,
    }, {
      steamID3: '178951334',
      steamID64: '76561198139217062',
      inMyParty: false,
    }, {
      steamID3: '3471254',
      steamID64: '76561197963736982',
      inMyParty: true,
    }, {
      steamID3: '53356811',
      steamID64: '76561198013622539',
      inMyParty: false,
    }, {
      steamID3: '89622883',
      steamID64: '76561198049888611',
      inMyParty: false,
    }, {
      steamID3: '37043711',
      steamID64: '76561197997309439',
      inMyParty: false,
    }, {
      steamID3: '160912742',
      steamID64: '76561198121178470',
      inMyParty: false,
    }],
  };

const params = [state, { id: 2 }];

const summarySelector = makeSummary(...params);

describe('makeSummary', () => {
  it('it should select the right summary', () => {
    expect(summarySelector(...params)).toMatchObject(player);
  });
});