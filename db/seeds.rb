# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Destroy all of the databases
  User.destroy_all
  Server.destroy_all
  Message.destroy_all
  ServerMembership.destroy_all
  Channel.destroy_all
  DmServer.destroy_all
  DmMembership.destroy_all
  DmMessage.destroy_all

#Rest the ids of all databases
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('servers')
  ApplicationRecord.connection.reset_pk_sequence!('messages')
  ApplicationRecord.connection.reset_pk_sequence!('server_memberships')
  ApplicationRecord.connection.reset_pk_sequence!('channels')
  ApplicationRecord.connection.reset_pk_sequence!('dm_servers')
  ApplicationRecord.connection.reset_pk_sequence!('dm_memberships')
  ApplicationRecord.connection.reset_pk_sequence!('dm_messages')


#Discord_Bot
  discord_bot2 = User.create(
    id: 776,
    email: "discordbot@discord.com",
    username: "Cacophony Bot",
    password: "AdminOnly", 
    color_id: 1,
  )

# Demo user
  demo_user = User.create(
      email: "KoalaDemo2@caveman.com",
      username: "DemoUser",
      password: "DropBear")

#Imperial Fists
  dorn = User.create(
      email: "GoldenMan@fortify.com",
      username: "Dorn",
      password: "painGlove")

  archamus = User.create(
    email: "oldmanWorkshard@fotify.com",
    username: "Prateorian",
    password: "oldman"
  )

  sigismund = User.create(
    email: "advance@fotify.com",
    username: "Sigismund",
    password: "censured"
  )

  dias = User.create(
    email: "selectiveShots@fotify.com",
    username: "Cambia Diaz",
    password: "no step bakc"
  )

  kestros = User.create(
    email: "turrets@fotify",
    username: "Sergeant 64th Squad",
    password: "glow up time"
  )

  #Primarchs
  perturabo = User.create(
      email: "IronMan@fortify.com",
      username: "Perto",
      password: "decimate"
  )

  russ = User.create(
      email: "SpaceWolf@fortify.com",
      username: "Leman Russ",
      password: "canine"
  )

  khan = User.create(
      email: "speedForce@hhl.com",
      username: "Khan",
      password: "need for speed"
  )

  alpharius = User.create(
    email: "omegeonisdead@cannon.com",
    username: "Alpharius",
    password: "noreallyIam"
  )

# TA's 

  taylor = User.create(
    email: "taytay23@yahoo.com",
    username: "Mursoff",
    password: "best circle leader"
  )

  sam  = User.create(
    email: "samgoestoVegas@aa.com",
    username: "Sam Songs",
    password: "python master"
  )
  spencer = User.create(
      email: "Iascone.com",
      username: "Iascone",
      password: "great TA"
  )

  paulo = User.create(
    email: "vaction@aa.com",
    username: "Paulo B",
    password: "peruisthebest",
  )

  chris = User.create(
    email: "stonks@aa.com",
    username: "Stonk Master",
    password: "Chillest TA"
  )

  ayce = User.create(
    email: "ayce@aa.com",
    username: "Ayce machine",
    password: "Jessie's highs are actual highs"
  )

  mike = User.create(
    email: "candaman@aa.com",
    username: "Mike the Mad Lad",
    password: "Discord is sus"
  )

# AA Classmates 
  nick = User.create(
      email: "coffeMan@thevere.com",
      username: "NickP",
      password: "coffeeMan")

  brandon = User.create(
    email: "sus@uber.com",
    username: "Uber Driver",
    password: "isteallaptops",
  )

  jwong = User.create(
      email: "@hhl.com",
      username: "Jwong",
      password: "Dance dance revolution"
  )

  mikey = User.create(
      email: "iwishhewashere@gmail.com",
      username: "Gone too soon",
      password: "Very nice guy!"
  )

  ## Williams crew

  sammy = User.create(
    email: "masterofthedot@gov.com",
    username: "RichGameBuddy2",
    password: "login76"
  )

  paul = User.create(
    email: "LostArk@stats.com",
    username: "Welp76",
    password: "teacherofLegend"
  )

  derek = User.create(
    email: "whereismyteam@top.com",
    username: "DOMEGAULCZ",
    password: "monkeyman23"
  )

  jian = User.create(
    email: "googlemoney@check.com",
    username: "Jian",
    password: "checker651"
  )

  anna = User.create(
    email: "aagrad@facebook.com",
    username: "Rylost",
    password: "superhelpful"
  )

  monkey_man = User.create(
    email: "whocheckedthisguy@monkeyman.com",
    username: "Monkey Man",
    password: "monkeyman126"
  )

  # Servers to 
  imperial_fists = Server.create(
    owner_id: demo_user.id,
    name: "Imperial Fists",
    public: true,
    )

  terra = Server.create(
    owner_id: dorn.id,
    name: "Terra",
    public: true
  )

  aaTas = Server.create(
    owner_id: demo_user.id,
    name: "The Best TAs",
    public: true,
  )

  cohort = Server.create(
    owner_id: demo_user.id,
    name: "Cohort of Legend",
    public: true
  )

  williams = Server.create(
    owner_id: sammy.id,
    name: "Darkest Williams College",
    public: true
  )

  ## Public Servers to show off Search Bar

  public1 = Server.create(
    owner_id: monkey_man.id,
    name: "Tree Club",
    public: true
  )

  public2 = Server.create(
    owner_id: monkey_man.id,
    name: "Seeding data is fun!",
    public: true
  )

  public3 = Server.create(
    owner_id: monkey_man.id,
    name: "O(N) run time",
    public: true
  )

  public4 = Server.create(
    owner_id: monkey_man.id,
    name: "Don't Join!",
    public: true
  )


# Server Memberships (Don't need to save as variables as not being referenced
# by anything else)

  ServerMembership.create(server_id: imperial_fists.id , member_id: archamus.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: sigismund.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: dias.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: kestros.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: perturabo.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: dorn.id)
  ServerMembership.create(server_id: terra.id, member_id: perturabo.id)
  ServerMembership.create(server_id: terra.id, member_id: russ.id)
  ServerMembership.create(server_id: terra.id, member_id: khan.id)
  ServerMembership.create(server_id: terra.id, member_id: alpharius.id)
  ServerMembership.create(server_id: terra.id, member_id: monkey_man.id)
  ServerMembership.create(server_id: terra.id, member_id: dias.id)
  ServerMembership.create(server_id: terra.id, member_id: sigismund.id)
  ServerMembership.create(server_id: terra.id, member_id: kestros.id)
  ServerMembership.create(server_id: terra.id, member_id: demo_user.id)
  ServerMembership.create(server_id: aaTas.id, member_id: taylor.id)
  ServerMembership.create(server_id: aaTas.id, member_id: sam.id)
  ServerMembership.create(server_id: aaTas.id, member_id: spencer.id)
  ServerMembership.create(server_id: aaTas.id, member_id: ayce.id)
  ServerMembership.create(server_id: aaTas.id, member_id: paulo.id)
  ServerMembership.create(server_id: aaTas.id, member_id: brandon.id)
  ServerMembership.create(server_id: aaTas.id, member_id: chris.id)
  ServerMembership.create(server_id: aaTas.id, member_id: mike.id)
  ServerMembership.create(server_id: cohort.id, member_id: brandon.id)
  ServerMembership.create(server_id: cohort.id, member_id: jwong.id)
  ServerMembership.create(server_id: cohort.id, member_id: mikey.id)
  ServerMembership.create(server_id: cohort.id, member_id: mike.id)
  ServerMembership.create(server_id: cohort.id, member_id: anna.id)
  ServerMembership.create(server_id: cohort.id, member_id: nick.id)
  ServerMembership.create(server_id: williams.id, member_id: paul.id)
  ServerMembership.create(server_id: williams.id, member_id: derek.id)
  ServerMembership.create(server_id: williams.id, member_id: jian.id)
  ServerMembership.create(server_id: williams.id, member_id: anna.id)
  ServerMembership.create(server_id: williams.id, member_id: demo_user.id)
  ServerMembership.create(server_id: williams.id, member_id: monkey_man.id)
  ServerMembership.create(server_id: public1.id, member_id: anna.id)
  ServerMembership.create(server_id: public1.id, member_id: mike.id)
  ServerMembership.create(server_id: public1.id, member_id: kestros.id)
  ServerMembership.create(server_id: public2.id, member_id: paulo.id)
  ServerMembership.create(server_id: public2.id, member_id: chris.id)
  ServerMembership.create(server_id: public3.id, member_id: khan.id)
  ServerMembership.create(server_id: public3.id, member_id: paul.id)
  ServerMembership.create(server_id: public4.id, member_id: alpharius.id)

  #Channels
  
  assualt = Channel.create(server_id: imperial_fists.id, name:"2nd assault company")
  censure = Channel.create(server_id: imperial_fists.id, name:"censure")
  defenses = Channel.create(server_id: terra.id, name:"defenses")
  offesnive = Channel.create(server_id: terra.id, name:"offensive")
  paulos = Channel.create(server_id: aaTas.id, name:"paulo's circle")
  chriss = Channel.create(server_id: aaTas.id, name:"chris's cirlce")
  taylors = Channel.create(server_id: aaTas.id, name:"taylors's cirlce")
  ta_disscusion = Channel.create(server_id: aaTas.id, name:"teaching disscusion")
  projects = Channel.create(server_id: cohort.id, name:"project help")
  announcements = Channel.create(server_id: cohort.id, name:"announcements")
  league = Channel.create(server_id: williams.id, name:"league of legends")
  tribunal = Channel.create(server_id: williams.id, name:"tribunal")
  anime = Channel.create(server_id: williams.id, name:"anime disscusion")
  trees = Channel.create(server_id: public1.id, name:"Best tree spots")
  data = Channel.create(server_id: public2.id, name:"data managment help")
  algos =Channel.create(server_id: public3.id, name:"algorithms" )

  #Messages (Do not need to save as variables)

  Message.create(channel_id: assualt.id, author_id:kestros.id, body: "Good battlecrys?")
  Message.create(channel_id: assualt.id, author_id: dorn.id, body: "Fortify!")
  Message.create(channel_id: assualt.id, author_id: dias.id, body: "Never Yield!")
  Message.create(channel_id: assualt.id, author_id: sigismund.id, body: "Purge the Hertic!")
  Message.create(channel_id: assualt.id, author_id: dorn.id, body: "Calm down Sigismund.")

  Message.create(channel_id: censure.id, author_id: dorn.id, body: "Why do you hestiate in your duty, Sigismund.")
  Message.create(channel_id: censure.id, author_id: sigismund.id, body: "The pysker told me so.")
  Message.create(channel_id: censure.id, author_id: archamus.id, body: "And you believed her?")
  Message.create(channel_id: censure.id , author_id: sigismund.id, body: "I did and I still do.")
  Message.create(channel_id: censure.id, author_id: dorn.id, body: "You will be censured till you redem yourself in a crusade.")
  Message.create(channel_id: censure.id, author_id: sigismund.id, body: "As you will it, my primarch.")

  Message.create(channel_id: defenses.id, author_id: khan.id, body: "I want to ride out and fight them.")
  Message.create(channel_id: defenses.id, author_id: perturabo.id, body: "That it a great idea.")
  Message.create(channel_id: defenses.id, author_id: khan.id, body: "Get out of here, you traitor!")
  Message.create(channel_id: defenses.id, author_id: perturabo.id, body: "Make me hehe.")

  Message.create(channel_id: offesnive.id, author_id: perturabo.id, body: "Why do all my allies struggle with logistics.")
  Message.create(channel_id: offesnive.id, author_id: alpharius.id, body: "Because we are not robots, Perto.")

  Message.create(channel_id: paulos.id, author_id: paulo.id, body: "The Best cirlce!")
  Message.create(channel_id: chriss.id, author_id: chris.id, body: "The chillest circle.")
  Message.create(channel_id: taylors.id, author_id: taylor.id, body: "The loudest circle.")
  Message.create(channel_id: ta_disscusion.id, author_id:mike.id, body: "Discord is suspicious.")

  Message.create(channel_id: ta_disscusion.id, author_id: ayce.id, body: "Why?")
  Message.create(channel_id: ta_disscusion.id, author_id:mike.id, body: "Another avenue for cheating.")
  Message.create(channel_id: ta_disscusion.id, author_id: brandon.id, body: "I see, can I have your laptop?")
  Message.create(channel_id: ta_disscusion.id, author_id: mike.id, body: "Who are you!!")

  Message.create(channel_id: projects.id, author_id: mikey.id, body: "Can I have some help with debugging?")
  Message.create(channel_id: projects.id, author_id: nick.id, body: "Sure, lets hope into chat.")
  Message.create(channel_id: projects.id, author_id: mikey.id, body: "Stuck with my state not updating.")
  Message.create(channel_id: projects.id, author_id: nick.id, body: "I think you misspelled your state variable.")
  Message.create(channel_id: projects.id, author_id: mikey.id, body: "That was it! Thanks!")
  Message.create(channel_id: projects.id, author_id: nick.id, body: "No problem! Good Luck with the rest of your project.")

  Message.create(channel_id: announcements.id, author_id: jwong.id, body: "Remember guys - Check in is at 9:00 AM, 1:30PM, and 4:00 PM.")
  Message.create(channel_id: announcements.id, author_id: demo_user.id, body: "The Ta's said to focus on studying today instead of doing homework.")
  
  Message.create(channel_id: tribunal.id, author_id: demo_user.id, body: "This channel is for roasting our friends.")

  Message.create(channel_id: league.id, author_id:derek.id, body: "Whose wants to play an ARAM?")
  Message.create(channel_id: league.id, author_id:paul.id, body: "I am if sammy is.")
  Message.create(channel_id: league.id, author_id:sammy.id, body: "You know I, RichGameBuddy - the master of ARAM, is am always down for an ARAM.")


  Message.create(channel_id: anime.id, author_id:sammy.id, body: "This channel is for anime disscusions NO SPOLIERS!")
  Message.create(channel_id: anime.id, author_id:demo_user.id, body: "There are going to be fish titans I know it!")

  Message.create(channel_id: trees.id, author_id:demo_user.id, body: "Any good tree spots?")
  Message.create(channel_id: data.id, author_id: monkey_man.id, body: "Data seeding is tedious.")
  Message.create(channel_id: algos.id, author_id:demo_user.id, body: "Algos are hard, but relaxing to study.")

  # General Chat Messages
  Message.create(channel_id: imperial_fists.channels.first.id, author_id:kestros.id, body: "Enemies incoming")
  Message.create(channel_id: imperial_fists.channels.first.id, author_id:dorn.id, body: "Fortify everything!")
  Message.create(channel_id: imperial_fists.channels.first.id, author_id:archamus.id, body: "Yes, my primarch!")
  Message.create(channel_id: imperial_fists.channels.first.id, author_id:sigismund.id, body: "Let them taste my blade.")
  Message.create(channel_id: imperial_fists.channels.first.id, author_id:dias.id, body: "Selective Shots.")

  Message.create(channel_id: terra.channels.first.id, author_id:dorn.id, body: "Why must you persit this foolishness.")
  Message.create(channel_id: terra.channels.first.id, author_id:perturabo.id, body: "I am coming for you brother.")
  Message.create(channel_id: terra.channels.first.id, author_id:dorn.id, body: "My sons will defend terra with their life.")
  Message.create(channel_id: terra.channels.first.id, author_id:perturabo.id, body: "I will break you.")
  Message.create(channel_id: terra.channels.first.id, author_id:dorn.id, body: "You will try.")
  Message.create(channel_id: terra.channels.first.id, author_id:russ.id, body: "My sons will execute you for your treason!")
  Message.create(channel_id: terra.channels.first.id, author_id:perturabo.id, body: "You will not harm me, you are the lap dog of father")
  Message.create(channel_id: terra.channels.first.id, author_id:alpharius.id, body: "I am Alpharius - or am I :)")

  Message.create(channel_id: aaTas.channels.first.id, author_id: mike.id, body: "Make sure to check on your advisees projects!")
  Message.create(channel_id: aaTas.channels.first.id, author_id: spencer.id, body: "Already done")
  Message.create(channel_id: aaTas.channels.first.id, author_id: ayce.id, body: "On it Mike")
  Message.create(channel_id: aaTas.channels.first.id, author_id: chris.id, body: "I dont even work here anymore.")

  Message.create(channel_id: cohort.channels.first.id, author_id: demo_user.id, body: "Hi my name is Demo, nice to meet you all!")
  Message.create(channel_id: cohort.channels.first.id, author_id: anna.id, body: "Really exicted to go through this cohort with ya'll!")
  Message.create(channel_id: cohort.channels.first.id, author_id: nick.id, body: "Its going to be a blast.")
  Message.create(channel_id: cohort.channels.first.id, author_id: mikey.id, body: "We should make study groups for the tests!")
  Message.create(channel_id: cohort.channels.first.id, author_id: demo_user.id, body: "Great idea!")
  Message.create(channel_id: cohort.channels.first.id, author_id: brandon.id, body: "Anyone want to order laptops?")
  Message.create(channel_id: cohort.channels.first.id, author_id: jwong.id, body: "Bro who let this man in?")

  Message.create(channel_id: williams.channels.first.id, author_id: sammy.id, body: "Welcome to the darkest of Williams College Servers")
  Message.create(channel_id: williams.channels.first.id, author_id: paul.id, body: "Williams College is the best!")
  Message.create(channel_id: williams.channels.first.id, author_id: derek.id, body: "Jesup for life.")
  Message.create(channel_id: williams.channels.first.id, author_id: demo_user.id, body: "Purple Valley forever.")
  Message.create(channel_id: williams.channels.first.id, author_id: anna.id, body: "Dartmouth is better.")

  Message.create(channel_id: public1.channels.first.id, author_id: monkey_man.id, body: "The best server for trees!")
  Message.create(channel_id: public1.channels.first.id, author_id: monkey_man.id, body: "I hope you like climbing trees as much as me.")

  Message.create(channel_id: public2.channels.first.id, author_id: monkey_man.id, body: "The best server seeding data!")
  Message.create(channel_id: public2.channels.first.id, author_id: monkey_man.id, body: "Day 5 of seeding data - send help!")


  Message.create(channel_id: public3.channels.first.id, author_id: monkey_man.id, body: "The best server for algorithim study")
  Message.create(channel_id: public3.channels.first.id, author_id: monkey_man.id, body: "Algos are what get you the job!")
  Message.create(channel_id: public3.channels.first.id, author_id: monkey_man.id, body: "Make sure to study binary search and merge sort!")

  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Alpharius.")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Omegon.")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Ingo Pech.")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Sheed Ranko.")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Silonius.")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "I am Alpharius.")
  Message.create(channel_id: public4.channels.first.id, author_id: monkey_man.id, body: "I am YOU!")
  Message.create(channel_id: public4.channels.first.id, author_id: alpharius.id, body: "But truley, I am Alpharius!")


  # DmServers
  demo_dm_1 = DmServer.create()
  demo_dm_2 = DmServer.create()
  demo_dm_3 = DmServer.create()
  demo_dm_4 = DmServer.create()
  demo_dm_5 = DmServer.create()


  #DemoUsers DmMemberships (Do not need to save as variables)

  DmMembership.create(dm_server_id: demo_dm_1.id, member_id: demo_user.id)
  DmMembership.create(dm_server_id: demo_dm_2.id, member_id: demo_user.id)
  DmMembership.create(dm_server_id: demo_dm_3.id, member_id: demo_user.id)
  DmMembership.create(dm_server_id: demo_dm_4.id, member_id: demo_user.id)
  DmMembership.create(dm_server_id: demo_dm_5.id, member_id: demo_user.id)

  #Users DmMemberships with the Demo User (Do not need to save as variables)

  DmMembership.create(dm_server_id:  demo_dm_1.id, member_id: jian.id)
  DmMembership.create(dm_server_id:  demo_dm_2.id, member_id: spencer.id)
  DmMembership.create(dm_server_id:  demo_dm_3.id, member_id: kestros.id)
  DmMembership.create(dm_server_id:  demo_dm_4.id, member_id: dorn.id)
  DmMembership.create(dm_server_id:  demo_dm_5.id, member_id: perturabo.id)

  #DmMessages (Do not need to save as variables)


  #Dm with Jian
  DmMessage.create(dm_server_id: demo_dm_1.id, author_id: jian.id, body:"You should apply to App Academy. You would be a great software engineer." )
  DmMessage.create(dm_server_id: demo_dm_1.id, author_id: demo_user.id, body:"Will do. Thanks for the advice and motivation." )
  DmMessage.create(dm_server_id: demo_dm_1.id, author_id: demo_user.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
  DmMessage.create(dm_server_id: demo_dm_1.id, author_id: jian.id, body:"Congrats!" )

  #Dm wtih Spencer 
  DmMessage.create(dm_server_id: demo_dm_2.id, author_id: spencer.id, body:"Remember to study hard this weekend." )
  DmMessage.create(dm_server_id: demo_dm_2.id, author_id: demo_user.id, body:"But I have a free fail haha" )
  DmMessage.create(dm_server_id: demo_dm_2.id, author_id: spencer.id, body: "This is the most imporant material of the course." )
  DmMessage.create(dm_server_id: demo_dm_2.id, author_id: spencer.id, body: "Time to put the foot on the gas." )

  #Dm with Kestros
  DmMessage.create(dm_server_id: demo_dm_3.id, author_id: demo_user.id, body:"What is your name, sergeant." )
  DmMessage.create(dm_server_id: demo_dm_3.id, author_id: kestros.id, body: "It is Kestros." )
  DmMessage.create(dm_server_id: demo_dm_3.id, author_id: demo_user.id, body: "I am Demo. Nice to meet you!")
  DmMessage.create(dm_server_id: demo_dm_3.id, author_id: kestros.id, body: "Likewise ")

  #Dm with Dorn
  DmMessage.create(dm_server_id: demo_dm_4.id, author_id: demo_user.id, body:"Hey Dorn. How are you?" )
  DmMessage.create(dm_server_id: demo_dm_4.id, author_id: dorn.id, body: "Pretty good. Have you had a chance to watch the video I sent you" )
  DmMessage.create(dm_server_id: demo_dm_4.id, author_id: demo_user.id, body: "No not yet. I will get to it after I finish seeding my data." )
  DmMessage.create(dm_server_id: demo_dm_4.id, author_id: dorn.id, body:"No stress - just tell me what you think." )

  #DM with Perturabo
  DmMessage.create(dm_server_id: demo_dm_5.id, author_id: perturabo.id , body: "IRON WITHIN!")
  DmMessage.create(dm_server_id: demo_dm_5.id, author_id: perturabo.id , body: "IRON WITHOUT!")
  DmMessage.create(dm_server_id: demo_dm_5.id, author_id: demo_user.id, body: "You got to stop with the recruting slogans" )
  DmMessage.create(dm_server_id: demo_dm_5.id, author_id: perturabo.id , body: "From Iron cometh Strength!
                                                From Strength cometh Will! 
                                                From Will cometh Faith! 
                                                From Faith cometh Honor!
                                                From Honor cometh Iron!")



