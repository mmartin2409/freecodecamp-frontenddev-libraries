const quotes = [
  {
    text: 'If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, "He was ignorant of my other faults, else he would not have mentioned these alone.',
    author: "Epictetus",
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
  },
  { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
  {
    text: "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.",
    author: "Epictetus",
  },
  {
    text: "Man is not worried by real problems so much as by his imagined anxieties about real problems",
    author: "Epictetus",
  },
  {
    text: "Don't just say you have read books. Show that through them you have learned to think better, to be a more discriminating and reflective person. Books are the training weights of the mind. They are very helpful, but it would be a bad mistake to suppose that one has made progress simply by having internalized their contents.\" Translation by Sharon Lebell",
    author: "Epictetus",
  },
  {
    text: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid.",
    author: "Epictetus",
  },
  {
    text: "How long are you going to wait before you demand the best for yourself and in no instance bypass the discriminations of reason? You have been given the principles that you ought to endorse, and you have endorsed them. What kind of teacher, then, are you still waiting for in order to refer your self-improvement to him? You are no longer a boy, but a full-grown man. If you are careless and lazy now and keep putting things off and always deferring the day after which you will attend to yourself, you will not notice that you are making no progress, but you will live and die as someone quite ordinary.  From now on, then, resolve to live as a grown-up who is making progress, and make whatever you think best a law that you never set aside. And whenever you encounter anything that is difficult or pleasurable, or highly or lowly regarded, remember that the contest is now: you are at the Olympic Games, you cannot wait any longer, and that your progress is wrecked or preserved by a single day and a single event. That is how Socrates fulfilled himself by attending to nothing except reason in everything he encountered. And you, although you are not yet a Socrates, should live as someone who at least wants to be a Socrates.",
    author: "Epictetus",
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
  },
  {
    text: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    author: "Epictetus",
  },
  {
    text: "Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him.",
    author: "Epictetus",
  },
  {
    text: "He who laughs at himself never runs out of things to laugh at.",
    author: "Epictetus",
  },
  {
    text: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    author: "Epictetus",
  },
  {
    text: "Other people's views and troubles can be contagious. Don't sabotage yourself by unwittingly adopting negative, unproductive attitudes through your associations with others.",
    author: "Epictetus",
  },
  { text: "Only the educated are free.", author: "Epictetus" },
  {
    text: "People are not disturbed by things, but by the views they take of them.",
    author: "Epictetus",
  },
  {
    text: "Circumstances don't make the man, they only reveal him to himself.",
    author: "Epictetus",
  },
  {
    text: "It is impossible for a man to learn what he thinks he already knows.",
    author: "Epictetus",
  },
  {
    text: "?????? ??????????? ????????????, ??????????? ????????????? ?????????: ???????' ??????????? ?????????? ??? ?????????????. ( .)",
    author: "Epictetus",
  },
  {
    text: "Nature hath given men one tongue but two ears, that we may hear from others twice as much as we speak.",
    author: "Epictetus",
  },
  {
    text: "To accuse others for one's own misfortune is a sign of want of education. To accuse oneself shows that one's education has begun. To accuse neither oneself nor others shows that one's education is complete.",
    author: "Epictetus",
  },
  {
    text: "I laugh at those who think they can damage me. They do not know who I am, they do not know what I think, they cannot even touch the things which are really mine and with which I live.",
    author: "Epictetus",
  },
  {
    text: "You are a little soul carrying around a corpse",
    author: "Epictetus",
  },
  {
    text: "First learn the meaning of what you say, and then speak.",
    author: "Epictetus",
  },
  {
    text: "Attach yourself to what is spiritually superior, regardless of what other people think or do. Hold to your true aspirations no matter what is going on around you.",
    author: "Epictetus",
  },
  {
    text: "No man is free who is not master of himself.",
    author: "Epictetus",
  },
  {
    text: "The greater the difficulty, the more glory in surmounting it. Skillful pilots gain their reputation from storms and tempests.",
    author: "Epictetus",
  },
  {
    text: "Seek not the good in external things;seek it in yourselves.",
    author: "Epictetus",
  },
  {
    text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus",
  },
  {
    text: "Caretake this moment. Immerse yourself in its particulars. Respond to this person, this challenge, this deed. Quit evasions. Stop giving yourself needless trouble. It is time to really live; to fully inhabit the situation you happen to be in now.",
    author: "Epictetus",
  },
  { text: "Do not try to seem wise to others.", author: "Epictetus" },
  {
    text: "Don't seek to have events happen as you wish, but wish them to happen as they do happen, and all will be well with you.",
    author: "Epictetus",
  },
  {
    text: "Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation. Which is why it is essential that we not respond impulsively to impressions; take a moment before reacting, and you will find it easier to maintain control.",
    author: "Epictetus",
  },
  {
    text: "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it.",
    author: "Epictetus",
  },
  {
    text: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus",
  },
  {
    text: "Most of what passes for legitimate entertainment is inferior or foolish and only caters to or exploits people's weaknesses. Avoid being one of the mob who indulges in such pastimes. Your life is too short and you have important things to do. Be discriminating about what images and ideas you permit into your mind. If you yourself don't choose what thoughts and images you expose yourself to, someone else will, and their motives may not be the highest. It is the easiest thing in the world to slide imperceptibly into vulgarity. But there's no need for that to happen if you determine not to waste your time and attention on mindless pap.",
    author: "Epictetus",
  },
  {
    text: "Preach not to others what they should eat, but eat as becomes you and be silent.",
    author: "Epictetus",
  },
  {
    text: "You know yourself what you are worth in your own eyes; and at what price you will sell yourself. For men sell themselves at various prices. This is why, when Florus was deliberating whether he should appear at Nero's shows, taking part in the performance himself, Agrippinus replied, 'Appear by all means.' And when Florus inquired, 'But why do not you appear?' he answered, 'Because I do not even consider the question.' For the man who has once stooped to consider such questions, and to reckon up the value of external things, is not far from forgetting what manner of man he is.",
    author: "Epictetus",
  },
  {
    text: "A ship should not ride on a single anchor, nor life on a single hope",
    author: "Epictetus",
  },
  {
    text: "Now is the time to get serious about living your ideals. How long can you afford to put off who you really want to be? Your nobler self cannot wait any longer. Put your principles into practice ??? now. Stop the excuses and the procrastination. This is your life! You aren???t a child anymore. The sooner you set yourself to your spiritual program, the happier you will be. The longer you wait, the more you???ll be vulnerable to mediocrity and feel filled with shame and regret, because you know you are capable of better. From this instant on, vow to stop disappointing yourself. Separate yourself from the mob. Decide to be extraordinary and do what you need to do ??? now.",
    author: "Epictetus",
  },
  {
    text: "If you would be a reader, read; if a writer, write.",
    author: "Epictetus",
  },
  { text: "If you wish to be a writer, write.", author: "Epictetus" },
  {
    text: "Small-minded people blame others. Average people blame themselves. The wise see all blame as foolishness",
    author: "Epictetus",
  },
  {
    text: "God has entrusted me with myself. No man is free who is not master of himself. A man should so live that his happiness shall depend as little as possible on external things. The world turns aside to let any man pass who knows where he is going.",
    author: "Epictetus",
  },
  {
    text: 'It is not so much what happens to you as how you think about what happens."  Epictetus',
    author: "Epictetus",
  },
  {
    text: "I must die. Must I then die lamenting? I must be put in chains. Must I then also lament? I must go into exile. Does any man then hinder me from going with smiles and cheerfulness and contentment?",
    author: "Epictetus",
  },
  {
    text: "Remember that you ought to behave in life as you would at a banquet. As something is being passed around it comes to you; stretch out your hand, take a portion of it politely. It passes on; do not detain it. Or it has not come to you yet; do not project your desire to meet it, but wait until it comes in front of you. So act toward children, so toward a wife, so toward office, so toward wealth.",
    author: "Epictetus",
  },
  {
    text: "Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions. Things not in our control are body, property, reputation, command, and, in one word, whatever are not our actions. The things in our control are by nature free, unrestrained, unhindered; but those not in our control are weak, slavish, restrained, belonging to others. Remember, then, that if you suppose that things which are slavish by nature are also free, and that what belongs to others is your own, then you will be hindered. You will lament, you will be disturbed, and you will find fault both with gods and men. But if you suppose that only to be your own which is your own, and what belongs to others such as it really is, then no one will ever compel you or restrain you. Further, you will find fault with no one or accuse no one. You will do nothing against your will. No one will hurt you, you will have no enemies, and you not be harmed.",
    author: "Epictetus",
  },
  {
    text: "We are not disturbed by what happens to us, but by our thoughts about what happens to us.",
    author: "Epictetus",
  },
  {
    text: "Difficulty shows what men are. Therefore when a difficulty falls upon you, remember that God, like a trainer of wrestlers, has matched you with a rough young man. Why? So that you may become an Olympic conqueror; but it is not accomplished without sweat.",
    author: "Epictetus",
  },
  {
    text: "If you would cure anger, do not feed it. Say to yourself: 'I used to be angry every day; then every other day; now only every third or fourth day.' When you reach thirty days offer a sacrifice of thanksgiving to the gods.",
    author: "Epictetus",
  },
  {
    text: "Events do not just happen, but arrive by appointment.",
    author: "Epictetus",
  },
  {
    text: "Asked, Who is the rich man? Epictetus replied, ??He who is content.",
    author: "Epictetus",
  },
  {
    text: "Demand not that things happen as you wish, but wish them to happen as they do, and you will go on well.",
    author: "Epictetus",
  },
  {
    text: "Either God wants to abolish evil, and cannot; or he can, but does not want to.",
    author: "Epictetus",
  },
  {
    text: "Men are not afraid of things, but of how they view them.",
    author: "Epictetus",
  },
  {
    text: "It is better to die of hunger having lived without grief and fear, than to live with a troubled spirit, amid abundance",
    author: "Epictetus",
  },
  {
    text: 'These reasonings are unconnected: "I am richer than you, therefore I am better"; "I am more eloquent than you, therefore I am better." The connection is rather this: "I am richer than you, therefore my property is greater than yours;" "I am more eloquent than you, therefore my style is better than yours." But you, after all, are neither property nor style.',
    author: "Epictetus",
  },
  {
    text: "Know you not that a good man does nothing for appearance sake, but for the sake of having done right?",
    author: "Epictetus",
  },
  {
    text: "Appearances to the mind are of four kinds. Things either are what they appear to be; or they neither are, nor appear to be; or they are, and do not appear to be; or they are not, and yet appear to be. Rightly to aim in all these cases is the wise man's task.",
    author: "Epictetus",
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid with regard to external things. Don't wish to be thought to know anything; and even if you appear to be somebody important to others, distrust yourself. For, it is difficult to both keep your faculty of choice in a state conformable to nature, and at the same time acquire external things. But while you are careful about the one, you must of necessity neglect the other",
    author: "Epictetus",
  },
  {
    text: "Even as the Sun doth not wait for prayers and incantations to rise, but shines forth and is welcomed by all: so thou also wait not for clapping of hands and shouts and praise to do thy duty; nay, do good of thine own accord, and thou wilt be loved like the Sun.",
    author: "Epictetus",
  },
  { text: "No great thing is created suddenly.", author: "Epictetus" },
  {
    text: "-???.when things seem to have reached that stage, merely say ???I won???t play any longer???, and take your departure; but if you stay, stop lamenting.",
    author: "Epictetus",
  },
  {
    text: "So you wish to conquer in the Olympic Games, my friend? And I, too... But first mark the conditions and the consequences. You will have to put yourself under discipline; to eat by rule, to avoid cakes and sweetmeats; to take exercise at the appointed hour whether you like it or not, in cold and heat; to abstain from cold drinks and wine at your will. Then, in the conflict itself you are likely enough to dislocate your wrist or twist your ankle, to swallow a great deal of dust, to be severely thrashed, and after all of these things, to be defeated.",
    author: "Epictetus",
  },
  {
    text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
    author: "Epictetus",
  },
  {
    text: "Tentative efforts lead to tentative outcomes. Therefore, give yourself fully to your endeavors. Decide to construct your character through excellent actions and determine to pay the price of a worthy goal. The trials you encounter will introduce you to your strengths. Remain steadfast...and one day you will build something that endures: something worthy of your potential.",
    author: "Epictetus",
  },
  {
    text: "It is our attitude toward events, not events themselves, which we can control. Nothing is by its own nature calamitous -- even death is terrible only if we fear it.",
    author: "Epictetus",
  },
  {
    text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
    author: "Epictetus",
  },
  {
    text: "Nature hath given men one tongue but two ears, that we may hear from others twice as much as we speak.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed not by things, but by the views which they take of things. Thus death is nothing terrible, else it would have appeared so to Socrates. But the terror consists in our notion of death, that it is terrible. When, therefore, we are hindered, or disturbed, or grieved let us never impute it to others, but to ourselves; that is, to our own views. It is the action of an uninstructed person to reproach others for his own misfortunes; of one entering upon instruction, to reproach himself; and of one perfectly instructed, to reproach neither others or himself.",
    author: "Epictetus",
  },
  {
    text: "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.",
    author: "Epictetus",
  },
  {
    text: "Control thy passions lest they take vengence on thee. ~ Epictetus",
    author: "Epictetus",
  },
  {
    text: "Don???t just say you have read books. Show that through them you have learned to think better, to be a more discriminating and reflective person. Books are the training weights of the mind. They are very helpful, but it would be a bad mistake to suppose that one has made progress simply by having internalized their contents.",
    author: "Epictetus",
  },
  {
    text: "Never depend on the admiration of others. There is no strength in it. Personal merit cannot be derived from an external source. It is not to be found in your personal associations, nor can it be found in the regard of other people. It is a fact of life that other people, even people who love you, will not necessarily agree with your ideas, understand you, or share your enthusiasms. Grow up! Who cares what other people think about you!",
    author: "Epictetus",
  },
  {
    text: "If someone speaks badly of you, do not defend yourself against the accusations, but reply; \"you obviously don't know about my other vices, otherwise you would have mentioned these as well",
    author: "Epictetus",
  },
  {
    text: "You may fetter my leg, but Zeus himself cannot get the better of my free will.",
    author: "Epictetus",
  },
  {
    text: "If you want to make progress, put up with being perceived as ignorant or naive in worldly matters, don't aspire to a reputation for sagacity. If you do impress others as somebody, don't altogether believe it. You have to realize, it isn't easy to keep your will in agreement with nature, as well as externals. Caring about the one inevitably means you are going to shortchange the other.",
    author: "Epictetus",
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid with regard to external things. Don't wish to be thought to know anything; and even if you appear to be somebody important to others, distrust yourself.",
    author: "Epictetus",
  },
  { text: "Difficulty shows what men are.", author: "Epictetus" },
  {
    text: "A guide, on finding a man who has lost his way, brings him back to the right path???he does not mock and jeer at him and then take himself off. You also must show the unlearned man the truth, and you will see that he will follow. But so long as you do not show it him, you should not mock, but rather feel your own incapacity.",
    author: "Epictetus",
  },
  {
    text: "An ignorant person is inclined to blame others for his own misfortune. To blame oneself is proof of progress. But the wise man never has to blame another or himself.",
    author: "Epictetus",
  },
  {
    text: "Whoever is going to listen to the philosophers needs a considerable practice in listening.",
    author: "Epictetus",
  },
  {
    text: "Your happiness depends on three things, all of which are within your power: your will, your ideas concerning the events in which you are involved, and the use you make of your ideas.",
    author: "Epictetus",
  },
  {
    text: "There is but one way to tranquility of mind and happiness, and that is to account no external things thine own, but to commit all to God.",
    author: "Epictetus",
  },
  {
    text: "If any be unhappy, let him remember that he is unhappy by reason of himself alone. For God hath made all men to enjoy felicity and constancy of good.",
    author: "Epictetus",
  },
  {
    text: "On the occasion of every accident that befalls you, remember to turn to yourself and inquire what power you have for turning it to use.",
    author: "Epictetus",
  },
  {
    text: 'When any person harms you, or speaks badly of you, remember that he acts or speaks from a supposition of its being his duty. Now, it is not possible that he should follow what appears right to you, but what appears so to himself. Therefore, if he judges from a wrong appearance, he is the person hurt, since he too is the person deceived. For if anyone should suppose a true proposition to be false, the proposition is not hurt, but he who is deceived about it. Setting out, then, from these principles, you will meekly bear a person who reviles you, for you will say upon every occasion, "It seemed so to him." ....',
    author: "Epictetus",
  },
  {
    text: "When a youth was giving himself airs in the Theatre and saying, 'I am wise, for I have conversed with many wise men,' Epictetus replied, 'I too have conversed with many rich men, yet I am not rich!???.",
    author: "Epictetus",
  },
  {
    text: "Remember to act always as if you were at a symposium. When the food or drink comes around, reach out and take some politely; if it passes you by don't try pulling it back. And if it has not reached you yet, don't let your desire run ahead of you, be patient until your turn comes. Adopt a similar attitude with regard to children, wife, wealth and status, and in time, you will be entitled to dine with the gods. Go further and decline these goods even when they are on offer and you will have a share in the gods' power as well as their company. That is how Diogenes, Heraclitus and philosophers like them came to be called, and considered, divine.",
    author: "Epictetus",
  },
  {
    text: "Don't live by your own rules, but in harmony with nature",
    author: "Epictetus",
  },
  {
    text: "Do not afflict others with anything that you yourself would not wish to suffer. if you would not like to be a slave, make sure no one is your slave. If you have slaves, you yourself are the greatest slave, for just as freedom is incompatible with slavery, so goodness is incompatible with hypocrisy.",
    author: "Epictetus",
  },
  {
    text: "-Who are those people by whom you wish to be admired? Are they not these whom you are in the habit of saying that they are mad? What then? Do you wish to be admired by the mad?",
    author: "Epictetus",
  },
  {
    text: "To Epictetus, all external events are determined by fate, and are thus beyond our control, but we can accept whatever happens calmly and dispassionately. Individuals, however, are responsible for their own actions which they can examine and control through rigorous self-discipline. Suffering arises from trying to control what is uncontrollable, or from neglecting what is within our power. As part of the universal city that is the universe, human beings have a duty of care to all fellow humans. The person who followed these precepts would achieve happiness.",
    author: "Epictetus",
  },
  {
    text: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
  },
  {
    text: "No great thing is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer that there must be time. Let it first blossom, then bear fruit, then ripen.",
    author: "Epictetus",
  },
  {
    text: "It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.",
    author: "Epictetus",
  },
  {
    text: "It is better to do wrong seldom and to own it, and to act right for the most part, than seldom to admit that you have done wrong and to do wrong often.",
    author: "Epictetus",
  },
  {
    text: "No person is free who is not master of himself.",
    author: "Epictetus",
  },
  {
    text: "Is freedom anything else than the right to live as we wish? Nothing else.",
    author: "Epictetus",
  },
  {
    text: "Imagine for yourself a character, a model personality, whose example you determine to follow, in private as well as in public.",
    author: "Epictetus",
  },
  {
    text: "These reasonings do not cohere: I am richer than you, therefore I am better than you; I am more eloquent than you, therefore I am better than you. On the contrary these rather cohere, I am richer than you, therefore my possessions are greater than yours: I am more eloquent than you, therefore my speech is superior to yours. But you are neither possession nor speech.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed not by the things which happen, but by the opinion about the things.",
    author: "Epictetus",
  },
  {
    text: "You become what you give your attention to.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed not by the things that happen, but by their opinion of the things that happen.",
    author: "Epictetus",
  },
  {
    text: "Concerning the Gods, there are those who deny the very existence of the Godhead; others say that it exists, but neither bestirs nor concerns itself not has forethought far anything. A third party attribute to it existence and forethought, but only for great and heavenly matters, not for anything that is on earth. A fourth party admit things on earth as well as in heaven, but only in general, and not with respect to each individual. A fifth, of whom were Ulysses and Socrates, are those that cry: -- I move not without Thy knowledge!",
    author: "Epictetus",
  },
  {
    text: "The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things.",
    author: "Epictetus",
  },
  {
    text: "If you want to improve, you must be content to be thought foolish and stupid.",
    author: "Epictetus",
  },
  {
    text: "What concerns me is not the way things are, but the way people think things are.",
    author: "Epictetus",
  },
  {
    text: "If you seek Truth, you will not seek to gain a victory by every possible means; and when you have found Truth, you need not fear being defeated.",
    author: "Epictetus",
  },
  {
    text: "God save me from fools with a little philosophy???no one is more difficult to reach.",
    author: "Epictetus",
  },
  {
    text: "Those who are well constituted in the body endure both heat and cold: and so those who are well constituted in the soul endure both anger and grief and excessive joy and the other affects.",
    author: "Epictetus",
  },
  {
    text: "The first and most important field of philosophy is the application of principles such as ???Do not lie.??? Next come the proofs, such as why we should not lie. The third field supports and articulates the proofs, by asking, for example, ???How does this prove it? What exactly is a proof, what is logical inference, what is contradiction, what is truth, what is falsehood???? Thus, the third field is necessary because of the second, and the second because of the first. The most important, though, the one that should occupy most of our time, is the first. But we do just the opposite. We are preoccupied with the third field and give that all our attention, passing the first by altogether. The result is that we lie ??? but have no difficulty proving why we shouldn???t.",
    author: "Epictetus",
  },
  {
    text: "It is unrealistc to expect people to see you as you see yourself.",
    author: "Epictetus",
  },
  {
    text: 'What then, is it not possible to be free from faults? It is not possible; but this is possible: to direct your efforts incessantly to being faultess. For we must be content if by never remitting this attention we shall escape at least a few errors. When you have said "Tomorrow I will begin to attend," you must be told that you are saying this: "Today I will be shameless, disregardful of time and place, mean;it will be in the power of others to give me pain, today I will be passionate and envious. See how many evil things you are permitting yourself to do. If it is good to use attention tomorrow, how much better is it to do so today? If tomorrow it is in your interest to attend, much more is it today, that you may be able to do so tomorrow also, and may not defer it again to the third day.',
    author: "Epictetus",
  },
  {
    text: "We must not believe the many, who say that only free people ought to be educated, but we should rather believe the philosophers who say that only the educated are free.",
    author: "Epictetus",
  },
  {
    text: "If you wish to be good, first believe that you are bad.",
    author: "Epictetus",
  },
  {
    text: "Remember that you must behave as at a banquet. Is anything brought round to you? Put out your hand, and take a moderate share. Does it pass you? Do not stop it. Is it not come yet? Do not yearn in desire towards it, but wait till it reaches you. So with regard to children , wife, office, riches; and you will some time or other be worthy to feast with the gods. And if you do not so much as take the things which are set before you, but are able even to forego them, then you will not only be worthy to feast with the gods, but to rule with them also. For, by thus doing, Diogenes and Heraclitus, and others like them, deservedly became divine, and were so recognized.",
    author: "Epictetus",
  },
  {
    text: "As the sun does not wait for prayers and incantations tob e induced to rise, but immediately shines and is saluted by all, so do you also not wait for clappings of hands and shouts of praise tob e induced to do good, but be a doer of good voluntarily and you will be beloved as much as the sun.",
    author: "Epictetus",
  },
  {
    text: "Never say that I have taken it, only that I have given it back.",
    author: "Epictetus",
  },
  {
    text: "no man is free until he s a master of himself!!",
    author: "Epictetus",
  },
  {
    text: "A city is not adorned by external things, but by the virtue of those who dwell in it.",
    author: "Epictetus",
  },
  {
    text: "Epictetus being asked how a man should give pain to his enemy answered, By preparing himself to live the best life that he can.",
    author: "Epictetus",
  },
  {
    text: "Whoever then would be free, let him wish for nothing, let him decline nothing, which depends on others; else he must necessarily be a slave.",
    author: "Epictetus",
  },
  {
    text: "Crows pick out the eyes of the dead, when the dead have no longer need of them; but flatterers mar the soul of the living, and her eyes they blind.",
    author: "Epictetus",
  },
  {
    text: "So what oppresses and scares us? It is our own thoughts, obviously, What overwhelms people when they are about to leaves friends, family, old haunts and their accustomed way of life? Thoughts.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed, not by things, but by the principles and notions which they form concerning things.",
    author: "Epictetus",
  },
  {
    text: "Remind thyself that he whom thou lovest is mortal ?? that what thou lovest is not thine own; it is given thee for the present, not irrevocably nor for ever, but even as a fig or a bunch of grapes at the appointed season of the year",
    author: "Epictetus",
  },
  {
    text: "Why do you want to read anyway ??? for the sake of amusement or mere erudition? Those are poor, fatuous pretexts.  Reading should serve the goal of attaining peace; if it doesn???t make you peaceful, what good is it?",
    author: "Epictetus",
  },
  {
    text: "The philosopher's school, ye men, is a surgery: you ought not to go out of it with pleasure, but with pain. For you are not in sound health when you enter.",
    author: "Epictetus",
  },
  {
    text: "Everyone's life is a warfare, and that long and various.",
    author: "Epictetus",
  },
  {
    text: "For sheep don't throw up the grass to show the shepherds how much they have eaten; but, inwardly digesting their food, they outwardly produce wool and milk.",
    author: "Epictetus",
  },
  {
    text: "When you do anything from a clear judgment that it ought to be done, never shrink from being seen to do it, even though the world should misunderstand it; for if you are not acting rightly, shun the action itself; if you are, why fear those who wrongly censure you?",
    author: "Epictetus",
  },
  {
    text: "Caretake this moment. Immerse yourself in its particulars. Respond to this person, this challenge, this deed. Quit the evasions. Stop giving yourself needless trouble. It is time to really live; to fully inhabit the situation you happen to be in now. You are not some disinterested bystander. Participate. Exert yourself.",
    author: "Epictetus",
  },
  {
    text: "In banquets remember that you entertain two guests, body and soul: and whatever you shall have given to the body you soon eject: but what you shall have given to the soul, you keep always.",
    author: "Epictetus",
  },
  {
    text: "You will do the greatest services to the state, if you shall raise not the roofs of the houses, but the souls of the citizens: for it is better that great souls should dwell in small houses than for mean slaves to lurk in great houses.",
    author: "Epictetus",
  },
  {
    text: "As a man, casting off worn out garments taketh new ones, so the dweller in the body, entereth into ones that are new.",
    author: "Epictetus",
  },
  {
    text: "What would have become of Hercules do you think if there had been no lion, hydra, stag or boar - and no savage criminals to rid the world of? What would he have done in the absence of such challenges?  Obviously he would have just rolled over in bed and gone back to sleep. So by snoring his life away in luxury and comfort he never would have developed into the mighty Hercules.  And even if he had, what good would it have done him? What would have been the use of those arms, that physique, and that noble soul, without crises or conditions to stir into him action?",
    author: "Epictetus",
  },
  {
    text: "Freedom is secured not by the fulfilling of men's desires, but by the removal of desire.",
    author: "Epictetus",
  },
  {
    text: "Very little is needed for everything to be upset and ruined, only a slight lapse in reason.",
    author: "Epictetus",
  },
  {
    text: "What are we to do, then? To make the best of what lies within our power, and deal with everything else as it comes. ???How does it come, then???? As God wills.",
    author: "Epictetus",
  },
  {
    text: "First say to yourself what you would be, and then do what you have to do.",
    author: "Epictetus",
  },
  {
    text: "If thy brother wrongs thee, remember not so much his wrong-doing, but more than ever that he is thy brother.",
    author: "Epictetus",
  },
  {
    text: "Sickness is a problem for the body, not the mind ??? unless the mind decides that it is a problem. Lameness, too, is the body's problem, not the mind's. Say this to yourself whatever the circumstance and you will find without fail that the problem pertains to something else, not to you.",
    author: "Epictetus",
  },
  {
    text: "The condition and characteristic of an uninstructed person is this: he never expects from himself profit (advantage) nor harm, but from externals. The condition and characteristic of a philosopher is this: he expects all advantage and all harm from himself.",
    author: "Epictetus",
  },
  {
    text: "Wherever I go it will be well with me, for it was well with me here, not on account of the place, but of my judgments which I shall carry away with me, for no one can deprive me of these; on the contrary, they alone are my property, and cannot be taken away, and to possess them suffices me wherever I am or whatever I do.",
    author: "Epictetus",
  },
  {
    text: "this is your business???to act well the given part, but to choose it belongs to another.",
    author: "Epictetus",
  },
  {
    text: "We cannot choose our external circumstances, but we can always choose how we respond to them",
    author: "Epictetus",
  },
  {
    text: 'These reasonings have no logical connection: "I am richer than you; therefore I am your superior." "I am more eloquent than you; therefore I am your superior." The true logical connection is rather this: "I am richer than you; therefore my possessions must exceed yours." "I am more eloquent than you; therefore my style must surpass yours." But you, after all, consist in neither property nor in style.',
    author: "Epictetus",
  },
  {
    text: "For it is not death or pain that is to be feared, but the fear of pain or death.",
    author: "Epictetus",
  },
  {
    text: "[Do not get too attached to life] for it is like a sailor's leave on the shore and at any time, the captain may sound the horn, calling you back to eternal darkness.",
    author: "Epictetus",
  },
  {
    text: 'If you have an earnest desire towards philosophy, prepare yourself from the very first to have the multitude laugh and sneer, and say, "He is returned to us a philosopher all at once; "and "Whence this supercilious look?" Now, for your part, do not have a supercilious look indeed; but keep steadily to those things which appear best to you, as one appointed by God to this particular station. For remember that, if you are persistent, those very persons who at first ridiculed will afterwards admire you. But if you are conquered by them, you will incur a double ridicule.',
    author: "Epictetus",
  },
  {
    text: "Neither should a ship rely on one small anchor, nor should life rest on a single hope.",
    author: "Epictetus",
  },
  {
    text: "Sick and yet happy, in peril and yet happy, dying and yet happy, in exile and happy, in disgrace and happy.",
    author: "Epictetus",
  },
  {
    text: "Remember from now on whenever something tends to make you unhappy, draw on this principle: 'This is no misfortune; but bearing with it bravely is a blessing.",
    author: "Epictetus",
  },
  {
    text: "Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire.",
    author: "Epictetus",
  },
  {
    text: "Nothing great comes into being all at once, for that is not the case even with a bunch of grapes or a fig. If you tell me now, ???I want a fig,??? I???ll reply, ???That takes time.",
    author: "Epictetus",
  },
  {
    text: "If you wish your house to be well managed, imitate the Spartan Lycurgus. For as he did not fence his city with walls, but fortified the inhabitants by virtue and preserved the city always free;35 so do you not cast around (your house) a large court and raise high towers, but strengthen the dwellers by good-will and fidelity and friendship, and then nothing harmful will enter it, not even if the whole band of wickedness shall array itself against it.",
    author: "Epictetus",
  },
  {
    text: 'Asked how a man should best grieve his enemy, Epictetus replied, "By setting himself to live the noblest life himself.',
    author: "Epictetus",
  },
  {
    text: "An uninstructed person will lay the fault of his own bad condition upon others. Someone just starting instruction will lay the fault on himself. Some who is perfectly instructed will place blame neither on others nor on himself.",
    author: "Epictetus",
  },
  {
    text: "We are at the mercy of whoever wields authority over the things we either desire or detest. If you would be free, then, do not wish to have, or avoid, things that other people control, because then you must serve as their slave.",
    author: "Epictetus",
  },
  {
    text: "Keep the prospect of death, exile and all such apparent tragedies before you every day ??? especially death ??? and you will never have an abject thought, or desire anything to excess.",
    author: "Epictetus",
  },
  {
    text: "As for us, we behave like a herd of deer. When they flee from the huntsman's feathers in affright, which way do they turn? What haven of safety do they make for? Why, they rush upon the nets! And thus they perish by confounding what they should fear with that wherein no danger lies. . . . Not death or pain is to be feared, but the fear of death or pain. Well said the poet therefore:???   Death has no terror; only a Death of shame!",
    author: "Epictetus",
  },
  {
    text: 'Above all, remember that the door stands open. Be not more fearful than children; but as they, when they weary of the game, cry, "I will play no more," even so, when thou art in the like case, cry, "I will play no more" and depart. But if thou stayest, make no lamentation.',
    author: "Epictetus",
  },
  {
    text: "Don't put your purpose in one place and expect to see progress made somewhere else.",
    author: "Epictetus",
  },
  {
    text: "If you ever happen to turn your attention to externals, for the pleasure of any one, be assured that you have ruined your scheme of life. Be contented, then, in everything, with being a philosopher; and if you with to seem so likewise to any one, appear so to yourself, and it will suffice you.",
    author: "Epictetus",
  },
  {
    text: "For I am not Eternity, but a human being???a part of the whole, as an hour is part of the day. I must come like the hour, and like the hour must pass!",
    author: "Epictetus",
  },
  {
    text: "Take care not to hurt the ruling faculty of your mind. If you were to guard against this in every action, you should enter upon those actions more safely.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed not by the things which happen, but by the opinions about the things:",
    author: "Epictetus",
  },
  {
    text: "It is possible to learn the will of nature from the things in which we do not differ from each other. For example, when someone else's little slave boy breaks his cup we are ready to say, ???It's one of those things that just happen.??? Certainly, then, when your own cup is broken you should be just the way you were when the other person's was broken. Transfer the same idea to larger matters. Someone else's child is dead, or his wife. There is no one would not say, ???It's the lot of a human being.??? But when one's own dies, immediately it is, ???Alas! Poor me!??? But we should have remembered how we feel when we hear of the same thing about others.",
    author: "Epictetus",
  },
  {
    text: "It has been ordained that there be summer and winter, abundance and dearth, virtue and vice, and all such opposites for the harmony of the whole, and (Zeus) has given each of us a body, property, and companions.",
    author: "Epictetus",
  },
  {
    text: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    author: "Epictetus",
  },
  {
    text: "No one is ever unhappy because of someone else.",
    author: "Epictetus",
  },
  {
    text: "Here are thieves and robbers and tribunals: and they that are called tyrants, who deem that they have after a fashion power over us, because of the miserable body and what appertains to it. Let us show them that they have power over none.",
    author: "Epictetus",
  },
  {
    text: "What saith Antisthenes? Hast thou never heard???? It is a kingly thing, O Cyrus, to do well and to be evil spoken of.",
    author: "Epictetus",
  },
  {
    text: 'You journey to Olympia to see the work of Phidias; and each of you holds it a misfortune not to have beheld these things before you die. Whereas when there is no need even to take a journey, but you are on the spot, with the works before you, have you no care to contemplate and study these?   Will you not then perceive either who you are or unto what end you were born: or for what purpose the power of contemplation has been bestowed on you?   "Well, but in life there are some things disagreeable and hard to bear."   And are there none at Olympia? Are you not scorched by the heat? Are you not cramped for room? Have you not to bathe with discomfort? Are you not drenched when it rains? Have you not to endure the clamor and shouting and such annoyances as these? Well, I suppose you set all this over against the splendour of the spectacle and bear it patiently. What then? have you not received greatness of heart, received courage, received fortitude? What care I, if I am great of heart, for aught that can come to pass? What shall cast me down or disturb me? What shall seem painful? Shall I not use the power to the end for which I received it, instead of moaning and wailing over what comes to pass?',
    author: "Epictetus",
  },
  {
    text: "Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter. For as the material of the carpenter is wood, and that of statuary bronze, so the subject-matter of the art of living is each person's own life.",
    author: "Epictetus",
  },
  {
    text: "When a man is proud because he can understand and explain the writings of Chrysippus, say to yourself, if Chrysippus had not written obscurely, this man would have had nothing to be proud of.",
    author: "Epictetus",
  },
  {
    text: "When you do anything from a clear judgment that it ought to be done, never shun the being seen to do it, even though the world should make a wrong supposition about it; for, if you don???t act right, shun the action itself; but, if you do, why are you afraid of those who censure you wrongly?",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed not by things, but by the view which they take of them.",
    author: "Epictetus",
  },
  {
    text: "Let silence be your general rule; or say only what is necessary and in few words.",
    author: "Epictetus",
  },
  {
    text: "Who, then, is the invincible human being? One who can be disconcerted by nothing that lies outside the sphere of choice.",
    author: "Epictetus",
  },
  {
    text: "What you shun enduring yourself, attempt not to impose on others. You shun slavery- beware enslaving others! If you can endure to do that, one would think you had been once upon a time a slave yourself. For vice has nothing in common with virtue, nor Freedom with slavery.",
    author: "Epictetus",
  },
  {
    text: "Do not try to seem wise to others. If you want to live a wise life, live it on your own terms and in your own eyes.",
    author: "Epictetus",
  },
  {
    text: "Many people who have progressively lowered their personal standards in an attempt to win social acceptance and life???s comforts bitterly resent those of philosophical bent who refuse to compromise their spiritual ideals and who seek to better themselves.",
    author: "Epictetus",
  },
  {
    text: "Control thy passions lest they take vengeance on thee.",
    author: "Epictetus",
  },
  {
    text: "The gods do not exists, and even if they exist they do not trouble themselves about people, and we have nothing in common with them. The piety and devotion to the gods that the majority of people invoke is a lie devised by swindlers and con men and, if you can believe it, by legislators, to keep criminals in line by putting the fear of God into them.",
    author: "Epictetus",
  },
  {
    text: "It is a universal law ??? have no illusion ??? that every creature alive is attached to nothing so much as to its own self-interest.",
    author: "Epictetus",
  },
  {
    text: "Be free from grief not through insensibility like the irrational animals, nor through want of thought like the foolish, but like a man of virtue by having reason as the consolation of grief.",
    author: "Epictetus",
  },
  {
    text: "There is no shame in making an honest effort.",
    author: "Epictetus",
  },
  {
    text: "The more we value things outside our control, the less control we have.",
    author: "Epictetus",
  },
  {
    text: "People with a strong physical constitution can tolerate extremes of hot and cold; people of strong mental health can handle anger, grief, joy and the other emotions.",
    author: "Epictetus",
  },
  {
    text: "Don't hope that events will turn out the way you want, welcome events in whichever way they happen: this is the path to peace.",
    author: "Epictetus",
  },
  {
    text: "Whenever anyone criticizes or wrongs you, remember that they are only doing or saying what they think is right. They cannot be guided by your views, only their own; so if their views are wrong, they are the ones who suffer insofar as they are misguided.",
    author: "Epictetus",
  },
  {
    text: "Demand not that events should happen as you wish; but wish them to happen as they do happen, and you will go on well.",
    author: "Epictetus",
  },
  {
    text: "Never say of anything that I've lost it, only that I've given it back.",
    author: "Epictetus",
  },
  {
    text: "For even sheep do not vomit up their grass and show to the shepherds how much they have eaten; but when they have internally digested the pasture, they produce externally wool and milk. Do you also show not your theorems to the uninstructed, but show the acts which come from their digestion.",
    author: "Epictetus",
  },
  {
    text: "To admonish is better than to reproach for admonition is mild and friendly, but reproach is harsh and insulting; and admonition corrects those who are doing wrong, but reproach only convicts them.",
    author: "Epictetus",
  },
  {
    text: 'What is death? A "tragic mask." Turn it and examine it. See, it does not bite. The poor body must be separated from the spirit either now or later, as it was separated from it before. Why, then, are you troubled, if it be separated now? for if it is not separated now, it will be separated afterward. Why? That the period of the universe may be completed, for it has need of the present, and of the future, and of the past. What is pain? A mask. Turn it and examine it. The poor flesh is moved roughly, then, on the contrary, smoothly. If this does not satisfy you, the door is open: if it does, bear. For the door ought to be open for all occasions; and so we have no trouble.',
    author: "Epictetus",
  },
  {
    text: "Death is not dreadful or else it would have appeared dreadful to Socrates.",
    author: "Epictetus",
  },
  {
    text: "Reading should serve the goal of attaining peace; if it doesn???t make you peaceful, what good is it?",
    author: "Epictetus",
  },
  {
    text: "Fortify yourself with contentment for this is an impregnable fortress.",
    author: "Epictetus",
  },
  {
    text: "For if we had any sense, what else should we do, both in public and in private, than sing hymns and praise the deity, and recount all the favours that he has conferred!",
    author: "Epictetus",
  },
  {
    text: "He who exercises wisdom, exercises the knowledge which is about God.",
    author: "Epictetus",
  },
  {
    text: "Circumstances do not rise to meet our expectations. Events happen as they do. People behave as they are. Embrace what you actually get.",
    author: "Epictetus",
  },
  {
    text: 'That Socrates should ever have been so treated by the Athenians!"  Slave! why say "Socrates"? Speak of the thing as it is: That ever then the poor body of Socrates should have been dragged away and haled by main force to prision! That ever hemlock should have been given to the body of Socrates; that that should have breathed its life away!???Do you marvel at this? Do you hold this unjust? Is it for this that you accuse God? Had Socrates no compensation for this? Where then for him was the ideal Good? Whom shall we hearken to, you or him? And what says he?   "Anytus and Melitus may put me to death: to injure me is beyond their power."   And again:???   "If such be the will of God, so let it be.',
    author: "Epictetus",
  },
  {
    text: "There is a time and place for diversion and amusements, but you should never allow them to override your true purposes.",
    author: "Epictetus",
  },
  {
    text: 'But to be hanged???is that not unendurable?" Even so, when a man feels that it is reasonable, he goes off and hangs himself.',
    author: "Epictetus",
  },
  {
    text: "Epictetus has had a long-standing resonance in the United States; his uncompromising moral rigour chimed in well with Protestant Christian beliefs and the ethical individualism that has been a persistent vein in American culture. His admirers ranged from John Harvard and Thomas Jefferson in the seventeenth and eighteenth centuries to Ralph Waldo Emerson and Henry David Thoreau in the nineteenth. More recently, Vice-Admiral James Stockdale wrote movingly of how his study of Epictetus at Stanford University enabled him to survive the psychological pressure of prolonged torture as a prisoner of war in Vietnam between 1965 and 1973. Stockdale???s story formed the basis for a light-hearted treatment of the moral power of Stoicism in Tom Wolfe???s novel A Man in Full (1998).52",
    author: "Epictetus",
  },
  {
    text: "Let your will to avoid have no concern with what is not in man's power; direct it only to things in man's power that are contrary to nature.",
    author: "Epictetus",
  },
  {
    text: "Friend, lay hold with a desperate grasp, ere it is too late, on Freedom, on Tranquility, on Greatness of soul!",
    author: "Epictetus",
  },
  {
    text: "Don???t seek that all that comes about should come about as you wish, but wish that everything that comes about should come about just as it does, and then you???ll have a calm and happy life.",
    author: "Epictetus",
  },
  {
    text: "If you choose, you are free; if you choose, you need blame no man???accuse no man. All things will be at once according to your mind and according to the Mind of God.",
    author: "Epictetus",
  },
  {
    text: "For what else is tragedy than the portrayal in tragic verse of the sufferings of men who have attached high value to external things? [27]",
    author: "Epictetus",
  },
  {
    text: "Man is troubled not by events, but by the meaning he gives to them.",
    author: "Epictetus",
  },
  {
    text: "If a man has reported to you, that a certain person speaks ill of you, do not make any defense to what has been told you: but reply, The man did not know the rest of my faults, for he would not have mentioned these only.",
    author: "Epictetus",
  },
  {
    text: "Finally, when he crowns it off by becoming a senator, then he becomes a slave in fine company, then he experiences the poshest and most prestigious form of enslavement.",
    author: "Epictetus",
  },
  {
    text: "Protect what belongs to you at all costs; don't desire what belongs to another.",
    author: "Epictetus",
  },
  {
    text: "He who is discontented with what he has, and with what has been granted to him by fortune, is one who is ignorant of the art of living, but he who bears that in a noble spirit, and makes reasonable use of all that comes from it, deserves to be regarded as a good man.",
    author: "Epictetus",
  },
  {
    text: "So if you like doing something, do it regularly; if you don't like doing something, make a habit of doing something different.",
    author: "Epictetus",
  },
  {
    text: "In literature, too, it is not great achievement to memorize what you have read while not formulating an opinion of your own.",
    author: "Epictetus",
  },
  {
    text: "Adopt new habits yourself: consolidate your principles by putting them into practice.",
    author: "Epictetus",
  },
  {
    text: "For where you find unrest, grief, fear, frustrated desire, failed aversion, jealousy and envy, happiness has no room for admittance. And where values are false, these passions inevitably follow.",
    author: "Epictetus",
  },
  {
    text: "Does anyone bathe hastily? Do not say that they do it ill, but hastily. Does anyone drink much wine? Do not say that they do ill, but that they drink a great deal. For unless you perfectly understand their motives, how should you know if they act ill? Thus you will not risk yielding to any appearances except those you fully comprehend.",
    author: "Epictetus",
  },
  {
    text: "Tell yourself what you want to be, then act your part accordingly.",
    author: "Epictetus",
  },
  {
    text: "Free is the person who lives as he wishes and cannot be coerced, impeded or compelled, whose impulses cannot be thwarted, who always gets what he desires and never has to experience what he would rather avoid.",
    author: "Epictetus",
  },
  {
    text: "Freedom is not archived by satisfying desire, but by eliminating it.",
    author: "Epictetus",
  },
  {
    text: "You should be especially careful when associating with one of your former friends or acquaintances not to sink to their level; otherwise you will lose yourself. If you are troubled by the idea that ???He???ll think I???m boring and won???t treat me the way he used to,??? remember that everything comes at a price. It isn???t possible to change your behavior and still be the same person you were before.",
    author: "Epictetus",
  },
  {
    text: "Never praise or blame people on common grounds; look to their judgements exclusively. Because that is the determining factor, which makes everyone's actions either good or bad.",
    author: "Epictetus",
  },
  {
    text: "Restrict yourself to choice and refusal; and exercise them carefully, with discipline and detachment.",
    author: "Epictetus",
  },
  { text: "Don???t explain your philosophy. Embody it.", author: "Epictetus" },
  {
    text: "It is always our choice whether or not we wish to pay the price for life's rewards. And often it is best for us not to pay the price, for the price might be our integrity.",
    author: "Epictetus",
  },
  {
    text: "Les feuilles tombent, la figue s??che, remplace la figue fra??che, le raisin sec la grappe m??re, voil?? selon toi des paroles de mauvaise augure ! Mais il n???y a l?? que la transformation d?????tats ant??rieurs en d???autres ; il n???y a pas de destruction, mais un am??nagement et une disposition bien r??gl??e. L?????migration n???est qu???un petit changement. La mort en est un plus grand, mais il ne va pas de l?????tre actuel au non-??tre, mais au non-??tre de l?????tre actuel. Alors ne serais-je plus ? Tu ne seras pas ce que tu es mais autre chose dont le monde aura alors besoin.",
    author: "Epictetus",
  },
  {
    text: "CIRCUMSTANCES DON???T MAKE THE MAN, THEY ONLY REVEAL HIM TO HIMSELF",
    author: "Epictetus",
  },
  {
    text: 'If you are told that such an one speaks ill of you, make no defense against what was said, but answer, "He surely knows not my other faults, else he would not have mentioned these only!',
    author: "Epictetus",
  },
  {
    text: "Man is disturbed not by things, but by the views he takes of them.",
    author: "Epictetus",
  },
  {
    text: "Isn???t reading a kind of preparation for life????  But life is composed of things other than books. It is as if an athlete, on entering the stadium, were to complain that he???s not outside exercising.This was the goal of your exercise, of your weights, your practice ring and your training partners.",
    author: "Epictetus",
  },
  {
    text: "Be happy when you find that doctrines you have learned and analysed are being tested by real events. If you???ve succeeded in removing or reducing the tendency to be mean and critical, or thoughtless, or foul-mouthed, or careless, or nonchalant; if old interests no longer engage you, at least not to the same extent; then every day can be a feast day ??? today because you acquitted yourself well in one set of circumstances, tomorrow because of another.",
    author: "Epictetus",
  },
  {
    text: "Is then the fruit of a fig-tree not perfect suddenly and in one hour, and would you possess the fruit of a man's mind in so short a time and so easily?",
    author: "Epictetus",
  },
  {
    text: "Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions. Things not in our control are body, property, reputation, command, and, in one word, whatever are not our own actions.",
    author: "Epictetus",
  },
  {
    text: "Conduct yourself in all matters, grand and public or small and domestic, in accordance with the laws of nature. Harmonizing your will with nature should be your utmost ideal.",
    author: "Epictetus",
  },
  {
    text: "If you have assumed a character beyond your strength, you have both played a poor figure in that, and neglected one that is within your powers.",
    author: "Epictetus",
  },
  {
    text: "who is your master? Whoever has authority over anything that you???re anxious to gain or avoid.",
    author: "Epictetus",
  },
  {
    text: "If you wish it, you are free; if you wish it, you???ll find fault with no one, you???ll cast blame on no one, and everything that comes about will do so in accordance with your own will and that of God.",
    author: "Epictetus",
  },
  {
    text: "For it is indeed pointless and foolish to seek to get from another what one can get from oneself. [32] Since I can get greatness of soul and nobility of mind from myself, shall I seek to get a patch of land from you, or a bit of money, or some public post? Heaven forbid! I won???t overlook my own resources in such a manner. [33] But if someone is abject and cowardly, what on earth can one do for him except write letters for him as though on behalf of a corpse, ???Do please grant us the corpse of this man and a pint of his miserable blood???; [34] for in truth such a person is merely a corpse and a pint of blood, and nothing more. If he amounted to anything more, he would realize that no one suffers misfortune because of the actions of another.",
    author: "Epictetus",
  },
  {
    text: "You ought to realize, you take up very little space in the world as a whole???your body, that is; in reason, however, you yield to no one, not even to the gods, because reason is not measured in size but sense. So why not care for that side of you, where you and the gods are equals?",
    author: "Epictetus",
  },
  {
    text: "If you have assumed a character above your strength, you have both acted in this matter in an unbecoming way, and you have neglected that which you might have fulfilled.",
    author: "Epictetus",
  },
  {
    text: "When then any man assents to that which is false, be assured that he did not intend to assent to it as false, for every soul is unwillingly deprived of the truth, as Plato says; but the falsity seemed to him to be true.",
    author: "Epictetus",
  },
  {
    text: "Such was, and is, and will be the nature of the universe, and it isn???t possible that things should come into being in any other way than they do at present; and not only have human beings participated in the process of change and transformation along with all the other creatures that live on the earth, but also those beings that are divine, and, by Zeus, even the four elements, which are changed and transformed upwards and downwards, as earth becomes water, and water air, and air is transformed in turn into ether. If someone endeavours to turn his mind towards these things, and to persuade himself to accept of his own free will what must necessarily come about, he will live a very balanced and harmonious life.",
    author: "Epictetus",
  },
  {
    text: "That is the way things are weighed and disagreements settled ??? when standards are established. Philosophy aims to test and set such standards. And the wise man is advised to make use of their findings right way.",
    author: "Epictetus",
  },
  {
    text: "Most people are impulsive, however, and having committed to the thing, they persist, just making more confusion for themselves and others until it all end in mutual recrimination.",
    author: "Epictetus",
  },
  {
    text: "It is the act of an ill-instructed man to blame others for his own bad condition; it is the act of one who has begun to be instructed, to lay blame on himself; and of one whose instruction is completed, neither to blame another, nor himself.",
    author: "Epictetus",
  },
  {
    text: "He wants what he cannot have, and does not want what he can't refuse ??? and isn't aware of it. He doesn't know the difference between his own possessions and others'. Because, if he did, he would never be thwarted of disappointed. Or nervous.",
    author: "Epictetus",
  },
  {
    text: "We aren't filled with fear except by things that are bad; and not by them, either, as long as it is in our power to avoid them.",
    author: "Epictetus",
  },
  {
    text: "Supprime donc en toi toute aversion pour ce qui ne d??pend pas de nous et, cette aversion, reporte-la sur ce qui d??pend de nous et n???est pas en accord avec la nature. Quant au d??sir, pour le moment, supprime-le compl??tement. Car si tu d??sires une chose qui ne d??pend pas de nous, tu ne pourras qu?????chouer, sans compter que tu te mettras dans l???impossibilit?? d???atteindre ce qui est ?? notre port??e et qu???il est plus sage de d??sirer. Borne-toi ?? suivre tes impulsions, tes r??pulsions, mais fais-le avec l??g??ret??, de fa??on non syst??matique et sans effort excessif.",
    author: "Epictetus",
  },
  {
    text: "Don't concern yourself with other people's business. It's his problem if he receives you badly. And you cannot suffer for another person's fault. So don't worry about the behavior of other.",
    author: "Epictetus",
  },
  {
    text: "I want to die, even though I don't have to.",
    author: "Epictetus",
  },
  { text: "I must die; so must I die groaning too?", author: "Epictetus" },
  {
    text: "Why are you pestering me, pal? My own evils are enough for me.",
    author: "Epictetus",
  },
  {
    text: "You'd have a better chance persuading someone to change their sexual orientation than reaching people who have rendered themselves so deaf and blind.",
    author: "Epictetus",
  },
  {
    text: "People are ready to acknowledge some of their faults, but will admit to others only with reluctance.",
    author: "Epictetus",
  },
  {
    text: "understand that every event is indifferent and nothing to you, of whatever sort it may be; for it will be in your power to make a right use of it, and this no one can hinder.",
    author: "Epictetus",
  },
  {
    text: "The soul is like the bowl of water, with the soul's impressions like the rays of light that strike the water. Now, if the water is disturbed, the light appears to be disturbed together with it ??? though of course it is not. So when someone loses consciousness, it is not the person's knowledge and virtues that are impaired, it is the breath that contains them. Once the breath returns to normal, knowledge and the virtues are restored to normal also.",
    author: "Epictetus",
  },
  {
    text: "To-day, when the crisis calls you, will you go off and display your recitation and harp on, 'How cleverly I compose dialogues'? Nay, fellow man, make this your object, 'Look how I fail not to get what I will. Look how I escape what I will to avoid. Let death come and you shall know; bring me pains, prison, dishonour, condemnation.' This is the true field of display for a young man come from school. Leave those other trifles to other men; let no one ever hear you say a word on them, do not tolerate any compliments upon them; assume the air of being no one and of knowing nothing. Show that you know this only, how not to fail and how not to fall.",
    author: "Epictetus",
  },
  {
    text: "Stop honouring externals, quit turning yourself into the tool of mere matter, or of people who can supply you or deny you those material things.",
    author: "Epictetus",
  },
  {
    text: "If they are wise, do not quarrel with them; if they are fools, ignore them.",
    author: "Epictetus",
  },
  {
    text: "When you find your direction, check to make sure that it is the right one.",
    author: "Epictetus",
  },
  {
    text: "Those proficient praise no one, blame no one, and accuse no one. They say nothing concerning their self as being anybody or knowing anything.",
    author: "Epictetus",
  },
  {
    text: "People find particular things, however, frightening; and it's when someone is able to threaten or entice us with those that the man himself becomes frightening.",
    author: "Epictetus",
  },
  {
    text: 'Aye, but to debase myself thus were unworthy of me." "That," said Epictetus, "is for you to consider, not for me. You know yourself what you are worth in your own eyes; and at what price you will sell yourself. For men sell themselves at various prices. This was why, when Florus was deliberating whether he should appear at Nero\'s shows, taking part in the performance himself, Agrippinus replied, \'But why do not you appear?\' he answered, \'Because I do not even consider the question.\' For the man who has once stooped to consider such questions, and to reckon up the value of external things, is not far from forgetting what manner of man he is. Why, what is it that you ask me? Is death preferable, or life? I reply, Life. Pain or pleasure? I reply, Pleasure." "Well, but if I do not act, I shall lose my head." "Then go and act! But for my part I will not act." "Why?" "Because you think yourself but one among the many threads which make up the texture of the doublet. You should aim at being like men in general???just as your thread has no ambition either to be anything distinguished compared with the other threads. But I desire to be the purple???that small and shining part which makes the rest seem fair and beautiful. Why then do you bid me become even as the multitude? Then were I no longer the purple.',
    author: "Epictetus",
  },
  {
    text: "Is you naturally entitled, then, to a good father? No, only to a father. Is",
    author: "Epictetus",
  },
  {
    text: "Whoever chafes at the conditions dealt by fate is unskilled in the art of life; whoever bears with them nobly and makes wise use of the results is a man who deserves to be considered good.",
    author: "Epictetus",
  },
  {
    text: "Resistance is vain in any case; it only leads to useless struggle while inviting grief and sorrow.",
    author: "Epictetus",
  },
  {
    text: "We should realize that an opinion is not easily formed unless a person says and hears the same things every day and practises them in real life.",
    author: "Epictetus",
  },
  {
    text: "the good of man, and likewise his ill, lies in how he exercises his choice, while everything else is nothing to us,",
    author: "Epictetus",
  },
  {
    text: "It is not events that disturb people, it is their judgements concerning them.",
    author: "Epictetus",
  },
  {
    text: "Now there are two kinds of hardening, one of the understanding, the other of the sense of shame, when a man is resolved not to assent to what is manifest nor to desist from contradictions. Most of us are afraid of mortification of the body, and would contrive all means to avoid such a thing, but we care not about the soul's mortification. And indeed with regard to the soul, if a man be in such a state as not to apprehend anything, or understand at all, we think that he is in a bad condition; but if the sense of shame and modesty are deadened, this we call even power (or strength).",
    author: "Epictetus",
  },
  {
    text: "Faced with pain, you will discover the power of endurance. If you are insulted, you will discover patience. In time, you will grow to be confident that there is not a single impression that you will not have the moral means to tolerate.",
    author: "Epictetus",
  },
  {
    text: "You will never have to experience defeat if you avoid contests whose outcome is outside your control.",
    author: "Epictetus",
  },
  {
    text: "Disease is an impediment to the body, but not to the will, unless the will itself chooses. Lameness is an impediment to the leg, but not to the will. And add this reflection on the occasion of everything that happens; for you will find it an impediment to something else, but not to yourself.",
    author: "Epictetus",
  },
  {
    text: "If you decide to do something, don't shrink from being seen doing it, even if the majority of people disapprove. If you're wrong to do it, then you should shrink from doing it altogether; but if you're right, then why worry how people will judge you?",
    author: "Epictetus",
  },
  {
    text: "you are a little soul carrying around a corpse.",
    author: "Epictetus",
  },
  {
    text: "Every circumstance comes with two handles, which one of which you can hold it, while with the other conditions are insupportable.",
    author: "Epictetus",
  },
  {
    text: "So don't make a show of your philosophical learning to the uninitiated, show them by your actions what you have absorbed.",
    author: "Epictetus",
  },
  {
    text: "Whatever your mission, stick by it as if it were a law and you would be committing sacrilege to betray it. Pay no attention to whatever people might say; this no longer should influence you.",
    author: "Epictetus",
  },
  {
    text: "Remember that in life you ought to behave as at a banquet. Suppose that something is carried round and is opposite to you. Stretch out your hand and take a portion with decency. Suppose that it passes by you. Do not detain it. Suppose that it is not yet come to you. Do not send your desire forward to it, but wait till it is opposite to you.",
    author: "Epictetus",
  },
  {
    text: "?????????? ???? ???????? ???? ???????????? ???????? ????, ?????? ?? ??????, ???? ?????? ???? ???? ?? ???????????????? ???? ?????????? ????????. ??????????????",
    author: "Epictetus",
  },
  {
    text: "The wise person knows it is fruitless to project hopes and fears on the future. This only leads to forming melodramatic representations in your mind and wasting time.",
    author: "Epictetus",
  },
  {
    text: "Remember then that if you think the things which are by nature slavish to be free, and the things which are in the power of others to be your own, you will be hindered, you will lament, you will be disturbed, you will blame both gods and men: but if you think that only which is your own to be your own, and if you think that what is another's, as it really is, belongs to another, no man will ever compel you, no man will hinder you, you will never blame any man, you will accuse no man, you will do nothing involuntarily (against your will), no man will harm you, you will have no enemy, for you will not suffer any harm. If",
    author: "Epictetus",
  },
  {
    text: "Do not decorate the walls of your house with the valuable stones from Eub??a and Sparta; but adorn the minds (breasts) of the citizens and of those who administer the state with the instruction which comes from Hellas (Greece). For states are well governed by the wisdom (judgment) of men, but not by stone and wood.",
    author: "Epictetus",
  },
  {
    text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life. IX",
    author: "Epictetus",
  },
  {
    text: "Disease is an impediment to the body, but not to the will, unless the will itself chooses. Lameness is an impediment to the leg, but not to the will. And add this reflection on the occasion of everything that happens; for you will find it an impediment to something else, but not to yourself. X",
    author: "Epictetus",
  },
  {
    text: "On the occasion of every accident (event) that befalls you, remember to turn to yourself and inquire what power you have for turning it to use.",
    author: "Epictetus",
  },
  {
    text: "It is impossible to begin to learn that which one thinks one already knows.",
    author: "Epictetus",
  },
  {
    text: "I cannot call somebody ???hard-working??? knowing only that they read and write. Even if ???all night long??? is added, I cannot say it ??? not until I know the focus of all this energy.",
    author: "Epictetus",
  },
  {
    text: "Whatever moral rules you have deliberately proposed to yourself. abide by them as they were laws, and as if you would be guilty of impiety by violating any of them. Don???t regard what anyone says of you, for this, after all, is no concern of yours.",
    author: "Epictetus",
  },
  {
    text: "Men are disturbed, not by things, but by the principles and notions which they form concerning things. Death,",
    author: "Epictetus",
  },
  {
    text: "People are not disturbed by things, but by the view they take of them.",
    author: "Epictetus",
  },
  {
    text: "The man has to learn ???what each specific thing means???, as Socrates often said, and stop casually applying preconceptions to individual cases. This is the cause of everyone???s troubles, the inability to apply common preconceptions to particulars. Instead the opinions of men as to what is bad diverge.",
    author: "Epictetus",
  },
  {
    text: "It is the act of an ill-instructed man to blame others for his own bad condition; it is the act of one who has begun to be instructed, to lay the blame on himself; and of one whose instruction is completed, neither to blame another, nor himself.",
    author: "Epictetus",
  },
  {
    text: "For in this Case, we are not to give Credit to the Many, who say, that none ought to be educated but the Free; but rather to the Philosophers, who say, that the Well-educated alone are free.",
    author: "Epictetus",
  },
  {
    text: "Never say about anything, I have lost it, but only I have given it back.",
    author: "Epictetus",
  },
  {
    text: 'If what philosophers say of the kinship of God and Man be true, what remains for men to do but as Socrates did:???never, when asked one\'s country, to answer, "I am an Athenian or a Corinthian," but "I am a citizen of the world.',
    author: "Epictetus",
  },
  {
    text: "D??s qu???une image viendra te troubler l???esprit, pense ?? te dire : ?? Tu n???es qu???image, et non la r??alit?? dont tu as l???apparence. ?? Puis, examine-la et soumets-la ?? l?????preuve des lois qui r??glent ta vie : avant tout, vois si cette r??alit?? d??pend de nous ou n???en d??pend pas ; et si elle ne d??pend pas de nous, sois pr??t ?? dire : ?? Cela ne me regarde pas. ??",
    author: "Epictetus",
  },
  {
    text: "If you wish to be a writer; write! Send quote to a friend Epictetus (50-120) Greek philosopher.",
    author: "Epictetus",
  },
  {
    text: "Man, what are you talking about? Me in chains? You may fetter my leg but my will, not even Zeus himself can overpower.",
    author: "Epictetus",
  },
  {
    text: "Understand what words you use first, then use them.",
    author: "Epictetus",
  },
  {
    text: "You are a little soul carrying a dead body, as Epictetus said.",
    author: "Epictetus",
  },
  {
    text: "Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not.",
    author: "Epictetus",
  },
  {
    text: "[23] Our situation is like that at a festival.* Sheep and cattle are driven to it to be sold, and most people come either to buy or to sell, while only a few come to look at the spectacle of the festival, to see how it is proceeding and why, and who is organizing it, and for what purpose. [24] So also in this festival of the world. Some people are like sheep and cattle and are interested in nothing but their fodder; for in the case of those of you who are interested in nothing but your property, and land, and slaves, and public posts, all of that is nothing more than fodder. [25] Few indeed are those who attend the fair for love of the spectacle, asking, ???What is the universe, then, and who governs it? No one at all? [26] And yet when a city or household cannot survive for even a very short time without someone to govern it and watch over it, how could it be that such a vast and beautiful structure could be kept so well ordered by mere chance and good luck? [27] So there must be someone governing it. What sort of being is he, and how does he govern it? And we who have been created by him, who are we, and what were we created for? Are we bound together with him in some kind of union and interrelationship, or is that not the case???? [28] Such are the thoughts that are aroused in this small collection of people; and from then on, they devote their leisure to this one thing alone, to finding out about the festival before they have to take their leave. [29] What comes about, then? They become an object of mockery for the crowd, just as the spectators at an ordinary festival are mocked by the traders; and even the sheep and cattle, if they had sufficient intelligence, would laugh at those who attach value to anything other than fodder!",
    author: "Epictetus",
  },
  {
    text: "Prefer enduring satisfaction to immediate gratification.",
    author: "Epictetus",
  },
  { text: "Lucky is the man who dies at work.", author: "Epictetus" },
  {
    text: "Remember to act always as if you were at a symposium. When the food or drink comes around, reach out and take some politely; if it passes you by don't try to pulling it back. And if it has not reached you yet, don't let your desire run ahead of you, be patient until your turn comes.",
    author: "Epictetus",
  },
  {
    text: 'Why are we not angry if we are told that we have a headache, and why are we angry if we are told that we reason badly, or choose wrongly?" The reason is that we are quite certain that we have not a headache, or are not lame, but we are not so sure that we make a true choice. So having assurance only because we see with our whole sight, it puts us into suspense and surprise when another with his whole sight sees the opposite, and still more so when a thousand others deride our choice. For we must prefer our own lights to those of so many others, and that is bold and difficult.',
    author: "Epictetus",
  },
  {
    text: "You're not yet Socrates, but you can still live as if you want to be him.",
    author: "Epictetus",
  },
  {
    text: "I have learned to see that whatever comes about is nothing to me if it lies beyond the sphere of choice.",
    author: "Epictetus",
  },
  {
    text: "you???re unable to make someone change his views, recognize that he is a child, and clap as he does. Or if you don???t care to act in such a way, you have only to keep quiet.",
    author: "Epictetus",
  },
  {
    text: "First to those universal principles I have spoken of: these you must keep at command, and without them neither sleep nor rise, drink nor eat nor deal with men: the principle that no one can control another's will, and that the will alone is the sphere of good and evil.",
    author: "Epictetus",
  },
  {
    text: "None of these things are foretold to me; but either to my paltry body, or property, or reputation, or children, or wife. But to me all omens are lucky, if I will. For whichever of these things happens, it is in my control to derive advantage from it.",
    author: "Epictetus",
  },
  {
    text: "In short, we do not abandon any discipline for despair of ever being the best in it.",
    author: "Epictetus",
  },
  {
    text: "It is one thing to put bread and wine away in a store-room, and quite another to eat them. What is eaten is digested and distributed around the body, to become sinews, flesh, bones, blood, a good complexion, sound breathing. What is stored away is ready at hand, to be sure, to be taken out and displayed whenever you wish, but you derive no benefit from it, except that of having the reputation of possessing it. [",
    author: "Epictetus",
  },
  {
    text: "We must consider what is the time for singing, what the time for play, and in whose presence: what will be unsuited to the occasion; whether our companions are to despise us, or we to despise ourselves: when to jest, and whom to mock at: and on what occasion to be conciliatory and to whom: in a word, how one ought to maintain one's character in society. Wherever you swerve from any of these principles, you suffer loss at once; not loss from without, but issuing from the very act itself.",
    author: "Epictetus",
  },
  {
    text: "He did not say, 'Define me envy', and then, when the man defined it, 'You define it ill, for the terms of the definition do not correspond to the subject defined.' Such phrases are technical and therefore tiresome to the lay mind, and hard to follow, yet you and I cannot get away from them. We are quite unable to rouse the ordinary man's attention in a way which will enable him to follow his own impressions and so arrive at admitting or rejecting this or that. And therefore those of us who are at all cautious naturally give the subject up, when we become aware of this incapacity; while the mass of men, who venture at random into this sort of enterprise, muddle others and get muddled themselves, and end by abusing their opponents and getting abused in return, and so leave the field. But the first quality of all in Socrates, and the most characteristic, was that he never lost his temper in argument, never uttered anything abusive, never anything insolent, but bore with abuse from others and quieted strife.",
    author: "Epictetus",
  },
  {
    text: "It is much better to die of hunger unhindered by grief and fear than to live affluently beset with worry, dread, suspicion and unchecked desire.",
    author: "Epictetus",
  },
  {
    text: "The husbandman deals with land; physicians and trainers with the body; the wise man with his own Mind.",
    author: "Epictetus",
  },
  {
    text: "Whoever then would be free, let him wish nothing, let him decline nothing, which depends on others; else he must necessarily be a slave.",
    author: "Epictetus",
  },
  {
    text: "Remember that the divine order is intelligent and fundamentally good. Life is not a series of random, meaningless episodes, but an ordered, elegant whole that follows ultimately comprehensible laws.",
    author: "Epictetus",
  },
  {
    text: "Never say of anything that I've lost it, only that Ive given it back.",
    author: "Epictetus",
  },
  {
    text: 'Who is a friend?" his answer was, "A second self (alter ego).',
    author: "Epictetus",
  },
  {
    text: "Tis true I know what evil I shall do but passion overpowers the better council.",
    author: "Epictetus",
  },
  {
    text: "For sheep don???t throw up the grass to show the shepherds how much they have eaten; but, inwardly digesting their food, they outwardly produce wool and milk. Thus, therefore, do you likewise not show theorems to the unlearned, but the actions produced by them after they have been digested. 47.",
    author: "Epictetus",
  },
  {
    text: "First say to yourself what you would be;and then do what you have to do.",
    author: "Epictetus",
  },
  {
    text: 'Asked, Who is the rich man? Epictetus replied, "He who is content.',
    author: "Epictetus",
  },
  {
    text: "Is this all the habit you acquired when you studied philosophy, to look to others and to hope for nothing from yourself and your own acts? Lament therefore and mourn, and when you eat be fearful that you will have nothing to eat to-morrow. Tremble for your wretched slaves, lest they should steal, or run away, or die. Live in this spirit, and never cease to live so, you who never came near philosophy, except in name, and disgraced its principles so far as in you lies, by showing them to be useless and unprofitable to those who take them up.",
    author: "Epictetus",
  },
  {
    text: "When, therefore, you see anyone eminent in honors, or power, or in high esteem on any other account, take heed not to be hurried away with the appearance, and to pronounce him happy; for, if the essence of good consists in things in our own control, there will be no room for envy or emulation. But, for your part, don???t wish to be a general, or a senator, or a consul, but to be free;",
    author: "Epictetus",
  },
  {
    text: "??l?? pyri siihen, ett?? kaikki tapahtuisi kuten haluat, vaan halua kaiken tapahtuvan niin kuin se tapahtuu. Silloin el??m??si on tasaista virtaa.",
    author: "Epictetus",
  },
  {
    text: "Once I was liable to the same mistakes, but, thanks to God, no longer ?????? Well, isn???t it just as worthwhile to have devoted and applied yourself to this goal as to have read or written fifty pages?",
    author: "Epictetus",
  },
  {
    text: "If, on the other hand, we read books entitled On Impulse not just out of idle curiosity, but in order to exercise impulse correctly; books entitled On Desire and On Aversion so as not to fail to get what we desire or fall victim to what we would rather avoid; and books entitled On Moral Obligation in order to honour our relationships and never do anything that clashes or conflicts with this principle; then we wouldn???t get frustrated and grow impatient with our reading.  Instead we would be satisfied to act accordingly. And rather than reckon, as we are used to doing, ???How many lines I read, or wrote, today,??? we would pass in review how ???I applied impulse today the way the philosophers recommend",
    author: "Epictetus",
  },
  {
    text: "Yes, but my nose is running.??? Then what do you have hands for, you slave?",
    author: "Epictetus",
  },
  {
    text: "You would fain be victor at the Olympic Games, you say. Yes, but weigh the conditions, weigh the consequences; then and then only, lay to your hand-if it be for your profit. You must live by rule, submit to diet, abstain from dainty meats, exercise your body perforce at stated hours, in heat or in cold; drink no cold water, nor, it may be, wine. In a word, you must surrender yourself wholly to your trainer, as though to a physician.",
    author: "Epictetus",
  },
  {
    text: "of all things, the greatest, and most important, and most all-embracing, is this society in which human beings and God are associated together. From this are derived the generative forces to which not only my father and grandfather owe their origin, but also all beings that are born and grow on the earth, and especially rational beings, [5] since they alone are fitted by nature to enter into communion with the divine, being bound to God through reason.",
    author: "Epictetus",
  },
  {
    text: "REST.???If a man should be able to assent to this doctrine as he ought, that we are all sprung from God in an especial manner, and that God is the father both of men and of gods, I suppose that he would never have any ignoble or mean thoughts about himself. But if C??sar (the emperor) should adopt you, no one could endure your arrogance; and if you know that you are the son of Zeus, will you not be elated?",
    author: "Epictetus",
  },
  {
    text: "I am richer than you, therefore my property is greater than yours;??? ???I am more eloquent than you, therefore my style is better than yours.??? But you, after all, are neither property nor style.",
    author: "Epictetus",
  },
  {
    text: "for your part, do not desire to be a general, or a senator, or a consul, but to be free; and the only way to this is a disregard of things which lie not within our own power.",
    author: "Epictetus",
  },
  {
    text: "Consider when, on a voyage, your ship is anchored; if you go on shore to get water you may along the way amuse yourself with picking up a shellish, or an onion. However, your thoughts and continual attention ought to be bent towards the ship, waiting for the captain to call on board; you must then immediately leave all these things, otherwise you will be thrown into the ship, bound neck and feet like a sheep. So it is with life. If, instead of an onion or a shellfish, you are given a wife or child, that is fine. But if the captain calls, you must run to the ship, leaving them, and regarding none of them. But if you are old, never go far from the ship: lest, when you are called, you should be unable to come in time.",
    author: "Epictetus",
  },
  {
    text: "But first consider how much more sparing and patient of hardship the poor are than we.",
    author: "Epictetus",
  },
  {
    text: "Is it not the same distance to God everywhere?",
    author: "Epictetus",
  },
  {
    text: "People feel disturbed not by things, but by the views they take of them.",
    author: "Epictetus",
  },
  {
    text: 'If I show you, that you lack just what is most important and necessary to happiness, that hitherto your attention has been bestowed on everything rather than that which claims it most; and, to crown all, that you know neither what God nor Man is???neither what Good or Evil is: why, that you are ignorant of everything else, perhaps you may bear to be told; but to hear that you know nothing of yourself, how could you submit to that? How could you stand your ground and suffer that to be proved? Clearly not at all. You instantly turn away in wrath. Yet what harm have I done to you? Unless indeed the mirror harms the ill-favoured man by showing him to himself just as he is; unless the physician can be thought to insult his patient, when he tells him:???"Friend, do you suppose there is nothing wrong with you? why, you have a fever. Eat nothing to-day, and drink only water." Yet no one says, "What an insufferable insult!" Whereas if you say to a man, "Your desires are inflamed, your instincts of rejection are weak and low, your aims are inconsistent, your impulses are not in harmony with Nature, your opinions are rash and false," he forthwith goes away and complains that you have insulted him.',
    author: "Epictetus",
  },
  {
    text: "What, for instance, does it mean to be insulted? [29] Stand by a rock and insult it, and what have you accomplished? If someone responds to insult like a rock, what has the abuser gained with his invective? If, however, he has his victim???s weakness to exploit, then his efforts are worth his while.",
    author: "Epictetus",
  },
  {
    text: "Always remember what is your own and what is not, and you???ll never be troubled. [",
    author: "Epictetus",
  },
  {
    text: "grammar will tell you how to write; but whether to write or not, grammar will not tell.",
    author: "Epictetus",
  },
  {
    text: "What makes for freedom and fluency in the practice of writing? Knowledge of how to write. The same goes for the practice of playing an instrument. It follows that, in the conduct of life, there must be a science to living well.",
    author: "Epictetus",
  },
  {
    text: "What upsets people is not things themselves but their judgements about these things.",
    author: "Epictetus",
  },
  {
    text: "Only consider at what price you sell your own will: if for no other reason, at least for this, that you sell it not for a small sum.",
    author: "Epictetus",
  },
  {
    text: "At feasts, remember that you are entertaining two guests, body and soul. What you give to the body, you presently lose; what you give to the soul, you keep for ever.",
    author: "Epictetus",
  },
  {
    text: "When something happens, the only thing in your power is your attitude toward it; you can either accept it or resent it.",
    author: "Epictetus",
  },
  {
    text: "All philosophy lies in two words, sustain and abstain.",
    author: "Epictetus",
  },
  {
    text: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own...",
    author: "Epictetus",
  },
  {
    text: "If then all things that grow, nay, our own bodies, are thus bound up with the whole, is not this still truer of our souls? And if our souls are bound up and in contact with God, as being very parts and fragments plucked from Himself, shall He not feel every movement of theirs as though it were His own, and belonging to His own nature?",
    author: "Epictetus",
  },
  {
    text: "Try to enjoy the great festival of life with other men.",
    author: "Epictetus",
  },
  {
    text: "we should put our trust not in the crowd, who say that only free men can be educated, but rather in the philosophers, who say that none but the educated can be free.",
    author: "Epictetus",
  },
  {
    text: "greatness of reason is measured not by height or length, but by the quality of its judgements.",
    author: "Epictetus",
  },
  {
    text: "Wherefore it is a shame for man to begin and to leave off where the brutes do. Rather he should begin there, and leave off where Nature leaves off in us: and that is at contemplation, and understanding, and a manner of life that is in harmony with herself. See then that ye die not without being spectators of these things.",
    author: "Epictetus",
  },
  {
    text: "And what else can I do, lame old man that I am, than sing the praise of God? If I were a nightingale, I would perform the work of a nightingale, and if I were a swan, that of a swan. But as it is, I am a rational being, and I must sing the praise of God. This is my work, and I accomplish it, and I will never abandon my post for as long as it is granted to me to remain in it; and I invite all of you to join me in this same song.",
    author: "Epictetus",
  },
  {
    text: "Seek not for events to happen as you wish but rather wish for events to happen as they do and your life will go smoothly.",
    author: "Epictetus",
  },
  {
    text: "I'll show you that I???m master.??? ???How will you do that? Zeus has set me free. Do you really suppose that he would allow his own son to be turned into a slave? You???re master of my carcass, take that.",
    author: "Epictetus",
  },
  {
    text: "You only have to doze a moment, and all is lost. For ruin and salvation both have their source inside you.",
    author: "Epictetus",
  },
  {
    text: "secondly, what the nature of God is. Whatever that nature is discovered to be, the man who would please and obey Him must strive with all his might to be made like unto him. If the Divine is faithful, he also must be faithful; if free, he also must be free; if beneficent, he also must be beneficent; if magnanimous, he also must be magnanimous. Thus as an imitator of God must he follow Him in every deed and word.",
    author: "Epictetus",
  },
  {
    text: "Suppose I should say to a wrestler, 'Show me your muscle'. And he should answer me, 'See my dumb-bells'. Your dumb-bells are your own affair; I want to see the effect of them.  \"Take the treatise 'On Choice', and see how thoroughly I have perused it. I am not asking about this, O slave, but how you act in choosing and refusing, how you manage your desires and aversions, your intentions and purposes, how you meet events -- whether you are in harmony with nature's laws or opposed to them. If in harmony, give me evidence of that, and I will say you are progressing; if the contrary, you may go your way, and not only comment on your books, but write some like them yourself; and what good will it do you?",
    author: "Epictetus",
  },
  {
    text: "The knowledge of what is mine and what is not mine, what I can and cannot do. I must die. But must I die bawling? I must be exiled; but is there anything to keep me from going with a smile, calm and self-composed?",
    author: "Epictetus",
  },
  {
    text: "Man, the rational animal, can put up with anything except what seems to him irrational; whatever is rational is tolerable.",
    author: "Epictetus",
  },
  {
    text: "You are the one who knows yourself - which is to say, you know how much you are worth in your own estimation, and therefore at what price you will sell yourself; because people sell themselves at different rates.",
    author: "Epictetus",
  },
  {
    text: "Taking account of the value of externals, you see, comes at some cost to the value of one's own character.",
    author: "Epictetus",
  },
  {
    text: "Make it your goal never to fail in your desires or experience things you would rather avoid; try never to err in impulse and repulsion; aim to be perfect also in the practice of attention and withholding judgment.",
    author: "Epictetus",
  },
  {
    text: "And where there is ignorance, there is also want of learning and instruction in essentials.",
    author: "Epictetus",
  },
  {
    text: "It isn't death, pain, exile or anything else you care to mention that accounts for the way we act, only our opinion about death, pain and the rest.",
    author: "Epictetus",
  },
  {
    text: "Freedom, you see, is having events go in accordance with our will, never contrary to it.",
    author: "Epictetus",
  },
  {
    text: "Can we avoid people? How is that possible? And if we associate with them, can we change them? Who gives us that power?",
    author: "Epictetus",
  },
  {
    text: "Philosophy does not claim to secure for us anything outside our control. Otherwise it would be taking on matters that do not concern it. For as wood is the material of the carpenter, and marble that of the sculptor, so the subject matter of the art of life is the life of the self.",
    author: "Epictetus",
  },
  {
    text: "Nothing important comes into being overnight; even grapes and figs need time to ripen. If you say that you want a fig now, I will tell you to be patient. First, you must allow the tree to flower, then put forth fruit; then you have to wait until the fruit is ripe. So if the fruit of a fig tree is not brought to maturity instantly or in an hour, how do you expect the human mind to come to fruition, so quickly and easily?",
    author: "Epictetus",
  },
  {
    text: "Philosophers say that people are all guided by a single standard. When they assent to a thing, it is because they feel it must be true, when they dissent, it is because they feel something isn't true, and when they suspend judgement, it is because they feel that the thing is unclear.",
    author: "Epictetus",
  },
  {
    text: "at any one time, whereas the conjunctive proposition ???Both it is day and it is night??? is false at any moment. 8. As you are careful ??? at the same time: E.g. by ???strutting??? or otherwise walking in an inappropriate manner, or engaging in undignified thoughts or daydreams. 9. Don???t embrace marble statues: Outdoors, naked, in cold weather: a bizarre and showy kind",
    author: "Epictetus",
  },
  {
    text: "Destroy desire completely for the present. For if you desire anything which is not in our power, you must be unfortunate",
    author: "Epictetus",
  },
  {
    text: "If you must be affected by other people's misfortunes, show them pity instead of contempt. Drop this readiness to hate and take offence.",
    author: "Epictetus",
  },
  {
    text: "As long as you honour material things, direct your anger at yourself rather than the thief or adulterer.",
    author: "Epictetus",
  },
  {
    text: "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval.",
    author: "Epictetus",
  },
  {
    text: "If then you desire (aim at) such great things remember that you must not (attempt to) lay hold of them with a small effort;",
    author: "Epictetus",
  },
  {
    text: "28. If a person gave your body to any stranger he met on his way, you would certainly be angry. And do you feel no shame in handing over your own mind to be confused and mystified by anyone who happens to verbally attack you?",
    author: "Epictetus",
  },
  {
    text: "The philosopher's lecture room is a 'hospital': you ought not to walk out of it in a state of pleasure, but in pain; for you are not in good condition when you arrive.",
    author: "Epictetus",
  },
  {
    text: "??nsan??n zaten bildi??ini sand?????? ??eyi ????renmesi imkans??zd??r.",
    author: "Epictetus",
  },
  {
    text: "There are two things that must be rooted out in human beings - arrogant opinion and mistrust. Arrogant opinion expects that there is nothing further needed, and mistrust assumes that under the torrent of circumstance there can be no happiness.",
    author: "Epictetus",
  },
  {
    text: "If you have assumed any character beyond your strength, you have both demeaned yourself ill in that and quitted one which you might have supported.",
    author: "Epictetus",
  },
  {
    text: "Check your passions that you may not be punished by them.",
    author: "Epictetus",
  },
  {
    text: "Rahats??z edici bir sorunun sakin bir ??ekilde ??stesinden gelmek, benim i??sel huzurum i??in ??dedi??im bedeldir. Kayg?? ve endi??eden ??zg??r kalmam i??in ??dedi??im ??eydir; i??e yaramaz bir ??ey i??in de??il.",
    author: "Epictetus",
  },
  {
    text: "If a person gave your body to any stranger he met on his way, you would certainly be angry. And do you feel no shame in handing over your own mind to be confused and mystified by anyone who happens to verbally attack you? 29.",
    author: "Epictetus",
  },
  {
    text: "Some young women confuse their self-worth with their ability to attract the attention of men, and so pour all their energies into makeup, clothing, and jewelry. If only they realized that virtue, honor, and self-respect are the marks of a true beauty.",
    author: "Epictetus",
  },
  {
    text: "It isn???t events themselves that disturb people, but only their judgments about them.",
    author: "Epictetus",
  },
  {
    text: "If a person gave your body to any stranger he met on his way, you would certainly be angry. And do you feel no shame in handing over your own mind to be confused and mystified by anyone who happens to verbally attack you?",
    author: "Epictetus",
  },
  {
    text: "Don???t you want to be free of all that? [33] ???But how can I do it???? You???ve often heard how ??? you need to suspend desire completely, and train aversion only on things within your power. You should dissociate yourself from everything outside yourself ??? the body, possessions, reputation, books, applause, as well as office or lack of office. Because a preference for any of them immediately makes you a slave, a subordinate, and prone to disappointment.",
    author: "Epictetus",
  },
  {
    text: "Thus Epicurus also, when he designs to destroy the natural fellowship of mankind, at the same time makes use of that which he destroys. For what does he say? ???Be not deceived, men, nor be led astray, nor be mistaken: there is no natural fellowship among rational animals; believe me. But those who say otherwise, deceive you and seduce you by false reasons.??????What is this to you? Permit us to be deceived. Will you fare worse, if all the rest of us are persuaded that there is a natural fellowship among us, and that it ought by all means to be preserved? Nay, it will be much better and safer for you. Man, why do you trouble yourself about us? Why do you keep awake for us? Why do you light your lamp? Why do you rise early? Why do you write so many books, that no one of us may be deceived about the gods and believe that they take care of men; or that no one may suppose the nature of good to be other than pleasure? For if this is so, lie down and sleep, and lead the life of a worm, of which you judged yourself worthy: eat and drink, and enjoy women, and ease yourself, and snore. And what is it to you, how the rest shall think about these things, whether right or wrong? For what have we to do with you? You take care of sheep because they supply us with wool and milk, and last of all with their flesh. Would it not be a desirable thing if men could be lulled and enchanted by the Stoics, and sleep and present themselves to you and to those like you to be shorn and milked? For this you ought to say to your brother Epicureans: but ought you not to conceal it from others, and particularly before every thing to persuade them, that we are by nature adapted for fellowship, that temperance is a good thing; in order that all things may be secured for you? Or ought we to maintain this fellowship with some and not with others? With whom then ought we to maintain it? With such as on their part also maintain it, or with such as violate this fellowship? And who violate it more than you who establish such doctrines? What then was it that waked Epicurus from his sleepiness, and compelled him to write what he did write?",
    author: "Epictetus",
  },
  {
    text: "We suffer not from the events in our lives but from our judgement about them.",
    author: "Epictetus",
  },
  {
    text: "Maak er van meet af aan een goede gewoonte van tegen elke pijnlijke indruk van buitenaf te zeggen: 'Jij bent niet meer dan een indruk! Jij bent heel anders dan je je voordoet!",
    author: "Epictetus",
  },
  {
    text: "Kein Mensch, der in Furcht oder Sorge oder Chaos lebt, ist frei, aber wer sich von Sorgen, Furcht und Chaos befreit, wird dadurch auch aus der Sklaverei befreit.",
    author: "Epictetus",
  },
  {
    text: "Every habit and faculty is confirmed and strengthened by the corresponding actions, that of walking by walking, that of running by running. If you wish to be a good reader, read; if you wish to be a good writer, write. If you should give up reading for thirty days one after the other, and be engaged in something else, you will know what happens. So also if you lie in bed for ten days, get up and try to take a rather long walk, and you will see how wobbly your legs are. In general, therefore, if you want to do something, make a habit of it; if you want not to do something, refrain from doing it, and accustom yourself to something else instead.",
    author: "Epictetus",
  },
  {
    text: "H??y v???t ngay ??i c??i g?? kh??ng ph???i c???a ta. H??y thanh l???c c??c ?? ki???n c???a b???n ????? c??i g?? kh??ng thu???c v??? b???n s??? kh??ng b??m l???y b???n, ?????ng c?? d??nh v??o ???? v?? c??ng ?????ng ??au kh??? khi ng?????i ta t?????c b??? c???a b???n c??i th??? kh??ng thu???c v??? b???n ????.",
    author: "Epictetus",
  },
  {
    text: 'What would Heracles have been if he had said, "How am I to prevent a big lion from appearing, or a big boar, or brutal men?" What care you, I say? If a big boar appears, you will have a greater struggle to engage in; if evil men appear, you will free the world from evil men.',
    author: "Epictetus",
  },
  {
    text: "[8] Yet if we place the good in right choice, the preservation of our relationships itself becomes a good. And besides, he who gives up certain external things achieves the good through that. [9] ???My father???s depriving me of money.??? But he isn???t causing you any harm. ???My brother is going to get the greater share of the land.??? Let him have as much as he wishes. He won???t be getting any of your decency, will he, or of your loyalty, or of your brotherly love? [10] For who can disinherit you of possessions such as those? Not even Zeus; nor would he wish to, but rather he has placed all of that in my own power, even as he had it himself, free from hindrance, compulsion, and restraint.",
    author: "Epictetus",
  },
  {
    text: "[14] It is in accordance with this plan of action above all that one should train oneself. As soon as you leave the house at break of day, examine everyone whom you see, everyone whom you hear, and answer as if under questioning. What did you see? A handsome man or beautiful woman? Apply the rule. Does this lie within the sphere of choice, or outside it? Outside. Throw it away. [15] What did you see? Someone grieving over the death of his child? Apply the rule. Death is something that lies outside the sphere of choice. Away with it. You met a consul? Apply the rule. What kind of thing is a consulship? One that lies outside the sphere of choice, or inside? Outside. Throw that away too, it doesn???t stand the test. Away with it; it is nothing to you. [16] If we acted in such a way and practised this exercise from morning until night, we would then have achieved something, by the gods. [17] But as things are, we???re caught gazing open-mouthed at every impression that comes along, and it is only in the schoolroom that we wake up a little, if indeed we ever do. Afterwards, when we go outside, if we see someone in distress, we say, ???He???s done for,??? or if we see a consul, exclaim, ???A most fortunate man???; if an exile, ???Poor wretch!???; if someone in poverty, ???How terrible for him; he hasn???t money enough to buy a meal.??? [18] These vicious judgements must be rooted out, then; that is what we should concentrate our efforts on. For what is weeping and groaning? A judgement. What is misfortune? A judgement. What is civil strife, dissension, fault-finding, accusation, impiety, foolishness? [19] All of these are judgements and nothing more, and judgements that are passed, moreover, about things that lie outside the sphere of choice, under the supposition that such things are good or bad. Let someone transfer these judgements to things that lie within the sphere of choice, and I guarantee that he???ll preserve his peace of mind, regardless of what his circumstances may be. [20] The mind is rather like a bowl filled with water, and impressions are like a ray of light that falls on that water. [21] When the water is disturbed, the ray of light gives the appearance of being disturbed, but that isn???t really the case. [22] So accordingly, whenever someone suffers an attack of vertigo, it isn???t the arts and virtues that are thrown into confusion, but the spirit in which they???re contained; and when the spirit comes to rest again, so will they too.",
    author: "Epictetus",
  },
  {
    text: "It is not reasonings that are wanted now,' he says, 'for there are books stuffed full of stoical reasonings. What is wanted, then? The man who shall apply them; whose actions may bear testimony to his doctrines. Assume this character for me, that we may no longer make use in the schools of the examples of the ancients, but may have some examples of our own.",
    author: "Epictetus",
  },
  {
    text: "It is not reasonings that are wanted now for there are books stuffed full of stoical reasonings. What is wanted, then? The man who shall apply them; whose actions may bear testimony to his doctrines. Assume this character for me, that we may no longer make use in the schools of the examples of the ancients, but may have some examples of our own.",
    author: "Epictetus",
  },
  {
    text: "[24] In a piece of embossed silverware, what is best: the silver or the workmanship? The substance of the hand is mere flesh, but what is important is the works that the hand produces. [25] Now, appropriate actions are of three kinds:* first, those relating to mere existence, secondly, those relating to existence of a particular kind, and thirdly, those that are themselves principal duties. And what are those? [26] Fulfilling one???s role as a citizen, marrying, having children, honouring God, taking care of one???s parents, and, in a word, having our desires and aversions, and our motives to act and or not to act, as each of them ought to be, in accordance with our nature. And what is our nature? [27] To be people who are free, noble-minded, and self-respecting. For what other animal blushes; what other animal has a sense of shame? [28] Pleasure should be subordinated to these duties as a servant, as an attendant,* so as to arouse our zeal, so as to ensure that we consistently act in accord with nature.",
    author: "Epictetus",
  },
  {
    text: "With every accident, ask yourself what abilities you have for making a proper use of it. If you see an attractive person, you will find that self-restraint is the ability you have against your desire. If you are in pain, you will find fortitude. If you hear unpleasant language, you will find patience. And thus habituated, the appearances of things will not hurry you away along with them.",
    author: "Epictetus",
  },
  {
    text: "These reasonings are unconnected: ???I am richer than you, therefore I am better???; ???I am more eloquent than you, therefore I am better.??? The connection is rather this: ???I am richer than you, therefore my property is greater than yours;??? ???I am more eloquent than you, therefore my style is better than yours.??? But you, after all, are neither property nor style.",
    author: "Epictetus",
  },
  {
    text: "why act the part of a Jew when you???re Greek? [ 20] Don???t you know why it is that a person is called a Jew, Syrian, or Egyptian? And when we see someone hesitating between two creeds, we???re accustomed to say, ???He is no Jew, but is merely acting the part.??? But when he assumes the frame of mind of one who has been baptized * and has made his choice, then he really is a Jew, and is called by that name.",
    author: "Epictetus",
  },
  {
    text: "If any one trusted your body to the first man he met, you would be indignant, but yet you trust your mind to the chance comer, and allow it to be disturbed and confounded if he revile you; are you not ashamed to do so?",
    author: "Epictetus",
  },
  {
    text: "?????????? ???? ????????????????, ???????? ???? ???? ???????????????? ???????????? ????????.",
    author: "Epictetus",
  },
  {
    text: "Faithfulness is the antidote to bitterness and confusion.",
    author: "Epictetus",
  },
  {
    text: "Remember that you must behave in life as at a dinner party. Is anything brought around to you? Put out your hand and take your share with moderation. Does it pass by you? Don???t stop it. Is it not yet come? Don???t stretch your desire towards it, but wait till it reaches you.",
    author: "Epictetus",
  },
  {
    text: "From this instant, then, choose to act like the worthy and capable person you are. Follow unwaveringly what reason tells you is the best course.",
    author: "Epictetus",
  },
  {
    text: "Remember that you are an actor in a drama, of such a kind as the author pleases to make it. If short, of a short one; if long, of a long one.",
    author: "Epictetus",
  },
  {
    text: "Thus Socrates became perfect, improving himself by everything. attending to nothing but reason. And though you are not yet a Socrates, you ought, however, to live as one desirous of becoming a Socrates. 51.",
    author: "Epictetus",
  },
  {
    text: "Work, therefore to be able to say to every harsh appearance, ???You are but an appearance, and not absolutely the thing you appear to be.??? And then examine it by those rules which you have, and first, and chiefly, by this: whether it concerns the things which are in our own control, or those which are not; and, if it concerns anything not in our control, be prepared to say that it is nothing to you.",
    author: "Epictetus",
  },
  {
    text: "Syytt???? toisia omasta onnettomuudestansa on sivistym??tt??myyden merkki; syytt???? itse??ns?? on sivistyksen alkeiden ilmaus, olla syytt??m??tt?? muita ja itse??ns?? on n??yte ihmisen sivistyksest??.",
    author: "Epictetus",
  },
  {
    text: "Kun korppi koikkuu onnettomuutta ennustaen, ??lk????n se n??ky sinua s??ik??ytt??k??, vaan heti selit?? ja sano itsellesi: tuo ei aavista mit????n minulle, vaan ehk?? raukalle ruumiilleni tai v??h??p??t??isille varoilleni tai mukamalle maineelleni tai lapsilleni tai vaimolleni. Minulle ennustaa kaikki onnea, jos min?? tahdon, sill?? mit?? hyv??ns?? niist?? tapahtuneekin, on minun vallassani k??ytt???? sit?? hy??dykseni.",
    author: "Epictetus",
  },
  {
    text: "Don't just say you have read books. Show that through them you have learned to think better, to be a more discriminating and reflective person. Books are the training weights of the mind. They are very helpful, but it would be a bad mistake to suppose that one has made progress simply by having internalized their contents.",
    author: "Epictetus",
  },
  {
    text: "Geef me de moed om alles te accepteren wat niet in mijn vermogen ligt, de kracht om alles te veranderen wat wel in mijn vermogen ligt, en de wijsheid om tussen die twee te onderscheiden.",
    author: "Epictetus",
  },
  {
    text: "Goodness exists independently of our conception of it. The good is out there and it always has been out there, even before we began to exist.",
    author: "Epictetus",
  },
  {
    text: "Consider when, on a voyage, your ship is anchored; if you go on shore to get water you may along the way amuse yourself with picking up a shellfish, or an onion. However, your thoughts and continual attention ought to be bent towards the ship, waiting for the captain to call on board; you must then immediately leave all these things, otherwise you will be thrown into the ship, bound neck and feet like a sheep. So it is with life. If, instead of an onion or a shellfish, you are given a wife or child, that is fine.",
    author: "Epictetus",
  },
  {
    text: "Consider first, man, what the matter is, and what your own nature is able to bear. If you would be a wrestler, consider your shoulders, your back, your thighs; for different persons are made for different things.",
    author: "Epictetus",
  },
  {
    text: "No man is free unless he is the master of himself.",
    author: "Epictetus",
  },
  {
    text: "[13] But it sometimes comes about that, when we have properly granted certain premisses, certain conclusions are derived from them that, though false, nonetheless follow from them. [14] What am I to do, then? Accept the false conclusion? [15] And how is that possible? Then should I say that I was wrong to accept the premisses? No, this isn???t permissible either. Or say: That doesn???t follow from the premisses? But that again isn???t permissible. [16] So what is one to do in such circumstances? Isn???t it the same as with debts? Just as having borrowed on some occasion isn???t enough to make somebody a debtor, but it is necessary in addition that he continues to owe the money and hasn???t paid off the loan; likewise, our having accepted the premisses isn???t enough to make it necessary for us to accept the inference, but we have to continue to accept the premisses. [",
    author: "Epictetus",
  },
  {
    text: "When therefore we are hindered, or disturbed, or grieved, let us never attribute it to others, but to ourselves; that is, to our own principles. An uninstructed person will lay the fault of his own bad condition upon others. Someone just starting instruction will lay the fault on himself. Some who is perfectly instructed will place blame neither on others nor on himself.",
    author: "Epictetus",
  },
  {
    text: "You must be one man, either good or bad. You must cultivate either your own ruling faculty or externals, and apply yourself either to things within or without you; that is, be either a philosopher, or one of the vulgar.",
    author: "Epictetus",
  },
  {
    text: "Be careful to leave your sons well instructed rather than rich, for the hopes of the instructed are better than the wealth of the ignorant",
    author: "Epictetus",
  },
  {
    text: "No person is free who is not master of themselves.",
    author: "Epictetus",
  },
  {
    text: "Never call yourself a philosopher, nor talk a great deal among the unlearned about theorems, but act conformably to them. Thus, at an entertainment, don???t talk how persons ought to eat, but eat as you ought.",
    author: "Epictetus",
  },
  {
    text: "Working within our sphere of control, we are naturally free, independent, and strong. Beyond that sphere, we are weak, limited, and dependent.",
    author: "Epictetus",
  },
  {
    text: "And then we???ll be emulating Socrates,* once we???re able to write hymns of praise in prison.",
    author: "Epictetus",
  },
  {
    text: 'La conclusi??n final de esta filosof??a es que el bien y el mal se relacionan exclusivamente con nuestra prohairesis, es decir: con nuestro libre albedr??o, por lo que no dependen de las cosas externas o circunstanciales. En otras palabras, somos nuestro propio bien y nuestro propio mal, m??s all?? de las circunstancias, puesto que la facultad de elegir en nuestro libre albedr??o. Somos nosotros los que elegimos. Tenemos la facultad de elegir entre el bien y el mal y, por lo tanto, somos responsables por nuestro propio Destino ya que el mismo est?? en nuestras propias manos. No as?? la Fatalidad, que es lo que "nos sucede" y que responde a causas externas fuera de nuestro control, mientras que al Destino lo vamos construyendo con las cosas que hacemos suceder porque las elegimos. [Pr??logo de Denes Martos]',
    author: "Epictetus",
  },
  {
    text: "If anyone tells you that such a person speaks ill of you, don???t make excuses about what is said of you, but answer: ??? He does not know my other faults, else he would not have mentioned only these.",
    author: "Epictetus",
  },
  {
    text: "Muista, ett?? olet n??yttelij?? n??ytelm??ss??, joka on ohjaajan tahdon mukainen. Jos h??n haluaa lyhyen n??ytelm??n, se on lyhyt, jos pitk??n, se on pitk??. Jos h??n haluaa sinun n??yttelev??n kerj??l??ist??, pid?? huoli, ett?? n??yttelet senkin roolin lahjakkaasti. Tee samoin, jos h??n haluaa sinun n??yttelev??n raajarikkoa, virkamiest?? tai maallikkoa. Sinun teht??v??si on n??ytell?? hyvin annettu rooli, mutta roolin valitseminen on toisen teht??v??.",
    author: "Epictetus",
  },
  {
    text: "Avoid banquets which are given by strangers and by ignorant persons.",
    author: "Epictetus",
  },
  {
    text: "When you are feeling upset, angry, or sad, don???t blame another for your state of mind. Your condition is the result of your own opinions and interpretations.",
    author: "Epictetus",
  },
  {
    text: "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you, but answer: ???He was ignorant of my other faults, else he would not have mentioned these alone.",
    author: "Epictetus",
  },
  {
    text: "It was thus an excellent reply that the woman made when she wanted to send a boatload of provisions to the exiled Gratilla;* for when someone said to her, ???Domitian will merely confiscate them,??? she replied, ???Better that he should take them away than that I should fail to send them.",
    author: "Epictetus",
  },
  {
    text: "Pid?? silmiesi edess?? joka p??iv?? kuolema ja maanpako ja kaikki kauheana n??ytt??ytyv??, ennen kaikkea kuolema. Silloin et koskaan ajattele mit????n matalamielist?? etk?? himoitse mit????n likaa.",
    author: "Epictetus",
  },
  {
    text: 'Jos joku kertoo sinulle, ett?? se ja se panettelee sinua, ??l?? ryhdy puolustautumaan panetteluja vastaan, vaan sano: "H??n ei n??ht??v??sti tiennyt muita vikojani, sill?? muutoin h??n ei olisi tyytynyt mainitsemaan vain noita.',
    author: "Epictetus",
  },
  {
    text: "if you suppose any of the things not in our own control to be either good or evil, when you are disappointed of what you wish, or incur what you would avoid, you must necessarily find fault with and blame the authors. For every animal is naturally formed to fly and abhor things that appear hurtful, and the causes of them; and to pursue and admire those which appear beneficial, and the causes of them. It is impractical, then, that one who supposes himself to be hurt should be happy about the person who, he thinks, hurts him, just as it is impossible to be happy about the hurt itself. Hence,",
    author: "Epictetus",
  },
  {
    text: "And, if anyone tells you that you know nothing, and you are not nettled at it, then you be sure that you have begun your business. For sheep don't throw up the grass to show the shepherds how much they have eaten; but, inwardly digesting their food, they outwardly produce wool and milk. Thus, therefore, do you likewise not show theorems to the unlearned, but the actions produced by them after they have been digested.",
    author: "Epictetus",
  },
  {
    text: "The divine order does not design people or circumstance according to our tastes",
    author: "Epictetus",
  },
  {
    text: "35. When you do anything from a clear judgment that it ought to be done, never shun the being seen to do it, even though the world should make a wrong supposition about it; for, if you don???t act right, shun the action itself; but, if you do, why are you afraid of those who censure you wrongly?",
    author: "Epictetus",
  },
  {
    text: "If a person gave your body to any stranger he met on is way, you would certainly be angry. And do you feel no shame in handing over your own mind to be confused and mystified by anyone who happens to verbally attack you?",
    author: "Epictetus",
  },
  {
    text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
    author: "Epictetus",
  },
  {
    text: "Be careful to leave your sons [and daughters] well instructed rather than rich, for the hopes of the instructed are better than the wealth of the ignorant.\"  [in brackets: though I have only sons, I am--of course--someone's daughter]",
    author: "Epictetus",
  },
  {
    text: "If you would improve, be content to be thought foolish and dull with regard to externals. Do not desire to be thought to know anything; and though you should appear to others to be somebody, distrust yourself. For be assured, it is not easy at once to keep your will in harmony with nature and to secure externals; but while you are absorbed in the one, you must of necessity neglect the other. XIV",
    author: "Epictetus",
  },
  {
    text: "No man can rob us of our Will???no man can lord it over that!",
    author: "Epictetus",
  },
  {
    text: "Some things are up to us, and some things are not up to us.",
    author: "Epictetus",
  },
  {
    text: "26. The will of nature may be learned from those things in which we don???t distinguish from each other. For example, when our neighbor???s boy breaks a cup, or the like, we are presently ready to say, ???These things will happen.??? Be assured, then, that when your own cup likewise is broken, you ought to be affected just as when another???s cup was broken. Apply this in like manner to greater things. Is the child or wife of another dead? There is no one who would not say, ???This is a human accident.??? but if anyone???s own child happens to die, it is presently, ???Alas I how wretched am I!??? But it should be remembered how we are affected in hearing the same thing concerning others.",
    author: "Epictetus",
  },
  {
    text: "Times relieves the foolish from sorrow, but reason relieves the wise",
    author: "Epictetus",
  },
  {
    text: "What disturbs men's minds is not events but their judgements on events: For instance, death is nothing dreadful, or else Socrates would have thought it so. No, the only dreadful thing about it is men's judgement that it is dreadful. And so when we are hindered, or disturbed, or distressed, let us never lay the blame on others, but on ourselves, that is, on our own judgements. To accuse others for one's own misfortunes is a sign of want of education; to accuse oneself shows that one's education has begun; to accuse neither oneself nor others shows that one's education is complete.",
    author: "Epictetus",
  },
  {
    text: "If the Divine is faithful, he also must be faithful; if free, he also must be free; if beneficent, he also must be beneficent; if magnanimous, he also must be magnanimous. Thus as an imitator of God must he follow Him in every deed and word.",
    author: "Epictetus",
  },
  {
    text: "being attached in this way to any number of things, we???re weighed down by them and dragged down. [16] That is why, if the weather prevents us from sailing, we sit there in a state of anxiety, constantly peering around. ???What wind is this???? The North Wind. And what does it matter to us and to him? ???When will the West Wind blow???? When it so chooses, my good friend, or rather, when Aeolus chooses; for God hasn???t appointed you to be controller of the winds, he has appointed Aeolus. [17] What are we to do, then? To make the best of what lies within our power, and deal with everything else as it comes.",
    author: "Epictetus",
  },
  {
    text: "Life is a piece of music, and you???re supposed to be dancing.",
    author: "Epictetus",
  },
  {
    text: "Who then is invincible? The one who cannot be upset by anything outside their reasoned choice.",
    author: "Epictetus",
  },
  {
    text: "Do your best to rein in your desire. For if you desire something that isn???t within your own control, disappointment will surely follow; meanwhile, you will be neglecting the very things that are within your control that are worthy of desire.",
    author: "Epictetus",
  },
  {
    text: "Then I???ll have you chained up.??? What are you saying, man, chain me up? You can chain my leg, but not even Zeus can overcome my power of choice. [24] ???I???ll throw you into prison.??? You mean my poor body. ???I???ll have you beheaded.??? Why, did I ever tell you that I???m the only man to have a neck that can???t be severed? [",
    author: "Epictetus",
  },
  {
    text: "Show me a man who though sick is happy, who though in danger is happy, who though in prison is happy, and I'll show you a Stoic.",
    author: "Epictetus",
  },
  {
    text: "As you travel the path of philosophy, be content to be considered plain or even foolish. Do not strive to be celebrated for anything. If you are praised by others, be skeptical of yourself. For it it is no easy feat to hold onto your inner harmony while collecting accolades. When grasping for one, you are likely to drop the other.",
    author: "Epictetus",
  },
  {
    text: "In prosperity it is very easy to find a friend; but in adversity it is most difficult of all things.",
    author: "Epictetus",
  },
  {
    text: "Look at the matter in this way. Since we can see that a dog is fitted by nature to do one thing, and a horse to do another, and a nightingale, if you like, to do yet another, it wouldn???t be absurd for one to declare overall that each of them is beautiful precisely in so far as it best fulfils its own nature; and since each is different in nature, it would seem to me that each of them is beautiful in a different way. Isn???t that so? The student agreed.",
    author: "Epictetus",
  },
  {
    text: "[8] Consider who it is that you praise when you praise people dispassionately: is it those who are just, or unjust???????Those who are just.??????The temperate or the intemperate???????The temperate.??????The self-controlled or the dissolute???????The self-controlled.??? [9] ???You should know, then, that if you make yourself a person of that kind, you???ll be making yourself beautiful; but if you neglect these virtues, you???re bound to be ugly, whatever techniques you adopt to make yourself appear beautiful.",
    author: "Epictetus",
  },
  {
    text: "For sheep don???t throw up the grass to show the shepherds how much they have eaten; but, inwardly digesting their food, they outwardly produce wool and milk. Thus, therefore, do you likewise not show theorems to the unlearned, but the actions produced by them after they have been digested.",
    author: "Epictetus",
  },
  {
    text: 'If you do not wish to be prone to anger, do not feed the habit; give it nothin which may tend to its increase. At first, keep quiet and count the days when you were not angry: "I used to be angry every day, then every other day: next, every two, then every three days!" and if you succeed in passing thirty days, sacrifice to the gods in thanksgiving.',
    author: "Epictetus",
  },
  {
    text: "In the long run, every man will pay the penalty for his own misdeeds. The man who remembers this will be angry with no one, indignant with no one, revile no one, blame no one, offend no one, hate no one.",
    author: "Epictetus",
  },
  {
    text: "You see, then, that it is necessary for you to become a student, that creature which every one laughs at, if you really desire to make an examination of your judgements. But this, as you are quite aware, is not the work of a single hour or day",
    author: "Epictetus",
  },
  {
    text: "[19] ???My brother shouldn???t have treated me in this way.??? Indeed he shouldn???t, but it???s for him to see to that. For my part, however he treats me, I should conduct myself towards him as I ought. For that is my business, and the rest is not my concern. In this no one can hinder me, while everything else is subject to hindrance.",
    author: "Epictetus",
  },
  { text: "Sometimes even to live is an act of courage.", author: "Seneca" },
  {
    text: "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.",
    author: "Seneca",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
  },
  { text: "All cruelty springs from weakness.", author: "Seneca" },
  {
    text: "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
    author: "Seneca",
  },
  {
    text: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca",
  },
  {
    text: 'Non est ad astra mollis e terris via" - "There is no easy way from the earth to the stars',
    author: "Seneca",
  },
  {
    text: "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
  },
  {
    text: "Hang on to your youthful enthusiasms -- you???ll be able to use them better when you???re older.",
    author: "Seneca",
  },
  {
    text: "We suffer more often in imagination than in reality",
    author: "Seneca",
  },
  {
    text: "The time will come when diligent research over long periods will bring to light things which now lie hidden. A single lifetime, even though entirely devoted to the sky, would not be enough for the investigation of so vast a subject... And so this knowledge will be unfolded only through long successive ages. There will come a time when our descendants will be amazed that we did not know things that are so plain to them... Many discoveries are reserved for ages still to come, when memory of us will have been effaced.",
    author: "Seneca",
  },
  {
    text: "You act like mortals in all that you fear, and like immortals in all that you desire",
    author: "Seneca",
  },
  {
    text: "It is the power of the mind to be unconquerable.",
    author: "Seneca",
  },
  {
    text: "If a man knows not to which port he sails, no wind is favorable.",
    author: "Seneca",
  },
  {
    text: "It is not that we have so little time but that we lose so much. ... The life we receive is not short but we make it so; we are not ill provided but use what we have wastefully.",
    author: "Seneca",
  },
  {
    text: "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
  },
  {
    text: "What need is there to weep over parts of life? The whole of it calls for tears.",
    author: "Seneca",
  },
  { text: "He who is brave is free", author: "Seneca" },
  { text: "No man was ever wise by chance", author: "Seneca" },
  {
    text: "They lose the day in expectation of the night, and the night in fear of the dawn.",
    author: "Seneca",
  },
  {
    text: "I shall never be ashamed of citing a bad author if the line is good.",
    author: "Seneca",
  },
  {
    text: "Associate with people who are likely to improve you.",
    author: "Seneca",
  },
  {
    text: "If you really want to escape the things that harass you, what you???re needing is not to be in a different place but to be a different person.",
    author: "Seneca",
  },
  {
    text: "He suffers more than necessary, who suffers before it is necessary.",
    author: "Seneca",
  },
  { text: "Only time can heal what reason cannot.", author: "Seneca" },
  {
    text: "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
    author: "Seneca",
  },
  {
    text: "Timendi causa est nescire -  Ignorance is the cause of fear.",
    author: "Seneca",
  },
  {
    text: "Most powerful is he who has himself in his own power.",
    author: "Seneca",
  },
  {
    text: "Life is like a play: it's not the length, but the excellence of the acting that matters.",
    author: "Seneca",
  },
  {
    text: "For what prevents us from saying that the happy life is to have a mind that is free, lofty, fearless and steadfast - a mind that is placed beyond the reach of fear, beyond the reach of desire, that counts virtue the only good, baseness the only evil, and all else but a worthless mass of things, which come and go without increasing or diminishing the highest good, and neither subtract any part from the happy life nor add any part to it? A man thus grounded must, whether he wills or not, necessarily be attended by constant cheerfulness and a joy that is deep and issues from deep within, since he finds delight in his own resources, and desires no joys greater than his inner joys.",
    author: "Seneca",
  },
  {
    text: "Wealth is the slave of a wise man. The master of a fool",
    author: "Seneca",
  },
  {
    text: "Enjoy present pleasures in such a way as not to injure future ones.",
    author: "Seneca",
  },
  { text: "The sun also shines on the wicked.", author: "Seneca" },
  {
    text: "Putting things off is the biggest waste of life: it snatches away each day as it comes, and denies us the present by promising the future. The greatest obstacle to living is expectancy, which hangs upon tomorrow, and loses today. You are arranging what lies in Fortune's control, and abandoning what lies in yours. What are you looking at? To what goal are you straining? The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
  },
  {
    text: "As long as you live, keep learning how to live.",
    author: "Seneca",
  },
  {
    text: "A sword never kills anybody; it is a tool in the killer's hand.",
    author: "Seneca",
  },
  {
    text: "Leisure without books is death, and burial of a man alive.",
    author: "Seneca",
  },
  {
    text: "If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich.",
    author: "Seneca",
  },
  {
    text: "Fate leads the willing and drags along the reluctant.",
    author: "Seneca",
  },
  {
    text: "A gift consists not in what is done or given, but in the intention of the giver or doer.",
    author: "Seneca",
  },
  {
    text: "Every new beginning comes from some other beginning's end.",
    author: "Seneca",
  },
  { text: "We learn not in the school, but in life.", author: "Seneca" },
  {
    text: "We should every night call ourselves to an account;  What infirmity have I mastered today?  What passions opposed? What temptation resisted? What virtue acquired? Our vices will abort of themselves if they be brought every day to the shrift.",
    author: "Seneca",
  },
  {
    text: "People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.",
    author: "Seneca",
  },
  {
    text: "Often a very old man has no other proof of his long life than his age.",
    author: "Seneca",
  },
  {
    text: "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.",
    author: "Seneca",
  },
  {
    text: "errare humanum est, sed perseverare diabolicum: 'to err is human, but to persist (in the mistake) is diabolical.",
    author: "Seneca",
  },
  { text: "Life is long, if you know how to use it.", author: "Seneca" },
  {
    text: "Nothing is more honorable than a grateful heart.",
    author: "Seneca",
  },
  {
    text: "We are more often frightened than hurt; and we suffer more from imagination than from reality",
    author: "Seneca",
  },
  {
    text: "There is no genius without a touch of madness.",
    author: "Seneca",
  },
  {
    text: "To wish to be well is a part of becoming well.",
    author: "Seneca",
  },
  {
    text: "It does not matter how many books you have, but how good the books are which you have.",
    author: "Seneca",
  },
  {
    text: "If anyone says that the best life of all is to sail the sea, and then adds that I must not sail upon a sea where shipwrecks are a common occurrence and there are often sudden storms that sweep the helmsman in an adverse direction, I conclude that this man, although he lauds navigation, really forbids me to launch my ship.",
    author: "Seneca",
  },
  { text: "While we wait for life, life passes", author: "Seneca" },
  {
    text: "I am not born for one corner; the whole world is my native land.",
    author: "Seneca",
  },
  { text: "He who spares the wicked injures the good.", author: "Seneca" },
  {
    text: "It is a rough road that leads to the heights of greatness.",
    author: "Seneca",
  },
  {
    text: "He who has injured thee was either stronger or weaker than thee. If weaker, spare him; if stronger, spare thyself.",
    author: "Seneca",
  },
  {
    text: "It is difficult to bring people to goodness with lessons, but it is easy to do so by example.",
    author: "Seneca",
  },
  {
    text: "Regard [a friend] as loyal, and you will make him loyal.",
    author: "Seneca",
  },
  {
    text: "It is not the man who has too little that is poor, but the one who hankers after more.",
    author: "Seneca",
  },
  {
    text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what lies in Fortune???s control, and abandoning what lies in yours. What are you looking at? To what goal are you straining? The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
  },
  {
    text: "You live as if you were destined to live forever, no thought of your frailty ever enters your head, of how much time has already gone by you take no heed. You squander time as if you drew from a full and abundant supply, though all the while that day which you bestow on some person or thing is perhaps your last.",
    author: "Seneca",
  },
  {
    text: "But life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    author: "Seneca",
  },
  {
    text: "It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.",
    author: "Seneca",
  },
  {
    text: "Limiting one???s desires actually helps to cure one of fear. ???Cease to hope ??? and you will cease to fear.??? ??? Widely different [as fear and hope] are, the two of them march in unison like a prisoner and the escort he is handcuffed to. Fear keeps pace with hope ??? both belong to a mind in suspense, to a mind in a state of anxiety through looking into the future. Both are mainly due to projecting our thoughts far ahead of us instead of adapting ourselves to the present.",
    author: "Seneca",
  },
  {
    text: "The part of life we really live is small.' For all the rest of existence is not life, but merely time.",
    author: "Seneca",
  },
  { text: "Fire tests gold, suffering tests brave men.", author: "Seneca" },
  {
    text: "The mind that is anxious about future events is miserable.",
    author: "Seneca",
  },
  {
    text: "True happiness is to understand our duties toward God and man; to enjoy the present, without anxious dependence on the future; not to amuse ourselves with either hopes or fears, but to rest satisfied with what we have, which is abundantly sufficient.",
    author: "Seneca",
  },
  {
    text: "But when you are looking on anyone as a friend when you do not trust him as you trust yourself, you are making a grave mistake, and have failed to grasp sufficiently the full force of true friendship.",
    author: "Seneca",
  },
  { text: "(The other side shall be heard as well.)", author: "Seneca" },
  { text: "The best ideas are common property", author: "Seneca" },
  {
    text: "Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it bigger than it is by getting irritated.",
    author: "Seneca",
  },
  { text: "Beyond all things is the sea", author: "Seneca" },
  {
    text: "It is quality rather than quantity that matters.",
    author: "Seneca",
  },
  {
    text: "To be always fortunate, and to pass through life with a soul that has never known sorrow, is to be ignorant of one half of nature.",
    author: "Seneca",
  },
  {
    text: "...it is more civilized to make fun of life than to bewail it.",
    author: "Seneca",
  },
  {
    text: "What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed, Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "Everyone prefers belief to the exercise of judgement.",
    author: "Seneca",
  },
  {
    text: "Whatever can happen at any time can happen today.",
    author: "Seneca",
  },
  {
    text: "we cease to be so angry once we cease to be so hopeful",
    author: "Seneca",
  },
  {
    text: "The final hour when we cease to exist does not itself bring death; it merely of itself completes the death-process. We reach death at that moment, but  we have been a long time on the way.",
    author: "Seneca",
  },
  {
    text: "What is harder than rock? What is softer than water? Yet hard rocks are hollowed out by soft water?",
    author: "Seneca",
  },
  {
    text: "You should ??? live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.",
    author: "Seneca",
  },
  {
    text: "Of this one thing make sure against your dying day - that your faults die before you do.",
    author: "Seneca",
  },
  {
    text: "No man is crushed by misfortune unless he has first been deceived by prosperity",
    author: "Seneca",
  },
  {
    text: "Withdraw into yourself, as far as you can. Associate with those who will make a better man of you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach.",
    author: "Seneca",
  },
  {
    text: "And this, too, affords no small occasion for anxieties - if you are bent on assuming a pose and never reveal yourself to anyone frankly, in the fashion of many who live a false life that is all made up for show; for it is torturous to be constantly watching oneself and be fearful of being caught out of our usual role. And we are never free from concern if we think that every time anyone looks at us he is always taking-our measure; for many things happen that strip off our pretence against our will, and, though all this attention to self is successful, yet the life of those who live under a mask cannot be happy and without anxiety. But how much pleasure there is in simplicity that is pure, in itself unadorned, and veils no part of its character!{PlainDealer+} Yet even such a life as this does run some risk of scorn, if everything lies open to everybody; for there are those who disdain whatever has become too familiar. But neither does virtue run any risk of being despised when she is brought close to the eyes, and it is better to be scorned by reason of simplicity than tortured by perpetual pretence.",
    author: "Seneca",
  },
  {
    text: "When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends.",
    author: "Seneca",
  },
  {
    text: "It is of course better to know useless things than to know nothing.",
    author: "Seneca",
  },
  {
    text: "Light griefs are loquacious, but the great are dumb.",
    author: "Seneca",
  },
  {
    text: "Gold tests with fire, woman with gold, man with woman",
    author: "Seneca",
  },
  {
    text: "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man???s ability to stop just where he is and pass some time in his own company.",
    author: "Seneca",
  },
  {
    text: "To win true freeedom you must be a slave to philosophy.",
    author: "Seneca",
  },
  {
    text: "Wherever there is a human being, there is an opportunity for crisis.",
    author: "Seneca",
  },
  {
    text: "The willing, Destiny guides them. The unwilling, Destiny drags them.",
    author: "Seneca",
  },
  {
    text: "We are mad, not only individually but nationally. We check manslaughter and isolated murders, but what of war and the much-vaunted crime of slaughtering whole peoples?",
    author: "Seneca",
  },
  {
    text: "As far as I am concerned, I know that I have lost not wealth but distractions. The body???s needs are few: it wants to be free from cold, to banish hunger and thirst with nourishment; if we long for anything more we are exerting ourselves to serve our vices, not our needs.",
    author: "Seneca",
  },
  {
    text: "There is no enjoying the possession of anything valuable unless one has someone to share it with",
    author: "Seneca",
  },
  {
    text: "For many men, the acquisition of wealth does not end their troubles, it only changes them",
    author: "Seneca",
  },
  {
    text: "If we could be satisfied with anything, we should have been satisfied long ago.",
    author: "Seneca",
  },
  {
    text: "Of all people only those are at leisure who make time for philosophy, only those are really alive. For they not only keep a good watch over their own lifetimes, but they annex every age to theirs.",
    author: "Seneca",
  },
  {
    text: "It's not that we have little time, but more that we waste a good deal of it.",
    author: "Seneca",
  },
  {
    text: "Philosophy calls for simple living, not for doing penance, and the simple way of life need not be a crude one.",
    author: "Seneca",
  },
  { text: "To be everywhere is to be nowhere.", author: "Seneca" },
  {
    text: "Can anything be more idiotic than certain people who boast of their foresight? They keep themselves officiously preoccupied in order to improve their lives; they spend their lives in organizing their lives. They direct their purposes with an eye to a distant future. But putting things off is the biggest waste of life: it snatches away each day as it comes, and denies us the present by promising the future. The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what lies in Fortune???s control, and abandoning what lies in yours. What are you looking at? To what goal are you straining?",
    author: "Seneca",
  },
  {
    text: "What really ruins our character is the fact that none of us looks back over his life.",
    author: "Seneca",
  },
  {
    text: "I have learned to be a friend to myself Great improvement this indeed Such a one can never be said to be alone for know that he who is a friend to himself is a friend to all mankind",
    author: "Seneca",
  },
  { text: "Drunkenness is nothing but voluntary madness", author: "Seneca" },
  {
    text: "Brave men rejoice in adversity, just as brave soldiers triumph in war.",
    author: "Seneca",
  },
  {
    text: "For it is dangerous to attach one's self to the crowd in front, and so long as each one of us is more willing to trust another than to judge for himself, we never show any judgement in the matter of living, but always a blind trust, and a mistake that has been passed on from hand to hand finally involves us and works our destruction. It is the example of other people that is our undoing; let us merely separate ourselves from the crowd, and we shall be made whole. But as it is, the populace,, defending its own iniquity, pits itself against reason. And so we see the same thing happening that happens at the elections, where, when the fickle breeze of popular favour has shifted, the very same persons who chose the praetors wonder that those praetors were chosen.",
    author: "Seneca",
  },
  {
    text: "We are members of one great body, planted by nature???. We must consider that we were born for the good of the whole",
    author: "Seneca",
  },
  {
    text: "And what???s so bad about your being deprived of that?... All things seem unbearable to people who have become spoilt, who have become soft through a life of luxury, ailing more in the mind than they ever are in the body.",
    author: "Seneca",
  },
  {
    text: "A woman is not beautiful when her ankle or arm wins compliments, but when her total appearance diverts admiration from the individual parts of her body.",
    author: "Seneca",
  },
  {
    text: "Each day acquire something that will fortify you against poverty, against death, indeed against other misfortunes as well; and after you have run over many thoughts, select one to be thoroughly digested that day.",
    author: "Seneca",
  },
  {
    text: "Men do not care how nobly they live, but only for how long, although it is within the reach of every man to live nobly, but within no man???s power to live long.",
    author: "Seneca",
  },
  {
    text: "We must go for walks out of doors, so that the mind can be strengthened and invigorated by a clear sky and plenty of fresh air. At times it will acquire fresh energy from a journey by carriage and a change of scene, or from socializing and drinking freely. Occasionally we should even come to the point of intoxication, sinking into drink but not being totally flooded by it; for it does wash away cares, and stirs the mind to its depths, and heals sorrow just as it heals certain diseases.",
    author: "Seneca",
  },
  {
    text: "Throw aside all hindrances and give up your time to attaining a sound mind",
    author: "Seneca",
  },
  { text: "What fortune has made yours is not your own.", author: "Seneca" },
  {
    text: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death???s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it??? Life is long if you know how to use it.",
    author: "Seneca",
  },
  {
    text: "One hand washes the other. (Manus Manum Lavat)",
    author: "Seneca",
  },
  {
    text: "It is a great thing to know the season for speech and the season for silence",
    author: "Seneca",
  },
  {
    text: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself",
    author: "Seneca",
  },
  {
    text: "Because thou writest me often, I thank thee ... Never do I receive a letter from thee, but immediately we are together.",
    author: "Seneca",
  },
  {
    text: "Fidelity purchased with money, money can destroy.",
    author: "Seneca",
  },
  {
    text: "It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.",
    author: "Seneca",
  },
  { text: "While we are postponing, life speeds by", author: "Seneca" },
  {
    text: "Let us say what we feel, and feel what we say; let speech harmonize with life.",
    author: "Seneca",
  },
  {
    text: "As Lucretius says: 'Thus ever from himself doth each man flee.' But what does he gain if he does not escape from himself? He ever follows himself and weighs upon himself as his own most burdensome companion. And so we ought to understand that what we struggle with is the fault, not of the places, but of ourselves",
    author: "Seneca",
  },
  {
    text: "Wild animals run from the dangers they actually see, and once they have escaped them worry no more. We however are tormented alike by what is past and what is to come. A number of our blessings do us harm, for memory brings back the agony of fear while foresight brings it on prematurely. No one confines his unhappiness to the present.",
    author: "Seneca",
  },
  {
    text: "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax.",
    author: "Seneca",
  },
  {
    text: "It takes the whole of life to learn how to live, and--what will perhaps make you wonder more--it takes the whole of life to learn how to die.",
    author: "Seneca",
  },
  {
    text: "The difficulty comes from our lack of confidence.",
    author: "Seneca",
  },
  {
    text: "No one could endure lasting adversity if it continued to have the same force as when it first hit us. We are all tied to Fortune, some by a loose and golden chain, and others by a tight one of baser metal: but what does it matter? We are all held in the same captivity, and those who have bound others are themselves in bonds - unless you think perhaps that the left-hand chain is lighter. One man is bound by high office, another by wealth; good birth weighs down some, and a humble origin others; some bow under the rule of other men and some under their own; some are restricted to one place by exile, others by priesthoods: all life is a servitude. So you have to get used to your circumstances, complain about them as little as possible, and grasp whatever advantage they have to offer: no condition is so bitter that a stable mind cannot find some consolation in it.",
    author: "Seneca",
  },
  {
    text: "Expecting is the greatest impediment to living. In anticipation of tomorrow, it loses today.",
    author: "Seneca",
  },
  {
    text: "Men whose spirit has grown arrogant from the great favor of fortune have this most serious fault???those whom they have injured they also hate.",
    author: "Seneca",
  },
  {
    text: "Finally, everybody agrees that no one pursuit can be successfully followed by a man who is preoccupied with many things???eloquence cannot, nor the liberal studies???since the mind, when distracted, takes in nothing very deeply, but rejects everything that is, as it were, crammed into it. There is nothing the busy man is less busied with than living: there is nothing that is harder to learn.",
    author: "Seneca",
  },
  { text: "Maximum remedium est irae mora.", author: "Seneca" },
  {
    text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what is in Fortune's control and abandoning what lies in yours.",
    author: "Seneca",
  },
  {
    text: "You ask what is the proper limit to a person's wealth? First, having what is essential, and second, having what is enough.",
    author: "Seneca",
  },
  {
    text: "As it is with a play, so it is with life - what matters is not how long the acting lasts, but how good it is.",
    author: "Seneca",
  },
  {
    text: "distringit librorum multitudo  (the abundance of books is distraction)",
    author: "Seneca",
  },
  {
    text: "For the only safe harbour in this life's tossing, troubled sea is to refuse to be bothered about what the future will bring and to stand ready and confident, squaring the breast to take without skulking or flinching whatever fortune hurls at us.",
    author: "Seneca",
  },
  {
    text: "I will storm the gods, and shake the universe.",
    author: "Seneca",
  },
  {
    text: "I am not a ???wise man,??? nor . . . shall I ever be. And so require not from me that I should be equal to the best, but that I should be better than the wicked. It is enough for me if every day I reduce the number of my vices, and blame my mistakes.",
    author: "Seneca",
  },
  { text: "Hurry up and live.", author: "Seneca" },
  {
    text: "Conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets just like love or liquor.",
    author: "Seneca",
  },
  {
    text: "Lat, urbes constituit aetas: hora dissolvit: momento fit cinis: diu sylva.",
    author: "Seneca",
  },
  {
    text: "While the fates permit, live happily; life speeds on with hurried step, and with winged days the wheel of the headlong year is turned.",
    author: "Seneca",
  },
  {
    text: "Ab honesto virum bonum nihil deterret. (Nothing deters a good man from doing what is honorable.)-A Wrinkle in Time",
    author: "Seneca",
  },
  {
    text: "There are more things, Lucilius, likely to frighten us than there are to crush us; we suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "When you enter a grove peopled with ancient trees, higher than the ordinary, and shutting out the sky with their thickly inter-twined branches, do not the stately shadows of the wood, the stillness of the place, and the awful gloom of this doomed cavern then strike you with the presence of a deity?",
    author: "Seneca",
  },
  {
    text: "And so there is no reason for you to think that any man has lived long because he has grey hairs or wrinkles, he has not lived long ??? he has existed long. For what if you should think that man had had a long voyage who had been caught by a fierce storm as soon as he left harbour, and, swept hither and thither by a succession of winds that raged from different quarters, had been driven in a circle around the same course? Not much voyaging did he have, but much tossing about.",
    author: "Seneca",
  },
  {
    text: "Religion is regarded by the ignorant as true, by the wise as false, and by the rulers as useful.",
    author: "Seneca",
  },
  {
    text: "So it is: we are not given a short life but we make it short, and we are not Ill-supplied but wasteful of it.",
    author: "Seneca",
  },
  {
    text: "A physician is not angry at the intemperance of a mad patient; nor does he take it ill to be railed at by a man in a fever. Just so should a wise man treat all mankind, as a physician does his patient; and looking upon them only as sick and extravagant.",
    author: "Seneca",
  },
  {
    text: "So you must match time???s swiftness with your speed in using it, and you must drink quickly as though from a rapid stream that will not always flow.",
    author: "Seneca",
  },
  {
    text: "Men do not care how nobly they live, but only how long, although it is within the reach of every man to live nobly, but within no man's power to live long.",
    author: "Seneca",
  },
  {
    text: "I know that these mental disturbances of mine are not dangerous and give no promise of a storm; to express what I complain of in apt metaphor, I am distressed, not by a tempest, but by sea-sickness.",
    author: "Seneca",
  },
  {
    text: "To expect punishment is to suffer it; and to earn it is to expect it.",
    author: "Seneca",
  },
  {
    text: "You live as if you were destined to live forever, no thought of your frailty ever enters your head, of how much time has already gone by you take no heed. You squander time as if you drew from a full and abundant supply, though all the while that day which you bestow on some person or thing is perhaps your last.",
    author: "Seneca",
  },
  {
    text: "All things that are still to come lie in uncertainty; live straightway!",
    author: "Seneca",
  },
  {
    text: "There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality.",
    author: "Seneca",
  },
  {
    text: "Otium sine litteris mors est et hominis vivi sepultura",
    author: "Seneca",
  },
  {
    text: "Words need to be sown like seeds. No matter how tiny a seed may be, when in lands in the right sort of ground it unfolds its strength and from being minute expands and grows to a massive size.",
    author: "Seneca",
  },
  {
    text: "All this hurrying from place to place won???t bring you any relief, for you???re traveling in the company of your own emotions, followed by your troubles all the way.",
    author: "Seneca",
  },
  { text: "Per aspera ad Astra.", author: "Seneca" },
  {
    text: "When a man does not know what harbor he is making for, no wind is the right wind.",
    author: "Seneca",
  },
  {
    text: "How many are quite unworthy to see the light, and yet the day dawns.",
    author: "Seneca",
  },
  {
    text: "All the greatest blessings are a source of anxiety, and at no time should fortune be less trusted than when it is best; to maintain prosperity there is need of other prosperity, and in behalf of the prayers that have turned out well we must make still other prayers. For everything that comes to us from chance is unstable, and the higher it rises, the more liable it is to fall. Moreover, what is doomed to perish brings pleasure to no one; very wretched, therefore, and not merely short, must the life of those be who work hard to gain what they must work harder to keep. By great toil they attain what they wish, and with anxiety hold what they have attained; meanwhile they take no account of time that will never more return.",
    author: "Seneca",
  },
  {
    text: "We must indulge the mind and from time to time allow it the leisure which is its food and strength.",
    author: "Seneca",
  },
  {
    text: "At times we ought to drink even to intoxication, not so as to drown, but merely to dip ourselves in wine, for wine washes away troubles and dislodges them from the depths of the mind and acts as a remedy to sorrow as it does to some diseases. The inventor of wine is called Liber, not from the license which he gives to our tongues but because he liberates the mind from the bondage of cares and emancipates it, animates it and renders it more daring in all that it attempts.",
    author: "Seneca",
  },
  {
    text: "Most men ebb and flow in wretchedness between the fear of death and the hardships of life; they are unwilling to live, and yet they do not know how to die. ",
    author: "Seneca",
  },
  {
    text: "The geat blessing of mankind are within us and within our reach; but we shut our eyes, and like people in the dark, we fall foul upon the very thing we search for, without finding it.",
    author: "Seneca",
  },
  {
    text: "No man can be sane who searches for what will injure him in place of what is best.",
    author: "Seneca",
  },
  {
    text: "O how many noble deeds of women are lost in obscurity!",
    author: "Seneca",
  },
  {
    text: "Believe me, it is the sign of a great man, and one who is above human error, not to allow his time to be frittered away: he has the longest possible life simply because whatever time was available he devoted entirely to himself.",
    author: "Seneca",
  },
  {
    text: "People are delighted to accept pensions and gratuities, for which they hire out their labour or their support or their services. But nobody works out the value of time: men use it lavishly as if it cost nothing. But if death threatens these same people, you will see them praying to their doctors; if they are in fear of capital punishment, you will see them prepared to spend their all to stay alive.",
    author: "Seneca",
  },
  { text: "the more a mind takes in the more it expands.", author: "Seneca" },
  {
    text: "Envy of other people shows how they are unhappy. Their continual attention to others behavior shows how they are boring.",
    author: "Seneca",
  },
  {
    text: "Preserve a sense of proportion in your attitude to everything that pleases you, and make the most of them while they are at their best.",
    author: "Seneca",
  },
  {
    text: "Everywhere means nowhere. When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends. And the same thing must hold true of men who seek intimate acquaintance with no single author, but visit them all in a hasty and hurried manner. 3. Food does no good and is not assimilated into the body if it leaves the stomach as soon as it is eaten; nothing hinders a cure so much as frequent change of medicine; no wound will heal when one salve is tried after another; a plant which is often moved can never grow strong. There is nothing so efficacious that it can be helpful while it is being shifted about. And in reading of many books is distraction.",
    author: "Seneca",
  },
  {
    text: "In the meantime, cling tooth and nail to the following rule: not to give in to adversity, not to trust prosperity, and always take full note of fortune???s habit of behaving just as she pleases.",
    author: "Seneca",
  },
  {
    text: "Here is your great soul???the man who has given himself over to Fate; on the other hand, that man is a weakling and a degenerate who struggles and maligns the order of the universe and would rather reform the gods than reform himself.",
    author: "Seneca",
  },
  {
    text: "What difference does it make how much is laid away in a man's safe or in his barns, how many head of stock he grazes or how much capital he puts out at interest, if he is always after what is another's and only counts what he has yet to get, never what he has already? You ask what is the proper limit to a person's wealth? First, having what is essential, and second, having what is enough.",
    author: "Seneca",
  },
  {
    text: "Do not run hither and thither and distract yourself by changing your abode; for such restlessness is the sign of a disordered spirit.",
    author: "Seneca",
  },
  { text: "Injustice never rules forever", author: "Seneca" },
  {
    text: "Remember that all we have is ???on loan??? from Fortune, which can reclaim it without our permission???indeed, without even advance notice. Thus, we should love all our dear ones, but always with the thought that we have no promise that we may keep them forever???nay, no promise even that we may keep them for long.",
    author: "Seneca",
  },
  {
    text: "When a mind is impressionable and has none too firm a hold on what is right, it must be rescued from the crowd: it is so easy for it to go over to the majority.",
    author: "Seneca",
  },
  {
    text: "Il maggiore ostacolo al vivere ?? l???attesa, che dipende dal domani e consuma l???oggi.",
    author: "Seneca",
  },
  {
    text: "It is a great man that can treat his earthenware as if it was silver, and a man who treats his silver as if it was earthenware is no less great.",
    author: "Seneca",
  },
  {
    text: "So let those people go on weeping and wailing whose self-indulgent minds have been weakened by long prosperity, let them collapse at the threat of the most trivial injuries; but let those who have spent all their years suffering disasters endure the worst afflictions with a brave and resolute staunchness. Everlasting misfortune does have one blessing, that it ends up by toughening those whom it constantly afflicts.",
    author: "Seneca",
  },
  {
    text: "My advice is really this: what we hear the philosophers saying and what we find in their writings should be applied in our pursuit of the happy life. We should hunt out the helpful pieces of teaching, and the spirited and noble-minded sayings which are capable of immediate practical application???not far-fetched or archaic expressions or extravagant metaphors and figures of speech???and learn them so well that words become works. No one to my mind lets humanity down quite so much as those who study philosophy as if it were a sort of commercial skill and then proceed to live in a quite different manner from the way they tell other people to live.",
    author: "Seneca",
  },
  {
    text: "The bravest sight in the world is to see a great man struggling against adversity.",
    author: "Seneca",
  },
  {
    text: "For manliness gains much strength by being challenged",
    author: "Seneca",
  },
  {
    text: "A guilty person sometimes has the luck to escape detection, but never to feel sure of it.",
    author: "Seneca",
  },
  {
    text: "Life will follow the path it started upon, and will neither reverse nor check its course; it will make no noise, it will not remind you of its swiftness. Silent it will glide on; it will not prolong itself at the command of a king, or at the applause of the populace. Just as it was started on its first day, so it will run; nowhere will it turn aside, nowhere will it delay.",
    author: "Seneca",
  },
  { text: "Non scholae sed vitae discimus.", author: "Seneca" },
  {
    text: "that you would not anticipate misery since the evils you dread as coming upon you may perhaps never reach you at least they are not yet come Thus some things torture us more than they ought, some before they ought and some which ought never to torture us at all. We heighten our pain either by presupposing a cause or anticipation",
    author: "Seneca",
  },
  {
    text: "In truth, Serenus, I have for a long time been silently asking myself to what I should liken such a condition of mind, and I can find nothing that so closely approaches it as the state of those who, after being released from a long and serious illness, are sometimes touched with fits of fever and slight disorders, and, freed from the last traces of them, are nevertheless disquieted with mistrust, and, though now quite well, stretch out their wrist to a physician and complain unjustly of any trace of heat in their body. It is not, Serenus, that these are not quite well in body, but that they are not quite used to being well; just as even a tranquil sea will show some ripple, particularly when it has just subsided after a storm. What you need, therefore, is not any of those harsher measures which we have already left behind, the necessity of opposing yourself at this point, of being angry with yourself at that, of sternly urging yourself on at another, but that which comes last -confidence in yourself and the belief that you are on the right path, and have not been led astray by the many cross- tracks of those who are roaming in every direction, some of whom are wandering very near the path itself. But what you desire is something great and supreme and very near to being a god - to be unshaken.",
    author: "Seneca",
  },
  {
    text: "vices have to be crushed rather than picked at.",
    author: "Seneca",
  },
  {
    text: "Life is slavery if the courage to die is absent.",
    author: "Seneca",
  },
  { text: "Imperare sibi maximum imperium est", author: "Seneca" },
  {
    text: "However much you possess there's someone else who has more, and you'll be fancying yourself to be short of things you need to exact extent to which you lag behind him.",
    author: "Seneca",
  },
  {
    text: "Indeed the state of all who are preoccupied is wretched, but the most wretched are those who are toiling not even at their own preoccupations, but must regulate their sleep by another's, and their walk by another's pace, and obey orders in those freest of all things, loving and hating. If such people want to know how short their lives are, let them reflect how small a portion is their own.",
    author: "Seneca",
  },
  {
    text: "Are you surprised, as if it were a novelty, that after such long travel and so many changes of scene you have not been able to shake off the gloom and heaviness of your mind? You need a change of soul rather than a change of climate. [...] Do you ask why such flight does not help you? It is because you flee along with yourself. You must lay aside the burdens of the mind; until you do this, no place will satisfy you.",
    author: "Seneca",
  },
  {
    text: "No prizefighter can go with high spirits into the strife if he has never been beaten black and blue; the only contestant who can confidently enter the lists is the man who has seen his own blood, who has felt his teeth rattle beneath his opponent's fist, who has been tripped and felt the full force of his adversary's charge, who has been downed in bloody but not it spirit, one who as often as he falls, rises again with greater defiance than ever.",
    author: "Seneca",
  },
  {
    text: "Desultory reading is delightful, but to be beneficial, our reading must be carefully directed.",
    author: "Seneca",
  },
  {
    text: "It is a denial of justice not to stretch out a helping hand to the fallen; that is the common right of humanity.",
    author: "Seneca",
  },
  {
    text: "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
    author: "Seneca",
  },
  {
    text: "A wise man never asks what another man serves, for only his actions will speak the truth.",
    author: "Seneca",
  },
  {
    text: "the time of the actual enjoyment is short and swift, and made much shorter through their own fault. For they dash from one pleasure to another and cannot stay steady in one desire.",
    author: "Seneca",
  },
  { text: "Nothing is ours, except time.", author: "Seneca" },
  {
    text: "You should rather suppose that those are involved in worthwhile duties who wish to have daily as their closest friends Zeno, Pythagoras, Democritus and all the other high priests of liberal studies, and Aristotle and Theophrastus. None of these will be too busy to see you, none of these will not send his visitor away happier and more devoted to himself, none of these will allow anyone to depart empty-handed. They are at home to all mortals by night and by day.",
    author: "Seneca",
  },
  {
    text: "Love sometimes injures. Friendship always benefits, After friendship is formed you must trust, but before that you must judge.",
    author: "Seneca",
  },
  {
    text: "Count your years and you'll be ashamed to be wanting and working for exactly the same things as you wanted when you were a boy. Of this one thing make sure against your dying day - that your faults die before you do. Have done with those unsettled pleasures, which cost one dear - they do one harm after they're past and gone, not merely when they're in prospect. Even when they're over, pleasures of a depraved nature are apt to carry feelings of dissatisfaction, in the same way as a criminal's anxiety doesn't end with the commission of the crime, even if it's undetected at the time. Such pleasures are insubstantial and unreliable; even if they don't do one any harm, they're fleeting in character. Look around for some enduring good instead. And nothing answers this description except what the spirit discovers for itself within itself. A good character is the only guarantee of everlasting, carefree happiness. Even if some obstacle to this comes on the scene, its appearance is only to be compared to that of clouds which drift in front of the sun without ever defeating its light.",
    author: "Seneca",
  },
  { text: "Love of bustle is not industry.", author: "Seneca" },
  {
    text: "The happy life is a life that is in harmony with its own nature.",
    author: "Seneca",
  },
  {
    text: "It does good also to take walks out of doors, that our spirits may be raised and refreshed by the open air and fresh breeze: sometimes we gain strength by driving in a carriage, by travel, by change of air, or by social meals and a more generous allowance of wine.",
    author: "Seneca",
  },
  {
    text: "Why do I not rather seek some real good - one which I could feel, not one which I could display? These things that draw the eyes of men, before which they halt, which they show to one another in wonder, outwardly glitter, but are worthless within.",
    author: "Seneca",
  },
  {
    text: "It is the quality of a great soul to scorn great things and to prefer that which is ordinary rather than that which is too great.",
    author: "Seneca",
  },
  {
    text: "Every day as it comes should be welcomed and reduced forthwith into our own possession as if it were the finest day imaginable. What flies past has to be seized at.",
    author: "Seneca",
  },
  {
    text: "Religion is regarded by the common people as true, by the wise as false, and by the rulers as useful",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short space of time, but that we waste much of it. Life is long enough, and it has been given in sufficiently generous measure to allow the accomplishment of the very greatest things if the whole of it is well invested. But when it is squandered in luxury and carelessness, when it is devoted to no good end, forced at last by the ultimate necessity we perceive that it has passed away before we were aware that it was passing.",
    author: "Seneca",
  },
  { text: "Non est ad astra mollis e terris via.", author: "Seneca" },
  {
    text: "Soft living imposes on us the penalty of debility; we cease to be able to do the things we've long been grudging about doing.",
    author: "Seneca",
  },
  {
    text: "Your greatest difficulty is with yourself; for you are your own stumbling-block. You do not know what you want. You are better at approving the right course than at following it out. You see where the true happiness lies, but you have not the courage to attain it.",
    author: "Seneca",
  },
  {
    text: "If you look on wealth as a thing to be valued you???ll always fancy yourself to be short of the things you need to the extent to which you lag behind what others have.",
    author: "Seneca",
  },
  {
    text: "You must set your hands to tasks which you can finish or at least hope to finish, and avoid those which get bigger as you proceed and do not cease where you had intended.",
    author: "Seneca",
  },
  {
    text: "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing.",
    author: "Seneca",
  },
  { text: "An unpopular rule is never long maintained.", author: "Seneca" },
  {
    text: "Bonis nocet, qui malis parcit.  He harms the good (people) who spares the evil.",
    author: "Seneca",
  },
  {
    text: "It is uncertain where Death will await you; there expect it everywhere.",
    author: "Seneca",
  },
  {
    text: "But only philosophy will wake us; only philosophy will shake us out of that heavy sleep. Devote yourself entirely to her. You're worthy of her, she's worthy of you-fall into each other's arms. Say a firm, plain no to every other occupation.",
    author: "Seneca",
  },
  {
    text: "Why be concerned about others, come to that, when you've outdone your own self? Set yourself a limit which you couldn't even exceed if you wanted to, and say good-bye at last to those deceptive prizes more precious to those who hope for them than to those who have won them. If there were anything substantial in them they would sooner or later bring a sense of fullness; as it is they simply aggravate the thirst of those who swallow them.",
    author: "Seneca",
  },
  {
    text: "It is in no man's power to have whatever he wants, but he has it in his power not to wish for what he hasn't got, and cheerfully make the most of the things that do come his way.",
    author: "Seneca",
  },
  {
    text: "As often as I have been amongst men, I have returned less a man.",
    author: "Seneca",
  },
  { text: "Bibamus, moriendum est.", author: "Seneca" },
  { text: "philosophy teaches us to act, not to speak;", author: "Seneca" },
  {
    text: "I never spend a day in idleness; I appropriate even a part of the night for study. I do not allow time for sleep but yield to it when I must, and when my eyes are wearied with waking and ready to fall shut, I keep them at their task.",
    author: "Seneca",
  },
  {
    text: "If you have nothing to stir you up and rouse you to action, nothing which will test your resolution by its threats and hostilities; if you recline in unshaken comfort, it is not tranquillity; it is merely a flat calm.",
    author: "Seneca",
  },
  {
    text: "...there is nothing the wise man does reluctantly. He escapes necessity because he wills what necessity is going to force on him.",
    author: "Seneca",
  },
  {
    text: "It is our conscience, not our pride, that has put doorkeepers at our doors.",
    author: "Seneca",
  },
  {
    text: "But nothing will help quite so much as just keeping quiet, talking with other people as little as possible, with yourself as much as possible. For conversation has a kind of charm about it, an insinuating and insidious something that elicits secrets from us just like love or liquor. Nobody will keep the things he hears to himself, and nobody will repeat just what he hears and no more. Neither will anyone who has failed to keep a story to himself keep the name of his informant to himself. Every person without exception has someone to whom he confides everything that is confided to himself. Even supposing he puts some guard in his garrulous tongue and is content with a single pair of ears, he will still be the creator of a host of later listeners ??? such is the way in which what was but a little while before a secret becomes common rumor.",
    author: "Seneca",
  },
  {
    text: "The greatest loss of time is delay and expectation, which depend upon the future. We let go the present, which we have in our power, and look forward to that which depends upon chance, and so relinquish a certainty for an uncertainty.",
    author: "Seneca",
  },
  {
    text: "If you apply yourself to study you will avoid all boredom with life, you will not long for night because you are sick of daylight, you will be neither a burden to yourself nor useless to others, you will attract many to become your friends and the finest people will flock about you.",
    author: "Seneca",
  },
  {
    text: "Even for studies, where expenditure is most honorable, it is justifiable only so long as it is kept within bounds. What is the use of having countless books and libraries, whose titles their owners can scarcely read through in a whole lifetime? The learner is, not instructed, but burdened by the mass of them, and it is much better to surrender yourself to a few authors than to wander through many.",
    author: "Seneca",
  },
  {
    text: "the mind is never right but when it is at peace with itself",
    author: "Seneca",
  },
  {
    text: "We are, therefore, seeking how the mind can follow a smooth and steady course, well disposed to itself, happily regarding its own condition and with no interruption to this pleasure, but remaining in a state of peace with no ups and downs: that will be tranquillity.",
    author: "Seneca",
  },
  {
    text: "The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
  },
  {
    text: "Let no one,' I say, 'who will make me no worthy return for such a loss rob me of a single day; let my mind be fixed upon itself, let it cultivate itself, let it busy itself with nothing outside, nothing that looks towards an umpire; let it love the tranquillity that is remote from public and private concern.",
    author: "Seneca",
  },
  {
    text: "The boon that could be given can be withdrawn.",
    author: "Seneca",
  },
  {
    text: "Nothing, Lucilius, is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession.",
    author: "Seneca",
  },
  {
    text: "Just as great and princely wealth is scattered in a moment when it comes into the hands of a bad owner, while wealth however limited, if it is entrusted to a good guardian, increases by use, so our life is amply long for him who orders it properly.",
    author: "Seneca",
  },
  {
    text: "Most powerful is he who has himself in his power.",
    author: "Seneca",
  },
  {
    text: "Barley porridge, or a crust of barley bread, and water do not make a very cheerful diet, but nothing gives one keener pleasure than having the ability to derive pleasure even from that-- and the feeling of having arrived at something which one cannot be deprived of by any unjust stroke of fortune.",
    author: "Seneca",
  },
  {
    text: "The trip doesn???t exist that can set you beyond the reach of cravings, fits of temper, or fears ??? so long as you carry the sources of your troubles about with you, those troubles will continue to harass and plague you wherever you wander on land or on sea. Does it surprise you that running away doesn???t do you any good? The things you???re running away from are with you all the time.",
    author: "Seneca",
  },
  {
    text: "You are living as if destined to live for ever; your own frailty never occurs to you; you don't notice how much time has already passed, but squander it as though you had a full and overflowing supply - though all the while that very day which you are devoting to somebody or something may be your last. You act like mortals in all that you fear, and like immortals in all that you desire.",
    author: "Seneca",
  },
  { text: "To be everywhere; is to be nowhere", author: "Seneca" },
  {
    text: "Humanity is the quality which stops one being arrogant towards one's fellows, or being acrimonious.",
    author: "Seneca",
  },
  {
    text: "The highest good is a mind that scorns the happenings of chance, and rejoices only in virtue.",
    author: "Seneca",
  },
  {
    text: "It is not what you endure that matters, but how you endure it.",
    author: "Seneca",
  },
  {
    text: "If i had not been admitted to these studies it would not have been worth while to have been born.",
    author: "Seneca",
  },
  {
    text: "No good thing renders its possessor happy, unless his mind is reconciled to the possibility of loss; nothing, however, is lost with less discomfort than that which, when lost, cannot be missed.",
    author: "Seneca",
  },
  {
    text: "It???s not that we have a short time to live, but that we waste a lot of it.??? -Lucius Annaeus Seneca",
    author: "Seneca",
  },
  {
    text: "If wisdom were offered me on the one condition that I should keep it shut away and not divulge it to anyone, I should reject it. There is no enjoying the possession of anything valuable unless one has someone to share it with.",
    author: "Seneca",
  },
  {
    text: "It is sweet to draw the world down with you when you are perishing.",
    author: "Seneca",
  },
  {
    text: "The day which we fear is out last is buth the birthday of eternity",
    author: "Seneca",
  },
  {
    text: "No man has ever been so far advanced by Fortune that she did not threaten him as greatly as she had previously indulged him. Do not trust her seeming calm; in a moment the sea is moved to its depths. The very day the ships have made a brave show in the games, they are engulfed.",
    author: "Seneca",
  },
  {
    text: "For love of bustle is not industry, ???it is only the restlessness of a hunted mind.",
    author: "Seneca",
  },
  {
    text: "N??llum magnum ingenium sine mixt??r?? d??mentiae fuit No great talent without an element of madness",
    author: "Seneca",
  },
  {
    text: "Set aside a certain number of days, during which you shall be content with the scantiest and cheapest fare, with course and rough dress, saying to yourself the while: 'Is this the condition that I feared?",
    author: "Seneca",
  },
  {
    text: "All those who call you to themselves draw you away from yourself.",
    author: "Seneca",
  },
  {
    text: "How silly then to imagine that the human mind, which is formed of the same elements as divine beings, objects to movement and change of abode, while the divine nature finds delight and even self-preservation in continual and very rapid change.",
    author: "Seneca",
  },
  {
    text: 'What progress, you ask, have I made? I have begun to be a friend to myself." That was indeed a great benefit; such a person can never be alone. You may be sure that such a man is a friend to all mankind.',
    author: "Seneca",
  },
  {
    text: "Oh, what darkness does great prosperity cast over our minds!",
    author: "Seneca",
  },
  { text: "O tempo revela a verdade.", author: "Seneca" },
  {
    text: "Continue to act thus, my dear Lucilius ??? set yourself free for your own sake; gather and save your time, which till lately has been forced from you, or filched away, or has merely slipped from your hands. Make yourself believe the truth of my words, ??? that certain moments are torn from us, that some are gently removed, and that others glide beyond our reach. The most disgraceful kind of loss, however, is that due to carelessness. Furthermore, if you will pay close heed to the problem, you will find that the largest portion of our life passes while we are doing ill, a goodly share while we are doing nothing, and the whole while we are doing that which is not to the purpose. What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "Only a mind that is deeply stirred can utter something noble and beyond the power of others.",
    author: "Seneca",
  },
  {
    text: "The man who fears death will never do anything worthy of a man who is alive.",
    author: "Seneca",
  },
  {
    text: "So long, in fact, as you remain in ignorance of what to aim at and what to avoid, what is essential and what is superfluous, what is upright or honorable conduct and what is not, it will not be travelling but drifting. All this hurrying from place to place won???t bring you any relief, for you???re travelling in the company of your own emotions, followed by your troubles all the way.",
    author: "Seneca",
  },
  {
    text: "So the life of a philosopher extends widely: he is not confined by the same boundary as are others. He alone is free from the laws that limit the human race, and all ages serve him as though he were a god.",
    author: "Seneca",
  },
  {
    text: "Life, if you know how to use it, is long; but???many, following no fixed aim, shifting and??? dissatisfied, are plunged by their fickleness into plans that are ever new; some have no fixed principle by which to direct their course.",
    author: "Seneca",
  },
  {
    text: "And when the soul has yielded to pleasure, its functions and actions grow weak, and any undertaking comes from a nerveless and unsteady source.",
    author: "Seneca",
  },
  {
    text: "We are indeed apt to ascribe certain faults to the place or to the time; but those faults will follow us, no matter how we change our place.",
    author: "Seneca",
  },
  {
    text: "There will always be causes for anxiety, whether due to prosperity or to wretchedness. Life will be driven on through a succession of preoccupations: we shall always long for leisure, but never enjoy it.",
    author: "Seneca",
  },
  {
    text: "Can anything be sillier than the point of view of certain people???I mean those who boast of their foresight? They keep themselves very busily engaged in order that they may be able to live better; they spend life in making ready to live! They form their purposes with a view to the distant future; yet postponement is the greatest waste of life; it deprives them of each day as it comes, it snatches from them the present by promising something hereafter. The greatest hindrance to living is expectancy, which depends upon the morrow and wastes to-day. You dispose of that which lies in the hands of Fortune, you let go that which lies in your own.",
    author: "Seneca",
  },
  {
    text: "Diligentia maximum etiam mediocris ingeni subsidium - Diligence is a very great help even to a mediocre intelligence.",
    author: "Seneca",
  },
  {
    text: "And so when you see a man often wearing the robe of office, when you see one whose name is famous in the Forum, do not envy him; those things are bought at the price of life. They will waste all their years, in order that they may have one year reckoned by their name.",
    author: "Seneca",
  },
  {
    text: "to make Pythocles rich, do not add to his store of money, but subtract from his desires.",
    author: "Seneca",
  },
  { text: "Sometimes, even to live is an act of courage.", author: "Seneca" },
  {
    text: "there are a few men whom slavery holds fast, but there are many more who hold fast to slavery.",
    author: "Seneca",
  },
  {
    text: "we are mistaken when we look forward to death; the major portion of death has already passed, Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "There are more things likely to frighten us than there are to crush us; we suffer more in our imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "One can expect an agreement between philosophers sooner than between clocks.",
    author: "Seneca",
  },
  {
    text: "I've come across people who say that there is a sort of inborn restlessness in the human spirit and an urge to change one's abode; for man is endowed with a mind which is changeable and and unsettled: nowhere at rest, it darts about and directs its thoughts to all places known and unknown, a wanderer which cannot endure repose and delights chiefly in novelty.",
    author: "Seneca",
  },
  {
    text: "A family formed by crime must be broken by more crime.",
    author: "Seneca",
  },
  {
    text: "We are in the habit of saying that it was not in our power to choose the parents who were allotted to us, that they were given to us by chance. But we can choose whose children we would like to be.",
    author: "Seneca",
  },
  {
    text: "However, the two things must be mingled and varied, solitude and joining a crowd: the one will make us long for people and the other for ourselves, and each will be a remedy for the other; solitude will cure our distaste for a crowd, and a crowd will cure our boredom with solitude.",
    author: "Seneca",
  },
  {
    text: "What progress, you ask, have I made? I have begun to be a friend to myself.",
    author: "Seneca",
  },
  {
    text: "From this state also will he flee. If I should attempt to enumerate them one by one, I should not find a single one which could tolerate the wise man or which the wise man could tolerate.",
    author: "Seneca",
  },
  {
    text: "It is the sign of a weak mind to be unable to bear wealth.",
    author: "Seneca",
  },
  {
    text: "He will live ill who does not know how to die well",
    author: "Seneca",
  },
  {
    text: "Our Stoic philosophers, as you know, maintain that there are two elements in the universe from which all things are derived, namely cause and matter. Matter lies inert and inactive, a substance with limited potential, but destined to remain idle if no one sets it in motion; and it is cause (this meaning the same as reason) which turns matter to whatever end it wishes and fashions it into a variety of different products.",
    author: "Seneca",
  },
  {
    text: "It should be our care not so much to live a long life as a satisfactory one.",
    author: "Seneca",
  },
  {
    text: "There is no great genius without a tincture of madness.",
    author: "Seneca",
  },
  {
    text: "No man???s good by accident. Virtue has to be learnt.",
    author: "Seneca",
  },
  {
    text: "If you look on wealth as a thing to be valued your imaginary poverty will cause you torment.",
    author: "Seneca",
  },
  {
    text: "Cling, therefore, to this sound and wholesome plan of life; indulge the body just so far as suffices for good health. ... Your food should appease your hunger, your drink quench your thirst, your clothing keep out the cold, your house be a protection against inclement weather. It makes no difference whether it is built of turf or variegated marble imported from another country: what you have to understand is that thatch makes a person just as good a roof as gold.",
    author: "Seneca",
  },
  {
    text: "Away with the world???s opinion of you ??? it???s always unsettled and divided. Away with the pursuits that have occupied the whole of your life ??? death is going to deliver the verdict in your case. ... It???s only when you???re breathing your last that the way you???ve spent your time will become apparent.",
    author: "Seneca",
  },
  {
    text: "There is but one chain holding us in fetters, and that is our love of life.",
    author: "Seneca",
  },
  {
    text: "Once you have rid yourself of the affliction there, though, every change of scene will become a pleasure. You may be banished to the ends of the earth, and yet in whatever outlandish corner of the world you may find yourself stationed, you will find that place, whatever it may be like, a hospitable home. Where you arrive does not matter so much as what sort of person you are when you arrive there.",
    author: "Seneca",
  },
  {
    text: "The man who spends his time choosing one resort after another in a hunt for peace and quiet will in every place he visits find something to prevent him from relaxing.",
    author: "Seneca",
  },
  {
    text: "Philosophy is good advice; and no one can give advice at the top of his lungs.",
    author: "Seneca",
  },
  {
    text: "Let us take pleasure in what we have received and make no comparison; no man will ever be happy if tortured by the greater happiness of another.",
    author: "Seneca",
  },
  {
    text: "So what you need is not those more radical remedies which we have now finished with ??? blocking yourself here, being angry with yourself there, threatening yourself sternly somewhere else ??? but the final treatment, confidence in yourself and the belief that you are on the right path, and not led astray by the many tracks which cross yours of people who are hopelessly lost, though some are wandering not far from the true path.",
    author: "Seneca",
  },
  {
    text: "So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it. Just as when ample and princely wealth falls to a bad owner it is squandered in a moment, but wealth however modest, if entrusted to a good custodian, increases with use, so our lifetime extends amply if you manage it properly.",
    author: "Seneca",
  },
  {
    text: "Possession of a friend should be with the spirit: the spirit's never absent: it sees daily whoever it likes.",
    author: "Seneca",
  },
  {
    text: "Believe me if you consult philosophy she will persuade you not to lit so long at your counting desk",
    author: "Seneca",
  },
  {
    text: "they Whatever can make life truly happy is absolutely good in its own right because it cannot be warped into evil From whence then comes error In that while all men wish for a happy life they mistake the means for the thing itself and while they fancy themselves in pursuit of it they are flying from it for when the sum of happiness consists in solid tranquillity and an unembarrassed confidence therein they are ever collecting causes of disquiet and not only carry burthens but drag them painfully along through the rugged and deceitful path of life so that they still withdraw themselves from the good effect proposed the more pains they take the more business they have upon their hands instead of advancing they are retrograde and as it happens in a labyrinth their very speed puzzles and confounds them",
    author: "Seneca",
  },
  {
    text: "Sorrowers tend to avoid what they are most fond of and try to give vent to their grief.",
    author: "Seneca",
  },
  {
    text: "I am loath to call clemency what was, rather, the exhaustion of cruelty.",
    author: "Seneca",
  },
  {
    text: "So the man who restrains himself within the bounds set by nature will not notice poverty; the man who exceeds these bounds will be pursued by poverty however rich he",
    author: "Seneca",
  },
  {
    text: "Those who wish their virtue to be advertised are not striving for virtue but for renown. Are you not willing to be just without being renowned? Nay, indeed you must often be just and be at the same time disgraced. And then, if you are wise, let ill repute, well won, be a delight. Farewell.",
    author: "Seneca",
  },
  {
    text: "Our minds must relax: they will rise better and keener after a rest. Just as you must not force fertile farmland, as uninterrupted productivity will soon exhaust it, so constant effort will sap our mental vigour, while a short period of rest and relaxation will restore our powers.",
    author: "Seneca",
  },
  {
    text: "Finally, it is generally agreed that no activity can be successfully pursued by an individual who is preoccupied",
    author: "Seneca",
  },
  {
    text: "Kalau anda ingin orang lain merahasiakan rahasia anda, simpanlah sendiri rahasia itu.",
    author: "Seneca",
  },
  {
    text: "True happiness is...to enjoy the present, without anxious dependence upon the future.",
    author: "Seneca",
  },
  {
    text: "Mankind is perpetually the victim of a pointless and futile martydom, fretting life away in fruitless worries though failure to realise what limit is set to acquisition and to the growth of genuine pleasure",
    author: "Seneca",
  },
  {
    text: "Undisturbed by fears and unspoiled by pleasures, we shall be afraid neither of death nor the gods.",
    author: "Seneca",
  },
  {
    text: "Anyone who likes may make things easier for himself by viewing them with equanimity.",
    author: "Seneca",
  },
  {
    text: 'you shall be told what pleased me to-day in the writings of Hecato; it is these words: "What progress, you ask, have I made? I have begun to be a friend to myself." That was indeed a great benefit; such a person can never be alone. You may be sure that such a man is a friend to all mankind.',
    author: "Seneca",
  },
  {
    text: 'Quis hic locus, quae regio, quae mundi plaga? ubi sum? sub ortu solis, an sub cardine glacialis ursae?"  "What place is this, what region, what quarter of the world? Where am I? Under the rising of the sun or beneath the wheeling course of the frozen bear???? Hercules Furens (The Mad Hercules), Act 5, line 1138',
    author: "Seneca",
  },
  {
    text: "You will notice that the most powerful and highly stationed men let drop remarks in which they pray for leisure, praise it, and rate it higher than all their blessings.",
    author: "Seneca",
  },
  {
    text: "So you must not think a man has lived long because he has white hair and wrinkles: he has not lived long, just existed long. For suppose you should think that a man had had a long voyage who had been caught in a raging storm as he left harbour, and carried hither and thither and driven round and round in a circle by the rage opposing winds. He did not have a long voyage, just a long tossing about.",
    author: "Seneca",
  },
  {
    text: "Why not stop trying to prevent posterity being silent about you? You were born to die, and a silent funeral is less bothersome.",
    author: "Seneca",
  },
  {
    text: "by overloading the body with food you strangle the soul and render it less active.",
    author: "Seneca",
  },
  {
    text: "But is life really worth so much? Let us examine this; it's a different inquiry. We will offer no solace for so desolate a prison house; we will encourage no one to endure the overlordship of butchers. We shall rather show that in every kind of slavery, the road of freedom lies open. I will say to the man to whom it befell to have a king shoot arrows at his dear ones [Prexaspes], and to him whose master makes fathers banquet on their sons' guts [Harpagus]: 'What are you groaning for, fool?... Everywhere you look you find an end to your sufferings. You see that steep drop-off? It leads down to freedom. You see that ocean, that river, that well? Freedom lies at its bottom. You see that short, shriveled, bare tree? Freedom hangs from it.... You ask, what is the path to freedom? Any vein in your body.",
    author: "Seneca",
  },
  {
    text: "There is never a time when new distraction will not show up; we sow them, so several will grow from the same seed.",
    author: "Seneca",
  },
  {
    text: "For Fate/ The willing leads, the unwilling drags along.",
    author: "Seneca",
  },
  {
    text: "I imagine many people could have achieved wisdom if they had not imagined they had already achieved it, if they had not dissembled about some of their own characteristics and turned a blind eye to others.",
    author: "Seneca",
  },
  {
    text: "?????????? ?????? ???????????? ???????? ???????? ?????????????? ???????????? ??????????????.",
    author: "Seneca",
  },
  {
    text: 'When Zeno received news of a shipwreck and heard that all his luggage had been sunk he said, "Fortune bids me to be a less encumbered philosopher.',
    author: "Seneca",
  },
  {
    text: "And there???s no state of slavery more disgraceful than one which is self-imposed.",
    author: "Seneca",
  },
  {
    text: "Any man,??? he says, ???who does not think that what he has is more than ample, is an unhappy man, even if he is the master of the whole world.",
    author: "Seneca",
  },
  {
    text: "My thought for today is something which I found in Epicurus (yes, I actually make a practice of going over to the enemy???s camp ??? by way of reconnaissance, not as a deserter!). ???A cheerful poverty,??? he says, ???is an honourable state.??? But if it is cheerful it is not poverty at all. It is not the man who has too little who is poor, but the one who hankers after more. What difference does it make how much there is laid away in a man???s safe or in his barns, how many head of stock he grazes or how much capital he puts out at interest, if he is always after what is another???s and only counts what he has yet to get, never what he has already. You ask what is the proper limit to a person???s wealth? First, having what is essential, and second, having what is enough.",
    author: "Seneca",
  },
  {
    text: 'If he lose a hand through disease or war, or if some accident puts out one or both of his eyes, he will be satisfied with what is left, taking as much pleasure in his impaired and maimed body as he took when it was sound. But while he does not pine for these parts if they are missing, he prefers not to lose them. 5. In this sense the wise man is self-sufficient, that he can do without friends, not that he desires to do without them. When I say "can," I mean this: he endures the loss of a friend with equanimity.',
    author: "Seneca",
  },
  {
    text: "Non qui parum habet, sed qui plus cupit pauper est.",
    author: "Seneca",
  },
  {
    text: "putting things off is the biggest waste of life: it snatches away each day as it comes, and denies us the present by promising the future. The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what lies in Fortune???s control, and abandoning what lies in yours.",
    author: "Seneca",
  },
  {
    text: "???? ?????? ???????? ???? ???????? ?????? ?????? ?????????? ???? ???????? ?????? .",
    author: "Seneca",
  },
  {
    text: "I shall never be ashamed to go to a bad author for a good quotation.",
    author: "Seneca",
  },
  {
    text: "The day has already begun to lessen. It has shrunk considerably, but yet will still allow a goodly space of time if one rises, so to speak, with the day itself. We are more industrious, and we are better men if we anticipate the day and welcome the dawn;",
    author: "Seneca",
  },
  {
    text: "Luck is what happens when preparation meets opportunity!",
    author: "Seneca",
  },
  {
    text: "Now all men suffer from ignorance of the truth; deceived by common report, they make for these ends as if they were good, and then, after having won their wish, and suffered much, they find them evil, or empty, or less important than they had expected.",
    author: "Seneca",
  },
  {
    text: "They strive to attain their wishes by every available means, instructing and compelling themselves to dishonest and difficult acts. And when their labour is without reward, it is the fruitless disgrace that tortures them - they are not grieved to have desired evil things but to have desired in vain. Then remorse for what they began lays hold of them, and the fear of beginning again, and thence creeps in the agitation of mind which can find no relief - because neither can they rule nor can they obey their desires. And then comes the hesitancy of a life failing to clear a way for itself, and the dull wasting of a soul lying torpid amidst forsaken hopes.",
    author: "Seneca",
  },
  {
    text: "what is freedom, you ask?  It means not being a slave to any circumstance, to any constraint, to any chance; it",
    author: "Seneca",
  },
  {
    text: "All fools suffer the burden of dissatisfaction with themselves.",
    author: "Seneca",
  },
  { text: "Aequat omnes cinis.", author: "Seneca" },
  {
    text: "One cannot sincerely weep over getting what one wanted.",
    author: "Seneca",
  },
  {
    text: "Beasts avoid the dangers which they see, and when they have escaped them are free from care; but we men torment ourselves over that which is to come as well as over that which is past. Many of our blessings bring bane to us; for memory recalls the tortures of fear, while foresight anticipates them. The present alone can make no man wretched.",
    author: "Seneca",
  },
  { text: "Ignorance is no cure for suffering.", author: "Seneca" },
  {
    text: "Fire is the test of gold; adversity, of strong men.",
    author: "Seneca",
  },
  {
    text: "I wish Lucilius you had been so happy as to have taken this resolution long ago I wish we had not deferred to think of an happy life till now we are come within light of death But let us delay no longer",
    author: "Seneca",
  },
  {
    text: "The mind when distracted absorbs nothing deeply.",
    author: "Seneca",
  },
  {
    text: "?????????????????? ?????????????? ?????????????????? ?? ??????-???????????? ??????????.",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short time to live but that we waste a lot of it.",
    author: "Seneca",
  },
  {
    text: "?????? ?????????????? ???????????? ???????????? ?????????? ???? ?????????????????? ?????? ?????????????? ???????? ?????????? ???????? ???????????? ???????? ?????????? ???????????? ?????? ???????????????? ?????? ?????????? ????????, ?????????? ?????? ???????? ???????????? ?????? ?????? ?????? ????????.",
    author: "Seneca",
  },
  {
    text: "What is my object in making a friend? To have someone to be able to die for, someone I may follow into exile, someone for whose life I may put myself up as security and pay the price as well. The thing you describe is not friendship but a business deal, looking to the likely consequences, with advantage as its goal.",
    author: "Seneca",
  },
  {
    text: "Prove - and an easy task it is - that so-called pleasures, when they go beyond a certain limit, are but punishments...",
    author: "Seneca",
  },
  {
    text: 'How much better to follow a straight course and attain a goal where the words "pleasant" and "honourable" have the same meaning!',
    author: "Seneca",
  },
  {
    text: "What difference does it make, after all, what your position in life is if you dislike it yourself?",
    author: "Seneca",
  },
  {
    text: "[Philosophers] have come to envy the philologist and the mathematician, and they have taken over all the inessential elements in those studies???with the result that they know more about devoting care and attention to their speech than about devoting such attention to their lives.",
    author: "Seneca",
  },
  {
    text: "To expel hunger and thirst there is no necessity of sitting in a palace and submitting to the supercilious brow and contumelious favour of the rich and great there is no necessity of sailing upon the deep or of following the camp What nature wants is every where to be found and attainable without much difficulty whereas require the sweat of the brow for these we are obliged to dress anew j compelled to grow old in the field and driven to foreign mores A sufficiency is always at hand",
    author: "Seneca",
  },
  {
    text: "If you live according to nature, you will never be poor; if you live according to opinion, you will never be rich.",
    author: "Seneca",
  },
  {
    text: "Therefore, my dear Lucilius, begin at once to live, and count each separate day as a separate life. He who has thus prepared himself, he whose daily life has been a rounded whole, is easy in his mind;",
    author: "Seneca",
  },
  {
    text: "the preoccupied become aware of it only when it is over.",
    author: "Seneca",
  },
  {
    text: "This evil of taking our cue from others has become so deeply ingrained that even that most basic feeling, grief, degenerates into imitation.",
    author: "Seneca",
  },
  {
    text: "???????????? ???????? ?????? ?????????????????? ???? ?????? ?????????????????????????? ???? ???????????? ??????, ???????????? ?????? ???? ?????? ???? ????????????????????. ?? ?????? ???? ?????????????????????? ???? ?????????? ?????? ???????????? ?????? ?????? ?????????????????? ???????? ???? ????????????????????, ????????? ???????? ?????? ???? ???????????????????? ?????? ???????????? ??????. ?????? ???? ?????????? ????????????, ?????? ???? ?????? ?????????????? ???????? ?????????????? ??????????. ???? ???????????????????? ???????????????? ?????? ?????????????????? ???? ?????????? ???????????????????? ???? ?????????????????? ???????????????? ?? ???????????? ??????????????????????????. ???????? ???????????? ?????? ?????????? ????????, ???????? ???? ???????????????????????????? ?????????????? ?????? ???? ?????????????? ???? ???????????????? ??????, ?????????????? ?????? ???? ????????????????????????. ?????? ???????????? ???????? ???? ?????????? ???? ????????????????????; ?????? ???? ?????????? ?????????????????????? ?????? ?????? ???????????????? ?????? ?????? ?? ?????? ???? ???????????????? ?????????????????? ?????? ?????????? ?????? ???????????? ???? ?????????? ?? ??????????????, ?????? ?????? ????????????, ???????? ???? ???????????? ???????? ??????, ???? ???????????? ???? ?????????? ?????????????? ???????????????? ??????????.",
    author: "Seneca",
  },
  {
    text: "Everlasting misfortune does have one blessing, that it ends up by toughening those whom it constantly afflicts.",
    author: "Seneca",
  },
  {
    text: "Our universe is a sorry little affair unless it has in it something for every age to investigate.",
    author: "Seneca",
  },
  {
    text: "Everyone goes out of life just as if he had but lately entered.",
    author: "Seneca",
  },
  {
    text: "the fates lead those who will those who won't they drag.",
    author: "Seneca",
  },
  { text: "While we are postponing, life speeds by.", author: "Seneca" },
  {
    text: "if we do not want to be overwhelmed and struck numb by rare events as if they were unprecedented ones; fortune needs envisaging in a thoroughly comprehensive way.",
    author: "Seneca",
  },
  {
    text: "But it is one thing to remember, another to know. Remembering is merely safeguarding something entrusted to the memory; knowing, however, means making everything your own; it means not depending upon the copy and not all the time glancing back at the master.",
    author: "Seneca",
  },
  {
    text: "The primary indication, to my thinking, of a well-ordered mind is a man's ability to remain in one place and linger in his own company.",
    author: "Seneca",
  },
  {
    text: "But happy is the man who has given it this impulse toward better things! He will place himself beyond the jurisdiction of chance; he will wisely control prosperity; he will lessen adversity, and will despise what others hold in admiration. It is the quality of a great soul to scorn great things and to prefer that which is ordinary rather than that which is too great. For the one condition is useful and lifegiving; but the other does harm just because it is excessive.",
    author: "Seneca",
  },
  {
    text: 'He who needs riches least, enjoys riches most."[8]',
    author: "Seneca",
  },
  {
    text: "It is not the man who has too little who is poor, but the one who hankers after more.",
    author: "Seneca",
  },
  {
    text: 'But consider whether you may not get more help from the customary method[1] than from that which is now commonly called a "breviary," though in the good old days, when real Latin was spoken, it was called a "summary."[2]',
    author: "Seneca",
  },
  {
    text: "Similarly, too rich a soil makes the grain fall flat, branches break down under too heavy a load, excessive productiveness does not bring fruit to ripeness.",
    author: "Seneca",
  },
  {
    text: "...nothing happens to the wise man against his expectation.",
    author: "Seneca",
  },
  {
    text: "Love sometimes injures. Friendship always benefits",
    author: "Seneca",
  },
  {
    text: "Reasons for anxiety will never be lacking, whether born of prosperity or of wretchedness; life pushes on in a succession of engrossments. We shall always pray for leisure, but never enjoy it.",
    author: "Seneca",
  },
  { text: "Ducunt volentem fata, nolentem trahunt.", author: "Seneca" },
  {
    text: "When one is busy and absorbed in one's work, the very absorption affords great delight; but when one has withdrawn one's hand from the completed masterpiece, the pleasure is not so keen.",
    author: "Seneca",
  },
  {
    text: "Daher mu?? man sich durchringen zur Freiheit; diese aber erreicht man durch nichts anderes als durch Gleichg??ltigkeit gegen das Schicksal.",
    author: "Seneca",
  },
  {
    text: "For we are not summoned according to the paristi register And besides there is no man so old as to make it sinful to expect another day. Now every day is another step in life.",
    author: "Seneca",
  },
  {
    text: "what's the use of overcoming opponent after opponent in the wrestling or boxing rings if you can be overcome by your temper?",
    author: "Seneca",
  },
  { text: "Who scorns his own life is lord of yours.", author: "Seneca" },
  {
    text: "You act like mortals in all that you fear, and like immortals in all that you desire.",
    author: "Seneca",
  },
  {
    text: "The soul is our king. If it be safe, the other functions remain on duty and serve with obedience; but the slightest lack of equilibrium in the soul causes them to waver along with it. And when the soul has yielded to pleasure, its functions and actions grow weak, and any undertaking comes from a nerveless and unsteady source.",
    author: "Seneca",
  },
  {
    text: "a good man will not waste himself upon mean and discreditable work or be busy merely for the sake of being busy.",
    author: "Seneca",
  },
  {
    text: "What is death? Either a transition or an end. I am not afraid of coming to an end, this being the same as never having begun, nor of transition, for I shall never be in confinement quite so cramped anywhere else as I am here.",
    author: "Seneca",
  },
  {
    text: "The world you see, nature's greatest and most glorious creation, and the human mind which gazes and wonders at it, and is the most splendid part of it, these are our own everlasting possessions and will remain with us as long as we ourselves remain. So, eager and upright, let us hasten with bold steps wherever circumstances take us, and let us journey through any countries whatever: there can be no place of exile within the world since nothing within the world is alien to men.",
    author: "Seneca",
  },
  {
    text: "Be careful, however, lest this reading of many authors and books of every sort may tend to make you discursive and unsteady. You must linger among a limited number of master thinkers, and digest their works, if you would derive ideas which shall win firm hold in your mind. Everywhere means nowhere. When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends. And the same thing must hold true of men who seek intimate acquaintance with no single author, but visit them all in a hasty and hurried manner.",
    author: "Seneca",
  },
  {
    text: "Theseus: What is the crime for which you must pay by death? Phaedra: My life.",
    author: "Seneca",
  },
  { text: "Vivere militare est", author: "Seneca" },
  {
    text: "[On Time] Men trifle with the most precious thing in the world; but they are blind to it because it is an incorporeal thing, because it does not come beneath the sight of the eyes, and for this reason it is counted a very cheap thing???nay, of almost no value at all.",
    author: "Seneca",
  },
  {
    text: 'We must limit the running to and fro which most men practise, rambling about houses, theatres, and marketplaces. They mind other men\'s business, and always seem as though they themselves had something to do. If you ask one of them as he comes out of his own door, "Whither are you going?" he will answer, "By Hercules, I do not know: but I shall see some people and do something." They wander purposelessly seeking for something to do, and do, not what they have made up their minds to do, but what has casually fallen in their way. They move uselessly and without any plan, just like ants crawling over bushes, which creep up to the top and then down to the bottom again without gaining anything. Many men spend their lives in exactly the same fashion, which one may call a state of restless indolence.',
    author: "Seneca",
  },
  {
    text: "Night brings our troubles to the light rather than banishes them.",
    author: "Seneca",
  },
  {
    text: "Of all men only those who find time for philosophy are at leisure, only they are truly alive; for it is not only their own lifetime they guard well; they add every age to their own; all the years that have passed before them they requisition for their store.",
    author: "Seneca",
  },
  {
    text: "Spurn everything that is added by way of decoration and display by unneccesary labour. Relect that nothing merits admiration except the spirit, the impressiveness of which prevents it from being impressed by anything.",
    author: "Seneca",
  },
  {
    text: "prosperity does not elevate the sage and adversity does not depress him. For he has always made the effort to rely as much as possible on himself and to derive all delight from himself.",
    author: "Seneca",
  },
  {
    text: "???????????? ??????, ?????? ???? ??????. ???????? ?? ?????????????? ?? ????????????, ???????????? - ?? ????????????????, ???????????? - ?? ???????????????????? ?? ?????? - ?? ????????????.",
    author: "Seneca",
  },
  {
    text: "I do not regard a man as poor, if the little which remains is enough for him.",
    author: "Seneca",
  },
  {
    text: "And so, if only we are willing to withdraw our necks from the yoke, we can keep as stout a heart against such terrors as these. But first and foremost, we must reject pleasures; they render us weak and womanish; they make great demands upon us, and, moreover, cause us to make great demands upon Fortune. Second, we must spurn wealth: wealth is the diploma of slavery. Abandon gold and silver, and whatever else is a burden upon our richly-furnished homes; liberty cannot be gained for nothing. If you set a high value on liberty, you must set a low value on everything else.",
    author: "Seneca",
  },
  {
    text: "learning how to live takes a whole life, and, which may surprise you more, it takes a whole life to learn how to die.",
    author: "Seneca",
  },
  {
    text: "pleasure, unless it has been kept within bounds, tends to rush headlong into the abyss of sorrow.",
    author: "Seneca",
  },
  {
    text: "What difference does it make whether they are slaves of free men, freeborn or freedmen, owing their freedom to the laws or to a gift made in the presence of friends? Wherever there is a human being, there exists the opportunity for an act of kindness.",
    author: "Seneca",
  },
  {
    text: "Furthermore, if you will pay close heed to the problem, you will find that the largest portion of our life passes while we are doing ill, a goodly share while we are doing nothing, and the whole while we are doing that which is not to the purpose.",
    author: "Seneca",
  },
  {
    text: "For all other things, which arouse our desires, depress the soul and weaken it, and when we think that they are uplifting the soul, they are merely puffing it up and cheating it with much emptiness. Therefore, that alone is good which will make the soul better.",
    author: "Seneca",
  },
  {
    text: "So it is inevitable that life will be not just very short but very miserable for those who acquire by great toil what they must keep by greater toil.",
    author: "Seneca",
  },
  {
    text: "?????? ?????? ???????????????? ?????? ???????? ???????? ?????????????? ???????????? ??????????????.",
    author: "Seneca",
  },
  {
    text: "Everyone hustles his life along, and is troubled by a longing for the future and weariness of the present.",
    author: "Seneca",
  },
  {
    text: 'Iniquum est collapsis manum non porrigere: commune hoc ius generis humani est" (It is wrong not to stretch out your hand to the fallen: that is a common law of the human race)',
    author: "Seneca",
  },
  {
    text: "The surest way for those who want to rule  is praising moderation, talking of peace and quiet.",
    author: "Seneca",
  },
  {
    text: "the man who spends all his time on his own needs, who organizes every day as though it were his last, neither longs for nor fears the next day.",
    author: "Seneca",
  },
  {
    text: "we deceive ourselves in thinking that death only follows life whereas it both goes before and will follow after it for where is the difference in not beginning or ceasing to exist the effect of both is not to be",
    author: "Seneca",
  },
  {
    text: "Errare humanum est, sed in errore perseverare diabolicum.",
    author: "Seneca",
  },
  {
    text: "How much better it is that you defeat anger than that it defeats itself!",
    author: "Seneca",
  },
  {
    text: "No man has escaped paying the penalty for being born.",
    author: "Seneca",
  },
  {
    text: 'No one," he says, "leaves this world in a different manner from one who has just been born." That is not true; for we are worse when we die than when we were born; but it is our fault, and not that of Nature.',
    author: "Seneca",
  },
  {
    text: "We live among wicked man through our own wickedness. One thing alone can bring us peace, an agreement to treat one another with kindness.",
    author: "Seneca",
  },
  {
    text: "it is only in the ideal or perfect state that the virtues of the good citizen and the good man are identical.",
    author: "Seneca",
  },
  { text: "Life is long if you know how to use it.", author: "Seneca" },
  {
    text: "Not all men are wounded in the same place; and so you ought to know what part of you is weak, so you can give it the most protection.",
    author: "Seneca",
  },
  {
    text: "Peace you can claim for yourself without being disliked by anyone, without any sense of loss, and without any pangs of spirit.",
    author: "Seneca",
  },
  {
    text: "When Zeno received news of a shipwreck and heard that all his luggage had been sunk he said, 'Fortune bids me to be a less encumbered philosopher.",
    author: "Seneca",
  },
  { text: "?????????? ???????? ???????????? ?????????? ???????? ????????.", author: "Seneca" },
  { text: "If you gain from a crime, you did it.", author: "Seneca" },
  {
    text: "that deed and word should be in accord, that a man should be equal to himself under all conditions, and always the same.",
    author: "Seneca",
  },
  {
    text: "Stop preventing philosophers from possessing money; no one has condemned wisdom to poverty. I will despise whatever lies in the domain of Fortune, but if a choice is offered, I will choose the better half.",
    author: "Seneca",
  },
  {
    text: "We should conduct ourselves not as if we ought to live for the body, but as if we could not live without it. Our too great love for it makes us restless with fears, burdens us with cares, and exposes us to insults.",
    author: "Seneca",
  },
  {
    text: "It takes all of our life to learn how to live, and ??? something that may surprise you more ??? it takes just as long to learn how to die.",
    author: "Seneca",
  },
  {
    text: "There is an old adage about gladiators, - that they plan their fight in the ring.",
    author: "Seneca",
  },
  {
    text: "it makes no difference how important the provocation may be, but into what kind of soul it penetrates. Similarly with fire; it does not matter how great is the flame, but what it falls upon.",
    author: "Seneca",
  },
  { text: "A great mind becomes a great fortune.", author: "Seneca" },
  {
    text: "Pomozi onome koji nosi teret a ne onome  koji ga spu??ta pored tebe.",
    author: "Seneca",
  },
  {
    text: "Whenever men have been thrust forward by fortune, whenever they have become part and parcel of another's influence, they have found abundant favour, their houses have been thronged, only so long as they themselves have kept their position; when they themselves have left it, they have slipped at once from the memory of men. But in the case of innate ability, the respect in which it is held increases, and not only does honour accrue to the man himself, but whatever has attached itself to his memory is passed on from one to another.",
    author: "Seneca",
  },
  {
    text: "No past life has been lived to lend us glory, and that which has existed before us is not ours.",
    author: "Seneca",
  },
  {
    text: "The difference here between the Epicurean and our own school is this: our wise man feels his troubles but overcomes them, while their wise man does not even feel them. We share with them the belief that the wise man is content with himself. Nevertheless, self-sufficient though he is, he still desires a friend, a neighbour, a companion. Notice how self-contented he is: on occasion such a man is content with a mere partial self ??? if he loses a hand as a result of war or disease, or has one of his eyes, or even both, put out in an accident, he will be satisfied with what remains of himself and be no less pleased with his body now that it is maimed and incomplete than he was when it was whole. But while he does not hanker after what he has lost, he does prefer not to lose them. And this is what we mean when we say the wise man is self-content; he is so in the sense that he is able to do without friends, not that he desires to do without them. When I speak of his being ???able??? to do this, what I am saying in fact amounts to this: he bears the loss of a friend with equanimity.",
    author: "Seneca",
  },
  {
    text: "Unless we are complete ingrates, the lives of all those men that preceded us should be seen as sacred. Their collective existence paved the way for our own time on Earth. Because",
    author: "Seneca",
  },
  {
    text: "What then is good? The knowledge of things. What is evil? The lack of knowledge of things.",
    author: "Seneca",
  },
  {
    text: "We are weak, watery beings standing in the midst of unrealities; therefore let us turn our minds to the things that are everlasting.",
    author: "Seneca",
  },
  {
    text: "But both courses are to be avoided; you should not copy the bad simply because they are many, nor should you hate the many because they are unlike you. Withdraw into yourself, as far as you can. Associate with those who will make a better man of you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach.",
    author: "Seneca",
  },
  {
    text: "Although the sum and substance of the happy life is unalloyed freedom from care, and though the secret of such freedom is unshaken confidence... men gather together that which causes worry.",
    author: "Seneca",
  },
  { text: "Truth often harms the one who digs it up.", author: "Seneca" },
  {
    text: "It is the evil mind that gets first hold on all of us.  Learning virtue means unlearning vice.  We",
    author: "Seneca",
  },
  {
    text: 'The following also was nobly spoken by someone or other, for it is doubtful who the author was; they asked him what was the object of all this study applied to an art that would reach but very few. He replied: "I am content with few, content with one, content with none at all." The third saying - and a noteworthy one, too - is by Epicurus,[4] written to one of the partners of his studies: "I write this not for the many, but for you; each of us is enough of an audience for the other." 12. Lay these words to heart, Lucilius, that you may scorn the pleasure which comes from the applause of the majority. Many men praise you; but have you any reason for being pleased with yourself, if you are a person whom the many can understand? Your good qualities should face inwards. Farewell.',
    author: "Seneca",
  },
  {
    text: "Why do we complain of Nature? She has shown herself kindly; life, if you know how to use it, is long. But one man is possessed by an avarice that is insatiable, another by a toilsome devotion to tasks that are useless; one man is besotted with wine, another is paralyzed by sloth; one man is exhausted by an ambition that always hangs upon the decision of others, another, driven on by the greed of the trader, is led over all lands and all seas by the hope of gain; some are tormented by a passion for war and are always either bent upon inflicting danger upon others or concerned about their own; some there are who are worn out by voluntary servitude in a thankless attendance upon the great; many are kept busy either in the pursuit of other men's fortune or in complaining of their own; many, following no fixed aim, shifting and inconstant and dissatisfied, are plunged by their fickleness into plans that are ever new; some have no fixed principle by which to direct their course, but Fate takes them unawares while they loll and yawn???so surely does it happen that I cannot doubt the truth of that utterance which the greatest of poets delivered with all the seeming of an oracle: \"The part of life we really live is small.\"5 For all the rest of existence is not life, but merely time. Vices beset us and surround us on every side, and they do not permit us to rise anew and lift up our eyes for the discernment of truth, but they keep us down when once they have overwhelmed us and we are chained to lust. Their victims are never allowed to return to their true selves; if ever they chance to find some release, like the waters of the deep sea which continue to heave even after the storm is past, they are tossed about, and no rest from their lusts abides. Think you that I am speaking of the wretches whose evils are admitted? Look at those whose prosperity men flock to behold; they are smothered by their blessings. To how many are riches a burden! From how many do eloquence and the daily straining to display their powers draw forth blood! How many are pale from constant pleasures! To how many does the throng of clients that crowd about them leave no freedom! In short, run through the list of all these men from the lowest to the highest???this man desires an advocate,6 this one answers the call, that one is on trial, that one defends him, that one gives sentence; no one asserts his claim to himself, everyone is wasted for the sake of another. Ask about the men whose names are known by heart, and you will see that these are the marks that distinguish them: A cultivates B and B cultivates C; no one is his own master. And then certain men show the most senseless indignation???they complain of the insolence of their superiors, because they were too busy to see them when they wished an audience! But can anyone have the hardihood to complain of the pride of another when he himself has no time to attend to himself? After all, no matter who you are, the great man does sometimes look toward you even if his face is insolent, he does sometimes condescend to listen to your words, he permits you to appear at his side; but you never deign to look upon yourself, to give ear to yourself. There is no reason, therefore, to count anyone in debt for such services, seeing that, when you performed them, you had no wish for another's company, but could not endure your own.",
    author: "Seneca",
  },
  {
    text: "In times of happiness, no point in shaking things up. But in a time of crisis, the safest thing is change.",
    author: "Seneca",
  },
  {
    text: "???because it is natural to touch more often the parts that hurt.",
    author: "Seneca",
  },
  {
    text: "No one dies except on his own day. You are throwing away none of your own time; for what you leave behind does not belong to you.",
    author: "Seneca",
  },
  {
    text: "His eyes blaze and sparkle, his whole face is crimson with blood that surges from the lowest depths of the heart, his lips quiver, his teeth are clenched, his hair bristles and stands on end, his breathing is forced and harsh, his joints crack from writhing, he groans and bellows, bursts out into speech with scarcely intelligible words, strikes his hands together continually, and stamps the ground with his feet; his whole body is excited and performs great angry threats; it is an ugly and horrible picture of distorted and swollen frenzy - you cannot tell if this vice is more execrable or more hideous.",
    author: "Seneca",
  },
  {
    text: "Consider the whole world reconnoitre individuals j who is there whose life is not taken up with providing for to morrow Do you ask what harm there is in this An infinite deal for such men do not live but are about to live they defer every thing from day to day however circumspect we are life will still outrun us.",
    author: "Seneca",
  },
  {
    text: "Would you rather be poor and sated, or rich and hungry? Prosperity is not only greedy, but it also lies exposed to the greed of others. And as long as nothing satisfies you, you yourself cannot satisfy others.",
    author: "Seneca",
  },
  {
    text: "It is wrong to live under constraint; but no man is constrained to live under constraint.",
    author: "Seneca",
  },
  {
    text: "No good thing renders its possessor happy, unless his mind is reconciled to the possibility of loss.",
    author: "Seneca",
  },
  { text: "Chi ?? dappertutto, non ?? da nessuna parte.", author: "Seneca" },
  {
    text: "There is no great genius without some touch of madness.",
    author: "Seneca",
  },
  {
    text: "Persevera ut coepisti, et quantum potes propera.",
    author: "Seneca",
  },
  {
    text: "Epicurus: ???If you live according to nature, you will never be poor; if you live according to opinion, you will never be rich.",
    author: "Seneca",
  },
  {
    text: "The road is long if one proceeds by way of precepts but short and effectual if by way of personal example.",
    author: "Seneca",
  },
  {
    text: "There is no man to whom a good mind comes before an evil one. It is the evil mind that gets first hold on all of us. Learning virtue means unlearning vice. We should therefore proceed to the task of freeing ourselves from faults with all the more courage because, when once committed to us, the good is an everlasting possession; virtue is not unlearned.",
    author: "Seneca",
  },
  {
    text: "what is sweeter than to be so valued by one's wife that one becomes more valuable to oneself for this reason? Hence my dear Paulina is able to make me responsible, not only for her fears, but also for my own.",
    author: "Seneca",
  },
  {
    text: "The fool, with all his other faults, has this also, he is always getting ready to live.",
    author: "Seneca",
  },
  {
    text: "Life???s like a play. It???s not the length but the excellence of the acting that matters.",
    author: "Seneca",
  },
  {
    text: "I think the pinnacle of misfortune is to be forced by chance to want things one should loathe.",
    author: "Seneca",
  },
  {
    text: "To want to know more than is sufficient is a form of intemperance. Apart from which this kind of obsession with the liberal arts turns people into pedantic, irritating, tactless, self-satisfied bores, not learning what they need simply because they spend their time learning things they will never need. The scholar Didymus wrote four thousand works: I should feel sorry him if he had merely read so many useless works.",
    author: "Seneca",
  },
  {
    text: "Huius (sapientis) opus unum est de divinis humanisque verum invenire; ab hac numquam recedit religio, pietas, iustitia ...",
    author: "Seneca",
  },
  {
    text: "Whereas we believe lightning to be released as a result of the collision of clouds, they believe that the clouds collide so as to release lightning: for as they attribute all to deity, they are led to believe not that things have a meaning insofar as they occur, but rather that they occur because they must have a meaning.",
    author: "Seneca",
  },
  {
    text: "A grey-haired wrinkled man has not necessarily lived long. More accurately, he has existed long.",
    author: "Seneca",
  },
  {
    text: "For to be afflicted with endless sorrow at the loss of someone very dear is foolish self-indulgence, and to feel none is inhuman callousness.",
    author: "Seneca",
  },
  {
    text: "Ubicumque ex aequo ad caelum erigitur acies, paribus intervallis omnia divina ab omnibus humanis distant - From whatever point on the earth's surface you look up to heaven the same distance lies between the realms of gods and men",
    author: "Seneca",
  },
  {
    text: "The best compromise between love and good sense is both to feel longing and to conquer it.",
    author: "Seneca",
  },
  {
    text: "Kings hate to hear the things they order spoken.",
    author: "Seneca",
  },
  {
    text: "No delicate breeze brings comfort with icy breath of wind to the hearts which pant on the flames.",
    author: "Seneca",
  },
  {
    text: "Living is the least important activity of the preoccupied man;",
    author: "Seneca",
  },
  {
    text: "Turannius was an old man who, after he turned ninety, was released from his official duties by an act of Caesar. He had the idea to be laid out on his bed, surrounded by family, and to receive visitors as if he was dead. The entire household mourned the passing of its master and the sorrow was only lifted when the crazy loon returned to his normal routine of idle busy-ness. Hard to believe that a man could become so bored as to get a thrill out of being dead for a few days.",
    author: "Seneca",
  },
  {
    text: "After friendship is formed you must trust, but before that you must judge.",
    author: "Seneca",
  },
  { text: "Men learn as they teach.", author: "Seneca" },
  {
    text: "The body???s needs are few: it wants to be free from cold, to banish hunger and thirst with nourishment; if we long for anything more we are exerting ourselves to serve our vices, not our needs.",
    author: "Seneca",
  },
  {
    text: "You must linger among a limited number of master thinkers, and digest their works, if you would derive ideas which shall win firm hold in your mind. Everywhere means nowhere.",
    author: "Seneca",
  },
  {
    text: "All things were ready for us at our birth; it is we that have made everything difficult for ourselves, through our disdain for what is easy.",
    author: "Seneca",
  },
  {
    text: "The belly will not listen to advice; it makes demands, it importunes. And yet it is not a troublesome creditor; you can send it away at small cost, provided only that you give it what you owe, not merely all you are able to",
    author: "Seneca",
  },
  { text: "Ungoverned anger begets madness.", author: "Seneca" },
  {
    text: "The wise man, he said, lacked nothing but needed a great number of things, whereas 'the fool, on the other hand, needs nothing (for he does not know how to use anything) but lack everything.",
    author: "Seneca",
  },
  {
    text: "What then is good? The knowledge of things. What is evil? The lack of knowledge of things. Your wise man, who is also a craftsman, will reject or choose in each case as it suits the occasion; but he does not fear that which he rejects, nor does he admire that which he chooses, if only he has a stout and unconquerable soul.",
    author: "Seneca",
  },
  {
    text: "Very many people spend money in ways quite different from those that their natural tastes would enjoin, merely because the respect of their neighbors depends upon their possession of a good car and their ability to give good dinners. As a matter of fact, any man who can obviously afford a car but genuinely prefers travels or a good library will in the end be much more respected than if he behaved exactly like everyone else.",
    author: "Seneca",
  },
  {
    text: "Any man, who does not think that what he has is more than ample, is an unhappy man, even if he is the master of the whole world.",
    author: "Seneca",
  },
  {
    text: "No es que dispongamos de poco tiempo, es m??s bien que perdemos mucho.",
    author: "Seneca",
  },
  {
    text: "The poet speaks to you about the day, and about this very day that is flying. Is there, then, any doubt that for hapless mortals, that is, for men who are engrossed, the fairest day is ever the first to flee? Old age surprises them while their minds are still childish, and they come to it unprepared and unarmed, for they have made no provision for it; they have stumbled upon it suddenly and unexpectedly, they did not notice that it was drawing nearer day by day. Even as conversation or reading or deep meditation on some subject beguiles the traveller, and he finds that he has reached the end of his journey before he was aware that he was approaching it, just so with this unceasing and most swift journey of life, which we make at the same pace whether waking or sleeping; those who are engrossed become aware of it only at the end.",
    author: "Seneca",
  },
  {
    text: "let us keep to the way which Nature has mapped out for us, and let us not swerve therefrom. If we follow Nature, all is easy and unobstructed; but if we combat Nature, our life differs not a whit from that of men who row against the current.",
    author: "Seneca",
  },
  {
    text: "It does not make any difference what a man say; what matters is how he feels, and not how he feels on one particular day but how he feels at all times.",
    author: "Seneca",
  },
  {
    text: "For what can be above the man who is above fortune?",
    author: "Seneca",
  },
  {
    text: "It is so, my dear Lucilius; there are a few men whom slavery holds fast, but there are many more who hold fast to slavery.",
    author: "Seneca",
  },
  {
    text: "The past is ours, and there is nothing more secure for us than that which has been. We are ungrateful for past gains, because we hope for the future, as if the future ??? if so be that any future is ours ??? will not be quickly blended with the past.",
    author: "Seneca",
  },
  {
    text: "XVI. But those who forget the past, neglect the present, and fear for the future have a life that is very brief and troubled; when they have reached the end of it, the poor wretches perceive too late that for such a long while they have been busied in doing nothing. Nor because they sometimes invoke death, have you any reason to think it any proof that they find life long. In their folly they are harassed by shifting emotions which rush them into the very things they dread; they often pray for death because they fear it. And, too, you have no reason to think that this is any proof that they are living a long time???the fact that the day often seems to them long, the fact that they complain that the hours pass slowly until the time set for dinner arrives; for, whenever their engrossments fail them, they are restless because they are left with nothing to do, and they do not know how to dispose of their leisure or to drag out the time. And so they strive for something else to occupy them, and all the intervening time is irksome; exactly as they do when a gladiatorial exhibition\\b is been announced, or when they are waiting for the appointed time of some other show or amusement, they want to skip over the days that lie between. All postponement of something they hope for seems long to them. Yet the time which they enjoy is short and swift, and it is made much shorter by their own fault; for they flee from one pleasure to another and cannot remain fixed in one desire. Their days are not long to them, but hateful; yet, on the other hand, how scanty seem the nights which they spend in the arms of a harlot or in wine! It is this also that accounts for the madness of poets in fostering human frailties by the tales in which they represent that Jupiter under the enticement of the pleasures of a lover doubled the length of the night. For what is it but to inflame our vices to inscribe the name of the gods as their sponsors, and to present the excused indulgence of divinity as an example to our own weakness? Can the nights which they pay for so dearly fail to seem all too short to these men? They lose the day in expectation of the night, and the night in fear of the dawn.",
    author: "Seneca",
  },
  {
    text: "Only the wise man is content with what is his. All foolishness suffers the burden of dissatisfaction with itself.",
    author: "Seneca",
  },
  {
    text: "But every great and overpowering grief must take away the capacity to choose words, since it often stifles the voice itself.",
    author: "Seneca",
  },
  {
    text: "No man is so faint-hearted that he would rather hang in suspense for ever than drop once for all.",
    author: "Seneca",
  },
  {
    text: 'if you wish Pythocles to have pleasure for ever, do not add to his pleasures, but subtract from his desires";',
    author: "Seneca",
  },
  {
    text: "Treat your inferiors in the way in which you would like to be treated by your own superiors. And whenever it strikes you how much power you have over your slave, let it also strike you that your own master has just as much power over you.",
    author: "Seneca",
  },
  {
    text: 'the wise man is self-sufficient, that he can do without friends, not that he desires to do without them. When I say "can," I mean this: he endures the loss of a friend with equanimity.',
    author: "Seneca",
  },
  {
    text: "if you wish to make Pythocles an old man, filling his life to the full, do not add to his years, but subtract from his desires.",
    author: "Seneca",
  },
  {
    text: "Some men have shrunk so far into dark corners that objects in bright daylight seem quite blurred to them.??? A",
    author: "Seneca",
  },
  {
    text: "Mit dem Leben ist es wie mit einem Theaterst??ck; es kommt nicht darauf an, wie lange es ist, sondern wie bunt.",
    author: "Seneca",
  },
  {
    text: "It is the superfluous things for which men sweat, - the superfluous things that wear our togas threadbare, that force us to grow old in camp, that dash us upon foreign shores. That which is enough is ready to our hands. He who has made a fair compact with poverty is rich.",
    author: "Seneca",
  },
  {
    text: "Could anything be more stupid than to praise a person for something that is not his? Or more crazy than admiring things which in a single moment can be transferred to another?",
    author: "Seneca",
  },
  {
    text: "The actual time you have ??? which reason can prolong though it naturally passes quickly ??? inevitably escapes you rapidly: for you do not grasp it or hold it back or try to delay that swiftest of all things, but you let it slip away as though it were something superfluous and replaceable.",
    author: "Seneca",
  },
  {
    text: "this will not be a gentle prescription for healing, but cautery and the knife. What shall I achieve? That a soul which has conquered so many miseries will be ashamed to worry about one more wound in a body which already has so many scars.",
    author: "Seneca",
  },
  {
    text: "That which takes effect by chance is not an art.",
    author: "Seneca",
  },
  {
    text: "For some persons the remedy should be merely prescribed; in the case of others, it should be forced down their throats. ",
    author: "Seneca",
  },
  {
    text: "It is unbearable to be deprived of your country.' Come now, look at this mass of people whom the buildings of huge Rome can scarcely hold: most of that crowd are deprived of their country.",
    author: "Seneca",
  },
  {
    text: "Wealth is the slave of the wise man and master of the fool.",
    author: "Seneca",
  },
  {
    text: "Above all, my dear Lucilius, make this your business: learn how to feel joy.",
    author: "Seneca",
  },
  {
    text: "What's the good of dragging up sufferings which are over, of being unhappy now just because you were then?",
    author: "Seneca",
  },
  {
    text: "Nature does not reveal her mysteries once and for all.",
    author: "Seneca",
  },
  {
    text: "I have never wished to cater to the crowd; for what I know, they do not approve, and what they approve, I do not know.",
    author: "Seneca",
  },
  {
    text: "What really ruins our characters is the fact that none of us looks back over his life. We think about what we are going to do, and only rarely of that, and fail to think about what we have done, yet any plans for the future are dependent on the past.",
    author: "Seneca",
  },
  {
    text: "And what is more wretched than a man who forgets his benefits and clings to his injuries?",
    author: "Seneca",
  },
  {
    text: "When we have done everything within our power, we shall possess a great deal: but we once possessed the world.",
    author: "Seneca",
  },
  {
    text: "You can put up with a change of place if only the place is changed.",
    author: "Seneca",
  },
  {
    text: "We Stoics are not subjects of a despot: each of us lays claim to his own freedom.",
    author: "Seneca",
  },
  {
    text: "And do you know why we have not the power to attain this Stoic ideal? It is because we refuse to believe in our power. Nay, of a surety, there is something else which plays a part: it is because we are in love with our vices; we uphold them and prefer to make excuses for them rather than shake them off. We mortals have been endowed with sufficient strength by nature, if only we use this strength, if only we concentrate our powers and rouse them all to help us or at least not to hinder us. The reason is unwillingness, the excuse, inability.",
    author: "Seneca",
  },
  {
    text: "When things are at their worst,  there are no tears.",
    author: "Seneca",
  },
  {
    text: 'You may say; "What then? If yonder man, rich by base means, and yonder man, lord of many but slave of more, shall call themselves happy, will their own opinion make them happy?" It matters not what one says, but what one feels; also, not how one feels on one particular day, but how one feels at all times. There is no reason, however, why you should fear that this great privilege will fall into unworthy hands; only the wise man is pleased with his own. Folly is ever troubled with weariness of itself.',
    author: "Seneca",
  },
  {
    text: "Will you not understand that no man should be tormented by the future? The man who has been told that he will have to endure torture fifty years from now is not disturbed thereby, unless he has leaped over the intervening years, and has projected himself into the trouble that is destined to arrive a generation later. In the same way, souls that enjoy being sick and that seize upon excuses for sorrow are saddened by events long past and effaced from the records. Past and future are both absent; we feel neither of them. But there can be no pain except as the result of what you feel.",
    author: "Seneca",
  },
  {
    text: "Then it will be in our power to understand how contemptible are the things we admire ??? like children who regard every toy as a thing of value, who cherish necklaces bought at the price of a mere penny as more dear than their parents or than their brothers. And what, then, as Aristo says, is the difference between ourselves and these children, except that we elders go crazy over paintings and sculpture, and that our folly costs us dearer?",
    author: "Seneca",
  },
  {
    text: "...speak ill of yourself when by yourself; then you will become accustomed both to speak and to hear the truth.",
    author: "Seneca",
  },
  {
    text: "Besides, he who is feared, fears also; no one has been able to arouse terror and live in peace of mind.",
    author: "Seneca",
  },
  {
    text: "You must linger among a limited number of master thinkers, and digest their works, if you would derive ideas which shall win firm hold in your mind. ",
    author: "Seneca",
  },
  {
    text: "Everywhere means nowhere. When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends.",
    author: "Seneca",
  },
  {
    text: "Where, then, lies the mistake, since all men crave the happy life?  It is that they regard the means for producing happiness as happiness itself, and, while seeking happiness, they are really fleeing from it. For",
    author: "Seneca",
  },
  {
    text: "We all rush through life torn between a desire for the future and a weariness of the present. But he who devotes his time to his own needs, who plans out every day as if it were his last, neither longs for nor fears for tomorrow. How",
    author: "Seneca",
  },
  {
    text: "None of it lay fallow and neglected, none of it under another???s control; for being an extremely thrifty guardian of his time he never found anything for which it was worth exchanging. So he had enough time; but those into whose lives the public have made great inroads inevitably have too little.",
    author: "Seneca",
  },
  {
    text: 'Though all the brilliant intellects of the ages were to concentrate upon this one theme, never could they adequately express their wonder at this dense darkness of the human mind. Men do not suffer anyone to seize their estates, and they rush to stones and arms if there is even the slightest dispute about the limit of their lands, yet they allow others to trespass upon their life???nay, they themselves even lead in those who will eventually possess it. No one is to be found who is willing to distribute his money, yet among how many does each one of us distribute his life! In guarding their fortune men are often closefisted, yet, when it comes to the matter of wasting time, in the case of the one thing in which it is right to be miserly, they show themselves most prodigal. And so I should like to lay hold upon someone from the company of older men and say: "I see that you have reached the farthest limit of human life, you are pressing hard upon your hundredth year, or are even beyond it; come now, recall your life and make a reckoning. Consider how much of your time was taken up with a moneylender, how much with a mistress, how much with a patron, how much with a client, how much in wrangling with your wife, how much in punishing your slaves, how much in rushing about the city on social duties. Add the diseases which we have caused by our own acts, add, too, the time that has lain idle and unused; you will see that you have fewer years to your credit than you count. Look back in memory and consider when you ever had a fixed plan, how few days have passed as you had intended, when you were ever at your own disposal, when your face ever wore its natural expression, when your mind was ever unperturbed, what work you have achieved in so long a life, how many have robbed you of life when you were not aware of what you were losing, how much was taken up in useless sorrow, in foolish joy, in greedy desire, in the allurements of society, how little of yourself was left to you; you will perceive that you are dying before your season!"7 What, then, is the reason of this? You live as if you were destined to live forever, no thought of your frailty ever enters your head, of how much time has already gone by you take no heed. You squander time as if you drew from a full and abundant supply, though all the while that day which you bestow on some person or thing is perhaps your last. You have all the fears of mortals and all the desires of immortals. You will hear many men saying: "After my fiftieth year I shall retire into leisure, my sixtieth year shall release me from public duties." And what guarantee, pray, have you that your life will last longer? Who will suffer your course to be just as you plan it? Are you not ashamed to reserve for yourself only the remnant of life, and to set apart for wisdom only that time which cannot be devoted to any business? How late it is to begin to live just when we must cease to live! What foolish forgetfulness of mortality to postpone wholesome plans to the fiftieth and sixtieth year, and to intend to begin life at a point to which few have attained!',
    author: "Seneca",
  },
  {
    text: "If an evil has been pondered beforehand, the blow is gentle when it comes.",
    author: "Seneca",
  },
  {
    text: "So you must not think a man has lived long because he has white hair and wrinkles: he has not lived long, just existed long. For suppose you should think that a man had had a long voyage who had been caught in a raging storm as he left harbour, and carried hither and thither and driven round and round in a circle by the rage of opposing winds? He did not have a long voyage, just a long tossing about.",
    author: "Seneca",
  },
  {
    text: "In guarding their fortune men are often closefisted, yet, when it comes to the matter of wasting time, in the case of the one thing in which it is right to be miserly, they show themselves most prodigal.",
    author: "Seneca",
  },
  {
    text: "Life???s finest day for wretched mortals here Is always first to flee.",
    author: "Seneca",
  },
  { text: "Qui mori didicit servire dedidicit.", author: "Seneca" },
  {
    text: "None of these will force you to die, but all will teach you how to die. None of them will exhaust your years, but each will contribute his years to yours.",
    author: "Seneca",
  },
  {
    text: 'Socrates made the same remark to one who complained; he said: "Why do you wonder that globe-trotting does not help you, seeing that you always take yourself with you? The reason which set you wandering is ever at your heels.',
    author: "Seneca",
  },
  {
    text: "L???assalto delle avversit?? non smuove lo spirito dell???uomo forte: egli rimane impassibile e qualsiasi cosa accada l???assimila a s??, perch?? ?? pi?? potente di tutte le cose esterne.",
    author: "Seneca",
  },
  {
    text: "It is regret for the absence of his loved one which causes a mourner to grieve: yet it is clear that this in itself is bearable enough; for we do not weep at their being absent or intending to be absent during their lifetime, although when they leave our sight we have no more pleasure in them. What tortures us, therefore, is an idea.",
    author: "Seneca",
  },
  {
    text: "...certain people have good, ordinary blood and others have an animated, lively sort of blood that comes to the face quickly.",
    author: "Seneca",
  },
  {
    text: "There is no great genius without tincture of madness.",
    author: "Seneca",
  },
  {
    text: "Fire tests gold and adversity tests the brave.",
    author: "Seneca",
  },
  {
    text: 'Despise everything that useless toil creates as an ornament and an object of beauty. And reflect that nothing except the soul is worthy of wonder; for to the soul, if it be great, naught is great."[4]',
    author: "Seneca",
  },
  {
    text: 'Well then, shall we act like other men? Shall there be no distinction between ourselves and the world?" Yes, a very great one; let men find that we are unlike the common herd, if they look closely.',
    author: "Seneca",
  },
  {
    text: "No matter how many men you kill, you can't kill your successor.",
    author: "Seneca",
  },
  {
    text: "Virtue is not vouchsafed to a soul unless that soul has been trained and taught, and by unremitting practice brought to perfection.",
    author: "Seneca",
  },
  {
    text: "His last words heard on earth came after he'd let off a louder noise from his easiest channel of communication: 'Oh my! I think I've shit myself.' For all I know, he did. He certainly shat on everything else.",
    author: "Seneca",
  },
  {
    text: "Again, do you call those men leisured who spend many hours at the barber???s simply to cut whatever grew overnight, to have a serious debate about every separate hair, to tidy up disarranged locks or to train thinning ones from the sides to lie over the forehead?",
    author: "Seneca",
  },
  {
    text: "I shall expose and reopen all the wounds which have already healed.",
    author: "Seneca",
  },
  {
    text: "They lose the day in waiting for the night, and the night in fearing the dawn.",
    author: "Seneca",
  },
  {
    text: "The day which we fear as our last  is but the birthday of eternity.",
    author: "Seneca",
  },
  {
    text: "Can you no longer see a road to freedom? It's right in front of you. You need only turn over your wrists.",
    author: "Seneca",
  },
  {
    text: "It is in times of security that the spirit should be preparing itself for difficult times; while fortune is bestowing favors on it is then is the time for it to be strengthened against her rebuffs.",
    author: "Seneca",
  },
  {
    text: "No one becomes a laughingstock who laughs at himself.",
    author: "Seneca",
  },
  {
    text: "Life is long enough, and it has been given in sufficiently generous measure to allow the accomplishment of the very greatest things if the whole of it is well invested.",
    author: "Seneca",
  },
  {
    text: 'There is nothing in the world so much admired as a man who knows how to bear unhappiness with courage." ??? Seneca',
    author: "Seneca",
  },
  {
    text: "A person teaching and a person learning,' he said, 'should have the same end in view: the improvement of the latter.",
    author: "Seneca",
  },
  {
    text: "To have may be taken from us, to have had, never. A man is thankless in the highest degree if, after losing something, he feels no obligation for having received it.",
    author: "Seneca",
  },
  {
    text: "Hold fast, then, to this sound and wholesome rule of life - that you indulge the body only so far as is needful for good health. The body should be treated more rigorously, that it may not be disobedient to the mind.",
    author: "Seneca",
  },
  {
    text: "I never spend a day in idleness; I appropriate even a part of the night for study. I do not allow time for sleep but yield to it when I must, and when my eyes are wearied with waking and ready to fall shut, I keep them at their task. 2. I have withdrawn not only from men, but from affairs, especially from my own affairs; I am working for later generations, writing down some ideas that may be of assistance to them.",
    author: "Seneca",
  },
  {
    text: "It is a small part of life we really live.??? Indeed, all the rest is not life but merely time.",
    author: "Seneca",
  },
  {
    text: 'we are all bound by this oath: "To bear the ills of mortal life, and to submit with a good grace to what we cannot avoid.',
    author: "Seneca",
  },
  {
    text: "You must reflect that fettered prisoners only at first feel the weight of the shackles on their legs: in time, when they have decided not to struggle against but to bear them, they learn from necessity to endure with fortitude, and from habit to endure with ease.",
    author: "Seneca",
  },
  {
    text: "Men do not let anyone seize their estates, and if there is the slightest dispute about their boundaries they rush to stones and arms; but they allow others to encroach on their lives ??? why, they themselves even invite in those who will take over their lives.",
    author: "Seneca",
  },
  {
    text: "Think for a long time whether or not you should admit a given person to your friendship. But when you have decided to do so, welcome him heart and soul, and speak as unreservedly with him as you would with yourself",
    author: "Seneca",
  },
  {
    text: "Who can doubt, my dear Lucilius, that life is the gift of the immortal gods, but that living well1 is the gift of philosophy?",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested.",
    author: "Seneca",
  },
  {
    text: "Poor woman, do you want to know where hatred ends? Look to love.",
    author: "Seneca",
  },
  {
    text: "The first thing which philosophy undertakes to give is fellow-feeling with all men; in other words, sympathy and sociability.",
    author: "Seneca",
  },
  {
    text: ": dove corri,figlia, lontano dalla tua casa? Fermati, calmati, frena la tua furia. Come una menade, che, alla cieca, g?? invasata da dio, si lancia e porta i suoi passi sulla cima del Pindo nevoso o sui gioghi di Nisa, cos?? Medea corre qua e l?? con gesti selvaggi, mostrando in volto i segni di un furore delirante. Il suo viso ?? in fiamme, il respiro affannoso, grida, il pianto le sgorga dagli occhi, di colpo si mette a ridere. ?? in preda ad ogni emozione. Esita, minaccia, avvampa, si lamenta, singhiozza. Dove si volger?? l???empito del suo cuore? Dove spinger?? le sue minacce? Dove andr?? ad infrangersi questo vortice? Il suo furore trabocca. No, non ?? da poco, non ?? comune il delitto che medita tra s??. Superer?? se stessa, Medea. Li conosco, io, i segni del suo antico furore. Qualcosa di inaudito sta sopra di noi, qualcosa di grande, selvaggio, empio: lo leggo nel suo volto delirante. O d??i. fate che la mia paura sia vana. : Vuoi sapere, povera te, sin dove pu?? spingersi l???odio? Sin dove l???amore",
    author: "Seneca",
  },
  {
    text: "But whatever the quality of my works may be, read them as if I were still seeking, and were not aware of, the truth, and were seeking it obstinately, too. For I have sold myself to no man; I bear the name of no master. I give much credit to the judgment of great men; but I claim something also for my own. For these men, too, have left to us, not positive discoveries, but problems whose solution is still to be sought.",
    author: "Seneca",
  },
  {
    text: "Do you think that the man has any thought of mending his ways who counts over his vices as if they were virtues? Therefore, as far as possible, prove yourself guilty, hunt up charges against yourself; play the part, first of accuser, then of judge, last of intercessor. At times be harsh with yourself.[7]",
    author: "Seneca",
  },
  {
    text: "Every pleasure is most valued when it is coming to an end.",
    author: "Seneca",
  },
  {
    text: "The acquisition of riches has been for many men, not an end, but a change, of troubles.",
    author: "Seneca",
  },
  {
    text: "Do you ask what is the foundation of a sound mind? It is, not to find joy in useless things. ",
    author: "Seneca",
  },
  {
    text: "For what good does it do us to guide a horse and control his speed with the curb, and then find that our own passions, utterly uncurbed, bolt with us? Or to beat many opponents in wrestling or boxing, and then to find that we ourselves are beaten by anger?",
    author: "Seneca",
  },
  {
    text: "Reason shows us there is nothing either good or bad but thinking makes it so.",
    author: "Seneca",
  },
  { text: "Time heals what reason cannot.", author: "Seneca" },
  {
    text: "We are born under circumstances that would be favorable if we did not abandon them. It was nature's intention that there should be no need of great equipment for a good life: every individual can make himself happy.",
    author: "Seneca",
  },
  {
    text: 'Pacuvius, who by long occupancy made Syria his own,8 used to hold a regular burial sacrifice in his own honour, with wine and the usual funeral feasting, and then would have himself carried from the dining-room to his chamber, while eunuchs applauded and sang in Greek to a musical accompaniment: "He has lived his life, he has lived his life!',
    author: "Seneca",
  },
  {
    text: "Virtue is according to nature; vice is opposed to it and hostile.",
    author: "Seneca",
  },
  {
    text: "Most human beings, Paulinus, complain about the meanness of nature, because we are born for a brief span of life, and because this spell of time that has been given to us rushes by so swiftly and rapidly that with very few exceptions life ceases for the rest of us just when we are getting ready for it.",
    author: "Seneca",
  },
  {
    text: "We shall consider later whether these evils derive their power from their own strength, or from our own weakness.",
    author: "Seneca",
  },
  {
    text: "No man can have a peaceful life who thinks too much about lengthening it, or believes that living through many consulships is a great blessing. 5. Rehearse this thought every day, that you may be able to depart from life contentedly; for many men clutch and cling to life, even as those who are carried down a rushing stream clutch and cling to briars and sharp rocks.",
    author: "Seneca",
  },
  {
    text: "For if we could be satisfied with anything, we should have been satisfied long ago.",
    author: "Seneca",
  },
  {
    text: "Therefore, nothing ought to be unexpected by us. Our minds should be sent forward in advance to meet all problems, and we should consider, not what is wont to happen, but what can happen.",
    author: "Seneca",
  },
  {
    text: "We should not manifest surprise at any sort of condition into which we are born, and which should be lamented by no one, simply because it is equally ordained for all. Yes, I say, equally ordained; for a man might have experienced even that which he has escaped. And an equal law consists, not of that which all have experienced, but of that which is laid down for all. Be sure to prescribe for your mind this sense of equity; we should pay without complaint the tax of our mortality.",
    author: "Seneca",
  },
  {
    text: "We must, therefore, take a less serious view of all things, tolerating them in a spirit of acceptance: It is more human to laugh at life than to weep tears over it.",
    author: "Seneca",
  },
  {
    text: "Pain is slight if opinion has added nothing to it; ... in thinking it slight, you will make it slight. Everything depends on opinion. It is according to opinion that we suffer. A man is as wretched as he has convinced himself that he is.",
    author: "Seneca",
  },
  {
    text: "The fool's life is empty of gratitude and full of fears; its course lies wholly toward the future.",
    author: "Seneca",
  },
  {
    text: 'In sapientis quoque animo, etiam cum uulnus sanatum est, cicatrix manet." : "The wise man\'s mind will keep its scar long after the wound has healed',
    author: "Seneca",
  },
  {
    text: "do the one thing that can render you really happy: cast aside and trample under foot all the things that glitter outwardly and are held out to you a by another or as obtainable from another;",
    author: "Seneca",
  },
  {
    text: "Be aware, then, that every human condition is subject to change, and that whatever mishap can befall any man can also happen to you.",
    author: "Seneca",
  },
  {
    text: "How long will this last???? This feeling has caused kings to bewail their power, and they were not so much delighted by the greatness of their fortune as terrified by the thought of its inevitable end.",
    author: "Seneca",
  },
  {
    text: "???? ???????? ???? ?????????? ?????????? ???? ?????????? ?????? ???? ?????????? ????????.",
    author: "Seneca",
  },
  {
    text: "In the ashes all men are levelled. We're born unequal, we die equal.",
    author: "Seneca",
  },
  {
    text: "A man should therefore grow accustomed to his state and complain about it as little as possible, seizing upon whatever good it may have.",
    author: "Seneca",
  },
  { text: "???? ???????????? ???? ?????????? ?????? ????????????.", author: "Seneca" },
  {
    text: "No condition is so distressing that a balanced mind cannot find some comfort in it.",
    author: "Seneca",
  },
  {
    text: "We do not need many words, but, rather, effective words.",
    author: "Seneca",
  },
  {
    text: "Anger will abate and become more controlled when it knows it must come before a judge each day.",
    author: "Seneca",
  },
  {
    text: "???????????? : ?????? ?????????? ???????? ???????????? ?? ???????????? : ?????? ???? ???????????? ???? ???????????? ?????? ???????????? . ????????????????.",
    author: "Seneca",
  },
  {
    text: "we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it.",
    author: "Seneca",
  },
  {
    text: "Your ears are not simply for hearing tuneful sounds, mellow and sweetly played in harmony: you should also listen to laughter and weeping, to words flattering and acrimonious, to merriment and distress, to the language of men and to the roars and barking of animals.",
    author: "Seneca",
  },
  { text: "Quam bene vivas refert, non quam diu", author: "Seneca" },
  {
    text: "There is no favorable wind for the sailor who doesn???t know where to go",
    author: "Seneca",
  },
  {
    text: "I realize that these mental agitations of mine are not dangerous and won???t produce a storm. To express my complaint for you in a realistic metaphor, I am harried not by a tempest but by sea-sickness.",
    author: "Seneca",
  },
  {
    text: "I am often filled with wonder when I see some men demanding the time of others and those from whom they ask it most indulgent. Both of them fix their eyes on the object of the request for time, neither of them on the time itself; just as if what is asked were nothing, what is given, nothing. Men trifle with the most precious thing in the world; but they are blind to it because it is an incorporeal thing, because it does not come beneath the sight of the eyes, and for this reason it is counted a very cheap thing???nay, of almost no value at all.",
    author: "Seneca",
  },
  {
    text: "why should I demand of Fortune that she give rather than demand of myself that I should not crave? ",
    author: "Seneca",
  },
  { text: "Restless people often pretend to be calm.", author: "Seneca" },
  {
    text: "How much better would it now be to win friends, pacify enemies, serve your country, turn your attention to private affairs, than to look around to see what harm you can do to some individual, what wound you can inflict on his good name, or his finances, or his person, though you cannot achieve this end without a dangerous struggle, even if your opponent is lower-born than you!",
    author: "Seneca",
  },
  {
    text: "It is precisely in times of immunity from care that the soul should toughen itself beforehand for occasions of greater stress, and it is while Fortune is kind that it should fortify itself against her violence.",
    author: "Seneca",
  },
  {
    text: "Es ist nicht wenig Zeit, die wir haben, sondern es ist viel Zeit, die wir nicht nutzen.",
    author: "Seneca",
  },
  { text: "vita nec bonum nec malum est.", author: "Seneca" },
  {
    text: "it is not pleasant to recall something they must view with regret. They are, therefore, unwilling to direct their thoughts backward to illspent hours, and those whose vices become obvious if they review the past, even the vices which were disguised under some allurement of momentary pleasure, do not have the courage to revert to those hours. No one willingly turns his thought back to the past, unless all his acts have been submitted to the censorship of his conscience, which is never deceived; he who has ambitiously coveted, proudly scorned, recklessly conquered, treacherously betrayed, greedily seized, or lavishly squandered, must needs fear his own memory.",
    author: "Seneca",
  },
  {
    text: "We always feel anger longer than we feel hurt.",
    author: "Seneca",
  },
  { text: "longa est vita si plena est.", author: "Seneca" },
  {
    text: "You have all the fears of mortals and all the desires of immortals.",
    author: "Seneca",
  },
  {
    text: "Different reasons roused different peoples to leave their homes; but this at least is clear, nothing has stayed where it was born. The human race is always on the move:",
    author: "Seneca",
  },
  {
    text: '???? ?????????? ??????????, ?????? ???? ???? ?? ?????????????????? ???? ?????????????? ????????????????????????????????" -',
    author: "Seneca",
  },
  {
    text: "There is only one relief for great sufferings, and that is to endure and surrender to their compulsion.",
    author: "Seneca",
  },
  {
    text: "?????? (????????) ?????????? ???? ???????????? (????????) ?????????? ?????????????? ???????????? ?? ???? ?????????? ???????????? ?? ???? ???????? ?????????? ?? ???????? ?????? ???????????? ???????????? ?????????? ????????.",
    author: "Seneca",
  },
  {
    text: "All vices sink into our whole being, if we do not crush them before they gain a footing; and in like manner these sad, pitiable, and discordant feelings end by feeding upon their own bitterness, until the unhappy mind takes a sort of morbid delight in grief.",
    author: "Seneca",
  },
  {
    text: "no genius that ever won acclaim did so without a measure of indulgence. Name me any man you like who had a celebrated reputation, and I???ll tell you what the age he lived in forgave him, what it turned a blind eye to in his work.",
    author: "Seneca",
  },
  {
    text: "No one keeps himself waiting; and yet the greatest cure for anger is to wait, so that the initial passion it engenders may die down, and the fog that shrouds the mind may subside, or become less thick.",
    author: "Seneca",
  },
  { text: "The one who knows no hope knows no despair.", author: "Seneca" },
  {
    text: "He praised his own achievements, not without cause but without end.",
    author: "Seneca",
  },
  {
    text: "The man who tries to find out what has been said against him, who seeks to unearth spiteful gossip, even when engaged in privately, is destroying his own peace of mind.",
    author: "Seneca",
  },
  {
    text: "A man who examines the saddle and bridle and not the animal itself when he is out to buy a horse is a fool; similarly, only an absolute fool values a man according to his clothes, or according to his social position, which after all is only something that we wear like clothing.",
    author: "Seneca",
  },
  { text: "Kingdoms which act unjustly never last.", author: "Seneca" },
  {
    text: "For what purpose, then, do I make a man my friend? In order to have someone for whom I may die, whom I may follow into exile, against whose death I may stake my own life, and pay the pledge, too.",
    author: "Seneca",
  },
  {
    text: "And it makes no difference how important the provocation may be, but into what kind of soul it penetrates. Similarly with fire; it does not matter how great is the flame, but what it falls upon. For solid timbers have repelled a very great fire; conversely, dry and easily inflammable stuff nourishes the slightest spark into a conflagration.",
    author: "Seneca",
  },
  {
    text: 'Nero: "Am I forbidden to do what all may do?" Seneca: "From high rank high example is expected.',
    author: "Seneca",
  },
  {
    text: "Stolid pack-animals are much more fit for carrying loads than thoroughbred horses: who ever subdued their noble speed with a heavy burden?",
    author: "Seneca",
  },
  {
    text: "A man who makes a decision without listening to both sides is unjust, even if his ruling is a fair one.",
    author: "Seneca",
  },
  {
    text: "You must go to the scene of action, first, because men put more faith in their eyes than in their ears, and second, because the way is long if one follows precepts, but short and helpful, if one follows patterns. Cleanthes",
    author: "Seneca",
  },
  {
    text: "???????????? ?????????????? ???? ???????? ?????????? ???????? ?? ???????? ???????????? ?????? ?????????? ???????????? ???????????? ?? ???? ???????? - ???????? ???????????? - ???????????? ?????????? ?????????????? ?????? ???????? ????????????.",
    author: "Seneca",
  },
  {
    text: "For that is the people???s verdict, but wise men on the whole reject the people???s decrees.",
    author: "Seneca",
  },
  {
    text: 'Set aside a certain number of days, during which you shall be content with the scantiest and cheapest fare, with coarse and rough dress, saying to yourself the while: "Is this the condition that I feared?',
    author: "Seneca",
  },
  {
    text: "A hungry people neither listens to reason nor is mollified by fair treatment or swayed by any appeals.",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short space of time, but that we waste much of it. Life is long enough, and it has been given in sufficiently generous measure to allow the accomplishment of the very greatest things if the whole of it is well invested. But when it is squandered in luxury and carelessness, when it is devoted to no good end, forced at last by the ultimate necessity we perceive that it has passed away before we were aware that it was passing. So it is???the life we receive is not short, but we make it so, nor do we have any lack of it, but are wasteful of it. Just as great and princely wealth is scattered in a moment when it comes into the hands of a bad owner, while wealth however limited, if it is entrusted to a good guardian, increases by use, so our life is amply long for him who orders it properly.",
    author: "Seneca",
  },
  {
    text: "Am I not to inquire into the identity of the artist of this universe?",
    author: "Seneca",
  },
  {
    text: "When arrogant hands once seize power, the ruler thinks authority resides in stubbornness.",
    author: "Seneca",
  },
  {
    text: "Plague on it! what madness this is, to punish one's self because one is unfortunate, and not to lessen, but to increase one's ills!",
    author: "Seneca",
  },
  {
    text: "providence which could be spoken of, almost according to choice or context, under a variety of names or descriptions including the divine reason, creative reason, nature,",
    author: "Seneca",
  },
  {
    text: "He who needs riches least, enjoys riches most.",
    author: "Seneca",
  },
  {
    text: "How much happier is the man who owes nothing to anybody except the one he can most easily refuse, himself!",
    author: "Seneca",
  },
  {
    text: "?????? ???????????? ?? ??????,???????????? ???????????????? ?????? ????????????????,???? ???????????? ???????? ???? ?????????? ??????????.",
    author: "Seneca",
  },
  {
    text: "We are all tied to Fortune, some by a loose and golden chain, and others by a tight one of baser metal: but what does it matter? We are all held in the same captivity, and those who have bound others are themselves in bonds - unless you think perhaps that the left-hand chain is lighter. One man is bound by high office, another by wealth; good birth weighs down some, and a humble origin others; some bow under the rule of other men and some under their own; some are restricted to one place by exile, others by priesthoods: all life is a servitude.",
    author: "Seneca",
  },
  {
    text: "Be deaf to those who love you most of all; they pray for bad things with good intentions. ",
    author: "Seneca",
  },
  {
    text: "Poverty, grief, and ambition, are felt differently by different people, according as they are influenced by habit: a rooted prejudice about the terrors of these things, though they are not really to be feared, makes a man weak and unable to endure them.",
    author: "Seneca",
  },
  {
    text: "Life is divided into three parts: what was, what is and what shall be. Of these three periods, the present is short, the future is doubtful and the past alone is certain.",
    author: "Seneca",
  },
  {
    text: 'let us go to our sleep with joy and gladness; let us say:       I have lived; the course which Fortune set for me     Is finished.[9]   And if God is pleased to add another day, we should welcome it with glad hearts. That man is happiest, and is secure in his own possession of himself, who can await the morrow without apprehension. When a man has said: "I have lived!", every morning he arises he receives a bonus.',
    author: "Seneca",
  },
  {
    text: "We are all tied to Fortune, some by a loose and golden chain, and others by a tight one of baser metal: but what does it matter? We are all held in the same captivity, and those who have bound others are themselves in bonds - unless you think perhaps that the left-hand chain is lighter. One man is bound by high office, another by wealth; good birth weighs down some, and a humble origin others; some bow under the rule of other men and some under their own; some are restricted to one place by exile, others by priesthoods: all life is a servitude.",
    author: "Seneca",
  },
  {
    text: "Every man, when he first sees light, is commanded to be content with milk and rags. Such is our beginning, and yet kingdoms are all too small for us!",
    author: "Seneca",
  },
  {
    text: "The greatest hindrance to living is expectancy, which depends upon the morrow and wastes to-day.",
    author: "Seneca",
  },
  {
    text: "we never expect that any evil will befall ourselves before it comes, we will not be taught by seeing the misfortunes of others that they are the common inheritance of all men, but imagine that the path which we have begun to tread is free from them and less beset by dangers than that of other people. How many funerals pass our houses? Yet we do not think of death.",
    author: "Seneca",
  },
  {
    text: "The amount of life we truly live is small. For our existence on Earth is not Life, but merely Time.",
    author: "Seneca",
  },
  {
    text: 'How can you think that anything will not happen, when you know that it may happen to many men, and has happened to many? That is a noble verse, and worthy of a nobler source than the stage:??? "What one hath suffered may befall us all." That man has lost his children: you may lose yours. That man has been convicted: your innocence is in peril. We are deceived and weakened by this delusion, when we suffer what we never foresaw that we possibly could suffer: but by looking forward to the coming of our sorrows we take the sting out of them when they come.',
    author: "Seneca",
  },
  {
    text: "Thus the time we are given is not brief, but we make it so. We do not lack time; on the contrary, there is so much of it that we waste an awful lot.",
    author: "Seneca",
  },
  {
    text: "Why, indeed, is it necessary to summon trouble, ??? which must be endured soon enough when it has once arrived, or to anticipate trouble and ruin the present through fear of the future? It is indeed foolish to be unhappy now because you may be unhappy at some future time. 2.",
    author: "Seneca",
  },
  {
    text: "A multitude of books only gets in one's way. So if you are unable to read all the books in your possession, you have enough when you have all the books you are able to read.",
    author: "Seneca",
  },
  {
    text: "no one can merely go wrong by himself, but he must become both the cause and adviser of another's wrong doing.",
    author: "Seneca",
  },
  {
    text: "What is the harm in returning to the point whence you came? He will live badly who does not know how to die well. So we must first strip off the value we set on this thing and reckon the breath of life as something cheap. To quote Cicero, we hate gladiators if they are keen to save their life by any means; we favour them if they openly show contempt for it.",
    author: "Seneca",
  },
  {
    text: "but the most wretched are those who are toiling not even at their own preoccupations, but must regulate their sleep by another???s, and their walk by another???s pace, and obey orders in those freest of all things, loving and hating. If such people want to know how short their lives are, let them reflect how small a portion is their own.",
    author: "Seneca",
  },
  {
    text: "We are indeed apt to ascribe certain faults to the place or to the time; but those faults will follow us, no matter how we change our place.  You",
    author: "Seneca",
  },
  {
    text: "For men cease to possess all things the moment they desire all things for their own.",
    author: "Seneca",
  },
  {
    text: "No nos da miedo hacer las cosas porque sean dif??ciles, sino que las cosas son dif??ciles porque nos da miedo hacerlas.",
    author: "Seneca",
  },
  {
    text: "No man finds it difficult to return to nature, except the man who has deserted nature.  We",
    author: "Seneca",
  },
  {
    text: "Counting even yesterday, all past time is lost time; the very day which we are now spending is shared between ourselves and death. It is not the last drop that empties the water-clock, but all that which previously has flowed out; similarly, the final hour when we cease to exist does not of itself bring death; it merely of itself completes the death-process. We reach death at that moment, but we have been a long time on the way. 21.",
    author: "Seneca",
  },
  {
    text: "None of these men will bring about your death any time sooner, but rather they will teach you how to die. None of them will shorten your lifespan, but each will add the wisdom of his years to yours. In other words, there is nothing dangerous about talking to these people and it won???t cost you a penny. Take from them as much as you wish. It???s up to you to squeeze the most you can from their wisdom. What bliss, what a glorious old age awaits the man who has offered himself as a mate to these intellects! He will have mentors and colleagues from whom he may seek advice on the smallest of matters, companions ever ready with counsel for his daily life, from whom he may hear truth without judgment, praise without flattery, and after whose likeness he may fashion himself. They say ???you can???t choose your parents,??? that they have been given to us by chance; but the good news is we can choose to be the sons of whomever we desire. There are many respectable fathers scattered across the centuries to choose from. Select a genius and make yourself their adopted son. You could even inherit their name and make claim to be a true descendant and then go forth and share this wealth of knowledge with others. These men will show you the way to immortality, and raise you to heights from which no man can be cast down. This is the only way to extend mortality ??? truly, by transforming time into immortality. Honors, statues and all other mighty monuments to man???s ambition carved in stone will crumble but the wisdom of the past is indestructible. Age cannot wither nor destroy philosophy which serves all generations. Its vitality is strengthened by each new generation???s contribution to it. The Philosopher alone is unfettered by the confines of humanity. He lives forever, like a god. He embraces memory, utilizes the present and anticipates with relish what is to come. He makes his time on Earth longer by merging past, present and future into one.",
    author: "Seneca",
  },
  {
    text: "all the works of mortal man have been doomed to mortality, and in the midst of things which have been destined to die, we live!",
    author: "Seneca",
  },
  {
    text: "We ought frequently to remind ourselves that we must love the things of this life as we would what is shortly to leave us, or indeed in the very act of leaving us.",
    author: "Seneca",
  },
  {
    text: "Ignis aurum probat, miseria fortes viros. Fire is the test of gold; adversity, of strong men.",
    author: "Seneca",
  },
  {
    text: "Pobre n??o ?? aquele que tem pouco, mas antes aquele que muito deseja.",
    author: "Seneca",
  },
  {
    text: "Meanwhile, as they rob and are robbed, as they disturb each other???s peace, as they make each other miserable, their lives pass without satisfaction, without pleasure, without mental improvement.",
    author: "Seneca",
  },
  {
    text: 'The fool, with all his other faults, has this also, he is always getting ready to live."[3] Reflect,',
    author: "Seneca",
  },
  {
    text: 'Epicurus will oblige me with these words:[4] "Think on death," or rather, if you prefer the phrase, on "migration to heaven." 9. The meaning is clear, ??? that it is a wonderful thing to learn thoroughly how to die. You may deem it superfluous to learn a text that can be used only once; but that is just the reason why we ought to think on a thing. When we can never prove whether we really know a thing, we must always be learning it. 10. "Think on death." In saying this, he bids us think on freedom. He who has learned to die has unlearned slavery; he is above any external power, or, at any rate, he is beyond it. What terrors have prisons and bonds and bars for him? His way out is clear. There is only one chain which binds us to life, and that is the love of life. The chain may not be cast off, but it may be rubbed away, so that, when necessity shall demand, nothing may retard or hinder us from being ready to do at once that which at some time we are bound to do. Farewell.',
    author: "Seneca",
  },
  {
    text: "It takes the whole of life to learn how to live, and???what will perhaps make you wonder more???it takes the whole of life to learn how to die.",
    author: "Seneca",
  },
  {
    text: "Why need we weep over parts of our life? the whole of it calls for tears: new miseries assail us before we have freed ourselves from the old ones.",
    author: "Seneca",
  },
  {
    text: "Never did I trust Fortune, even when she seemed to be offering peace. All those blessings which she kindly bestowed on me ??? money, public office, influence ??? I relegated to a place from which she could take them back without disturbing me. Between them and me, I have kept a wide gap, and so she has merely taken them, not torn them from me.",
    author: "Seneca",
  },
  {
    text: "Eat merely to relieve your hunger; drink merely to quench your thirst; dress merely to keep out the cold; house yourself merely as a protection against personal discomfort. It matters little whether the house be built of turf, or of variously coloured imported marble; understand that a man is sheltered just as well by a thatch as by a roof of gold.",
    author: "Seneca",
  },
  {
    text: "A so-called busy man may declare the day to be endless, or may mourn how the hours crawl slowly toward dinner time, but this is no evidence that this man???s life is long. For when the busy man finally has some time to himself he???s left to stew in boundless boredom with nothing to do and with no clue how to fill his day. Restlessly these types seek new ways to be at leisure and the time between play needles them to no end. Their excitement peaks at the announcement of a gladiator bout or some other such spectacle and they long to skip the days that lie between now and the grand day of extravagant entertainment. Their impatient waiting for something they desire gives them the illusion that time is passing by slowly. Yet their days on Earth remain finite, even as they fritter away time bobbing from one pleasure to another. For these wasters, uneventful afternoons of no play are long and hateful. Yet a single night out drinking with a harlot seems to fly by in no time! This strange perception of the passage of time depending on one???s mood and company has provided material for the poets. We have heard tales of how when Jupiter was with a lover the night he spent in her pleasant company seemed to pass twice as long. But doesn???t using the story concerning a god as an example of how to make time pass longer merely encourage more human vice? Can a night that costs a man so much really be regretted by that same man for being so short? They waste the day in anticipation of the night, then spend the night worrying about the coming dawn.",
    author: "Seneca",
  },
  {
    text: "it is while Fortune is kind that it should fortify itself against her violence.",
    author: "Seneca",
  },
  {
    text: "Let us cherish and love old age; for it is full of pleasure if one knows how to use it. Fruits are most welcome when almost over; youth is most charming at its close; the last drink delights the toper, the glass which souses him and puts the finishing touch on his drunkenness.  Each pleasure reserves to the end the greatest delights which it contains. Life is most delightful when it is on the downward slope, but has not yet reached the abrupt decline. And I myself believe that the period which stands, so to speak, on the edge of the roof, possesses pleasures of its own. Or else the very fact of our not wanting pleasures has taken the place of the pleasures themselves. How comforting it is to have tired out one's appetites, and to have done with them!",
    author: "Seneca",
  },
  {
    text: "Believe me, it takes a great man and one who has risen far above human weaknesses not to allow any of his time to be filched from him, and it follows that the life of such a man is very long because he has devoted wholly to himself whatever time he has had. None of it lay neglected and idle; none of it was under the control of another, for, guarding it most grudgingly, he found nothing that was worthy to be taken in exchange for his time. And so that man had time enough, but those who have been robbed of much of their life by the public, have necessarily had too little of it.",
    author: "Seneca",
  },
  {
    text: "Other resolutions have been broken, but after all in such a way that, in cases where I ceased to practice abstinence, I have observed a limit which is indeed next door to abstinence; perhaps it is even a little more difficult, because it is easier for the will to cut off certain things utterly than to use them with restraint.",
    author: "Seneca",
  },
  {
    text: "The problem, Paulinus, is not that we have a short life, but that we waste time.",
    author: "Seneca",
  },
  {
    text: "To fight against an equal is risky; against a higher-up, insane; against someone beneath you, degrading.",
    author: "Seneca",
  },
  {
    text: "Inwardly, we ought to be different in all respects, but our exterior should conform to society.",
    author: "Seneca",
  },
  {
    text: "Life is long and there is enough of it for satisfying personal accomplishments if we use our hours well.",
    author: "Seneca",
  },
  { text: "Paucis natura contenta est", author: "Seneca" },
  {
    text: 'But," comes the reply, "I am being driven from the farm which my father and grandfather owned!" Well? Who owned the land before your grandfather? Can you explain what people (I will not say what person) held it originally? You did not enter upon it as a master, but merely as a tenant. And whose tenant are you? If your claim is successful, you are tenant of the heir. The lawyers say that public property cannot be acquired privately by possession;11 what you hold and call your own is public property ???indeed, it belongs to mankind at large.',
    author: "Seneca",
  },
  {
    text: "For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "You live as if you will live forever, no care for your mortality ever enters your head, you pay no mind to how much time has already gone by. You waste time as if it was a limitless resource, when any moment you spend on someone else or some matter is potentially your last.",
    author: "Seneca",
  },
  {
    text: "Bassus may be included among these men; and he had no wish to deceive us. He says that it is as foolish to fear death as to fear old age; for death follows old age precisely as old age follows youth. He who does not wish to die cannot have wished to live. For life is granted to us with the reservation that we shall die; to this end our path leads. Therefore, how foolish it is to fear it, since men simply await that which is sure, but fear only that which is uncertain! 11. Death has its fixed rule, ??? equitable and unavoidable. Who can complain when he is governed by terms which include everyone? The chief part of equity, however, is equality.",
    author: "Seneca",
  },
  {
    text: "det ille veniam facile, cui venia est opus - the one who needs pardon should readily grant it",
    author: "Seneca",
  },
  {
    text: "Everyone hurries his life on and suffers from a yearning for the future and a weariness of the present. But he who bestows all of his time on his own needs, who plans out every day as if it were his last, neither longs for nor fears the morrow.",
    author: "Seneca",
  },
  {
    text: "But learning how to live takes a whole life, and, which may surprise you more, it takes a whole life to learn how to die. So many of the finest men have put aside all",
    author: "Seneca",
  },
  {
    text: "Nessun vento ?? favorevole per il marinaio che non sa a quale porto vuole approdare.",
    author: "Seneca",
  },
  {
    text: "Everyone hustles his life along, and is troubled by a longing for the future and weariness of the present. But the man who spends all his time on his own needs, who organizes every day as though it were his last, neither longs for nor fears the next day. For what new pleasures can any hour now bring him?",
    author: "Seneca",
  },
  {
    text: "The liberal arts do not conduct the soul all the way to virtue, but merely set it going in that direction.",
    author: "Seneca",
  },
  {
    text: "everywhere the people are of mixed and imported stock. One group has followed another: one longed for what another scorned; one was driven out from where he had expelled others. So fate has decreed that nothing maintains the same condition forever.",
    author: "Seneca",
  },
  {
    text: "living is not good, but living well. the wise man lives as well as he should, not as long as he could... he will always think of life in terms of quality; not quantity... dying early or late is of no relevance, dying well or ills... even if it is true that while there is life there is hope, life is not to be at any cost.",
    author: "Seneca",
  },
  {
    text: "What is my object in making a friend? To have someone to be able to die for, someone I may follow into exile, someone for whose life I may put myself up as security and pay the price as well. The thing you describe is not friendship but a business deal, looking to the likely consequences, with advantage as its goal. There can be no doubt that the desire lovers have for each other is not so very different from friendship ??? you might say it was friendship gone mad. Well, then, does anyone ever fall in love with a view to a profit, or advancement, or celebrity? Actual love in itself, heedless of all other considerations, inflames people???s hearts with a passion for the beautiful object, not without the hope, too, that the affection will be mutual. How then can the nobler stimulus of friendship be associated with any ignoble desire?",
    author: "Seneca",
  },
  {
    text: "???? ???????? ???????? ?????? ?????????? ?????? ???????????? ???????? ?????????? ????????, ??????' ?????? ?????????????????? ???????????? ?????????? ??????.",
    author: "Seneca",
  },
  {
    text: "For how little have we lost, when the two finest things of all will accompany us wherever we go, universal nature and our individual virtue.",
    author: "Seneca",
  },
  {
    text: "Then they reflect how pointlessly they acquired things they never would enjoy, and how all their toil has been in vain.",
    author: "Seneca",
  },
  {
    text: "The things that are indispensable require no elaborate pains for their acquisition; it is only the luxuries that call for labour. Follow nature, and you will need no skilled craftsmen.",
    author: "Seneca",
  },
  { text: "Time flies on fickle wings", author: "Seneca" },
  {
    text: "???????????? ???????? ?????????????????? ?????? ???? ?????????? ???????????????? ?????? ???? ???????????? ???? ???????????????? ???????????? ?????????? ?????????????????????????? ???? ?????????? ???????????????? ????????????????????, ???????? ?????? ???????? ?????? ?????????????????? ???????? ???? ?????????????? ?????? ???????????????????? ????????????, ?????? ?????????? ???????????? ?? ???????? ?????? ?????????????????? ?????? ???????????????????????? ???????????? ?????? ??????????.",
    author: "Seneca",
  },
  {
    text: "But learning how to live takes a whole life, and, which may surprise you more, it takes a whole life to learn how to die.",
    author: "Seneca",
  },
  {
    text: "Often it is better to hide an illness from the patient, because just the mere awareness of a disease can bring about death.",
    author: "Seneca",
  },
  {
    text: "Nessuna spesa ?? pi?? nobile di quella che si fa per l'acquisto dei libri, ma nessuna spesa ?? meno giudiziosa di quella fatta per l'acquisto di troppi libri. A che serve una enorme quantit?? di volumi, dei quali, nella brevit?? della vita, si abbia appena il tempo di leggerne i titoli. Meglio leggere e rileggere pochi autori eccellenti che leggicchiarne migliaia.",
    author: "Seneca",
  },
  {
    text: "Quanto potius, deorum opera celebrare quam Philippi aut Alexandri latrocinia...",
    author: "Seneca",
  },
  {
    text: "Whatever is best for a human being lies outside human control: it can be neither given nor taken away. The world you see, nature???s greatest and most glorious creation, and the human mind which gazes and wonders at it, and is the most splendid part of it, these are our own everlasting possessions and will remain with us as long as we ourselves remain.",
    author: "Seneca",
  },
  {
    text: "?????? ???? ?????????? ???????? ???????????? ?????? ???? ??????, ???? ???????????? ???? ???????????????? ???????????????? ???? ?????? ?????? ?????? -?????????????? ?????? ???? ???? ?????????????????????? ??????????????????????- ???? ???????????? ???????????? ???? ???????????????? ???????????????? ???? ?????? ?????? ?????? ???? ?????????? ?????? ???? ????????????????.",
    author: "Seneca",
  },
  {
    text: "I am often filled with wonder when I see some men demanding the time of others and those from whom they ask it most indulgent. Both of them fix their eyes on the object of the request for time, neither of them on the time itself; just as if what is asked were nothing, what is given, nothing. Men trifle with the most precious thing in the world; but they are blind to it because it is an incorporeal thing, because it does not come beneath the sight of the eyes, and for this reason it is counted a very cheap thing???nay, of almost no value at all. Men set very great store by pensions and doles, and for these they hire out their labour or service or effort. But no one sets a value on time; all use it lavishly as if it cost nothing. But see how these same people clasp the knees of physicians if they fall ill and the danger of death draws nearer, see how ready they are, if threatened with capital punishment, to spend all their possessions in order to live! So great is the inconsistency of their feelings. But if each one could have the number of his future years set before him as is possible in the case of the years that have passed, how alarmed those would be who saw only a few remaining, how sparing of them would they be! And yet it is easy to dispense an amount that is assured, no matter how small it may be; but that must be guarded more carefully which will fail you know not when.",
    author: "Seneca",
  },
  {
    text: "There is no need to complain of particular grievances, for life in its entirety is lamentable.",
    author: "Seneca",
  },
  {
    text: "Saiba que um teto de palha abriga o homem  t??o bem quanto o de ouro.",
    author: "Seneca",
  },
  {
    text: "Do you wish to know how different the position is in which we place them? If my riches leave me, they will carry away with them nothing except themselves: you will be bewildered and will seem to be left without yourself if they should pass away from you: with me riches occupy a certain place, but with you they occupy the highest place of all. In fine, my riches belong to me, you belong to your riches.",
    author: "Seneca",
  },
  {
    text: "but does it serve any useful purpose to know that Pompey was the first to exhibit the slaughter of eighteen elephants in the Circus, pitting criminals against them in a mimic battle? He, a leader of the state and one who, according to report, was conspicuous among the leaders28 of old for the kindness of his heart, thought it a notable kind of spectacle to kill human beings after a new fashion. Do they fight to the death? That is not enough! Are they torn to pieces? That is not enough! Let them be crushed by animals of monstrous bulk! Better would it be that these things pass into oblivion lest hereafter some all-powerful man should learn them and be jealous of an act that was nowise human.29 O, what blindness does great prosperity cast upon our minds! When he was casting so many troops of wretched human beings to wild beasts born under a different sky, when he was proclaiming war between creatures so ill matched, when he was shedding so much blood before the eyes of the Roman people, who itself was soon to be forced to shed more. he then believed that he was beyond the power of Nature. But later this same man, betrayed by Alexandrine treachery, offered himself to the dagger of the vilest slave, and then at last discovered what an empty boast his surname30 was.",
    author: "Seneca",
  },
  {
    text: "Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "there can be no place of exile within the world since nothing within the world is alien to men.",
    author: "Seneca",
  },
  {
    text: "To come back to the question, the wise man, self-sufficient as he is, still desires to have a friend if only for the purpose of practising friendship and ensuring that those talents are not idle. Not, as Epicurus put it in the same letter, ???for the purpose of having someone to come and sit beside his bed when he is ill or come to his rescue when he is hard up or thrown into chains???, but so that on the contrary he may have someone by whose sickbed he himself may sit or whom he may himself release when that person is held prisoner by hostile hands. Anyone thinking of his own interests and seeking out friendship with this in view is making a great mistake. Things will end as they began; he has secured a friend who is going to come to his aid if captivity threatens: at the first clank of a chain that friend will disappear. These are what are commonly called fair-weather friendships. A person adopted as a friend for the sake of his usefulness will be cultivated only for so long as he is useful. This explains the crowd of friends that clusters about successful men and the lonely atmosphere about the ruined ??? their friends running away when it comes to the testing point; it explains the countless scandalous instances of people deserting or betraying others out of fear for themselves. The ending inevitably matches the beginning: a person who starts being friends with you because it pays him will similarly cease to be friends because it pays him to do so. If there is anything in a particular friendship that attracts a man other than the friendship itself, the attraction of some reward or other will counterbalance that of the friendship. What is my object in making a friend? To have someone to be able to die for, someone I may follow into exile, someone for whose life I may put myself up as security and pay the price as well. The thing you describe is not friendship but a business deal, looking to the likely consequences, with advantage as its goal. There can be no doubt that the desire lovers have for each other is not so very different from friendship ??? you might say it was friendship gone mad. Well, then, does anyone ever fall in love with a view to a profit, or advancement, or celebrity? Actual love in itself, heedless of all other considerations, inflames people???s hearts with a passion for the beautiful object, not without the hope, too, that the affection will be mutual. How then can the nobler stimulus of friendship be associated with any ignoble desire?",
    author: "Seneca",
  },
  {
    text: "the wise man regards the reason for all his actions, but not the results.",
    author: "Seneca",
  },
  {
    text: "provided I may look upon the sun and the moon and gaze at the other planets; provided I may trace their risings and settings, their periods and the causes of their travelling faster or slower; provided I may behold all the stars that shine at night ??? some fixed, others not travelling far afield but circling within the same area; some suddenly shooting forth, and others dazzling the eye with scattered fire, as if they are falling, or gliding past with a long trail of blazing light; provided I can commune with these and, so far as humans may, associate with the divine, and provided I can keep my mind always directed upwards, striving for a vision of kindred things ??? what does it matter what ground I stand on?",
    author: "Seneca",
  },
  {
    text: "He who has made a fair compact with poverty is rich.",
    author: "Seneca",
  },
  {
    text: "The longer people extend their colonnades, the higher they build their towers, the wider they stretch their walks, the deeper they dig their summer grottoes, the more massively they raise the roofs of their dining-halls, so much the more will there be to cut off the sight of heaven.",
    author: "Seneca",
  },
  {
    text: "judge a man after they have made him their friend, instead of making him their friend after they have judged him. Ponder for a long time whether you shall admit a given person to your friendship; but when you have decided to admit him, welcome him with all your heart and soul. Speak as boldly with him as with yourself.",
    author: "Seneca",
  },
  {
    text: "Here is another saying of Epicurus: ???If you shape your life according to nature, you will never be poor; if according to people???s opinions, you will never be rich.??? Nature???s wants are small, while those of opinion are limitless. Imagine that you???ve piled, up all that a veritable host of rich men ever possessed, that fortune has carried you far beyond the bounds of wealth so far as any private individual is concerned, building you a roof of gold and clothing you in royal purple, conducting you to such a height of opulence and luxury that you hide the earth with marble floors ??? putting you in a position not merely to own, but to walk all over treasures ??? throw in sculptures, paintings, all that has been produced at tremendous pains by all the arts to satisfy extravagance: all these things will only induce in you a craving for even bigger things. Natural desires are limited; those which spring from false opinions have nowhere to stop, for falsity has no point of termination. When a person is following a track, there is an eventual end to it somewhere, but with wandering at large there is no limit. So give up pointless, empty journeys, and whenever you want to know whether the desire aroused in you by something you are pursuing is natural or quite unseeing, ask yourself whether it is capable of coming to rest at any point; if after going a long way there is always something remaining farther away, be sure it is not something natural. LETTER XVIII IT is the month of December, and yet the whole city is in a sweat! Festivity",
    author: "Seneca",
  },
  {
    text: 'Da economia do tempo - S??neca sa??da o amigo Luc??lio Comporta-te assim, meu Luc??lio, reivindica o teu direito sobre ti mesmo e o tempo que at?? hoje foi levado embora, foi roubado ou fugiu, recolhe e aproveita esse tempo. Convence-te de que ?? assim como te escrevo: certos momentos nos s??o tomados, outros nos s??o furtados e outros ainda se perdem no vento. Mas a  coisa mais lament??vel ?? perder tempo por neglig??ncia.  Se pensares bem, passamos grande parte da vida agindo mal, a maior parte sem fazer nada, ou fazendo algo diferente do que se deveria fazer.  Podes me indicar algu??m que d?? valor ao seu tempo, valorize o seu dia, entenda que se morre diariamente? Nisso, pois, falhamos: pensamos que a morte ?? coisa do futuro, mas parte dela j?? ?? coisa do passado.  Qualquer tempo que j?? passou pertence ?? morte.  Ent??o, caro Luc??lio, procura fazer aquilo que me escreves: aproveita todas as horas; ser??s menos dependente do amanh?? se te lan??ares ao presente. Enquanto adiamos, a vida se vai. Todas as coisas, Luc??lio, nos s??o alheias; s?? o tempo ?? nosso. A natureza deu-nos posse de uma ??nica coisa fugaz e escorregadia, da qual qualquer um que queira pode nos privar. E ?? tanta a estupidez dos mortais que, por coisas insignificantes e desprez??veis, as quais certamente se podem recuperar,  concordam em contrair d??vidas de bom grado, mas ningu??m pensa que algu??m lhe deva algo ao tomar o seu tempo, quando, na verdade, ele ?? ??nico, e mesmo aquele que reconhece que o recebeu n??o pode devolver esse tempo de quem tirou. Talvez me perguntes o que fa??o para te dar esses conselhos. Eu te direi francamente: tenho consci??ncia de que vivo de modo requintado, por??m cuidadoso. N??o posso dizer que n??o perco nada, mas posso dizer o que perco, o porqu?? e como; e te darei as raz??es pelas quais me considero miser??vel. No entanto, a mim acontece o que ocorre com a maioria que est?? na mis??ria n??o por culpa pr??pria: todos est??o prontos a desculpar, ningu??m a dar a m??o.  E agora? A uma pessoa para a qual basta o pouco que lhe resta, n??o a considero pobre. Mas ?? melhor que tu conserves todos os teus pertences, e come??ar??s em tempo h??bil. Porque, como diz um s??bio ditado, ?? tarde para poupar quando s?? resta o fundo da garrafa. E o que sobra ?? muito pouco, ?? o pior. Passa bem! (S??neca, em "Aprendendo a Viver - Cartas a Luc??lio")',
    author: "Seneca",
  },
  {
    text: "???????????? ?????????? ?? ??????, ???? ???????????? ???? ???????? ??????????????.",
    author: "Seneca",
  },
  {
    text: "We abandon nature and surrender to the mob ??? who are never good advisers in anything, and in this respect as in all others are most inconsistent.",
    author: "Seneca",
  },
  {
    text: "It is not the man who has to little who is poor, but the one who hankers after more.",
    author: "Seneca",
  },
  {
    text: "Therefore it is better to conquer our grief than to deceive it. For if it has withdrawn, being merely beguiled by pleasures and preoccupations, it starts up again and from its very respite gains force to savage us.",
    author: "Seneca",
  },
  {
    text: 'Suspice, etiam si decidunt, magna conantes "  "Admire those who attempt great things, even though they fail" "Admira, incluso si caen, a quienes emprenden grandes iniciativas',
    author: "Seneca",
  },
  {
    text: "The geometrician teaches me how I may avoid losing any fraction of my estates, but what I really want to learn is how to lose the lot and still keep smiling.",
    author: "Seneca",
  },
  {
    text: "Being without your country is not misery: you have thoroughly taught yourself by your studies to know that to a wise man every place is his country.",
    author: "Seneca",
  },
  {
    text: "For just as it would be ill were this our space not filled, that is, were our world [12] not to exist, then, since the spaces are indistinguishable, it would be no less ill if the whole of space were not filled. Thus we see that the universe [13] is of infinite size and the worlds [14] therein without number. Elpino. Wherefore then must they be so numerous rather than a single one? Philotheo. Because if it were ill that our world [15] should not exist, or that this Plenum should not be, then the same holdeth good of our space or space of similar kind. [16]",
    author: "Seneca",
  },
  {
    text: "We must therefore school ourselves to regard all commonly held vices as not hateful but ridiculous, and we should imitate Democritus rather than Heraclitus. For whenever these went out in public, the latter used to weep and the former to laugh; the latter thought all our activities sorrows, the former, follies. So we should make light of all things and endure them with tolerance: it is more civilized to make fun of life than to bewail it.",
    author: "Seneca",
  },
  {
    text: "The busy man remains rooted to the ground, ever stuck in the present, a time so brief that it cannot be grasped, and thus it is stolen from him, busy as he is with so many things.",
    author: "Seneca",
  },
  {
    text: "For this is what makes us wicked: that no one of us looks back over his own life. Our thoughts are devoted only to what we are about to do. And yet our plans for the future always depend on the past.",
    author: "Seneca",
  },
  {
    text: "Do you ask me what you should regard as especially to be avoided? I say, crowds; for as yet you cannot trust yourself to them with safety.",
    author: "Seneca",
  },
  {
    text: "I am, however, discussing with you troubles which concern us both, and sharing the remedy with you, just as if we were lying ill in the same hospital. Listen to me, therefore, as you would if I were talking to myself. ",
    author: "Seneca",
  },
  {
    text: "For it is disheartening to inspire in a man the desire, and to take away from him the hope, of emulation.",
    author: "Seneca",
  },
  {
    text: "Count your years, and you will be ashamed to desire and pursue the same things you desired in your boyhood days. ",
    author: "Seneca",
  },
  {
    text: "No man can have a peaceful life who thinks too much about lengthening it",
    author: "Seneca",
  },
  {
    text: "While we are postponing, life speeds by. Nothing, Lucilius, is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession. What fools these mortals be! They allow the cheapest and most useless things, which can easily be replaced, to be charged in the reckoning, after they have acquired them; but they never regard themselves as in debt when they have received some of that precious commodity, ??? time! And yet time is the one loan which even a grateful recipient cannot repay. You",
    author: "Seneca",
  },
  {
    text: "Can anything be sillier than the point of view of certain people???I mean those who boast of their foresight? They keep themselves very busily engaged in order that they may be able to live better; they spend life in making ready to live! They form their purposes with a view to the distant future; yet postponement is the greatest waste of life; it deprives them of each day as it comes, it snatches from them the present by promising something hereafter. The greatest hindrance to living is expectancy, which depends upon the morrow and wastes to-day. You dispose of that which lies in the hands of Fortune, you let go that which lies in your own. Whither do you look? At what goal do you aim? All things that are still to come lie in uncertainty; live straightway!",
    author: "Seneca",
  },
  {
    text: "What Chance has made yours is not really yours.",
    author: "Seneca",
  },
  {
    text: "But he must have richly dyed purple clothes, woven with gold thread and decorated with multicoloured patterns: it is his fault, not nature???s, if he feels poor.",
    author: "Seneca",
  },
  {
    text: "Consider, too, that a man lifting his head from the very funeral pyre must need some novel vocabulary not drawn from ordinary everyday condolence to comfort his own dear ones.",
    author: "Seneca",
  },
  {
    text: "Every new beginning comes from other beginning???s end.",
    author: "Seneca",
  },
  {
    text: "He who boasts of his descent, praises the deeds of another.",
    author: "Seneca",
  },
  {
    text: "Everyone hustles his life along, and is troubled by a longing for the future and weariness of the present. But the man who spends all his time on his own needs, who organizes every day as though it were his last, neither longs for nor fears the next day.",
    author: "Seneca",
  },
  {
    text: "Quaedam iura non scripta, sed omnibus scriptis certiora sunt.",
    author: "Seneca",
  },
  {
    text: "To live under constraint is a misfortune, but there is no constraint to live under constraint.",
    author: "Seneca",
  },
  {
    text: "a man's peace of mind does not depend upon Fortune; for, even when angry she grants enough for our needs.",
    author: "Seneca",
  },
  {
    text: "For everything that comes to us from chance is unstable, and the higher it rises, the more liable it is to fall. Moreover, what is doomed to perish brings pleasure to no one; very wretched, therefore, and not merely short, must the life of those be who work hard to gain what they must work harder to keep. By great toil they attain what they wish, and with anxiety hold what they have attained; meanwhile they take no account of time that will never more return. New engrossments take the place of the old, hope leads to new hope, ambition to new ambition. They do not seek an end of their wretchedness, but change the cause.",
    author: "Seneca",
  },
  {
    text: "How can you wonder your travels do you no good, when you carry yourself around with you? You are saddled with the very thing that drove you away.",
    author: "Seneca",
  },
  {
    text: "This wretched body, the chain and prison of the soul, is tossed hither and thither; upon it punishment and pillage and disease wreak havoc: but the soul itself is holy and eternal, and it cannot be assailed with violence.",
    author: "Seneca",
  },
  {
    text: "Nije da se ne usu??ujemo zato ??to su stvari te??ke; ve?? su stvari te??ke zato ??to se ne usu??ujemo.",
    author: "Seneca",
  },
  {
    text: "For a person who is not aware that he is doing anything wrong has no desire to be put right. You have to catch yourself doing it before you can reform.",
    author: "Seneca",
  },
  {
    text: "What shall we not go in fear of if we fear that which cowardice itself has chosen for its refuge?",
    author: "Seneca",
  },
  {
    text: "But let him consider that those disorders which are so dangerous that they have gained ground in spite of treatment can generally be treated by opposite methods.",
    author: "Seneca",
  },
  {
    text: '2. Socrates made the same remark to one who complained; he said: "Why do you wonder that globe-trotting does not help you, seeing that you always take yourself with you? The reason which set you wandering is ever at your heels." What pleasure is there in seeing new lands? Or in surveying cities and spots of interest? All your bustle is useless. Do you ask why such flight does not help you? It is because you flee along with yourself. You must lay aside the burdens of the mind; until you do this, no place will satisfy you. 3.',
    author: "Seneca",
  },
  {
    text: "is usually summarized in ancient philosophy as a combination of four qualities: wisdom (or moral insight), courage, self-control and justice (or upright dealing). It enables a man to be ???self-sufficient???, immune to suffering, superior to the wounds and upsets of life (often personalized as Fortuna, the goddess of fortune). Even a",
    author: "Seneca",
  },
  {
    text: "Life is divided into three parts: what was, what is and what shall be. Of these three periods, the present is short, the future is doubtful and the past alone is certain. Only",
    author: "Seneca",
  },
  {
    text: "Never have I trusted Fortune, even when she seemed to offer peace. All those blessings which she kindly bestowed on me - money, public office, influence - I relegated to a place whence she could claim them back without bothering me. I kept a wide gap between them and me, with the result that she has taken them away, not torn them away.",
    author: "Seneca",
  },
  {
    text: "Only an absolute fool values a man according to his clothes, or according to his social position, which after all is only something that we wear like clothing.",
    author: "Seneca",
  },
  {
    text: "no prizefighter can go with high spirits into the strife if he has never been beaten black and blue; the only contestant who can confidently enter the lists is the man who has seen his own blood, who has felt his teeth rattle beneath his opponent's fist, who has been tripped and felt the full force of his adversary's charge, who has been downed in body but not in spirit, one who, as often as he falls, rises again with greater defiance than ever.",
    author: "Seneca",
  },
  {
    text: "If you wish to have leisure for your mind, either be a poor man, or resemble a poor man. Study",
    author: "Seneca",
  },
  {
    text: "What mental darkness, what ignorance of the truth blinds those who, though afflicted by the fear of poverty, yet take pleasure in imitating it!",
    author: "Seneca",
  },
  {
    text: "It takes you more time to solve a problem than to set it.",
    author: "Seneca",
  },
  {
    text: "since the mind when distracted absorbs nothing deeply, but rejects everything which is, so to speak, crammed into it.",
    author: "Seneca",
  },
  {
    text: "Happy is the man who can make others better, not merely when he is in their company, but even when he is in their thoughts!",
    author: "Seneca",
  },
  {
    text: "When the lamp has been removed from my sight, and my wife, no stranger now to my habit, has fallen silent, I examine the whole of my day and retrace my actions and words; I hide nothing from myself, pass over nothing. For why should I be afraid of any of my mistakes, when I can say: ???Beware of doing that again, and this time I pardon you.",
    author: "Seneca",
  },
  {
    text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.",
    author: "Seneca",
  },
  {
    text: "Sometimes even to live is an act of courage.???   Anger",
    author: "Seneca",
  },
  {
    text: "Why do you wait,??? asks he. ???Why are you idle? If you don???t seize the day, it escapes.??? Even though you seize it, it still will flee; therefore you must compete with time???s haste in the speed of using it, and, like a gush of water that blasts past and will not always flow calmly, you must drink fast.",
    author: "Seneca",
  },
  {
    text: "We are born under circumstances that would be favourable if we did not abandon them.",
    author: "Seneca",
  },
  {
    text: "We cease to be so angry once we cease to be so hopeful.??? ???Nothing",
    author: "Seneca",
  },
  {
    text: "If you regard your last day not as a punishment but as a law of nature, the breast from which you have banished the dread of death no fear will dare to enter.",
    author: "Seneca",
  },
  {
    text: "Wherever there is a human being, there is an opportunity for a kindness.??? ???A",
    author: "Seneca",
  },
  {
    text: "Consid??rez bien toutes les choses dont la perte nous tire des larmes et nous trouble le sens ; vous trouverez que ce qui nous afflige n???est pas tant ce que nous perdons que ce que nous croyons avoir perdu. Personne ne sent la perte que dans son imagination (opinionem). Celui qui se poss??de ne peut rien perdre ; mais il y en a bien peu qui sachent se poss??der",
    author: "Seneca",
  },
  {
    text: "La mauvaise habitude de se r??gler sur l???opinion d???autrui est si profond??ment enracin??e, que le plus naturel de tous les sentiments, la douleur, a aussi son affectation",
    author: "Seneca",
  },
  {
    text: "You can tell the character of every man when you see how he receives praise.???   Difficult",
    author: "Seneca",
  },
  {
    text: "We are wont to say that it was not in our power to choose the parents who fell to our lot, that they have been given to men by chance; yet we may be the sons of whomsoever we will.",
    author: "Seneca",
  },
  {
    text: "No man is despised by another unless he is first despised by himself.",
    author: "Seneca",
  },
  {
    text: "...we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it.",
    author: "Seneca",
  },
  {
    text: "It was nature???s intention that there should be no need of great equipment for a good life: every individual can make himself happy.",
    author: "Seneca",
  },
  {
    text: "If a great man falls and remains great as he lies, people no more despise him than they stamp on a fallen temple, which the devout still worship as much as when it was standing.",
    author: "Seneca",
  },
  {
    text: "Let tears flow of their own accord: their flowing is not inconsistent with inward peace and harmony.",
    author: "Seneca",
  },
  {
    text: "Not single is the death which comes; the death Which takes us off is but the last of all.",
    author: "Seneca",
  },
  {
    text: "Nature permits us respite only when we are free from the desires of the flesh. It is a truth that sustains us and is a serious principle at the heart of all existence. It lifts our life beyond the confines of earthly concerns and exalts our natures to the stars. Is this not a miracle?",
    author: "Seneca",
  },
  {
    text: "Where you arrive does not matter so much as what sort of person you are when you arrive there. We",
    author: "Seneca",
  },
  {
    text: "Fortune attacks us as often as we attack Fortune.  It",
    author: "Seneca",
  },
  {
    text: "foresee all the attacks and all the onslaughts of Fortune long before they hit me. She falls heavily on those to whom she is unexpected; the man who is always expecting her easily withstands her. For an enemy???s arrival too scatters those whom it catches off guard; but those who have prepared in advance for the coming conflict, being properly drawn up and equipped, easily withstand the first onslaught, which is the most violent.",
    author: "Seneca",
  },
  {
    text: "Wherever there is a human being, there is an opportunity for crisis.??? ???We",
    author: "Seneca",
  },
  {
    text: "No man has been shattered by the blows of Fortune unless he was first deceived by her favours.",
    author: "Seneca",
  },
  {
    text: "But the man who is not puffed up in good times does not collapse either when they change.",
    author: "Seneca",
  },
  {
    text: "Philosophy did not find Plato already a nobleman ; it made him one.",
    author: "Seneca",
  },
  {
    text: "linger among a limited number of master thinkers, and digest their works,",
    author: "Seneca",
  },
  {
    text: "What good does it do you to go overseas, to move from city to city? If you really want to escape the things that harass you, what you???re needing is not to be in a different place but to be a different person. Suppose",
    author: "Seneca",
  },
  {
    text: "In every good person, there lives a god. Which god? We cannot be sure - but it is a god.",
    author: "Seneca",
  },
  {
    text: "long association brings love of evil as well as good.",
    author: "Seneca",
  },
  {
    text: "I see that you have come to the last stage of human life; you are close upon your hundreth year, or even beyond: come now, hold an audit of your life. Reckon how much of your time has been taken up by a money-lender, how much by a mistress, a patron, a client, quarreling with your wife, punishing your slaves, dashing about the city on your social obligations. Consider also the diseases which we have brought on ourselves, and the time too which has been unused. You will find that you have fewer years than you reckon. Call to mind when you ever had a fixed purpose; how few days have passed as you had planned; when you were ever at your own disposal; when your face wore its natural expression; when your mind was undisturbed; what work you have achieved in such a long life; how many have plundered your life when you were unaware of your losses; how much you have lost through groundless sorrow, foolish joy, greedy desire, the seductions of society; how little of your own was left to you. You will realize that you are dying prematurely.",
    author: "Seneca",
  },
  {
    text: "Silently time sneaks up on you, each hour  gone is followed by a worse one.",
    author: "Seneca",
  },
  {
    text: "Nothing will ever please me, no matter how excellent or beneficial, if I must retain the knowledge of it to myself. And if wisdom were given me under the express condition that it must be kept hidden and not uttered, I should refuse it. No good thing is pleasant to possess, without friends to share it.",
    author: "Seneca",
  },
  {
    text: "Leisure without books is death, and burial of a man alive.??? ???Desultory",
    author: "Seneca",
  },
  {
    text: 'Hence, the wise man accustoms himself to coming trouble, lightening by long reflection the evils which others lighten by long endurance. We sometimes hear the inexperienced say: "I knew that this was in store for me." But the wise man knows that all things are in store fore him. Whatever happens, he says: "I knew it.',
    author: "Seneca",
  },
  {
    text: "What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily?",
    author: "Seneca",
  },
  {
    text: 'Plato says: "Every king springs from a race of slaves, and every slave has had kings among his ancestors." The flight of time, with its vicissitudes, has jumbled all such things together, and Fortune has turned them upside down.  Then',
    author: "Seneca",
  },
  {
    text: "The young character, which cannot hold fast to righteousness, must be rescued from the mob;",
    author: "Seneca",
  },
  {
    text: "Harmony makes small things grow; lack of harmony makes great things decay.",
    author: "Seneca",
  },
  {
    text: "Men love their country, not because it is great, but because it is their own.",
    author: "Seneca",
  },
  {
    text: "What I advise you to do is, not to be unhappy before the crisis comes; since it may be that the dangers before which you paled as if they were threatening you, will never come upon you; they certainly have not yet come. Accordingly, some things torment us more than they ought; some torment us before they ought; and some torment us when they ought not to torment us at all. We are in the habit of exaggerating, or imagining, or anticipating, sorrow.",
    author: "Seneca",
  },
  {
    text: "Those who wish their virtue to be advertised are not striving for virtue but for renown. Are you not willing to be just without being renowned? Nay, indeed you must often be just and be at the same time disgraced. And then, if you are wise, let ill repute, well won, be a delight.",
    author: "Seneca",
  },
  {
    text: "LETTERA 3 LA VERA AMICIZIA Ma se stimi amico uno, e poi non hai in lui la stessa fiducia che hai in te stesso, commetti un grave errore e ignori il valore della vera amicizia.",
    author: "Seneca",
  },
  {
    text: "The shortest route to wealth is the contempt of wealth.",
    author: "Seneca",
  },
  {
    text: "Apparently, when the arrogant King of Persia beheld the vastness of his troops spread out across boundless plains, he shed copious tears when he realized that not one man amongst his prodigious army would be alive in a hundred years??? time.",
    author: "Seneca",
  },
  {
    text: "So I have never believed that there was any genuine good in the things which everyone prays for; what is more, I have found them empty and daubed with showy and deceptive colours, with nothing inside to match their appearance.",
    author: "Seneca",
  },
  {
    text: 'Philotheo. I will do so. If the world is finite and if nothing lieth beyond, I ask you Where is the world? Where is the universe? Aristotle replieth, it is in itself. [1] The convex surface of the primal heaven is universal space, which being the primal container is by naught contained. For position in space is no other than the surfaces and limit of the containing body, so that he who hath no containing body hath no position in space. [2] What then dost thou mean, O Aristotle, by this phrase, that "space is within itself"? What will be thy conclusion concerning that which is beyond the world? If thou sayest, there is nothing, then the heaven [3] and the world will certainly not be anywhere. Fracastoro. The world will then be nowhere. Everything will be nowhere. Philotheo. The world is something which is past finding out. If thou sayest (and it certainly appeareth to me that thou seekest to say something in order to escape Vacuum and Nullity), if thou sayest that beyond the world is a divine intellect, so that God doth become the position in space of all things, why then thou thyself wilt be much embarrassed to explain to us how that which is incorporeal [yet] intelligible, and without dimension can be the very position in space occupied by a dimensional body; and if thou sayest that this incorporeal space containeth as it were a form, as the soul containeth the body, then thou dost not reply to the question of that which lieth beyond, nor to the enquiry concerning that which is outside the universe. And if thou wouldst excuse thyself by asserting that where naught is, and nothing existeth, there can be no question of position in space nor of beyond or outside, yet I shall in no wise be satisfied. For these are mere words and excuses, which cannot form part of our thought. For it is wholly impossible that in any sense or fantasy (even though there may be various senses and various fantasies), it is I say impossible that I can with any true meaning assert that there existeth such a surface, boundary or limit, beyond which is neither body, nor empty space, even though God be there. For divinity hath not as aim to fill space, nor therefore doth it by any means appertain to the nature of divinity that it should be the boundary of a body. For aught which can be termed a limiting body must either be the exterior shape or else a containing body. And by no description of this quality canst thou render it compatible with the dignity of divine and universal nature. [4]',
    author: "Seneca",
  },
  {
    text: "Life will follow the path it began to take, and will neither reverse nor check its course. It will cause no commotion to remind you of its swiftness, but glide on quietly. It will not lengthen itself for a king???s command or a people???s favour. As it started out on its first day, so it will run on, nowhere pausing or turning aside. What will be the outcome? You have been preoccupied while life hastens on. Meanwhile death will arrive, and you have no choice in making yourself available for that.",
    author: "Seneca",
  },
  {
    text: "Let us cherish and love old age; for it is full of pleasure if one knows how to use it. Fruits are most welcome when almost over; youth is most charming at its close; the last drink delights the toper, the glass which souses him and puts the finishing touch on his drunkenness. Each pleasure reserves to the end the greatest delights which it contains. Life is most delightful when it is on the downward slope, but has not yet reached the abrupt decline.",
    author: "Seneca",
  },
  {
    text: "It is not because things are difficult, that we do not dare, it is because we do not dare that Things are difficult",
    author: "Seneca",
  },
  {
    text: "do you know why we have not the power to attain this Stoic ideal? It is because we refuse to believe in our power. Nay, of a surety, there is something else which plays a part: it is because we are in love with our vices; we uphold them and prefer to make excuses for them rather than shake them off.",
    author: "Seneca",
  },
  {
    text: "no one will have any doubt that those are laborious triflers who spend their time on useless literary problems, of whom even among the Romans there is now a great number. It was once a foible confined to the Greeks to inquire into what number of rowers Ulysses had, whether the Iliad or the Odyssey was written first, whether moreover they belong to the same author, and various other matters of this stamp, which, if you keep them to yourself, in no way pleasure your secret soul, and, if you publish them, make you seem more of a bore than a scholar. But now this vain passion for learning useless things has assailed the Romans also.",
    author: "Seneca",
  },
  {
    text: "nimic nu e mai odios ??n??elepciunii dec??t o subtilitate excesiv??",
    author: "Seneca",
  },
  {
    text: "Of all people only those are at leisure who make time for philosophy, only those are really alive. For they not only keep a good watch over their own lifetimes, but they annex every age to theirs. All the years that have passed before them are added to their own. Unless we are very ungrateful, all those distinguished founders of holy creeds were born for us and prepared for us a way of life.",
    author: "Seneca",
  },
  {
    text: "What then? Shall I not follow in the footsteps of my predecessors? I shall indeed use the old road, but if I find one that makes a shorter cut and is smoother to travel, I shall open the new road. Men who have made these discoveries before us are not our masters, but our guides. Truth lies open for all; it has not yet been monopolized. And there is plenty of it left even for posterity to discover.",
    author: "Seneca",
  },
  {
    text: "...those who forget the past, neglect the present, and fear for the future have a life that is very brief and troubled [???] They lose the day in expectation of the night, and the night in fear of the dawn.",
    author: "Seneca",
  },
  {
    text: "...all life is a servitude. So you have to get used to your circumstances, complain about them as little as possible, and grasp whatever advantage they have to offer: no condition is so bitter that a stable mind cannot find some consolation in it.",
    author: "Seneca",
  },
  {
    text: "Is there anything more ridiculous than a person talking with certitude about the future? Such people devote their energy on creating a better life for themselves ??? spending their life preparing for life! They are motivated by thoughts of a distant tomorrow; but postponing life is the greatest waste of time; it deprives them of each new day life brings, it steals from the present with the promise of the hereafter. The greatest obstacle to living a full life is having expectations, delaying gratification based on what might happen tomorrow which squanders today. Where do you focus? At what point do you aim? Everything that is to come is steeped in uncertainty; live now!",
    author: "Seneca",
  },
  {
    text: "Non ?? perch?? ci appaiono inaccessibili che non abbiamo il coraggio di affrontare le cose: ?? perch?? non abbiamo il coraggio di affrontarle, che le cose ci appaiono inaccessibilil",
    author: "Seneca",
  },
  {
    text: "By the toil of others we are led into the presence of things which have been brought from darkness into light. We are excluded from no age, but we have access to them all;",
    author: "Seneca",
  },
  {
    text: "But Fabianus, who was not one of today???s academic philosophers but the true old-fashioned sort, used to say that we must attack the passions by brute force and not by logic; that the enemy???s line must be turned by a strong attack and not by pinpricks; for vices have to be crushed rather than picked at.",
    author: "Seneca",
  },
  {
    text: "You are living as if destined to live for ever; your own frailty never occurs to you; you don???t notice how much time has already passed, but squander it as though you had a full and overflowing supply ??? though all the while that very day which you are devoting to somebody or something may be your last. You act like mortals in all that you fear, and like immortals in all that you desire??? How late it is to begin really to live just when life must end! How stupid to forget our mortality, and put off sensible plans to our fiftieth and sixtieth years, aiming to begin life from a point at which few have arrived!",
    author: "Seneca",
  },
  {
    text: "Associate with those who will make a better man of you. Welcome those whom yourself can improve. Men learn while they teach.",
    author: "Seneca",
  },
  {
    text: "Since nature allows us to enter into a partnership with every age, why not turn from this brief and transient spell of time and give ourselves wholeheartedly to the past, which is limitless and eternal and can be shared with better men than we?",
    author: "Seneca",
  },
  {
    text: 'You will see that the most powerful and highly placed men let drop remarks in which they long for leisure, acclaim it, and prefer it to all their blessings. They desire at times, if it could be with safety, to descend from their high pinnacle; for, though nothing from without should assail or shatter, Fortune of its very self comes crashing down.8  The deified Augustus, to whom the gods vouchsafed more than to any other man, did not cease to pray for rest and to seek release from public affairs; all his conversation ever reverted to this subject???his hope of leisure. This was the sweet, even if vain, consolation with which he would gladden his labours???that he would one day live for himself. In a letter addressed to the senate, in which he had promised that his rest would not be devoid of dignity nor inconsistent with his former glory, I find these words: "But these matters can be shown better by deeds than by promises. Nevertheless, since the joyful reality is still far distant, my desire for that time most earnestly prayed for has led me to forestall some of its delight by the pleasure of words." So desirable a thing did leisure seem that he anticipated it in thought because he could not attain it in reality. He who saw everything depending upon himself alone, who determined the fortune of individuals and of nations, thought most happily of that future day on which he should lay aside his greatness. He had discovered how much sweat those blessings that shone throughout all lands drew forth, how many secret worries they concealed. Forced to pit arms first against his countrymen, then against his colleagues, and lastly against his relatives, he shed blood on land and sea.  Through Macedonia, Sicily, Egypt, Syria, and Asia, and almost all countries he followed the path of battle, and when his troops were weary of shedding Roman blood, he turned them to foreign wars. While he was pacifying the Alpine regions, and subduing the enemies planted in the midst of a peaceful empire, while he was extending its bounds even beyond the Rhine and the Euphrates and the Danube, in Rome itself the swords of Murena, Caepio, Lepidus, Egnatius, and others were being whetted to slay him. Not yet had he escaped their plots, when his daughter9 and all the noble youths who were bound to her by adultery as by a sacred oath, oft alarmed his failing years???and there was Paulus, and a second time the need to fear a woman in league with an Antony.10 When be had cut away these ulcers11 together with the limbs themselves, others would grow in their place; just as in a body that was overburdened with blood, there was always a rupture somewhere. And so he longed for leisure, in the hope and thought of which he found relief for his labours. This was the prayer of one who was able to answer the prayers of mankind.',
    author: "Seneca",
  },
  {
    text: "XIX. Do you retire to these quieter, safer, greater things! Think you that it is just the same whether you are concerned in having corn from oversea poured into the granaries, unhurt either by the dishonesty or the neglect of those who transport it, in seeing that it does not become heated and spoiled by collecting moisture and tallies in weight and measure, or whether you enter upon these sacred and lofty studies with the purpose of discovering what substance, what pleasure, what mode of life, what shape God has; what fate awaits your soul; where Nature lays us to rest When we are freed from the body; what the principle is that upholds all the heaviest matter in the centre of this world, suspends the light on high, carries fire to the topmost part, summons the stars to their proper changes???and ether matters, in turn, full of mighty wonders? You really must leave the ground and turn your mind's eye upon these things! Now while the blood is hot, we must enter with brisk step upon the better course. In this kind of life there awaits much that is good to know???the love and practice of the virtues, forgetfulness of the passions, knowledge of living and dying, and a life of deep repose.",
    author: "Seneca",
  },
  {
    text: "We are born under circumstances that would be favourable if we did not abandon them. It was nature's intention that there should be no need of great equipment for a good life: every individual can make himself happy. External goods are of trivial importance and without much influence in either direction: prosperity does not elevate the sage and adversity does not depress him.",
    author: "Seneca",
  },
  {
    text: 'But we may fairly say that they alone are engaged in the true duties of life who shall wish to have Zeno, Pythagoras, Democritus, and all the other high priests of liberal studies, and Aristotle and Theophrastus, as their most intimate friends every day. No one of these will be "not at home," no one of these will fail to have his visitor leave more happy and more devoted to himself than when he came, no one of these will allow anyone to leave him with empty hands; all mortals can meet with them by night or by day. No one of these will force you to die, but all will teach you how to die; no one of these will wear out your years, but each will add his own years to yours; conversations with no one of these will bring you peril, the friendship of none will endanger your life, the courting of none will tax your purse. From them you will take whatever you wish; it will be no fault of theirs if you do not draw the utmost that you can desire. What happiness, what a fair old age awaits him who has offered himself as a client to these! He will have friends from whom he may seek counsel on matters great and small, whom he may consult every day about himself, from whom he may hear truth without insult, praise without flattery, and after whose likeness he may fashion himself. We are wont to say that it was not in our power to choose the parents who fell to our lot, that they have been given to men by chance; yet we may be the sons of whomsoever we will. Households there are of noblest intellects; choose the one into which you wish to be adopted; you will inherit not merely their name, but even their property, which there will be no need to guard in a mean or niggardly spirit; the more persons you share it with, the greater it will become. These will open to you the path to immortality, and will raise you to a height from which no one is cast down. This is the only way of prolonging mortality???nay, of turning it into immortality. Honours, monuments, all that ambition has commanded by decrees or reared in works of stone, quickly sink to ruin; there is nothing that the lapse of time does not tear down and remove. But the works which philosophy has consecrated cannot be harmed; no age will destroy them, no age reduce them; the following and each succeeding age will but increase the reverence for them, since envy works upon what is close at hand, and things that are far off we are more free to admire. The life of the philosopher, therefore, has wide range, and he is not confined by the same bounds that shut others in. He alone is freed from the limitations of the human race; all ages serve him as if a god. Has some time passed by? This he embraces by recollection. Is time present? This he uses. Is it still to come? This he anticipates. He makes his life long by combining all times into one. But those who forget the past, neglect the present, and fear for the future have a life that is very brief and troubled; when they have reached the end of it, the poor wretches perceive too late that for such a long while they have been busied in doing nothing.',
    author: "Seneca",
  },
  {
    text: "It is clear to you, I know, Lucilius, that no one can lead a happy life, or even one that is bearable, without the pursuit of wisdom, and that the perfection of wisdom is what makes the happy life, although even the beginnings of wisdom make life bearable.",
    author: "Seneca",
  },
  {
    text: "Honours, monuments, whatever the ambitious have ordered by decrees or raised in public buildings are soon destroyed: there is nothing that the passage of time does not demolish and remove.",
    author: "Seneca",
  },
  {
    text: "Return now to these studies and they will keep you safe. They will comfort you, they will delight you; and if they will genuinely penetrate your mind, never again will grief enter there, or anxiety, or the distress caused by futile and pointless suffering.",
    author: "Seneca",
  },
  {
    text: "So the life of the philosopher extends widely: he is not confined by the same boundary as are others. He alone is free from the laws that limit the human race, and all ages serve him as though he were a god. Some time has passed: he grasps it in his recollection. Time is present: he uses it. Time is to come: he anticipates it. This combination of all times into one gives him a long life.",
    author: "Seneca",
  },
  {
    text: "Compra solamente lo necesario, no lo conveniete. Lo innecesario, aunque cueste un solo centimo, es caro. Buy only what is necessary, not what is convenient. What is unnecessary, even if it only costs one cent, is expensive.",
    author: "Seneca",
  },
  {
    text: "the mind itself suggests to itself many perverted, vicious forms of pleasure? ??? in the first place arrogance, excessive self-esteem, swaggering precedence over other men, a shortsighted, nay, a blind devotion to his own interests, dissolute luxury, excessive delight springing from the most trifling and childish causes, and also talkativeness, pride that takes a pleasure in insulting others, sloth, and the decay of a dull mind which goes to sleep over itself.",
    author: "Seneca",
  },
  {
    text: "Disasters, therefore, and losses, and wrongs, have only the same power over virtue that a cloud has over the sun.",
    author: "Seneca",
  },
  {
    text: "Life is divided into three periods, past, present and future. Of these, the present is short, the future is doubtful, the past is certain. For this last is the one over which Fortune has lost her power, which cannot be brought back to anyone???s control.",
    author: "Seneca",
  },
  {
    text: "Now God, who is the Father of us all, has placed ready to our hands those things which he intended for our own good; he did not wait for any search on our part, and he gave them to us voluntarily. But that which would be injurious, he buried deep in the earth. We can complain of nothing but ourselves; for we have brought to light the materials for our destruction, against the will of Nature, who hid them from us.",
    author: "Seneca",
  },
  {
    text: "longing for the future and weariness of the present.",
    author: "Seneca",
  },
  {
    text: "No time is too short for criminals to do wrong.",
    author: "Seneca",
  },
  {
    text: "It's easier to get philosophers to agree than clocks.",
    author: "Seneca",
  },
  {
    text: "Those who choose to have no real purpose in life are ever rootless and dissatisfied, tossed by their aimlessness into ever-changing situations.",
    author: "Seneca",
  },
  {
    text: "who as though inspired with divine utterance sings salutary verses: Life",
    author: "Seneca",
  },
  {
    text: "Why are you idle? If you don???t grasp it first, it flees.??? And even if you do grasp it, it will still flee. So you must match time???s swiftness with your speed in using it, and you must drink quickly as though from a rapid stream that will not always flow. In",
    author: "Seneca",
  },
  {
    text: "No one willingly reverts to the past unless all his actions have passed his own censorship, which is never deceived.",
    author: "Seneca",
  },
  {
    text: "This is the touchstone of such a spirit; no prizefighter can go with high spirits into the strife if he has never been beaten black and blue; the only contestant who can confidently enter the lists is the man who has seen his own blood, who has felt his teeth rattle beneath his opponent's fist, who has been tripped and felt the full force of his adversary's charge, who has been downed in body but not in spirit, one who, as often as he falls, rises again with greater defiance than ever.",
    author: "Seneca",
  },
  {
    text: "Conversation has a kind of charm about it, an insuating and insidious something that elicits secrets from us just like love or liquor.",
    author: "Seneca",
  },
  {
    text: "You live as if you will live forever, no care for your mortality ever enters your head, you pay no mind to how much time has already gone by.",
    author: "Seneca",
  },
  {
    text: "...sola est quies, mecum ruina cuncta si video abruta; mecum omnia abeant. Trahere cum pereas, libet. (...the only calm for me -  if with me I see the whole universe o'erwhelmed in ruins; with me let all things pass away; 'tis sweet to drag others down when thou art perishing.)",
    author: "Seneca",
  },
  {
    text: "Istam terra de fossam premat, gravisque terrus impio capiti incubet! (As for her, let her be buried deep in earth, and heavy may the soil lie on her unholy head.)",
    author: "Seneca",
  },
  {
    text: "?????????? ???????????????? ???????????? ???? ????-?????????????????? ???? ???????????? ????????????.",
    author: "Seneca",
  },
  {
    text: "Most human beings, Paulinus,* complain about the meanness of nature, because we are born for a brief span of life, and because this spell of time that has been given to us rushes by so swiftly and rapidly that with very few exceptions life ceases for the rest of us just when we are getting ready for it.",
    author: "Seneca",
  },
  {
    text: 'El verdadero h??roe en una obra literaria es el lector que la aguanta".',
    author: "Seneca",
  },
  {
    text: "Disposons donc notre esprit ?? prendre en gr?? tout ce qui arrivera, et surtout que la pens??e de notre fin ne nous afflige pas. Il faut faire ses pr??paratifs pour la mort avant que de songer aux provisions pour la vie",
    author: "Seneca",
  },
  {
    text: "Hence the dictum of the greatest of doctors:??? ???Life is short, art is long.",
    author: "Seneca",
  },
  {
    text: "C???est la nature, dis-tu, qui me donne tous ces biens. Ne vois-tu pas qu???en parlant ainsi tu ne fais que changer le nom de Dieu ? La nature est-elle autre chose que Dieu et la raison divine, incorpor??e au monde entier et ?? chacune de ses parties ?",
    author: "Seneca",
  },
  {
    text: '[...] Preferirebbero vedere sottosopra lo Stato piuttosto che la loro capigliatura!Poco gli imposta se la testa ?? malata,basta faccia bella figura:meglio essere ben pettinati che dignitosi e onesti" [De brevitate vitae]',
    author: "Seneca",
  },
  {
    text: "no man, if he be ungrateful, will be unhappy in the future. I allow him no day of grace; he is unhappy forthwith.",
    author: "Seneca",
  },
  {
    text: "It would be superfluous to mention more who, though others deemed them the happiest of men, have expressed their loathing for every act of their years, and with their own lips have given true testimony against themselves; but by these complaints they changed neither themselves nor others. For when they have vented their feelings in words, they fall back into their usual round. Heaven knows! such lives as yours, though they should pass the limit of a thousand years, will shrink into the merest span; your vices will swallow up any amount of time. The space you have, which reason can prolong, although it naturally hurries away, of necessity escapes from you quickly; for you do not seize it, you neither hold it back, nor impose delay upon the swiftest thing in the world, but you allow it to slip away as if it were something superfluous and that could be replaced.",
    author: "Seneca",
  },
  {
    text: 'Accordingly, since you cannot read all the books which you may possess, it is enough to possess only as many books as you can read. 4. "But," you reply, "I wish to dip first into one book and then into another." I tell you that it is the sign of an overnice appetite to toy with many dishes; for when they are manifold and varied, they cloy but do not nourish. So you should always read standard authors; and when you crave a change, fall back upon those whom you read before.',
    author: "Seneca",
  },
  { text: "The present alone can make no man wretched.", author: "Seneca" },
  {
    text: "Afasta-te da companhia dos perniciosos, eles fazem nascer em ti um licenciosidade que lhe ?? natutal.",
    author: "Seneca",
  },
  {
    text: "The happy man, therefore, is he who can make a right judgment in all things: he is happy who in his present circumstances, whatever they may be, is satisfied and on friendly terms with the conditions of his life. That man is happy, whose reason recommends to him the whole posture of his affairs.",
    author: "Seneca",
  },
  {
    text: "You must be not only present in the body, but watchful in mind, if you would avail yourself of the fleeting opportunity. Accordingly, look about you for the opportunity; if you see it, grasp it, and with all your energy and with all your strength devote yourself to this task",
    author: "Seneca",
  },
  {
    text: "There is no easy way from the earth to the stars.",
    author: "Seneca",
  },
  {
    text: "Men do not care how nobly they live, but only how long, although it is within the reach of every man to live nobly, but within no man's power to live long. Farewell.",
    author: "Seneca",
  },
  {
    text: "If you would escape your troubles, you need not another place but another personality.",
    author: "Seneca",
  },
  {
    text: "the minds of the preoccupied, as if harnessed in a yoke, cannot turn round and look behind them. So their lives vanish into an abyss; and just as it is no use pouring any amount of liquid into a container without a bottom to catch and hold it, so it does not matter how much time we are given if there is nowhere for it to settle; it escapes through the cracks and holes of the mind.",
    author: "Seneca",
  },
  {
    text: "Many pursue no fixed goal, but are tossed about in ever-changing designs by a fickleness which is shifting, inconstant and never satisfied with itself.",
    author: "Seneca",
  },
  {
    text: "The busy man is busy with everything except living; there is nothing that is more difficult to learn how to do right.",
    author: "Seneca",
  },
  {
    text: "Every pleasure is most valued when it is coming to an end?",
    author: "Seneca",
  },
  {
    text: "Shall I tell you what philosophy holds out to humanity? Counsel.",
    author: "Seneca",
  },
  {
    text: 'Why of your own accord postpone your real life to the distant future? Shall you wait for some interest to fall due, or for some income on your merchandise, or for a place in the will of some wealthy old man, when you can be rich here and now. Wisdom offers wealth in ready money, and pays it over to those in whose eyes she has made wealth superfluous." These',
    author: "Seneca",
  },
  { text: "While we are postponing, life speeds by.", author: "Seneca" },
  {
    text: "7. Do you ask me what this real good is, and whence it derives? I will tell you: it comes from a good conscience, from honourable purposes, from right actions, from contempt of the gifts of chance, from an even and calm way of living which treads but one path. For",
    author: "Seneca",
  },
  {
    text: "Puisque le destin n???est que la succession des causes encha??n??es l???une ?? l???autre, Dieu est la premi??re de toutes les causes, d???o?? les autres d??coulent",
    author: "Seneca",
  },
  {
    text: "Just as it matters little whether you lay a sick man on a wooden or on a golden bed, for whithersoever he be moved he will carry his malady with him; so one need not care whether the diseased mind is bestowed upon riches or upon poverty. His malady goes with the man. Farewell,",
    author: "Seneca",
  },
  {
    text: "Lay hold of today's task, and you will not need to depend so much upon to-morrow's. While",
    author: "Seneca",
  },
  {
    text: "Leisure without study is death; it is a tomb for the living man.",
    author: "Seneca",
  },
  {
    text: "Let all your efforts be directed to something, let it keep that end in view. It's not activity that disturbs people, but false conceptions of things that drive them mad.",
    author: "Seneca",
  },
  {
    text: "Ask about those whose names are learned by heart, and you will see that they have these distinguishing marks: X cultivates Y and Y cultivates Z ??? no one bothers about himself.",
    author: "Seneca",
  },
  {
    text: "That which Fortune has not given, she cannot take away.",
    author: "Seneca",
  },
  {
    text: "we should often withdraw into ourselves; for mixing with persons of dissimilar natures throws into disorder our settled composure and wakens our passions anew, exacerbating whatever is weak in the mind and not properly healed.",
    author: "Seneca",
  },
  {
    text: "not to give in to adversity, never to trust prosperity, and always take full note of fortune???s habit of behaving just as she pleases, treating her as if she were actually going to do everything it is in her power to do. Whatever you have been expecting for some time comes as less of a shock.",
    author: "Seneca",
  },
  {
    text: "But it is hard to keep within bounds in that which you believe to be good. The real good may be coveted with safety. Do you ask me what this real good is, and whence it derives? I will tell you: it comes from a good conscience, from honourable purposes, from right actions, from contempt of the gifts of chance, from an even and calm way of living which treads but one path. For men who leap from one purpose to another, or do not even leap but are carried over by a sort of hazard, ??? how can such wavering and unstable persons possess any good that is fixed and lasting? There are only a few who control themselves and their affairs by a guiding purpose; the rest do not proceed; they are merely swept along, like objects afloat in a river. And of these objects, some are held back by sluggish waters and are transported gently; others are torn along by a more violent current; some, which are nearest the bank, are left there as the current slackens; and others are carried out to sea by the onrush of the stream. Therefore, we should decide what we wish, and abide by the decision.",
    author: "Seneca",
  },
  {
    text: 'They live ill who are always beginning to live." 10. You are right in asking why; the saying certainly stands in need of a commentary. It is because the life of such persons is always incomplete. But a man cannot stand prepared for the approach of death if he has just begun to live. We must make it our aim already to have lived long enough. No one deems that he has done so, if he is just on the point of planning his life. 11. You need not think that there are few of this kind; practically everyone is of such a stamp. Some men, indeed, only begin to live when it is time for them to leave off living. And if this seems surprising to you, I shall add that which will surprise you still more: Some men have left off living before they have begun. Farewell.',
    author: "Seneca",
  },
  {
    text: "Fortune recently took away her mother, but your love will mean that she will only grieve over her mother???s loss but not suffer for it.",
    author: "Seneca",
  },
  {
    text: "for only philosophy or honourable occupation can divert from its anguish a heart whose grief springs from love.",
    author: "Seneca",
  },
  {
    text: "Those who lack self-control lead disturbed and tumultuous lives; their crimes are balanced by their fears, and they are never at ease.",
    author: "Seneca",
  },
  {
    text: "But you never deign to look at yourself or listen to yourself. So you have no reason to claim credit from anyone for those attentions, since you showed them not because you wanted someone else???s company but because you could not bearyour own.",
    author: "Seneca",
  },
  {
    text: "But for those whose life is far removed from all business it must be amply long. None of it is frittered away, none of it scattered here and there, none of it committed to fortune, none of it lost through carelessness, none of it wasted on largesse, none of it superfluous: the whole of it, so to speak, is well invested.",
    author: "Seneca",
  },
  {
    text: "Beyond question the feeling of a lover has in it something akin to friendship; one might call it friendship run mad. But, though this is true, does anyone love for the sake of gain, or promotion, or renown? Pure[7] love, careless of all other things, kindles the soul with desire for the beautiful object, not without the hope of a return of the affection.",
    author: "Seneca",
  },
  { text: "If you want to keep a secret, never share it.", author: "Seneca" },
  {
    text: "For the wise man does not consider himself unworthy of any gifts from Fortune???s hands: he does not love wealth but he would rather have it; he does not admit into his heart but into his home; and what wealth is his he does not reject but keeps, wishing it to supply greater scope for him to practice his virtue.",
    author: "Seneca",
  },
  { text: "To be everywhere, is to be no where at all", author: "Seneca" },
  {
    text: "Medicine once consisted of the knowledge of a few simples, to stop the flow of blood, or to heal wounds; then by degrees it reached its present stage of complicated variety. No wonder that in early days medicine had less to do! Men's bodies were still sound and strong; their food was light and not spoiled by art and luxury, whereas when they began to seek dishes not for the sake of removing, but of rousing, the appetite, and devised countless sauces to whet their gluttony, ??? then what before was nourishment to a hungry man became a burden to the full stomach. 16. Thence come paleness, and a trembling of wine-sodden muscles, and a repulsive thinness, due rather to indigestion than to hunger. Thence weak tottering steps, and a reeling gait just like that of drunkenness. Thence dropsy, spreading under the entire skin, and the belly growing to a paunch through an ill habit of taking more than it can hold. Thence yellow jaundice, discoloured countenances, and bodies that rot inwardly, and fingers that grow knotty when the joints stiffen, and muscles that are numbed and without power of feeling, and palpitation of the heart with its ceaseless pounding. 17. Why need I mention dizziness? Or speak of pain in the eye and in the ear, itching and aching[11] in the fevered brain, and internal ulcers throughout the digestive system? Besides these, there are countless kinds of fever, some acute in their malignity, others creeping upon us with subtle damage, and still others which approach us with chills and severe ague. 18. Why should I mention the other innumerable diseases, the tortures that result from high living?   Men used to be free from such ills, because they had not yet slackened their strength by indulgence, because they had control over themselves, and supplied their own needs.[12] They toughened their bodies by work and real toil, tiring themselves out by running or hunting or tilling the earth. They were refreshed by food in which only a hungry man could take pleasure. Hence, there was no need for all our mighty medical paraphernalia, for so many instruments and pill-boxes. For plain reasons they enjoyed plain health;",
    author: "Seneca",
  },
  {
    text: "He is ungrateful who denies that he has received a kindness which has been bestowed upon him; he is ungrateful who conceals it; he is ungrateful who makes no return for it; most ungrateful of all is he who forgets it.",
    author: "Seneca",
  },
  {
    text: "therefore whenever his last day comes, the wise man will not hesitate to meet death with a firm step.",
    author: "Seneca",
  },
  {
    text: "For the wise man regards wealth as a slave, the fool as a master.",
    author: "Seneca",
  },
  {
    text: "How late it is to begin really to live just when life must end! How stupid to forget our mortality, and put off sensible plans to our fiftieth and sixtieth years, aiming to begin life from a point at which few have arrived!",
    author: "Seneca",
  },
  {
    text: "for that love is greater which wins less through equal danger.",
    author: "Seneca",
  },
  {
    text: "It is the mind that creates our wealth, and this goes with us into exile, and in the harshest desert places it finds sufficient to nourish the body and revels in the enjoyment of its own goods.",
    author: "Seneca",
  },
  {
    text: "He who saw that everything depended on himself alone, who decided the fortune of individuals and nations, was happiest when thinking of that day on which he would lay aside his own greatness.",
    author: "Seneca",
  },
  { text: "To be everywhere; is to be nowhere.", author: "Seneca" },
  {
    text: "Lay hold of today's task, and you will not need to depend so much upon to-morrow's. While we are postponing, life speeds by. 3.",
    author: "Seneca",
  },
  { text: "fallaces sunt rerum species", author: "Seneca" },
  {
    text: "What is the state of things, then? It is this: I do not regard a man as poor, if the little which remains is enough for him. I advise you, however, to keep what is really yours; and you cannot begin too early. For, as our ancestors believed, it is too late to spare when you reach the dregs of the cask.[1] Of that which remains at the bottom, the amount is slight, and the quality is vile. Farewell.",
    author: "Seneca",
  },
  {
    text: "If you wish to fear nothing, consider that all things are to be feared.",
    author: "Seneca",
  },
  { text: "To be everywhere; is to nowhere.", author: "Seneca" },
  {
    text: "No one is the object of another man's contempt, unless he is first the object of his own.",
    author: "Seneca",
  },
  {
    text: "?????? ?????????? ?????????? ???????? ???????????? ???????? ?????? ?????????????? ?????????????? ?????????????? ?????? ???? ??????????.",
    author: "Seneca",
  },
  {
    text: "Greed is satisfied by nothing, but nature finds satisfaction even in scant measure.",
    author: "Seneca",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor. What",
    author: "Seneca",
  },
  {
    text: "The duty of a man is to be useful to his fellow-men; if possible, to be useful to many of them; failing this, to be useful to a few; failing this, to be useful to his neighbours, and, failing them, to himself: for when he helps others, he advances the general interests of mankind. Just as he who makes himself a worse man does harm not only to himself but to all those to whom he might have done good if he had made himself a better one, so he who deserves well of himself does good to others by the very fact that he is preparing what will be of service to them.",
    author: "Seneca",
  },
  {
    text: "You will find no one willing to share out his money; but to how many does each of us divide up his life! People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.",
    author: "Seneca",
  },
  {
    text: "is natural to touch more often the part that hurts.",
    author: "Seneca",
  },
  {
    text: "Never will there be a shortage of reasons for anxiety, whether born of happiness or misery; life will press on its way from one pursuit to another; leisure will never be enjoyed, though the prayer is constantly on our lips.",
    author: "Seneca",
  },
  {
    text: "[I]ndulge the body just so far as suffices for good health. It needs to be treated somewhat strictly to prevent it from being disobedient to the spirit. Your food should appease your hunger, your drink quench your thirst, your clothing keep out the cold, your house be a protection against inclement weather.",
    author: "Seneca",
  },
  {
    text: "Again, do you call those men leisured who spend many hours at the barber???s simply to cut whatever grew overnight, to have a serious debate about every separate hair, to tidy up disarranged locks or to train thinning ones from the sides to lie over the forehead? How angry they get if the barber has been a bit careless ??? as if he were trimming a real man!",
    author: "Seneca",
  },
  {
    text: "We are not given a short life but we make it short... Life is long if you know how to use it.",
    author: "Seneca",
  },
  {
    text: "Those who forget the past, ignore the present, and fear for the future have a life that is very brief and filled with anxiety: when they come to face death, the wretches understand too late that for such a long time they have busied themselves in doing nothing.",
    author: "Seneca",
  },
  {
    text: "?????? (??????????????)???? ???????? ?????? ???????? ???????????? ?????????? ???? ?????????? ???????????? ???? ???????????? ????????????.",
    author: "Seneca",
  },
  {
    text: "Nothing satisfies greed, but even a little satisfies nature.",
    author: "Seneca",
  },
  {
    text: "Those who forget the past, ignore the present, and fear for the future have a life that is very brief and filled with anxiety.",
    author: "Seneca",
  },
  {
    text: "Then it studies all the awesome expanse which lies between heaven and earth ??? this nearer space turbulent with thunder, lightning, gales of wind, and falling rain, snow and hail. Finally, having scoured the lower areas it bursts through to the heights and enjoys the noblest sight of divine things and, mindful of its own immortality, it ranges over all that has been and will be throughout all ages.",
    author: "Seneca",
  },
  {
    text: "Those who are busy with other things do not notice it until the end comes.",
    author: "Seneca",
  },
  {
    text: "Do you ask what is the proper limit to wealth? It is, first, to have what is necessary, and, second, to have what is enough.",
    author: "Seneca",
  },
  {
    text: "Part of my joy in learning is that it puts me in a position to teach; nothing, however outstanding and however helpful, will ever give me any pleasure if the knowledge is for my benefit alone.",
    author: "Seneca",
  },
  {
    text: "How late it is to begin living only when one must stop!",
    author: "Seneca",
  },
  {
    text: "You fear everything as mortals but desire to have everything as gods.",
    author: "Seneca",
  },
  {
    text: "You live as though you were going to live for ever, at no time taking thought for your weakness, and you fail to note how much time has already passed by; you waste hours as though you were drawing from a well that was full to overflowing, though all the while that very day you are giving to some person or thing is possibly your last.",
    author: "Seneca",
  },
  {
    text: "they are like prowling enemies who pounce on you when occasion offers, and allow you neither to be at the ready as in war nor at ease as in peace.",
    author: "Seneca",
  },
  {
    text: "You live as though you were going to live for ever, at no time taking thought for your weakness, and you fail to note how much time has already passed by.",
    author: "Seneca",
  },
  {
    text: "What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "Men are tight-fisted in keeping control of their fortunes, but when it comes to the matter of wasting time, they are positively extravagant in the one area where there is honour in being miserly.",
    author: "Seneca",
  },
  {
    text: "Why do you voluntarily deceive yourself and require to be told now for the first time what fate it is that you have long been labouring under? Take my word for it: since the day you were born you are being led thither.",
    author: "Seneca",
  },
  {
    text: "set yourself free for your own sake; gather and save your time, which till lately has been forced from you, or filched away, or has merely slipped from your hands. Make yourself believe the truth of my words, - that certain moments are torn from us, that some are gently removed, and that others glide beyond our reach. The most disgraceful kind of loss, however, is that due to carelessness. Furthermore, if you will pay close heed to the problem, you will find that the largest portion of our life passes while we are doing ill, a goodly share while we are doing nothing, and the whole while we are doing that which is not to the purpose. 2. What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years be behind us are in death's hands.",
    author: "Seneca",
  },
  {
    text: "Men do not allow anyone to take possession of their estates, and, if there is the slightest dispute about the limit of their property, they rush to pick up stones and weapons: but they are allow others to make inroads into their life, even extending personal invitations to those who will one day possess it.",
    author: "Seneca",
  },
  {
    text: "That day, which you fear as being the end of all things, is the birthday of your eternity.",
    author: "Seneca",
  },
  {
    text: "All that remains of our existence is not actually life but merely time.",
    author: "Seneca",
  },
  {
    text: "Nothing is more dishonourable than an old man, heavy with years, who has no other evidence of his having lived long except his age.",
    author: "Seneca",
  },
  { text: "Life is long, if only you knew how to use it.", author: "Seneca" },
  {
    text: "And I hold that no man has treated mankind worse than he who has studied philosophy as if it were some marketable trade, who lives in a different manner from that which he advises.",
    author: "Seneca",
  },
  {
    text: "No one can live happily who has regard for himself alone and transforms everything into a question of his own utility",
    author: "Seneca",
  },
  {
    text: "We do not receive a life that is short, but rather we make it so; we are not beggar in it, but spendthrifts.",
    author: "Seneca",
  },
  {
    text: "We do not receive a life that is short, but rather we make it so.",
    author: "Seneca",
  },
  {
    text: "Your greatest difficulty is with yourself; for you are your own stumbling-block.",
    author: "Seneca",
  },
  {
    text: "Nullus accusator caret culpa; omnes peccaviums.",
    author: "Seneca",
  },
  {
    text: "Let no one rob me of a single day who is not going to make me an adequate return for such a loss.",
    author: "Seneca",
  },
  { text: "to be everywhere is to be nowhere", author: "Seneca" },
  {
    text: "Once we have driven away all that excites or affrights us, there ensues unbroken tranquility and enduring freedom.",
    author: "Seneca",
  },
  {
    text: "Unbroken prosperity cannot bear a single blow; but he who has waged an unceasing strife with his misfortunes has gained a thicker skin by his sufferings, yields to no disaster, and even though he fall yet fights on his knee.",
    author: "Seneca",
  },
  {
    text: "We must also make ourselves flexible, to avoid becoming too devoted to the plans we have formed, and we should make the transition to the state that chance has brought us to without dreading a change either in our purpose or our condition, provided that we are not falling prey to fickleness, a vice entirely at odds with repose.",
    author: "Seneca",
  },
  {
    text: "Men are not made restless by activity but driven to madness by false impressions of reality.",
    author: "Seneca",
  },
  {
    text: "we perish because we follow other men's examples: we should be cured of this if we were to disengage ourselves from the herd;",
    author: "Seneca",
  },
  {
    text: "A person's fears are lighter when the danger is at hand.",
    author: "Seneca",
  },
  {
    text: "nature's needs are easily provided and ready to hand. 11. It is the superfluous things for which men sweat, - the superfluous things that wear our togas threadbare, that force us to grow old in camp, that dash us upon foreign shores. That which is enough is ready to our hands. He who has made a fair compact with poverty is rich. Farewell.",
    author: "Seneca",
  },
  {
    text: "The man who fears death will never do anything worthy of a man who is alive; but he who knows that these were the conditions drawn up for him when he was conceived will live according to this rule and at the same time, through the same strength of mind, he will ensure that none of what happens to him will come unexpectedly.",
    author: "Seneca",
  },
  {
    text: "Again, when my mind is lifted up by the greatness of its thoughts, it becomes ambitious for words and longs to match its higher inspiration with its language, and so produces a style that conforms to the impressiveness of the subject matter.",
    author: "Seneca",
  },
  {
    text: "The one to whom nothing was refused, whose tears were always wiped away by an anxious mother, will not abide being offended. ???  2.21.6",
    author: "Seneca",
  },
  {
    text: "Again, when my mind is lifted up by the greatness of its thoughts, it becomes ambitious for words and longs to match its higher inspiration with its language, and so produces a style that conforms to the impressiveness of the subject matter. Then it is that I forget my rule and principle of restraint, and I am carried too far aloft by a voice no longer my own.",
    author: "Seneca",
  },
  {
    text: "by foreseeing anything that can happen as though it will happen he will soften the onslaught of all his troubles, which present no surprises to those who are ready and waiting for them, but fall heavily on those who are careless in the expectation that all will be well.",
    author: "Seneca",
  },
  {
    text: "The happy man is satisfied with his present situation, no matter what it is, and eyes his fortune with contentment; the happy man is the one who permits reason to evaluate every condition of his existence.",
    author: "Seneca",
  },
  {
    text: "All the greatest blessings create anxiety, and Fortune is never less to be trusted than when it is fairest.",
    author: "Seneca",
  },
  {
    text: "No one who goes astray affects himself alone, but rather will be the cause and instigator of someone else going astray; it is harmful to attach oneself to the people in front, and, so long as each one of us prefers to trust someone else's judgment rather than relying on his own, we never exercise judgment in our lives but constantly resort to trust, and a mistake that has been passed down from one hand to another takes us over and spins our ruin.",
    author: "Seneca",
  },
  {
    text: "For you have no reason to suppose that we come to grief more through the flattery of others than through our own.",
    author: "Seneca",
  },
  {
    text: "?????????? ???? ???????? ???? ??????????, ?????? ???? ?? ???????????????? ???? ????????????.",
    author: "Seneca",
  },
  {
    text: "?????????? ???? ?????????? ???????? ???? ??????????????, ???????? ???? ???? ???????? ????.",
    author: "Seneca",
  },
  {
    text: "It is fair to say that those who make Zeno, Pythagoras, Democritus and other giants of philosophy their daily companions will be more fully engaged in a rewarding life. None of these friends will be too busy to welcome you inside their home, none will fail to leave his caller feeling refreshed after an appointment. Any man can spend time with them day or night.",
    author: "Seneca",
  },
  {
    text: "wealth however limited, if it is entrusted to a good guardian, increases by use,",
    author: "Seneca",
  },
  {
    text: "When through fixed periods of years they have completed their courses they will start again upon their former circuits. How silly then to imagine that the human mind, which is formed of the same elements as divine beings, objects to movement and change of abode, while the divine nature finds delight and even self-preservation in continual and very rapid change.",
    author: "Seneca",
  },
  {
    text: "New preoccupations take the place of the old, hope excites more hope and ambition more ambition. They do not look for an end to their misery, but simply change the reason for it.",
    author: "Seneca",
  },
  {
    text: "No man will ever be happy if tortured by the greater happiness of another.",
    author: "Seneca",
  },
  {
    text: "It is shameful to hate a person who deserves your praises; but how much more shameful it is to hate someone for the very cause that makes him deserve your pity.",
    author: "Seneca",
  },
  {
    text: "All outdoors may be bedlam, provided there is no disturbance within.",
    author: "Seneca",
  },
  { text: "Cui prodest scelus, is fecit ... (Medea)", author: "Seneca" },
  {
    text: '1. What is this force, Lucilius, that drags us in one direction when we are aiming in another, urging us on to the exact place from which we long to withdraw? What is it that wrestles with our spirit, and does not allow us to desire anything once for all? We veer from plan to plan. None of our wishes is free, none is unqualified, none is lasting. 2. "But it is the fool," you say, "who is inconsistent; nothing suits him for long." But how or when can we tear ourselves away from this folly? No man by himself has sufficient strength to rise above it; he needs a helping hand, and some one to extricate him. 3. Epicurus remarks that certain men have worked their way to the truth without any one\'s assistance, carving out their own passage. And he gives special praise to these, for their impulse has come from within, and they have forged to the front by themselves. Again, he says, there are others who need outside help, who will not proceed unless someone leads the way, but who will follow faithfully. Of these, he says, Metrodorus was one; this type of man is also excellent, but belongs to the second grade. We ourselves are not of that first class, either; we shall be well treated if we are admitted into the second. Nor need you despise a man who can gain salvation only with the assistance of another; the will to be saved means a great deal, too. 4. You will find still another class of man, ??? and a class not to be despised, ??? who can be forced and driven into righteousness, who do not need a guide as much as they require someone to encourage and, as it were, to force them along. This is the third variety. If you ask me for a man of this pattern also, Epicurus tells us that Hermarchus was such. And of the two last-named classes, he is more ready to congratulate the one, but he feels more respect for the other; for although both reached the same goal, it is a greater credit to have brought about the same result with the more difficult material upon which to work.',
    author: "Seneca",
  },
  {
    text: "Think your way through difficulties: harsh conditions can be softened, restricted ones can be widened, and heavy ones can weigh less on those who know how to bear them.",
    author: "Seneca",
  },
  {
    text: "Heaven knows!  such lives as yours, though they should pass the limit of a thousand years, will shrink into the merest span; your vices will swallow up any amount of time.  The space you have, which reason can prolong, although it naturally hurries away, of necessity escapes from you quickly; for you do not seize it, you neither hold it back, nor impose delay upon the swiftest thing in the world, but you allow it to slip away as if it were something superfluous and that could be replaced.",
    author: "Seneca",
  },
  {
    text: "To consort with the crowd is harmful; there is no person who does not make some vice attractive to us, or stamp it upon us, or taint us unconsciously therewith.",
    author: "Seneca",
  },
  { text: "mors quid est? aut finis aut transitus.", author: "Seneca" },
  { text: "Ignorance is the cause of fear.", author: "Seneca" },
  {
    text: "These we should refuse to buy, if we were compelled to give in payment for them our houses or some attractive and profitable estate; but we are eager to attain them at the cost of anxiety, of danger, and of lost honour, personal freedom, and time; so true it is that each man regards nothing as cheaper than himself.",
    author: "Seneca",
  },
  {
    text: "Let us be brave in the face of hazards. Let us not fear wrongs, or wounds, or bonds, or poverty. And what is death? It is either the end, or a process of change.",
    author: "Seneca",
  },
  {
    text: "Turn to philosophy, therefore, with all your soul, sit at her feet, cherish her; a great distance will then begin to separate you from other men. You will be far ahead of all mortals, and even the gods will not be far ahead of you. Do you ask what will be the difference between yourself and the gods? They will live longer. But, by my faith, it is the sign of a great artist to have confined a full likeness to the limits of a miniature. The wise man's life spreads out to him over as large a surface as does all eternity to a god. There is one point in which the sage has an advantage over the god; for a god is freed from terrors by the bounty of nature, the wise man by his own bounty.",
    author: "Seneca",
  },
  {
    text: "Er zijn eenvoudige, korte oefeningen die het lichaam in kort bestek afmatten en dus tijd besparen, en vooral dat laatste moeten we goed bijhouden. Ga bijvoorbeeld hardlopen, of oefenen met gewichten, of springen. Je kunt hoog- of verspringen, of laat ik zeggen 'ritueel dansen' of, om het banaler te zeggen, stampen als de wasman in zijn tobbe. Kies maar, het is allemaal simpel en gemakkelijk om te doen.Maar wat je ook doet, keer snel weer terug van het lichaam naar de ziel! Want die moet je dag en nacht trainen, die wordt door matige inspanning gevoed. En dat soort training wordt niet belet door kou of hitte, nee, niet eens door ouderdom. Richt je op iets goeds dat op den duur alleen maar beter wordt. En ik zeg niet dat je altijd boven je boeken of schrijftafeltjes moet zitten. Laat je geest ook eens wat anders doen, maar dan zo dat het ontspannend werkt en niet ontkrachtend. Een tochtje in de wagen schudt de ledematen los, zonder de studie te beletten: je kunt iets lezen of dicteren, je kunt praten of luisteren, allemaal dingen die ook tijdens een wandeling mogelijk zijn.",
    author: "Seneca",
  },
  {
    text: "De su comunicaci??n sacar??s el fruto que quisieres, sin que por ellos quede el que consigas m??s cuanto m??s sacares. ??Qu?? felicidad y qu?? honrada vejez espera al que se puso debajo de la protecci??n de ??sta! Tendr?? con quien deliberar de las materias grandes y peque??as, a quien consultar cada d??a en sus negocios, y de quien o??r verdades sin injurias, y alabanzas sin adulaci??n, y una idea cuya semejanza imite.",
    author: "Seneca",
  },
  {
    text: "LETTERA 28 ?? L'ANIMO CHE DEVI CAMBIARE, NON IL CIELO SOTTO CUI VIVI Prima esercita la funzione di accusatore, poi quella di giudice; e in ultimo quella di avvocato difensore. All'occorrenza, sappi anche infliggerti una condanna.",
    author: "Seneca",
  },
  {
    text: "LETTERA 27 LA VIRT?? ?? FONTE DI FELICIT?? Resta ancora molto lavoro a cui tu, di persona, devi dedicare le tue veglie, le tue fatiche, se desideri che sia portato a compimento. A differenza di altri generi di lavoro, questo non ammette deleghe o aiuti.",
    author: "Seneca",
  },
  {
    text: "One of the causes of the troubles that beset us is the way our lives are guided by the example of others; instead of being set to rights by reason we???re seduced by convention.",
    author: "Seneca",
  },
  {
    text: "It is a question whether he died by his own hand; for he fell from a sudden wound received in his groin, some doubting whether his death was voluntary, no one, whether it was timely. It",
    author: "Seneca",
  },
  {
    text: "f you wish to put off all worry, assume that what you fear may happen is certainly going to happen.",
    author: "Seneca",
  },
  {
    text: "It is the superfluous things for which men sweat, ??? the superfluous things that wear our togas threadbare, that force us to grow old in camp, that dash us upon foreign shores. That which is enough is ready to our hands. He",
    author: "Seneca",
  },
  {
    text: "It's not that we have a short time to live, but that we waste much of it. Life is long enough, and it's been given to us in generous measure for accomplishing the greatest things, if the whole of it is well invested.",
    author: "Seneca",
  },
  {
    text: "But our friend Bassus stays sharp minded. Philosophy furnishes him with this: to be cheerful when death comes in view, to stay strong and happy no matter what one???s bodily condition,",
    author: "Seneca",
  },
  {
    text: "LETTERA 1 L'USO DEL TEMPO E l'uomo ?? tanto stolto che, quando acquista beni di nessun valore, e in ogni caso compensabili, accetta che gli vengano messi in conto; ma nessuno, che abbia cagionato perdita di tempo agli altri, pensa di essere debitore di qualcosa, mentre ?? questo l'unico bene che l'uomo non pu?? restituire, neppure con tutta la sua buona volont??.",
    author: "Seneca",
  },
  {
    text: "Natural abilities do not respond well to compulsion; when Nature is in opposition, labour is fruitless.",
    author: "Seneca",
  },
  {
    text: "Was die Menschen anlangt, mit denen man es zu tun hat, so ist eine Auswahl ganz unerl??sslich. Man frage sich: Sind sie es wert, dass wir einen Teil unserer Zeit an sie wenden?",
    author: "Seneca",
  },
  {
    text: "You must lay aside the burdens of the mind; until you do this, no place will satisfy you.",
    author: "Seneca",
  },
  {
    text: "LETTERA 20 I FATTI DEVONO ANDARE D'ACCORDO CON LE PAROLE Certo, il lettuccio e i panni rozzi non sono una prova sufficiente per dimostrare la buona disposizione d'animo, se non risulta chiaro che la povert?? ?? stata scelta liberamente, non gi?? tollerata per necessit??.",
    author: "Seneca",
  },
  {
    text: "It is not the man who has too little who is poor, but the one who hankers after more. What difference does it make how much there is laid away in a man's safe or in his barns, how many head of stock he grazes or how much capital he puts out at interest, if he is always after what is another's and only counts what he has yet to get, never what he has already. You ask what is the proper limit to a person's wealth? First, having what is essential, and second, what is enough.",
    author: "Seneca",
  },
  {
    text: "Do not, however, deem yourself truly happy until you find that you can live before men's eyes, until your walls protect but do not hide you; although we are apt to believe that these walls surround us, not to enable us to live more safely, but that we may sin more secretly. 4.",
    author: "Seneca",
  },
  {
    text: "But our friend Bassus stays sharp minded. Philosophy furnishes him with this: to be cheerful when death comes in view, to stay strong and happy no matter what one???s bodily condition.... Bassus says that it???s as silly to fear death as to fear old age, for just as age follows youth....  Bassus says that it???s as silly to fear death as to fear old age, for just as age follows youth, so death follows age. Whoever doesn???t want to die, doesn???t want to live. Life is granted with death as its limitation; it???s the universal endpoint.",
    author: "Seneca",
  },
  {
    text: "LETTERA 36 CONSIGLI PER UN AMICO DI LUCILIO La notte nasconde il sole, ma subito dopo il giorno porta via la notte.",
    author: "Seneca",
  },
  {
    text: "So the life of the philosopher extends widely: he is not confined by the same boundaries as are others. He alone is free from the laws that limit the human race, and all ages serve him as though he were a god. Some time has passed: he grasps it in his recollection. Time is present: he uses it. Time is to come: he anticipates it. This combination of all times into one gives him a long life",
    author: "Seneca",
  },
  {
    text: "Potrei citarti molti ai quali non mancarono gli amici, ma manc?? l'amicizia: ci?? non pu?? accadere quando gli animi sono uniti da un concorde desiderio di bene.",
    author: "Seneca",
  },
  {
    text: "Ahora, pues, mientras la sangre est?? caliente, los vigorosos han de caminar a lo mejor. En este g??nero de vida te espera mucha parte de las buenas ciencias, el amor y ejercicio de la virtud, el olvido de los deleites, el arte de vivir y morir y, finalmente, un soberano descanso. El estado de todos los ocupados es miserable; pero el de aqu??llos que aun no son suyas las ocupaciones en que trabajan es miserabil??simo; duermen por sue??o ajeno, andan con ajenos pasos, comen con ajena gana; hasta el amar y aborrecer, que son acciones tan libres, lo hacen mandados.",
    author: "Seneca",
  },
  {
    text: "there has never been a great mind without some degree of madness.",
    author: "Seneca",
  },
  {
    text: 'Philosophy calls for plain living, but not for penance; and we may perfectly well be plain and neat at the same time. This is the mean of which I approve; our life should observe a happy medium between the ways of a sage and the ways of the world at large; all men should admire it, but they should understand it also. "Well',
    author: "Seneca",
  },
  {
    text: "the other vices seize individuals, this is the one passion that sometimes takes hold of an entire state. Never has an entire people burned with love for a woman, no state in its entirety has placed its hope in money or profit; ambition seizes men one by one on a personal basis, lack of self-restraint does not afflict a whole people; often they rush to anger in one mass.",
    author: "Seneca",
  },
  {
    text: "Ritirati in te stesso per quanto puoi; frequenta le persone che possono renderti migliore e accogli quelli che puoi rendere migliori.",
    author: "Seneca",
  },
  { text: "???????????????? ???? ????????, ?????? ???? ???????? - ????????????????????.", author: "Seneca" },
  {
    text: "LETTERA 39 BISOGNA DOMINARE LE PASSIONI Nessun nemico ha portato tanta offesa agli uomini quanto le loro passioni.",
    author: "Seneca",
  },
  {
    text: "[M]aking noble resolutions is not as important as keeping the resolutions you have made already. (Letter XVI)",
    author: "Seneca",
  },
  {
    text: "Za najmilszy rodzaj ??aski uwa??a?? niewiedz?? o tym, co ka??dy uczyni?? z??ego.",
    author: "Seneca",
  },
  {
    text: "There is no such thing as good or bad fortune for the individual; we live in common.",
    author: "Seneca",
  },
  {
    text: "LETTERA 25 DIVERSI MODI DI EDUCAZIONE Col peccatore inveterato penso che bisogni agire con un certo tatto, perch?? non giunga a disperare di s?? stesso.",
    author: "Seneca",
  },
  {
    text: "LETTERA 14 NON DOBBIAMO ESSERE SCHIAVI DEL CORPO Il marinaio temerario non si cura delle minacce dell'austro che agita il mare siciliano e suscita i vortici, e non si dirige verso la parte sinistra della costa, ma passa vicino a quel tratto costiero da cui Cariddi sconvolge il mare. Il marinaio pi?? cauto, invece, chiede a chi conosce i luoghi quali correnti ci siano e quali indizi si possano trarre dalle nubi, e tiene la rotta ben lungi da quella zona malfamata per i suoi gorghi.",
    author: "Seneca",
  },
  {
    text: "Mas ??sta es, querido Lucilio, mi s??plica y exhortaci??n: que introduzcas la filosof??a en el fondo de tus entra??as, y que compruebes tu progreso no por lo que dices o escribes, sino por la firmeza del alma y por la disminuci??n de los deseos. Demuestra las palabras con los hechos",
    author: "Seneca",
  },
  {
    text: "LETTERA 13 IL SAGGIO NON SI PREOCCUPA DEL FUTURO Osservali ad uno ad uno: troverai vecchi che ancora brigano per ottenere cariche politiche, o iniziano nuovi viaggi, o intraprendono nuovi affari. Che c'?? di pi?? brutto di un vecchio che vuole ricominciare a vivere?",
    author: "Seneca",
  },
  {
    text: "LETTERA 31 IL VERO BENE ?? STRETTAMENTE CONNESSO ALLA VIRT?? Le voci che egli temeva erano carezzevoli ma isolate. Queste che dobbiamo temere noi non vengono da uno scoglio, ma risuonano tutt'intorno da ogni parte della terra. Perci?? devi lasciarti dietro non solo un luogo sospetto per i suoi insidiosi piaceri, ma tutte le citt??.",
    author: "Seneca",
  },
  {
    text: "it takes a great man and one who has risen far above human weaknesses not to allow any of his time to be filched from him, and it follows that the life of such a man is very long because he has devoted wholly to himself whatever time he has had.  None of it lay neglected and idle; none of it was under the control of another, for, guarding it most grudgingly, he found nothing that was worthy to be taken in exchange for his time.",
    author: "Seneca",
  },
  {
    text: "LETTERA 32 ACCELERA I TUOI PROGRESSI SPIRITUALI invero ?? molto dannoso anche chi fa indugiare, specialmente in una vita cos?? breve, che noi abbreviamo ancor pi?? con la nostra incostanza, ricominciando a viverla ora in un modo ora in un altro: la riduciamo a pezzetti e a brandelli.",
    author: "Seneca",
  },
  {
    text: "He who fears death will never do anything worthy of a living man. But he who knows that this was the condition laid down for him at the moment of his conception will live on those terms, and at the same time he will guarantee with a similar strength of mind that no events take him by surprise.",
    author: "Seneca",
  },
  {
    text: "In protecting their wealth men are tight-fisted, but when it comes to the matter of time, in the case of the one thing in which it is wise to be parsimonious, they are actually generous to a fault.",
    author: "Seneca",
  },
  {
    text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what lies in Fortune???s control, and abandoning what lies in yours. What are you looking at? To what goal are you straining? The whole future lies in uncertainty: live immediately. Listen",
    author: "Seneca",
  },
  {
    text: "Of all men, only those who find time for philosophy are at leisure; only they are truly alive; for it is not only their own lifetime they guard well: they add every age to their own.",
    author: "Seneca",
  },
  {
    text: "LETTERA 11 IL SENSO DEL PUDORE Ci occorre-ripeto-una persona a cui adeguare i nostri costumi: non possiamo correggere le cattive abitudini se non ci riferiamo costantemente a una norma.",
    author: "Seneca",
  },
  {
    text: "For although the sum and substance of the happy life is unalloyed freedom from care, and though the secret of such freedom is unshaken confidence, yet men gather together that which causes worry, and, while travelling life's treacherous road, not only have burdens to bear, but even draw burdens to themselves; hence",
    author: "Seneca",
  },
  {
    text: "..you are retained as counsel for unhappy mankind. You have promised to help those in peril by sea, those in captivity, the sick and the needy, and those whose heads are under the poised axe. Whither are you straying? What are you doing?",
    author: "Seneca",
  },
  {
    text: "You are unfortunate in my judgment, for you have never been unfortunate. You have passed through life with no antagonist to face you; no one will know what you were capable of, not even you yourself.",
    author: "Seneca",
  },
  {
    text: "LETTERA 29 BISOGNA CONSIGLIARE A TEMPO UTILE Ho intenzione di avvicinarlo e di mostrargli come egli varrebbe di pi?? se valesse di meno nella stima della folla.",
    author: "Seneca",
  },
  {
    text: "revenge is an admission that we have been hurt. That cannot be a great mind which is disturbed by injury. He who has hurt you must be either stronger or weaker than yourself. If he be weaker, spare him: if he be stronger, spare yourself.",
    author: "Seneca",
  },
  {
    text: "The only really leisured people are those who devote time to acquiring true knowledge rather than trivia. ",
    author: "Seneca",
  },
  {
    text: "Oft hat ein hochbetagter Greis keinen anderen Beweis f??r die L??nge seiner Lebens als die Summe seiner Jahre.",
    author: "Seneca",
  },
  {
    text: "Make progress, and, before all else, endeavour to be consistent with yourself. And when you would find out whether you have accomplished anything, consider whether you desire the same things today that you desired yesterday. A shifting of the will indicates that the mind is at sea, heading in various directions, according to the course of the wind. But that which is settled and solid does not wander from its place.",
    author: "Seneca",
  },
  {
    text: "Reflect that nothing merits admiration except the spirit, the impressiveness of which prevents it from being impressed by anything.",
    author: "Seneca",
  },
  {
    text: "Fa una scelta di buoni autori e contentati di essi per nutrirti del loro genio se vuoi ricavarne insegnamenti che ti rimangano. Voler essere dappertutto ?? come essere in nessu luogo. Non potendo quindi leggere tutti i libri che puoi avere, contentati di avere quelli che puoi leggere.",
    author: "Seneca",
  },
  { text: "Omnes feriunt, ultima necat.", author: "Seneca" },
  {
    text: "To know how many are jealous of you, count your admirers",
    author: "Seneca",
  },
  {
    text: "By the toil of others we are brought into the presence of things which have been brought from darkness into light.",
    author: "Seneca",
  },
  {
    text: "You should, I need hardly say, live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.",
    author: "Seneca",
  },
  {
    text: "LETTERA 38 VANTAGGI DELLA CONVERSAZIONE FAMILIARE I discorsi gi?? preparati e pronunciati a gran voce davanti al pubblico degli ascoltatori hanno maggior risonanza, ma meno familiarit??. La filosofia non ?? che un buon consiglio, ma nessuno d?? un consiglio ad alta voce.",
    author: "Seneca",
  },
  {
    text: 'If we believe the Greek poet, "it is sometimes pleasant to be mad" again, Plato always knocked in vain at the door of poetry when he was sober; or, if we trust Aristotle, no great genius has ever been without a touch of insanity. The mind cannot use lofty language, above that of the common herd, unless it be excited. When it has spurned aside the commonplace environments of custom, and rises sublime, instinct with sacred fire, then alone can it chant a song too grand for mortal lips: as long as it continues to dwell within itself it cannot rise to any pitch of splendor: it must break away from the beaten track, and lash itself to frenzy, till it gnaws the curb and rushes away bearing up its rider to heights whither it would fear to climb when alone.',
    author: "Seneca",
  },
  {
    text: "Quo quis est doctor, eo est modestior. The English translation is inmy book THE BANYAN TREE.",
    author: "Seneca",
  },
  {
    text: "Haz memoria de cu??ndo te has mostrado firme contigo mismo en tus prop??sitos, de cu??ntos de tus d??as han terminado como t?? hab??as previsto, de cu??ndo has tenido provecho de ti mismo, cu??ndo una expresi??n natural, cu??ndo un esp??ritu intr??pido, qu?? obras tuyas quedan hechas en tan largo tiempo, cu??ntos te han robado la vida sin que t?? te percataras de lo que perd??as, cu??nto se han llevado el dolor in??til, la alegr??a necia, la codicia ansiosa, la conversaci??n huera, qu?? poco te han dejado de lo tuyo: comprender??s 4 que mueres prematuramente.",
    author: "Seneca",
  },
  {
    text: "Non ?? vero che abbiamo poco tempo: la verit?? ?? che ne perdiamo molto.",
    author: "Seneca",
  },
  {
    text: "He who restrains himself within the limits prescribed by nature, will not feel poverty; he who exceeds them will always be poor, however great his wealth may be.",
    author: "Seneca",
  },
  {
    text: "Ein kleiner Teil des Lebens nur ist wahres Leben, der ganze ??brige Teil ist nicht Leben, ist blosse Zeit",
    author: "Seneca",
  },
  {
    text: "LETTERA 9 IL SAGGIO SENTE PROFONDAMENTE GLI AFFETTI UMANI L'ansia e l'impegno nel lavoro procurano per se stessi un grande diletto. Non ne prova una simile chi ha terminato di dare l'ultima mano all'opera sua: ora si gode il frutto della sua arte: quando dipingeva si godeva la sua stessa arte. I figli gi?? grandicelli ci sono pi?? utili, ma quando erano ancora fanciulli ci davano gioie pi?? pure.",
    author: "Seneca",
  },
  {
    text: "?????????????? ?????????????? ?????????? ????????, ?????????? ??????????. ?????? ???????????? ??????????????, ?????? ?????????????????? ????????",
    author: "Seneca",
  },
  {
    text: "the constricting requirements of verse,??? as Cleanthes used to say, ???give one???s meaning all the greater force, in the same way as one???s breath produces a far greater noise when it is channelled through a trumpet???s long and narrow tube before its final expulsion through the widening opening at the end.??? The same things stated in prose are listened to with less attention and have much less impact.",
    author: "Seneca",
  },
  {
    text: "Sommigen zijn volledig doorgeslagen in hun waanzin: ze denken dat zij kunnen worden beledigd door... een vrouw. Maar hoe welgesteld een vrouw ook is, hoeveel dragers ze ook heeft, hoe vol haar oren ook hangen, hoe ruim en gerieflijk haar draagstoel ook is, wat maakt het uit? Ze blijft een dier dat niet nadenkt. Alleen door kennis en veel onderwijs wordt ze meer dan een wild beest dat zijn begeerten niet de baas is.",
    author: "Seneca",
  },
  {
    text: "It is by far the best plan, therefore, to mingle leisure with business, whenever chance impediments or the state of public affairs forbid one's leading an active life: for one is never so cut off from all pursuits as to find no room left for honorable action.",
    author: "Seneca",
  },
  {
    text: "Gegen die Leidenschaften muss man in kr??ftigem Ansturm k??mpfen, nich tmit bed??chtiger Behutsamkeit",
    author: "Seneca",
  },
  {
    text: "we are frightened at uncertainties, just as if they were certain. We observe no moderation. The slightest thing turns the scales and throws us forthwith into a panic.",
    author: "Seneca",
  },
  {
    text: "LETTERA 17 LA FILOSOFIA GIOVA IN OGNI CIRCOSTANZA DELLA VITA Cos?? non importa se un animo malato sia posto fra le ricchezze o nella povert??: lo seguir?? sempre il suo male.",
    author: "Seneca",
  },
  {
    text: "No one is despised by others unless he be previously despised by himself: a groveling and abject mind may fall an easy prey to such contempt: but he who stands up against the most cruel misfortunes, and overcomes those evils by which others would have been crushed???such a man, I say, turns his misfortunes into badges of honour, because we are so constituted as to admire nothing so much as a man who bears adversity bravely.",
    author: "Seneca",
  },
  { text: "Sva surovost proizilazi iz slabosti.", author: "Seneca" },
  {
    text: "El mayor impedimento al vivir es la espera, que, por estar pendiente al d??a de ma??ana, pierde el d??a de hoy.",
    author: "Seneca",
  },
  {
    text: "it is better to conquer our grief than to deceive it.",
    author: "Seneca",
  },
  {
    text: "Poverty will keep for you your true and tried friends; you will be rid of the men who were not seeking you for yourself, but for something which you have.",
    author: "Seneca",
  },
  {
    text: "to obey God cheerfully, but Fortune defiantly;",
    author: "Seneca",
  },
  { text: "A man???s past is forever set in stone. There", author: "Seneca" },
  {
    text: "the grief that has been conquered by reason is calmed for ever.",
    author: "Seneca",
  },
  {
    text: "I???ve come across people who say that there is a sort of inborn restlessness in the human spirit and an urge to change one???s abode; for man is endowed with a mind which is changeable and unsettled: nowhere at rest, it darts about and directs its thoughts to all places known and unknown, a wanderer which cannot endure repose and delights chiefly in novelty.",
    author: "Seneca",
  },
  {
    text: "[W]hat cause can there be for complaint, after all, in anything that was always bound to come to an end fading gradually away? What is troubling about that? [...] Moving to one's end through nature's own gentle process of dissolution - is there a better way of leaving life than that? Not because there is anything wrong with a sudden, violent departure, but because this gradual withdrawal is an easy route.",
    author: "Seneca",
  },
  {
    text: "?????????????????????? - ???? ???????????? ???????????????? ?????????? ?????????????????? ???? ???????????? ?????????????????? ???? ???? ????????????",
    author: "Seneca",
  },
  {
    text: "No one is to be found who is willing to distribute his money, yet among how many does each one of us distribute his life! In guarding their fortune men are often closefisted, yet, when it comes to the matter of wasting time, in the case of the one thing in which it is right to be miserly, they show themselves most prodigal.",
    author: "Seneca",
  },
  { text: "Non vitae, sed scholae discimus.", author: "Seneca" },
  {
    text: "No one will bring back the years: no one will restore you back to yourself. Life will follow the path it began to take, and will neither reverse nor check its course. What will be the outcome? You have been preoccupied while life hastens on. Meanwhile death will arrive, and you have no choice in making yourself available for that.",
    author: "Seneca",
  },
  {
    text: "Look back in memory and consider when you ever had a fixed plan, how few days have passed as you had intended, when you were ever at your own disposal, when your face ever wore its natural expression, when your mind was ever unperturbed, what work you have achieved in so long a life, how many have robbed you of life when you were not aware of what you were losing, how much was taken up in useless sorrow, in foolish joy, in greedy desire, in the allurements of society, how little of yourself was left to you; you will perceive that you are dying before your season!",
    author: "Seneca",
  },
  {
    text: "Mais rien ne servirait de s?????tre mis ?? l???abri de tous les motifs personnels de tristesse, si parfois la misanthropie s???emparait de votre ??me, en voyant le crime partout heureux, la candeur si rare, l???innocence si peu connue, la bonne foi si n??glig??e quand elle est sans profit, les gains et les prodigalit??s de la d??bauche ??galement odieux ; enfin, l???ambition si effr??n??e que, se m??connaissant elle-m??me, elle cherche son ??clat dans la bassesse. Alors une sombre nuit environne notre ??me, et dans cet an??antissement des vertus impossibles ?? trouver chez les autres, et nuisibles ?? celui qui les a, elle se remplit de doute et d???obscurit??.  Pour nous d??tourner de ces id??es, faisons en sorte que les vices des hommes ne nous paraissent pas odieux, mais ridicules ; et sachons imiter D??mocrite plut??t qu???H??raclite. Le premier ne se montrait jamais en public sans pleurer ; le second, sans rire. L???un, dans tout ce que font les hommes, ne voyait que mis??re ; le second, qu???ineptie. Il faut donc attacher peu d???importance ?? toutes choses, et ne nous passionner pour aucune.  Il est plus conforme ?? l???humanit?? de se moquer des choses de la vie que d???en g??mir. Ajoutez que mieux vaut pour le genre humain s???en moquer, que se lamenter ?? son sujet.",
    author: "Seneca",
  },
  { text: "Non impariamo per la scuola, ma per la vita.", author: "Seneca" },
  { text: "Homo res sacra homini.", author: "Seneca" },
  {
    text: 'De Epicuro", dizes, "?? essa afirma????o. O que tem uma outra escola a ver com a nossa? Tudo o que ?? verdadeiro tamb??m ?? meu.',
    author: "Seneca",
  },
  {
    text: "Vivi con quelli che possono renderti migliore e che tu puoi rendere migliori. C'?? un vantaggio reciproco, perch?? gli uomini, mentre insegnano, imparano.",
    author: "Seneca",
  },
  {
    text: "Let my mind be fixed on itself, cultivate itself, have no external interest ??? nothing that seeks the approval of another; let it cherish the tranquillity that has no part in public or private concerns.",
    author: "Seneca",
  },
  {
    text: "It's not that we have a short time to live, but that we waste  much of it. Life is long enough, and it's been given to us in generous  measure for accomplishing the greatest things, if the whole of it is  well invested. But when life is squandered through soft and careless  living, and when it's spent on no worthwhile pursuit, death finally  presses and we realize that the life which we didn't notice passing  has passed away. So it is: the life we are given isn't short but we  make it so; we're not ill provided but we are wasteful of life.",
    author: "Seneca",
  },
  {
    text: "LETTERA 33 DEVI ACQUISTARE UN PENSIERO ORIGINALE, FRUTTO DELLA TUA ESPERIENZA Ricordare ?? custodire ci?? che ?? stato affidato alla memoria, mentre sapere significa far proprie le nozioni apprese e non star sempre attaccato al modello, con lo sguardo sempre rivolto al maestro.",
    author: "Seneca",
  },
  { text: "reading of many books is distraction.", author: "Seneca" },
  {
    text: "LETTERA 26 TI GIUDICHER?? LA MORTE Apparir?? ci?? che hai fatto nella vita solo quando esalerai l'ultimo respiro.",
    author: "Seneca",
  },
  {
    text: 'Write something therefore in a simple style, merely to pass the time, for your own use, and not for publication. Less labour is needed when one does not look beyond the present." Then',
    author: "Seneca",
  },
  {
    text: "Just as the same chain fastens the prisoner and the soldier who guards him, so hope and fear, dissimilar as they are, keep step together; fear follows hope. 8. I am not surprised that they proceed in this way; each alike belongs to a mind that is in suspense, a mind that is fretted by looking forward to the future. But the chief cause of both these ills is that we do not adapt ourselves to the present, but send our thoughts a long way ahead. And so foresight, the noblest blessing of the human race, becomes perverted. 9. Beasts avoid the dangers which they see, and when they have escaped them are free from care; but we men torment ourselves over that which is to come as well as over that which is past. Many of our blessings bring bane to us; for memory recalls the tortures of fear, while foresight anticipates them. The present alone can make no man wretched.",
    author: "Seneca",
  },
  {
    text: "LETTERA 21 LA VERA GLORIA In questi giardini gli stimoli della fame non si eccitano, ma si estinguono; n?? la sere aumenta col bere, ma ?? sedata da un rimedio naturale e gratuito.",
    author: "Seneca",
  },
  {
    text: "No man can live a happy life, or even a supportable life, without the study of wisdom.",
    author: "Seneca",
  },
  {
    text: "Philosophy is no trick to catch the public; it is not devised for show. It is a matter, not of words, but of facts. It is not pursued in order that the day may yield some amusement before it is spent, or that our leisure may be relieved of a tedium that irks us. It moulds and constructs the soul; it orders our life, guides our conduct, shows us what we should do and what we should leave undone; it sits at the helm and directs our course as we waver amid uncertainties. Without it, no one can live fearlessly or in peace of mind. Countless things that happen every hour call for advice; and such advice is to be sought in philosophy.",
    author: "Seneca",
  },
  {
    text: "There is a sequence about the creative process, and a work of genius is a synthesis of its individual features from which nothing can be subtracted without disaster.",
    author: "Seneca",
  },
  {
    text: "The human mind is naturally self-willed, kicks against the goad, and sets its face against authority; it will follow more readily than it can be led. As well-bred and high-spirited horses are best managed with a loose rein, so mercy gives men's minds a spontaneous bias towards innocence, and the public think that it is worth observing. Mercy, therefore, does more good than severity.",
    author: "Seneca",
  },
  {
    text: "J'ai tant d??sir?? le jour et voici qu'il me br??le les yeux!",
    author: "Seneca",
  },
  {
    text: "Nothing is ours, except time. We were entrusted by nature with the ownership of this single thing. It it so fleeting and slippery that anyone who wills can oust us from possession. What fools these mortals be! They allow the cheapest and most useless things, which can easily be replaced, to be charged in the reckoning after they have acquired them. But they never regard themselves as in debt when they have received some of that precious commodity, time. And yet time is the one loan, which even a grateful recipient, cannot repay.",
    author: "Seneca",
  },
  {
    text: "Non est ad astra mollis e terris via??? - ???There is no easy way from the earth to the stars??? ???To",
    author: "Seneca",
  },
  {
    text: "Nothing hinders a cure so much as frequent changes of treatment.",
    author: "Seneca",
  },
  {
    text: "The supreme ideal does not call for any external aids. It is homegrown, wholly self-developed. Once it starts looking outside itself for any part of itself it is on the way to being dominated by fortune.",
    author: "Seneca",
  },
  {
    text: "Each day... acquire something which will help you to face poverty, or death, and other ills as well. After running over a lot of different thoughts, pick out one to be digested thoroughly that day.",
    author: "Seneca",
  },
  {
    text: "Nothing is ours, except time. We were entrusted by nature with the ownership of this single thing. It it so fleeting and slippery that anyone who wills can oust us from possession. What fools these mortals be! They allow the cheapest and most useless things, which can easily be replaced, to be charged in the reckoning after they have acquired them. But they never regard themselves as in debt when they have received some of that precious commodity, time. And yet time is the one loan which even a grateful recipient cannot repay.",
    author: "Seneca",
  },
  {
    text: 'But now, to close my letter, I have only to stamp the usual seal upon it, in other words, to commit thereto some noble message to be delivered to you: "The fool, with all his other faults, has this also, he is always getting ready to live." Reflect, my esteemed Lucilius, what this saying means, and you will see how revolting is the fickleness of men who lay down every day new foundations of life, and begin to build up fresh hopes even at the brink of the grave.',
    author: "Seneca",
  },
  {
    text: "De Epicuro', dizes, '?? essa afirma????o. O que tem uma outra escola a ver com a nossa?' Tudo o que ?? verdadeiro tamb??m ?? meu.",
    author: "Seneca",
  },
  {
    text: "LETTERA 2 LA LETTURA CHE GIOVA ?? povero non chi possiede poco, ma chi brama avere di pi??.",
    author: "Seneca",
  },
  {
    text: "Would you say that that man is at leisure who arranges with finical care his Corinthian bronzes, that the mania of a few makes costly, and spends the greater part of each day upon rusty bits of copper? Who sits in a public wrestling-place (for, to our shame I we labour with vices that are not even Roman) watching the wrangling of lads? Who sorts out the herds of his pack-mules into pairs of the same age and colour? Who feeds all the newest athletes? Tell me, would you say that those men are at leisure who pass many hours at the barber???s while they are being stripped of whatever grew out the night before? while a solemn debate is held over each separate hair? while either disarranged locks are restored to their place or thinning ones drawn from this side and that toward the forehead? How angry they get if the barber has been a bit too careless, just as if he were shearing a real man! How they flare up if any of their mane is lopped off, if any of it lies out of order, if it does not all fall into its proper ringlets! Who of these would not rather have the state disordered than his hair? Who is not more concerned to have his head trim rather than safe? Who would not rather be well barbered than upright? Would you say that these are at leisure who are occupied with the comb and the mirror? And what of those who are engaged in composing, hearing, and learning songs, while they twist the voice, whose best and simplest movement Nature designed to be straightforward, into the meanderings of some indolent tune, who are always snapping their fingers as they beat time to some song they have in their head, who are overheard humming a tune when they have been summoned to serious, often even melancholy, matters? These have not leisure, but idle occupation. And their banquets, Heaven knows! I cannot reckon among their unoccupied hours, since I see how anxiously they set out their silver plate, how diligently they tie up the tunics of their pretty slave-boys, how breathlessly they watch to see in what style the wild boar issues from the hands of the cook, with what speed at a given signal smooth-faced boys hurry to perform their duties, with what skill the birds are carved into portions all according to rule, how carefully unhappy little lads wipe up the spittle of drunkards. By such means they seek the reputation for elegance and good taste, and to such an extent do their evils follow them into all the privacies of life that they can neither eat nor drink without ostentation. And",
    author: "Seneca",
  },
  { text: "No man was ever wise by chance??? ???Associate", author: "Seneca" },
  {
    text: "How closely flattery resembles friendship! It not only apes friendship, but outdoes it, passing it in the race; with wide-open and indulgent ears it is welcomed and sinks to the depths of the heart, and it is pleasing precisely wherein it does harm.",
    author: "Seneca",
  },
  {
    text: "Some vices delight them as being proofs of their prosperity; it seems the part of a man who is very lowly and despicable to know what he is doing.",
    author: "Seneca",
  },
  {
    text: "LETTERA 12 ANCHE LA VECCHIAIA HA LE SUE GIOIE Tutta la nostra esistenza ?? fatta di parti, ?? costituita, cio??, di cerchi pi?? ampi che cingono cerchi sempre minori.",
    author: "Seneca",
  },
  {
    text: "Pero que emocionen los pensamientos, no las frases; la elocuencia es un veneno cuando es ella y no la verdad lo que apasiona.",
    author: "Seneca",
  },
  {
    text: "Souvenez-vous principalement de s??parer les choses du bruit qu???elles font et de les consid??rer seulement en elles-m??mes. Vous trouverez qu???elles n???ont rien de terrible que la peur qu???on en a",
    author: "Seneca",
  },
  {
    text: "Todo lo que est?? por venir es incierto. Vive el presente, y advierte que el mayor de los poetas, como inflamado de alg??n divino or??culo, cant?? aquel saludable verso: ??El mejor d??a de todos los mortales es el primero que huye.?? ??C??mo te detienes? (dice) ??C??mo tardas? El tiempo huye si no le ocupas; y aunque le ocupes, huye; y as??, se ha de contrastar su celeridad con la presteza de aprovecharle, cogiendo con prisa el agua como de arroyo r??pido que en pasando la corriente queda seco. Tambi??n es muy a prop??sito para condenar los pensamientos prolongados, que no llaman buena a la edad sino al d??a.",
    author: "Seneca",
  },
  {
    text: "The man who looks for the morrow without worrying over it knows a peaceful independence and a happiness beyond all others. Whoever has said, \"I have lived' receives a windfall every day he gets up in the morning.",
    author: "Seneca",
  },
  {
    text: "The primary indication, to my thinking, of a well-ordered mind is a man's ability to remain in one place and linger in his own company",
    author: "Seneca",
  },
  { text: "Homo sit naturaliter animal socialis", author: "Seneca" },
  {
    text: "LETTERA 22 OCCORRE ABBANDONARE LA VITA PUBBLICA AL MOMENTO GIUSTO Nessuno si preoccupa di una vita virtuosa, ma pensa solo a quanto tempo potr?? vivere. Tuttavia tutti possono vivere bene, nessuno ha il potere di vivere a lungo.",
    author: "Seneca",
  },
  {
    text: "Associate with those who will make a better man of you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach.",
    author: "Seneca",
  },
  {
    text: "Therefore continually remind yourself, Lucilius, how many ambitions you have attained. When you see many ahead of you, think how many are behind! If you would thank the gods, and be grateful for your past life, you should contemplate how many men you have outstripped. But what have you to do with the others? You have outstripped yourself.",
    author: "Seneca",
  },
  {
    text: "When Zeno received news of a shipwreck and heard that all his luggage had been sunk he said, ???Fortune bids me to be a less encumbered philosopher.???   Creation",
    author: "Seneca",
  },
  {
    text: "You can???t imagine how much of an alteration I see each day bringing about in me. ???Send me, too,??? you will be saying, 'the things you???ve found so effectual.??? Indeed I desire to transfer every one of them to you; part of my joy in learning is that it puts me in a position to teach; nothing, however outstanding and however helpful, will ever give me any pleasure if the knowledge is to be for my benefit alone. If wisdom were offered me on the one condition that I should keep it shut away and not divulge it to anyone, I should reject it. There is no enjoying the possession of anything valuable unless one has someone to share it with.",
    author: "Seneca",
  },
  {
    text: "There is nothing the busy man is less busied with than living:  there is nothing that is harder to learn. Of",
    author: "Seneca",
  },
  {
    text: '???????????? ??????, ????????????????, ???????????????? ???? ???? ???????????? ???? ??????????????????." ???? ??????-??????????; ?????? ???? ???? ???? ?????? ???? ??????, ???? ???? ???? ??????????????. ?????????????????????????????? ???? ????????????????, ?????????????? ????. "?????????? ????????????? ?????? ???????? ???? ???? ???????????? ???? ??????????????, ???? ??????????????, ???? ??????????, ???? ?????????????? ?????????? ???? ??????????????, ???????? ?????" ????????. ?????? ????????, ???? ???? ???? ???? ????????, ?? ???????? ??????????????????. ?????????? ???? ???? ???????????? ???????????????? ???? ???????????????? ??????????. ?????????? ???? ????????, ??????????????, ??????????, ??????????????, ?????????????? ???????????????? ???????? ???? ????????????, ???????? ???? ????????????????. ?????????????? ?????????????? ?? ???? ?? - ?????? ???? ???? ???????????????? ?????? ???????????????????? ???? ??????????. ???? ???????? ???????? ?????????? ???? ???? ?????????????????? ????????????????????????. ???? ???? ???? ???? ???????????? ???? ???????? ????????, ???? ?????????? ?????????? ?????? ???? ???????????? ???? ?????????????????? ????????? ?????????? ?????????? ?? ????????. ???? ?????????????????? ???????? ????????????, ???????????????? ????????, ?? ???? ???? ?????????????? ?????????????????? ????, ???????????? ?????????? ???????????? ???? ???? ?????????????????? ????????????. ?????????????????? ??????????????, ?????? ???? ?????????????? ????????????, ?????????? ???? ???????????? ??????????. ???????????? ???? ???? ?????????? ?????????? ???????????????? ???? ??????????????, ?????? ???????????? ?????????? ?? ????????????????... ????????????, ???? ?????????? ???? ???????????????????? ???? ???????????? ??: ?????????????? ??????????????',
    author: "Seneca",
  },
  {
    text: "It takes the whole of life to learn how to live, and ??? what will perhaps make you wonder more ??? it takes the whole of life to learn how to die.",
    author: "Seneca",
  },
  {
    text: "reflect how pleasant it is to demand nothing, how noble it is to be contented and not to be dependent upon Fortune.",
    author: "Seneca",
  },
  {
    text: "But he who bestows all of his time on his own needs, who plans out every day as if it were his last, neither longs for nor fears the morrow.",
    author: "Seneca",
  },
  {
    text: "Thus far, you have indeed not been sluggish, but you must quicken your pace. Much toil remains; to confront it, you must yourself lavish all your waking hours, and all your efforts, if you wish the result to be accomplished.",
    author: "Seneca",
  },
  {
    text: "we suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "it is better to understand the balance-sheet of one???s own life than of the corn trade.",
    author: "Seneca",
  },
  {
    text: "Most men ebb and flow in wretchedness between the fear of death and the hardships of life; they are unwilling to live, and yet they do not know how to die.",
    author: "Seneca",
  },
  {
    text: "Does it serve any useful purpose to know that Pompey was the first to exhibit the slaughter of eighteen elephants in the Circus, pitting criminals against them in a mimic battle?",
    author: "Seneca",
  },
  {
    text: "So that no one may be deceived into supposing that there is any time, any place when anger will be of benefit, its unbridled and deranged madness must be revealed, and it must have restored to it the equipment that is its very own???the horse of torture, the cord, the gaol, the cross, the fires that encircle live bodies buried in the ground, the hook that drags along corpses as well, the different kinds of chains and of punishments, the tearing of limbs, branding of the forehead, the pits where monstrous beasts prowl: let anger be set in the midst of these implements, uttering a terrible and horrible shriek, more loathsome than all these instruments that let it vent its fury.",
    author: "Seneca",
  },
  {
    text: "You must vie with time's swiftness in the speed of using it, and, as from a torrent that rushes by and will not always flow, you must drink quickly.",
    author: "Seneca",
  },
  { text: "of", author: "Seneca" },
  {
    text: "To what lengths would so precocious an ambition not go?",
    author: "Seneca",
  },
  {
    text: "Ask nature: she will tell you that she made both day and night.",
    author: "Seneca",
  },
  {
    text: "There is no worse penalty for vice than the fact that it is dissatisfied with itself and all its fellows.",
    author: "Seneca",
  },
  {
    text: "As to what the future's uncertain lot has in store, why should I demand of Fortune that she give rather than demand of myself that I should not crave?",
    author: "Seneca",
  },
  {
    text: 'Men are so thoughtless, nay, so mad, that some, through fear of death, force themselves to die." Whichever',
    author: "Seneca",
  },
  { text: "???????????? ??????????????????????, ?????????????? ?????????????????? ??????????.", author: "Seneca" },
  { text: "inflicted,", author: "Seneca" },
  { text: "La vera gioia ?? una cosa seria.", author: "Seneca" },
  { text: "Omnia mors aequat.", author: "Seneca" },
  {
    text: "We shall be rich with all the more comfort, if we once learn how far poverty is from being a burden",
    author: "Seneca",
  },
  {
    text: "Where you arrive does not matter as much as what sort of person you are when you arrive there.",
    author: "Seneca",
  },
  {
    text: 'Democritus[3] says: "One man means as much to me as a multitude, and a multitude only as much as one man." 11.',
    author: "Seneca",
  },
  {
    text: "life is not worth living, and there is no limit to our sorrows, if we indulge our fears to the greatest possible extent;",
    author: "Seneca",
  },
  {
    text: "weigh carefully your hopes as well as your fears, and whenever all the elements are in doubt, decide in your own favour; believe what you prefer.",
    author: "Seneca",
  },
  {
    text: "That man who had prayed for the fasces, when he attains them, desires to lay them aside and says over and over: ???When will this year be over!",
    author: "Seneca",
  },
  {
    text: "That advocate is lionized throughout the whole forum, and fills all the place with a great crowd that stretches farther than he can be heard, yet he says: ???When will vacation time come?",
    author: "Seneca",
  },
  {
    text: "The day which we fear as our last is but the birthday of eternity",
    author: "Seneca",
  },
  {
    text: "LETTERA 4 IL SAGGIO NON TEME LA MORTE Gli uomini, in maggioranza, ondeggiano tra il timore della morte e i tormenti della vita; non hanno il coraggio di vivere, n?? sanno morire.",
    author: "Seneca",
  },
  {
    text: "We ought not, therefore, to give over our hearts for good to any one part of the world. We should live with the conviction: 'I wasn???t born for one particular corner: the whole world???s my home country.",
    author: "Seneca",
  },
  {
    text: "Solos aquellos gozan de quietud que se desocupan para admitir la sabidur??a, y solos ellos son los que viven; porque no s??lo aprovechan su tiempo, sino que le a??aden todas las edades, haciendo propios suyos todos los a??os que han pasado;",
    author: "Seneca",
  },
  {
    text: "La vida es como una pieza teatral; no importa cu??nto haya durado sino cu??n bien haya sido representada",
    author: "Seneca",
  },
  {
    text: "Happy is the man who can make others better, not merely when he is in their company, but even when he is in their thoughts! And happy also is he who can so revere a man as to calm and regulate himself by calling him to mind! One who can so revere another, will soon be himself worthy of reverence.",
    author: "Seneca",
  },
  {
    text: "El tiempo que tenemos no es corto; pero perdiendo mucho de ??l, hacemos que lo sea, y la vida es suficientemente larga para ejecutar en ella cosas grandes, si la emple??remos bien. Pero al que se le pasa en ocio y en deleites, y no la ocupa en loables ejercicios, cuando le llega el ??ltimo trance, conocemos que se le fue sin que ??l haya entendido que caminaba. Lo cierto es que la vida que se nos dio no es breve, nosotros hacemos que lo sea; y que no somos pobres, sino pr??digos del tiempo; sucediendo lo que a las grandes y reales riquezas, que si llegan a manos de due??os poco cuerdos se disipan en un instante; y al contrario las cortas y limitadas, entrando en poder de pr??vidos administradores, crecen con el uso. As?? nuestra edad tiene mucha latitud para los que usaren bien de ella.",
    author: "Seneca",
  },
  {
    text: "If you would not have a man flinch when the crisis comes, train him before it comes.",
    author: "Seneca",
  },
  {
    text: "For we must indeed have someone according to whom we may regulate our characters; you can never straighten that which is crooked unless you use a ruler.",
    author: "Seneca",
  },
  {
    text: 'El verdadero h??roe en una obra literaria es el lector que la aguanta". S??neca.',
    author: "Seneca",
  },
  {
    text: "Inwardly, we ought to be different in every respect, but our outward dress should blend in with the crowd.",
    author: "Seneca",
  },
  {
    text: "LETTERA 19 LA VITA TRANQUILLA E I SUOI VANTAGGI Nel tuo modo di vivere non devi distinguerti troppo dagli altri, ma neppure devi rimanere nella completa oscurit??.",
    author: "Seneca",
  },
  {
    text: "We ought not, therefore, to give over our hearts for good to any one part of the world. We should live with the conviction: 'I wasn't born for one particular corner: the whole world's my home country.",
    author: "Seneca",
  },
  {
    text: "Still, my determination to put your moral strength of purpose to the test is such that I propose to give even you the following direction found in great men's teaching: set aside now and then a number of days during which you will be content with the plainest of food, and very little of it, and with rough, coarse clothing, and will ask yourself 'Is this what one used to dread?' It is in times of security that the spirit should be preparing itself to deal with the difficult time; while fortune is bestowing favours on it then is the time for it to be strengthened against her rebuffs. In the midst of peace the soldier carries out manoeuvres, throws up earthworks against a non-existent enemy and tires himself out with unnecessary toil in order to be equal to it when it is necessary. If you want a man to keep his head when crisis comes you must give hime some training before it comes. This was the aim of the men who once every month pretended they were poor, bringing themselves face to face with want to prevent their ever being terrified by a situation which they had frequently rehearsed.",
    author: "Seneca",
  },
  {
    text: "offer new prayers; pray for a sound mind and for good health, first of soul and then of body.",
    author: "Seneca",
  },
  {
    text: "y as?? es forzoso que no s??lo sea brev??sima, sino miserable la vida de aquellos que con gran trabajo adquieren lo que con mayor han de poseer. Consiguen con su sudor lo que desean, y poseen con ansias lo que adquirieron con trabajo; y con esto no cuidan del tiempo, que pasando una vez, jam??s ha de volver.",
    author: "Seneca",
  },
  {
    text: "So long as you live, keep learning how to live.",
    author: "Seneca",
  },
  {
    text: 'On Epicurus; He says: "Contended poverty is an honourable estate." Indeed, if it is contented, it is not poverty at all. It is not the man who has little, but the man who craves more, that is poor.',
    author: "Seneca",
  },
  {
    text: 'Dum inter homines sumus, colamus humanitatem" "As long as we are among humans, let us be humane',
    author: "Seneca",
  },
  {
    text: "whenever I wish to enjoy the quips of a clown, I am not compelled to hunt far; I can laugh at myself.",
    author: "Seneca",
  },
  {
    text: "Any truth, I maintain, is my own property. And I shall continue to heap quotations from Epicurus upon you, so that all persons who swear by the words of another, and put a value upon the speaker and not upon the thing spoken, may understand that the best ideas are common property. Farewell.",
    author: "Seneca",
  },
  {
    text: "As things are, there is about wisdom a nobility and magnificence in the fact that she didn't just fall to a person's lot, that each man owes her to his own efforts, that one doesn't go to anyone other than oneself to find her.",
    author: "Seneca",
  },
  {
    text: "We are in the habit of saying that it was not in our power to choose the parents who were allotted to us, that they were given to us by chance. But we can choose whose children we would like to be. There are households of the noblest intellects: choose the one into which you wish to be adopted, and you will inherit not only their name but their property too. Nor will this property need to be guarded meanly or grudgingly: the more it is shared out, the greater it will become.",
    author: "Seneca",
  },
  {
    text: "I can show you a philtre, compounded without drugs, herbs, or any witch's incantation: 'If you want to be loved, love.",
    author: "Seneca",
  },
  {
    text: "LETTERA 37 IL DIFFICILE ESERCIZIO DELLA VIRT?? La fortuna viene incontro a noi non meno spesso di quanto noi andiamo incontro a lei. ?? cosa vergognosa, anzich?? andare verso di lei, lasciarsi trascinare e, presi in mezzo al turbine degli eventi, chiederci con stupore. ???Come mai son giunto qui?",
    author: "Seneca",
  },
  {
    text: "Believe me, it takes a great man and one who has risen far above human weaknesses not to allow any of his time to be filched from him,",
    author: "Seneca",
  },
  {
    text: "LETTERA 30 COME AUFIDIO BASSO SI PREPARA ALLA MORTE Noi, pi?? che la morte, temiamo il pensiero della morte. In ogni momento siamo ugualmente distanti dalla morte. Se essa deve essere temuta, dobbiamo temerla sempre, perch?? nessun periodo ?? esente dalla morte.",
    author: "Seneca",
  },
  {
    text: "Ser siempre dichoso y pasar la vida sin dentelladas en el esp??ritu es, de cierto, desconocer el otro lado de la naturaleza. Eres un gran hombre, pero ??C??mo lo s??, si la suerte no te da ocasi??n de demostrar tu valor?",
    author: "Seneca",
  },
  {
    text: "Per essere felici bisogna eliminare due cose: il timore di un male futuro e il ricordo di un male passato; questo non ci riguarda pi??, quello non ci riguarda ancora.",
    author: "Seneca",
  },
  {
    text: "Que t??, dejados todos los asuntos, te apliques con tenacidad y te esfuerces en la sola tarea de hacerte cada d??a mejor, lo apruebo y me complazco de ello, y no s??lo te animo a que perseveres, sino que adem??s te lo ruego.",
    author: "Seneca",
  },
  {
    text: "Du hast also keinen Grund, von jemand wegen seiner grauen Haare oder Runzeln anzunehmen, er habe lange gelebt. Nicht lange gelebt hat er, sondern er war lange vorhanden. Das w??re so, als ob du von jemandem glaubtest, er habe eine lange Seereise unternommen, den ein w??tender Sturm gleich nach der Ausfahrt aus dem Hafen erfa??te, da- und dorthin verschlug und im Wechselspiel der Winde, die sich von verschiedenen Seiten auf ihn st??rzten, stets auf derselben Bahn im Kreise jagte. Der Mann ist nicht viel gefahren, sondern viel herumgetrieben worden.",
    author: "Seneca",
  },
  {
    text: "La solitudine ?? per lo spirito ci?? che il cibo ?? per il corpo.",
    author: "Seneca",
  },
  {
    text: "After friendship is formed you must trust, but before that you must judge. Those people who, contrary to Theophrastus??? advice, judge a man after they have made him their friend instead of the other way round, certainly put the cart before the horse.",
    author: "Seneca",
  },
  {
    text: "This, I say, is the highest duty and the highest proof of wisdom, ??? that deed and word should be in accord, that",
    author: "Seneca",
  },
  { text: "Res severa est verum gaudium.", author: "Seneca" },
  {
    text: "La mayor r??mora de la vida es la espera del ma??ana y la p??rdida del d??a de hoy",
    author: "Seneca",
  },
  {
    text: "You should, I need hardly say, live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself;",
    author: "Seneca",
  },
  {
    text: "LETTERA 16 LA NOSTRA VITA DEVE ESSERE REGOLATA DALLA FILOSOFIA Abbandona, quindi, le vanit?? e, quando vorrai sapere se i tuoi desideri sono secondo natura oppure ciechi, considera se hanno un termine dove arrestarsi: se, andando avanti nel soddisfare un desiderio, senti sempre pi?? lontano il suo appagamento, sappi che non ?? un desiderio naturale.",
    author: "Seneca",
  },
  { text: "If you wish to be loved, love.", author: "Seneca" },
  {
    text: "?????????????? ?????? ???? ?????????????????? ???? ???????????? ?????? ??????????, ?????????? ?????? ???? ?????????????????? ???? ???????????????? ????????????.",
    author: "Seneca",
  },
  {
    text: "A pleasure that is ephemeral brings no true satisfaction to any man. How miserable must be the lives of those folk who labor so hard for something that once gained they must work even harder to keep. They",
    author: "Seneca",
  },
  {
    text: "Why do you wonder that globe-trotting does not help you, seeing that you always take yourself with you? The reason which set you wandering is ever at your heels.",
    author: "Seneca",
  },
  {
    text: "Il maggior ostacolo alla vita ?? proprio l'attesa: fa dipendere tutto dal domani e, intanto, sciupa l'oggi. Tu vorresti organizzare quanto ?? nelle mani del destino, e ti lasci sfuggire ci?? che ?? gi?? nelle tue. A quale scopo? A cosa vorresti arrivare? Tutto quanto deve ancora venire ?? incerto: vivi il tuo presente.",
    author: "Seneca",
  },
  {
    text: "Most men ebb and flow in wretchedness between the fear of death and the hardships of life; they are unwilling to live, and yet they do not know how to die. For this reason, make life as a whole agreeable to yourself by banishing all worry about it.",
    author: "Seneca",
  },
  {
    text: "Deve-se aprender a viver por toda a vida, e, por mais que tu talvez te espantes, a vida toda ?? um aprender a morrer.",
    author: "Seneca",
  },
  {
    text: "???????????? ???? ???? ?????????? ?????? ?????????? ???? ?????????????? ???? ???? ??????????, ?????????? ?????????? ???? ?????? ???? ?????????? ?????? ????????????, ?????????? ?????????? ???? ???????????? ?????? ?????????????? ???????? ??????????",
    author: "Seneca",
  },
  {
    text: "LETTERA 34 SODDISFAZIONE PER I PROGRESSI DI LUCILIO Cosa credi che possa provare chi ha educato una coscienza e, mentre ha incominciato a formarla ancora tenera, la vede ad un tratto matura?",
    author: "Seneca",
  },
  {
    text: "?????? ???? ???????? ?????????? ???????????????? ???? ?????? ???????????? ???? ??????????, ?????? ???? ?????????????? ???????????? ?????????? ????????, ?????? ?????????????? ???????? ???????????? ?????? ???????????? ???? ???????? ???????????? ????",
    author: "Seneca",
  },
  {
    text: "LETTERA 5 INVITO ALLA SEMPLICITA' Nessuno ?? infelice solo per il presente.",
    author: "Seneca",
  },
  { text: "Unblest is he who thinks himself unblest.[15]", author: "Seneca" },
  { text: "Tanr??'ya yak??n olmak sars??lmamakt??r.", author: "Seneca" },
  {
    text: "?????? ?????? ???????????? ???????? ???? ???????????? ?????????????????? ???????? ???????????? ???? ?????? ????????",
    author: "Seneca",
  },
  {
    text: "N??o temos exatamente uma vida curta, mas desperdi??amos uma grande parte dela. A vida, se bem empregada, ?? suficientemente longa e nos foi dada com muita generosidade para a realiza????o de importantes tarefas.",
    author: "Seneca",
  },
  {
    text: "LETTERA 34 INVITO ALLA VERA AMICIZIA ?? vero che, anche quando si ?? lontani, quelli che amiamo ci danno motivo di gioia, ma essa ?? lieve e fugace. Invece il loro aspetto, la loro presenza, la loro conversazione danno un senso di vivo piacere, specie se vediamo non solo la persona che desideriamo, ma come la desideriamo.",
    author: "Seneca",
  },
  {
    text: "Amintirea pl??cerilor este mai de durat?? ??i mai de ??ncredere dec??t prezen??a lor.",
    author: "Seneca",
  },
  {
    text: "S??o econ??micos na preserva????o de seu patrim??nio, mas desperdi??am o tempo, a ??nica coisa que justificaria a avareza.",
    author: "Seneca",
  },
  {
    text: "Ningu??m valoriza o tempo, faz-se uso dele muito largamente como se fosse gratuito.",
    author: "Seneca",
  },
  {
    text: "??Preguntas c??al es el fundamento de la sabidur??a? No gozarte en cosas vanas.",
    author: "Seneca",
  },
  {
    text: "Awake, my heart, And do such deeds as in the time to come No tongue shall praise, but none refuse to tell.",
    author: "Seneca",
  },
  {
    text: "Sine philosophia nemo intrepide potest vivere, nemo secure.",
    author: "Seneca",
  },
  { text: "Timendi causa est nescire.", author: "Seneca" },
  {
    text: "No he nacido para un s??lo rinc??n; mi patria es todo el mundo visible",
    author: "Seneca",
  },
  {
    text: "Some men even prepare for whatever lies after death ??? a necropolis of tombs, countless public dedications, blazing funeral pyres that can be seen from the stars and ostentatious funerals worthy of demi-gods. But in the end, their funerals were just like their lives ??? over in a short burst of flames.",
    author: "Seneca",
  },
  {
    text: "El ??nico bien, causa y soporte de la vida feliz, consiste en confiar en s?? mismo.",
    author: "Seneca",
  },
  {
    text: "LETTERA 24 COME SI DEVE AFFRONTARE LA MORTE Come non vuota la clessidra l'ultima goccia, ma tutte quelle che sono gi?? cadute, cos??, l'ultima ora in cui cessiamo di esistere, non produce, da sola, la morte, ma la compie; allora noi giungiamo al termine, ma da tempo vi siamo avviati.",
    author: "Seneca",
  },
  {
    text: "All the greatest blessings are a source of anxiety, and at no time is fortune less wisely trusted than when it is best",
    author: "Seneca",
  },
  {
    text: "LETTERA 18 ELOGIO DELLA POVERT?? Se non vuoi che uno si affanni e sia preso dal panico di fronte ad una triste realt??, fallo esercitare prima che essa si presenti.",
    author: "Seneca",
  },
  {
    text: "The man who has anticipated the coming of troubles takes away their power when they arrive.",
    author: "Seneca",
  },
  {
    text: "LETTERA 15: BISOGNA ESERCITARE LO SPIRITO, PIU' CHE IL CORPO N?? il freddo, n?? il caldo, e neppure la vecchiaia, potr?? impedire di esercitare le forze dell'animo: cura dunque questo bene, che diventa migliore col passare del tempo.",
    author: "Seneca",
  },
  {
    text: "Read good books many times, rather than many books",
    author: "Seneca",
  },
  {
    text: "Es seguro, es agradable el camino para el que la naturaleza te ha equipado. Ella te ha provisto de aquellos recursos que, si no los desaprovechas, te elevar??n a la misma altura de Dios.",
    author: "Seneca",
  },
  {
    text: "every individual can make himself happy. External goods are of trivial importance and without much influence in either direction: prosperity does not elevate the sage and adversity does not depress him.",
    author: "Seneca",
  },
  {
    text: "Epicuro reprova igualmente os que cobi??am a morte e os que a temem, dizendo: ????? rid??culo correr para a morte entediado com a vida uma vez que foi com teu estilo de vida que provocaste essa corrida para a morte",
    author: "Seneca",
  },
  {
    text: "Sola la sabidur??a es a quien no se puede hacer injuria; no la podr?? borrar la edad presente, ni la disminuir?? la futura, antes la que viniere a??adir?? alguna parte de veneraci??n; porque la envidia siempre hace su morada en lo cercano, y con m??s sinceridad nos admiramos de lo m??s remoto.",
    author: "Seneca",
  },
  {
    text: "???Odm??t??me ty co n??s miluj??, a milujeme ty co n??s odm??taj??.",
    author: "Seneca",
  },
  {
    text: "??Qu?? mayor necedad que alabar en el hombre lo que no le pertenece?",
    author: "Seneca",
  },
  {
    text: 'What progress, you ask, have I made? I have begun to be a friend to myself." That was indeed a great benefit; such a person can never be alone. You may be sure that such a man is a friend to all mankind. Farewell.',
    author: "Seneca",
  },
  {
    text: "When a soul rises superior to other souls, when it is under control, when it passes through every experience as if it were of small account, when it smiles at our fears and at our prayers, it is stirred by a force from heaven.",
    author: "Seneca",
  },
  {
    text: "LETTERA 23 LA VERA GIOIA Ma ?? difficile avere il senso della misura riguardo a ci?? che si ritiene un bene.",
    author: "Seneca",
  },
  {
    text: "There is therefore no advice???and of such advice no one can have too much???which I would rather give you than this: that you should measure all things by the demands of Nature; for these demands can be satisfied either without cost or else very cheaply.",
    author: "Seneca",
  },
  {
    text: "??Come un racconto, cos?? ?? la vita: non importa che sia lunga, ma che sia buona??.",
    author: "Seneca",
  },
  {
    text: "For every day a little of our life is taken from us; even when we are growing, our life is on the wane. We lose our childhood, then our boyhood, and then our youth. Counting even yesterday, all past time is lost time; the very day which we are now spending is shared between ourselves and death. It is not the last drop that empties the water-clock, but all that which previously has flowed out; similarly, the final hour when we cease to exist does not of itself bring death; it merely of itself completes the death-process.",
    author: "Seneca",
  },
  {
    text: "To reduce your worry, you must assume that what you fear may happen is certainly going to happen.",
    author: "Seneca",
  },
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    author: "Marcus Aurelius",
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ...",
    author: "Marcus Aurelius",
  },
  {
    text: "Accept the things to which fate binds you, and love the people with whom fate brings you together,but do so with all your heart.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is to be unlike him who performed the injury.",
    author: "Marcus Aurelius",
  },
  {
    text: "The soul becomes dyed with the colour of its thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is not death that a man should fear, but he should fear never beginning to live.",
    author: "Marcus Aurelius",
  },
  {
    text: "Our life is what our thoughts make it.",
    author: "Marcus Aurelius",
  },
  {
    text: "If someone is able to show me that what I think or do is not right, I will happily change, for I seek the truth, by which no one was ever truly harmed. It is the person who continues in his self-deception and ignorance who is harmed.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    author: "Marcus Aurelius",
  },
  {
    text: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    text: "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
    author: "Marcus Aurelius",
  },
  {
    text: "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Reject your sense of injury and the injury itself disappears.",
    author: "Marcus Aurelius",
  },
  {
    text: "When another blames you or hates you, or people voice similar criticisms, go to their souls, penetrate inside and see what sort of people they are. You will realize that there is no need to be racked with anxiety that they should hold any particular opinion about you.",
    author: "Marcus Aurelius",
  },
  {
    text: "How much more grievous are the consequences of anger than the causes of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly. They are like this because they can't tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own - not of the same blood and birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate him. We were born to work together like feet, hands and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on him: these are unnatural.",
    author: "Marcus Aurelius",
  },
  {
    text: "Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness ??? all of them due to the offenders??? ignorance of what is good or evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Here is a rule to remember in future, when anything tempts you to feel bitter: not "This is misfortune," but "To bear this worthily is good fortune.',
    author: "Marcus Aurelius",
  },
  {
    text: "How much time he gains who does not look to see what his neighbour says or does or thinks, but only at what he does himself, to make it just and holy.",
    author: "Marcus Aurelius",
  },
  {
    text: "You are a little soul carrying about a corpse, as Epictetus used to say.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do every act of your life as though it were the very last act of your life.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.",
    author: "Marcus Aurelius",
  },
  { text: "What we do now echoes in eternity.", author: "Marcus Aurelius" },
  {
    text: "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.",
    author: "Marcus Aurelius",
  },
  {
    text: "For it is in your power to retire into yourself whenever you choose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness ??? all of them due to the offenders??? ignorance of what is good or evil. But for my part I have long perceived the nature of good and its nobility, the nature of evil and its meanness, and also the nature of the culprit himself, who is my brother (not in the physical sense, but as a fellow creature similarly endowed with reason and a share of the divine); therefore none of those things can injure me, for nobody can implicate me in what is degrading. Neither can I be angry with my brother or fall foul of him; for he and I were born to work together, like a man???s two hands, feet or eyelids, or the upper and lower rows of his teeth. To obstruct each other is against Nature???s law ??? and what is irritation or aversion but a form of obstruction.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.",
    author: "Marcus Aurelius",
  },
  {
    text: "Perfection of character is this: to live each day as if it were your last, without frenzy, without apathy, without pretence.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe is change; our life is what our thoughts make it.",
    author: "Marcus Aurelius",
  },
  {
    text: "You always own the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control. These things are not asking to be judged by you. Leave them alone.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember that very little is needed to make a happy life.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man???s worth is no greater than the worth of his ambitions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Live a good life. If there are gods and they are just, then they will not care how devout you have been, but will welcome you based on the virtues you have lived by. If there are gods, but unjust, then you should not want to worship them. If there are no gods, then you will be gone, but will have lived a noble life that will live on in the memories of your loved ones.",
    author: "Marcus Aurelius",
  },
  {
    text: "Receive without conceit, release without struggle.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing happens to anybody which he is not fitted by nature to bear.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don't go on discussing what a good person should be. Just be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Just that you do the right thing. The rest doesn't matter. Cold or warm. Tired or well-rested. Despised or honored. Dying...or busy with other assignments. Because dying, too, is one of our assignments in life. There as well: \"To do what needs doing.\" Look inward. Don't let the true nature of anything elude you. Before long, all existing things will be transformed, to rise like smoke (assuming all things become one), or be dispersed in fragments...to move from one unselfish act to another with God in mind. Only there, delight and stillness...when jarred, unavoidably, by circumstances, revert at once to yourself, and don't lose the rhythm more than you can help. You'll have a better grasp of the harmony if you keep going back to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "How ridiculous and how strange to be surprised at anything which happens in life",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever anyone does or says, I must be emerald and keep my colour.",
    author: "Marcus Aurelius",
  },
  {
    text: "Life is neither good or evil, but only a place for good and evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "Humans have come into being for the sake of each other, so either teach them, or learn to bear them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Though you break your heart, men will go on as before.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is in your power to withdraw yourself whenever you desire. Perfect tranquility within consists in the good ordering of the mind, the realm of your own.",
    author: "Marcus Aurelius",
  },
  {
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "Regain your senses, call yourself back, and once again wake up. Now that you realize that only dreams were troubling you, view this 'reality' as you view your dreams.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do what you will. Even if you tear yourself apart, most people will continue doing the same things.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "The memory of everything is very soon overwhelmed in time.",
    author: "Marcus Aurelius",
  },
  {
    text: "Observe always that everything is the result of change, and get used to thinking that there is nothing Nature loves so well as to change existing forms and make new ones like them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs?",
    author: "Marcus Aurelius",
  },
  {
    text: "If any man despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not act as if you had ten thousand years to throw away. Death stands at your elbow. Be good for something while you live and it is in your power.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not waste what remains of your life in speculating about your neighbors, unless with a view to some mutual benefit. To wonder what so-and-so is doing and why, or what he is saying, or thinking, or scheming???in a word, anything that distracts you from fidelity to the ruler within you???means a loss of opportunity for some other task.",
    author: "Marcus Aurelius",
  },
  {
    text: "If someone can prove me wrong and show me my mistake in any thought or action, I shall gladly change. I seek the truth, which never harmed anyone: the harm is to persist in one's own self-deception and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you are pained by external things, it is not they that disturb you, but your own judgement of them. And it is in your power to wipe out that judgement now.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
    author: "Marcus Aurelius",
  },
  {
    text: "Because a thing seems difficult for you, do not think it impossible for anyone to accomplish.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Or is it your reputation that's bothering you? But look at how soon we're all forgotten. The abyss of endless time that swallows it all. The emptiness of those applauding hands. The people who praise us; how capricious they are, how arbitrary. And the tiny region it takes place. The whole earth a point in space - and most of it uninhabited.",
    author: "Marcus Aurelius",
  },
  {
    text: "A noble man compares and estimates himself by an idea which is higher than himself; and a mean man, by one lower than himself. The one produces aspiration; the other ambition, which is the way in which a vulgar man aspires.",
    author: "Marcus Aurelius",
  },
  {
    text: "A person's worth is measured by the worth of what he values.",
    author: "Marcus Aurelius",
  },
  { text: "Confine yourself to the present.", author: "Marcus Aurelius" },
  {
    text: "Pass then through this little space of time conformably to nature, and end thy journey in content, just as an olive falls off when it is ripe, blessing nature who produced it, and thanking the tree on which it grew.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts.",
    author: "Marcus Aurelius",
  },
  {
    text: "That which is really beautiful has no need of anything; not more than law, not more than truth, not more than benevolence or modesty.",
    author: "Marcus Aurelius",
  },
  {
    text: "Dig within. Within is the wellspring of Good; and it is always ready to bubble up, if you just dig.",
    author: "Marcus Aurelius",
  },
  {
    text: "Misfortune nobly born is good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "Take full account of what Excellencies you possess, and in gratitude remember how you would hanker after them, if you had them not.",
    author: "Marcus Aurelius",
  },
  {
    text: "What we cannot bear removes us from life; what remains can be borne.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Is your cucumber bitter? Throw it away. Are there briars in your path? Turn aside. That is enough. Do not go on and say, "Why were things of this sort ever brought into this world?" neither intolerable nor everlasting - if thou bearest in mind that it has its limits, and if thou addest nothing to it in imagination. Pain is either an evil to the body (then let the body say what it thinks of it!)-or to the soul. But it is in the power of the soul to maintain its own serenity and tranquility. . . .',
    author: "Marcus Aurelius",
  },
  {
    text: "A man must stand erect, not be kept erect by others.",
    author: "Marcus Aurelius",
  },
  {
    text: "The art of living is more like wrestling than dancing, in so far as it stands ready against the accidental and the unforeseen, and is not apt to fall.",
    author: "Marcus Aurelius",
  },
  {
    text: "I was once a fortunate man but at some point fortune abandoned me.  But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.",
    author: "Marcus Aurelius",
  },
  { text: "Life is opinion.", author: "Marcus Aurelius" },
  {
    text: "When you arise in the moring, think of what a precious privelege it is to be alive-- to breathe, to think, to enjoy, to love",
    author: "Marcus Aurelius",
  },
  {
    text: "Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it.",
    author: "Marcus Aurelius",
  },
  {
    text: "All men are made one for another: either then teach them better or bear with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "The things you think about determine the quality of your mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "Every living organism is fulfilled when it follows the right path for its own nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Unhappy am I because this has happened to me.- Not so, but happy am I, though this has happened to me, because I continue free from pain, neither crushed by the present nor fearing the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "How ridiculous and unrealistic is the man who is astonished at anything that happens in life.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is not the actions of others which trouble us (for those actions are controlled by their governing part), but rather it is our own judgments. Therefore remove those judgments and resolve to let go of your anger, and it will already be gone. How do you let go? By realizing that such actions are not shameful to you.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the morning when thou risest unwillingly, let this thought be present - I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist and for which I was brought into the world?",
    author: "Marcus Aurelius",
  },
  {
    text: "No man is happy who does not think himself so.",
    author: "Marcus Aurelius",
  },
  {
    text: "Men seek retreats for themselves, houses in the country, sea-shores, and mountains; and thou too art wont to desire such things very much. But this is altogether a mark of the most common sort of men, for it is in thy power whenever thou shalt choose to retire into thyself. For nowhere either with more quiet or more freedom from trouble does a man retire than into his own soul, particularly when he has within him such thoughts that by looking into them he is immediately in perfect tranquility; and I affirm that tranquility is nothing else than the good ordering of the mind. Constantly then give to thyself this retreat, and renew thyself; and let thy principles be brief and fundamental, which, as soon as thou shalt recur to them, will be sufficient to cleanse the soul completely, and to send thee back free from all discontent with the things to which thou returnest. For with what art thou discontented? With the badness of men? Recall to thy mind this conclusion, that rational animals exist for one another, and that to endure is a part of justice, and that men do wrong involuntarily; and consider how many already, after mutual enmity, suspicion, hatred, and fighting, have been stretched dead, reduced to ashes; and be quiet at last.- But perhaps thou art dissatisfied with that which is assigned to thee out of the universe.- Recall to thy recollection this alternative; either there is providence or atoms, fortuitous concurrence of things; or remember the arguments by which it has been proved that the world is a kind of political community, and be quiet at last.- But perhaps corporeal things will still fasten upon thee.- Consider then further that the mind mingles not with the breath, whether moving gently or violently, when it has once drawn itself apart and discovered its own power, and think also of all that thou hast heard and assented to about pain and pleasure, and be quiet at last.- But perhaps the desire of the thing called fame will torment thee.- See how soon everything is forgotten, and look at the chaos of infinite time on each side of the present, and the emptiness of applause, and the changeableness and want of judgement in those who pretend to give praise, and the narrowness of the space within which it is circumscribed, and be quiet at last. For the whole earth is a point, and how small a nook in it is this thy dwelling, and how few are there in it, and what kind of people are they who will praise thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not disturb yourself by picturing your life as a whole; do not assemble in your mind the many and varied troubles which have come to you in the past and will come again in the future, but ask yourself with regard to every present difficulty: 'What is there in this that is unbearable and beyond endurance?' You would be ashamed to confess it! And then remind yourself that it is not the future or what has passed that afflicts you, but always the present, and the power of this is much diminished if you take it in isolation and call your mind to task if it thinks that it cannot stand up to it when taken on its own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Live out your life in truth and justice, tolerant of those who are neither true nor just.",
    author: "Marcus Aurelius",
  },
  {
    text: "All things fade and quickly turn to myth.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the life of a man, his time is but a moment, his being an incessant flux, his sense a dim rushlight, his body a prey of worms, his soul an unquiet eddy, his fortune dark, his fame doubtful. In short, all that is body is as coursing waters, all that is of the soul as dreams and vapors.",
    author: "Marcus Aurelius",
  },
  {
    text: "No one can lose either the past or the future - how could anyone be deprived of what he does not possess? ... It is only the present moment of which either stands to be deprived: and if this is all he has, he cannot lose what he does not have.",
    author: "Marcus Aurelius",
  },
  { text: "Anger cannot be dishonest.", author: "Marcus Aurelius" },
  {
    text: "Death is a release from the impressions of the senses, and from desires that make us their puppets, and from the vagaries of the mind, and from the hard service of the flesh.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything - a horse, a vine - is created for some duty... For what task, then, were you yourself created?",
    author: "Marcus Aurelius",
  },
  {
    text: "Which is recorded of Socrates, that he was able both to abstain from, and to enjoy, those things which many are too weak to abstain from, and cannot enjoy without excess. But to be strong enough both to bear the one and to be sober in the other is the mark of a man who has a perfect and invincible soul.",
    author: "Marcus Aurelius",
  },
  {
    text: "All things of the body stream away like a river, all things of the mind are dreams and delusion; life is warfare, and a visit to a strange land; the only lasting fame is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "A wrongdoer is often a man who has left something undone, not always one who has done something.",
    author: "Marcus Aurelius",
  },
  { text: "It loved to happen.", author: "Marcus Aurelius" },
  {
    text: "Choose not to be harmed???and you won???t feel harmed. Don???t feel harmed???and you haven???t been.",
    author: "Marcus Aurelius",
  },
  {
    text: "When people injure you, ask yourself what good or harm they thought would come of it. If you understand that, you'll feel sympathy rather than outrage or anger. Your sense of good and evil may be the same as theirs, or near it, in which case you have to excuse them. Or your sense of good and evil may differ from theirs. In which case they're misguided and deserve your compassion. Is that so hard?",
    author: "Marcus Aurelius",
  },
  {
    text: "Neither worse then or better is a thing made by being praised.",
    author: "Marcus Aurelius",
  },
  {
    text: "So you know how things stand. Now forget what they think of you. Be satisfied if you can live the rest of your life, however short, as your nature demands. Focus on that, and don't let anything distract you. You've wandered all over and finally realized that you never found what you were after: how to live. Not in syllogisms, not in money, or fame, or self-indulgence. Nowhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look beneath the surface; let not the several quality of a thing nor its worth escape thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.",
    author: "Marcus Aurelius",
  },
  {
    text: "The blazing fire makes flames and brightness out of everything thrown into it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Adapt yourself to the life you have been given; and truly love the people with whom destiny has surrounded you",
    author: "Marcus Aurelius",
  },
  {
    text: "That which is not good for the swarm, neither is it good for the bee.",
    author: "Marcus Aurelius",
  },
  {
    text: "Observe the movements of the stars as if you were running their courses with them, and let your mind constantly dwell on the changes of the elements into each other. Such imaginings wash away the filth of life on the ground.",
    author: "Marcus Aurelius",
  },
  {
    text: "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place, and this will be carried away too.",
    author: "Marcus Aurelius",
  },
  {
    text: "Human life. Duration: momentary. Nature: changeable. Perception: dim. Condition of Body: decaying. Soul: spinning around. Fortune: unpredictable. Lasting Fame: uncertain. Sum Up: The body and its parts are a river, the soul a dream and mist, life is warfare and a journey far from home, lasting reputation is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death smiles at us all; all we can do is smile back.",
    author: "Marcus Aurelius",
  },
  {
    text: "The time is at hand when you will have forgotten everything; and the time is at hand when all will have forgotten you. Always reflect that soon you will be no one, and nowhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "Concentrate every minute like a Roman??? like a man??? on doing what???s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can??? if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered , irritable. You see how few things you have to do to live a satisfying and reverent life? If you can manage this, that???s all even the gods can ask of you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Men exist for the sake of one another.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of your many years of procrastination; how the gods have repeatedly granted you further periods of grace, of which you have taken no advantage. It is time now to realise the nature of the universe to which you belong, and of that controlling Power whose offspring you are; and to understand that your time has a limit set to it. Use it, then, to advance your enlightenment; or it will be gone, and never in your power again.",
    author: "Marcus Aurelius",
  },
  {
    text: "No one loses any other life than the one he now lives, nor does one live any other life than that which he will lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything that happens, happens as it should, and if you observe carefully, you will find this to be so.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness and unhappiness of the rational, social animal depends not on what he feels but on what he does; just as his virtue and vice consist not in feeling but in doing.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work???as a human being. What do I have to complain of, if I???m going to do what I was born for???the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm? ???But it???s nicer here??? So you were born to feel ???nice???? Instead of doings things and experiencing them? Don???t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can? And you???re not willing to do your job as a human being? Why aren???t you running to do what your nature demands?  ???But we have to sleep sometime??? Agreed. But nature set a limit on that???as it did on eating and drinking. And you???re over the limit. You???ve had more than enough of that. But not of working. There you???re still below your quota. You don???t love yourself enough. Or you???d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat. Do you have less respect for your own nature than the engraver does for engraving, the dancer for dance, the miser for money or the social climber for status? When they???re really possessed by what they do, they???d rather stop eating and sleeping than give up practicing their arts.",
    author: "Marcus Aurelius",
  },
  {
    text: "Because your own strength is unequal to the task, do not assume that it is beyond the powers of man; but if anything is within the powers and province of man, believe that it is within your own compass also.  Marcus Aurelius",
    author: "Marcus Aurelius",
  },
  {
    text: 'As far as you can, get into the habit of asking yourself in relation to any action taken by another: "What is his point of reference here?" But begin with yourself: examine yourself first.',
    author: "Marcus Aurelius",
  },
  {
    text: "A man should always have these two rules in readiness. First, to do only what the reason of your ruling and legislating faculties suggest for the service of man. Second, to change your opinion whenever anyone at hand sets you right and unsettles you in an opinion, but this change of opinion should come only because you are persuaded that something is just or to the public advantage, not because it appears pleasant or increases your reputation.",
    author: "Marcus Aurelius",
  },
  {
    text: "Asia and Europe: tiny corners of the Cosmos. Every sea: a mere drop. Mount Athos: a lump of dirt. The present moment is the smallest point in all eternity. All is microscopic, changeable, disappearing. All things come from that faraway place, either originating directly from that governing part which is common to all, or else following from it as consequences. So even the gaping jaws of the lion, deadly poison, and all harmful things like thorns or an oozing bog are products of that awesome and noble source. Do not imagine these things to be alien to that which you revere, but turn your Reason to the source of all things.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t let yourself forget how many doctors have died, furrowing their brows over how many deathbeds. How many astrologers, after pompous forecasts about others??? ends. How many philosophers, after endless disquisitions on death and immortality. How many warriors, after inflicting thousands of casualties themselves. How many tyrants, after abusing the power of life and death atrociously, as if they were themselves immortal. How many whole cities have met their end: Helike, Pompeii, Herculaneum, and countless others. And all the ones you know yourself, one after another. One who laid out another for burial, and was buried himself, and then the man who buried him - all in the same short space of time. In short, know this: Human lives are brief and trivial. Yesterday a blob of semen; tomorrow embalming fluid, ash. To pass through this brief life as nature demands. To give it up without complaint. Like an olive that ripens and falls. Praising its mother, thanking the tree it grew on.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is within our power not to make a judgement about something, and so not disturb our minds; for nothing in itself possesses the power to form our judgements.",
    author: "Marcus Aurelius",
  },
  {
    text: "When men are inhuman, take care not to feel towards them as they do towards other humans.",
    author: "Marcus Aurelius",
  },
  {
    text: "To refrain from imitation is the best revenge.",
    author: "Marcus Aurelius",
  },
  {
    text: "How unlucky I am that this should happen to me. But not at all. Perhaps, say how lucky I am that I am not broken by what has happened, and I am not afraid of what is about to happen. For the same blow might have stricken anyone, but not many would have absorbed it without capitulation and complaint.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Everything is only for a day, both that which remembers and that which is remembered. "Observe constantly that all things take place by change, and accustom thyself to consider that the nature of the universe loves nothing so much as to change things which are and to make new things like them. For everything that exists is in a manner the seed of that which will be.',
    author: "Marcus Aurelius",
  },
  {
    text: "The honest and good man ought to be exactly like a man who smells strong, so that the bystander as soon as he comes near him must smell whether he choose or not.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not think that what is hard for you to master is humanly impossible; and if it is humanly possible, consider it to be within your reach.",
    author: "Marcus Aurelius",
  },
  { text: "We are the other of the other", author: "Marcus Aurelius" },
  {
    text: "And in the case of superior things like stars, we discover a kind of unity in separation. The higher we rise on the scale of being, the easier it is to discern a connection even among things separated by vast distances.",
    author: "Marcus Aurelius",
  },
  {
    text: "For outward show is a wonderful perverter of the reason.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look to nothing, not even for a moment except to reason.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything is banal in experience, fleeting in duration, sordid in content; in all respects the same today as generations now dead and buried have found it to be.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of the universal substance, of which thou has a very small portion; and of universal time, of which a short and indivisible interval has been assigned to thee; and of that which is fixed by destiny, and how small a part of it thou art",
    author: "Marcus Aurelius",
  },
  {
    text: "It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men's badness, which is impossible.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you arise in the morning, think of what a precious privilege it is to be alive-to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius",
  },
  {
    text: "It???s the truth I???m after, and the truth never harmed anyone. What harms us is to persist in self-deceit and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whenever you want to cheer yourself up, consider the good qualities of your companions, for example, the energy of one, the modesty of another, the generosity of yet another, and some other quality of another; for nothing cheers the heart as much as the images of excellence reflected in the character of our companions, all brought before us as fully as possible. Therefore, keep these images ready at hand.",
    author: "Marcus Aurelius",
  },
  {
    text: "Will any man despise me? Let him see to it. But I will see to it that I may not be found doing or saying anything that deserves to be despised.",
    author: "Marcus Aurelius",
  },
  {
    text: "The world is mere change, and this life, opinion.",
    author: "Marcus Aurelius",
  },
  { text: "Do not be ashamed of help.", author: "Marcus Aurelius" },
  {
    text: "Never forget that the universe is a single living organism possessed of one substance and one soul, holding all things suspended in a single consciousness and creating all things with a single purpose that they might work together spinning and weaving and knotting whatever comes to pass.",
    author: "Marcus Aurelius",
  },
  {
    text: "Kindness is unconquerable, so long as it is without flattery or hypocrisy. For what can the most insolent man do to you, if you contrive to be kind to him, and if you have the chance gently advise and calmly show him what is right...and point this out tactfully and from a universal perspective. But you must not do this with sarcasm or reproach, but lovingly and without anger in your soul.",
    author: "Marcus Aurelius",
  },
  {
    text: "The time of a man's life is as a point; the substance of it ever flowing, the sense obscure; and the whole composition of the body tending to corruption. His soul is restless, fortune uncertain, and fame doubtful; to be brief, as a stream so are all things belonging to the body; as a dream, or as a smoke, so are all that belong unto the soul. Our life is a warfare, and a mere pilgrimage. Fame after life is no better than oblivion. What is it then that will adhere and follow? Only one thing, philosophy. And philosophy doth consist in this, for a man to preserve that spirit which is within him, from all manner of contumelies and injuries, and above all pains or pleasures; never to do anything either rashly, or feignedly, or hypocritically: only to depend from himself, and his own proper actions: all things that happen unto him to embrace contentendly, as coming from Him from whom he himself also came; and above all things, with all meekness and a calm cheerfulness, to expect death, as being nothing else but the resolution of those elements, of which every creature is composed. And if the elements themselves suffer nothing by their perpetual conversion of one into another, that dissolution, and alteration, which is so common unto all, why should it be feared by any? Is not this according to nature? But nothing that is according to nature can be evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything that exists is in a manner the seed of that which will be.",
    author: "Marcus Aurelius",
  },
  {
    text: 'You need to avoid certain things in your train of thought: everything random, everything irrelevant. And certainly everything self-important or malicious. You need to get used to winnowing your thoughts, so that if someone says, "What are your thinking about?" you can respond at once (and truthfully) that you are thinking this or thinking that.',
    author: "Marcus Aurelius",
  },
  {
    text: "Not to waste time on nonsense. Not to be taken in by conjurors and hoodoo artists with their talk about incantations and exorcism and all the rest of it. Not to be obsessed with quail-fighting or other crazes like that.",
    author: "Marcus Aurelius",
  },
  {
    text: "In an expression of true gratitude, sadness is conspicuous only by its absence",
    author: "Marcus Aurelius",
  },
  {
    text: "Be tolerant with others and strict with yourself.",
    author: "Marcus Aurelius",
  },
  { text: "How soon will time cover all things.", author: "Marcus Aurelius" },
  {
    text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is not to do as they do.",
    author: "Marcus Aurelius",
  },
  {
    text: "Today I escaped all circumstance, or rather I cast out all circumstance, for it was not outside me, but within my judgements.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything in any way beautiful has its beauty of itself, inherent and self-sufficient: praise is no part of it. At any rate, praise does not make anything better or worse. This applies even to the popular conception of beauty, as in material things or works of art. So does the truly beautiful need anything beyond itself? No more than law, no more than truth, no more than kindness or integrity. Which of these things derives its beauty from praise, or withers under criticism? Does an emerald lose its quality if it is not praised? And what of gold, ivory, purple, a lyre, a dagger, a flower, a bush?",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember two things: i. that everything has always been the same, and keeps recurring, and it makes no difference whether you see the same things recur in a hundred years or two hundred, or in an infinite period; ii. that the longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have you cannot lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Failure to read what is happening in another's soul is not easily seen as a cause of unhappiness: but those who fail to attend the motions of their own soul are necessarily unhappy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever is in any way beautiful hath its source of beauty in itself, and is complete in itself; praise forms no part of it. So it is none the worse nor the better for being praised.",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work ??? as a human being. What do I have to complain of, if I???m going to do what I was born for ??? the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm???? So you were born to feel ???nice???? Instead of doing things and experiencing them? Don???t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can? And you???re not willing to do your job as a human being? Why aren???t you running to do what your nature demands? You don???t love yourself enough. Or you???d love your nature too, and what it demands of you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Anything in any way beautiful derives its beauty from itself and asks nothing beyond itself. Praise is no part of it, for nothing is made worse or better by praise.",
    author: "Marcus Aurelius",
  },
  {
    text: "We must make haste then, not only because we are daily nearer to death, but also because the conception of things and the understanding of them cease first.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stop wandering about! You aren't likely to read your own notebooks, or ancient histories, or the anthologies you've collected to enjoy in your old age. Get busy with life's purpose, toss aside empty hopes, get active in your own rescue-if you care for yourself at all-and do it while you can.",
    author: "Marcus Aurelius",
  },
  {
    text: "Frequently consider the connection of all things in the Universe. ... Reflect upon the multitude of bodily and mental events taking place in the same brief time, simultaneously in every one of us and so you will not be surprised that many more events, or rather all things that come to pass, exist simultaneously in the one and entire unity, which we call the Universe. ... We should not say ???I am an Athenian??? or ???I am a Roman??? but ???I am a Citizen of the Universe'.",
    author: "Marcus Aurelius",
  },
  {
    text: "The sexual embrace can only be compared with music and with prayer.",
    author: "Marcus Aurelius",
  },
  {
    text: "In everything that you do, pause and ask yourself if death is a dreadful thing because it deprives you of this",
    author: "Marcus Aurelius",
  },
  {
    text: "When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help. Habitual recurrence to the harmony will increase your mastery of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Accustom yourself not to be disregarding of what someone else has to say: as far as possible enter into the mind of the speaker.",
    author: "Marcus Aurelius",
  },
  {
    text: "In a sense, people are our proper occupation. Our job is to do them good and put up with them. But when they obstruct our proper tasks, they become irrelevant to us???like sun, wind, animals. Our actions may be impeded by them, but there can be no impeding our intentions or our dispositions. Because we can accommodate and adapt. The mind adapts and converts to its own purposes the obstacle to our acting. The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "A Man's life is dyed the color of his imagination.",
    author: "Marcus Aurelius",
  },
  {
    text: "Our inward power, when it obeys nature, reacts to events by accommodating itself to what it faces - to what is possible. It needs no specific material. It pursues its own aims as circumstances allow; it turns obstacles into fuel. As a fire overwhelms what would have quenched a lamp. What's thrown on top of the conflagration is absorbed, consumed by it - and makes it burn still higher.",
    author: "Marcus Aurelius",
  },
  {
    text: "...life is a warfare and a stranger's sojourn, and after-fame is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: 'That which has died falls not out of the universe. If it stays here, it also changes here, and is dissolved into its proper parts, which are elements of the universe and of thyself. And these too change, and they murmur not".',
    author: "Marcus Aurelius",
  },
  { text: "Live every day as if they last.", author: "Marcus Aurelius" },
  {
    text: "Do the things external which fall upon thee distract thee? Give thyself time to learn something new and good, and cease to be whirled around.",
    author: "Marcus Aurelius",
  },
  {
    text: "Our actions may be impeded...  But there can be no impeding our intentions or our dispositions. Because we can accommodate and adapt. The mind adapts and converts to its own purposes the obstacle to our acting. The impeding to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "Be your own master, and look at things as a man, as a human being, as a citizen, as a mortal creature.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the morning when thou risest unwillingly, let this thought be present,???I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist and for which I was brought into the world? Or have I been made for this, to lie in the bed-clothes and keep myself warm????But this is more pleasant.???Dost thou exist then to take thy pleasure, and not at all for action or exertion? Dost thou not see the little plants, the little birds, the ants, the spiders, the bees working together to put in order their several parts of the universe? And art thou unwilling to do the work of a human being, and dost thou not make haste to do that which, is according to thy nature? But it is necessary to take rest also.???It is necessary. However, Nature has fixed bounds to this too: she has fixed bounds to eating and drinking, and yet thou goest beyond these bounds, beyond what is sufficient; yet in thy acts it is not so, but thou stoppest short of what thou canst do. So thou lovest not thyself, for if thou didst, thou wouldst love thy nature and her will. But those who love their several arts exhaust themselves in working at them unwashed and without food; but thou valuest thy own nature less than the turner values the turning art, or the dancer the dancing art, or the lover of money values his money, or the vain-glorious man his little glory. And such men, when they have a violent affection to a thing, choose neither to eat nor to sleep rather than to perfect the things which they care for. But are the acts which concern society more vile in thy eyes and less worthy of thy labor?",
    author: "Marcus Aurelius",
  },
  {
    text: "When you run up against someone else???s shamelessness, ask yourself this: Is a world without shamelessness possible? No. Then don???t ask the impossible. There have to be shameless people in the world. This is one of them. The same for someone vicious or untrustworthy, or with any other defect. Remembering that the whole world class has to exist will make you more tolerant of its members.",
    author: "Marcus Aurelius",
  },
  {
    text: "If something is difficult for you to accomplish, do not then think it impossible for any human being; rather, if it is humanly possible and corresponds to human nature, know that it is attainable by you as well.",
    author: "Marcus Aurelius",
  },
  {
    text: "From my great-grandfather: not to have attended schools for the public; to have had good teachers at home, and to realize that this is the sort of thing on which one should spend lavishly.",
    author: "Marcus Aurelius",
  },
  {
    text: '???"Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial',
    author: "Marcus Aurelius",
  },
  {
    text: "If any man is able to convince me and show me that I do not think or act right, I will gladly change; for I seek the truth by which no man was ever injured. But he is injured who abides in his error and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the human life time is but an instant, and the substance of it a flux, and the perception dull, and the composition of the whole body subject to putrefaction, and the soul a whirl, and fortune hard to divine, and fame a thing devoid of certainty. And, to say all in a word, everything that belongs to the body is a stream, and what belongs to the soul is a dream and vapor, and life is a warfare and a stranger's sojourn, and after- fame is oblivion. What then can guide a man? One thing and only one, philosophy.",
    author: "Marcus Aurelius",
  },
  {
    text: "He is so rich, he has no room to shit.",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ?????????? ???? ?????? ???? ???? ?????? ???? ???? ???????? ???? ???????? ???????? ???? ?????????? ?????????? ?????? ?????????????? ????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Give up your thirst for books, so that you do not die a grouch.",
    author: "Marcus Aurelius",
  },
  {
    text: "Art thou angry with him whose armpits stink? Art thou angry with him whose mouth smells foul?",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you???ve been putting this off, how many extensions the gods gave you, and you didn???t use them. At some point you have to recognize what world it is that you belong to; what power rules it and from what source you spring; that there is a limit to the time assigned to you, and if you don???t use it to free yourself it will be gone and will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "Book 8, #36Do not disturb yourself by picturing your life as a whole; do not assemble in your mind the many and varied troubles which have come to you in the past and will come again in the future, but ask yourself with regard to every present difficulty: 'What is there in this that is unbearable and beyond endurance?' You would be ashamed to confess it! And then remind yourself that it is not the future or what has passed that afflicts you, but always the present, and the power of this is much diminished if you take it in isolation and call your mind to task if it thinks that it cannot stand up to it when taken on its own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your life is what your thoughts make it",
    author: "Marcus Aurelius",
  },
  {
    text: "If you do the task before you always adhering to strict reason with zeal and energy and yet with humanity, disregarding all lesser ends and keeping the divinity within you pure and upright, as though you were even now faced with its recall - if you hold steadily to this, staying for nothing and shrinking from nothing, only seeking in each passing action a conformity with nature and in each word and utterance a fearless truthfulness, then the good life shall be yours. And from this course no man has the power to hold you back.",
    author: "Marcus Aurelius",
  },
  {
    text: "I can control my thoughts as necessary; then how can I be troubled? What is outside my mind means nothing to it. Absorb that lesson and your feet stand firm.",
    author: "Marcus Aurelius",
  },
  {
    text: "This thing, what is it in itself, in its own constitution? What is its substance and material?",
    author: "Marcus Aurelius",
  },
  {
    text: "It is my bad luck that this has happened to me.' No, you should rather say: 'It is my good luck that, although this has happened to me, I can bear it without pain, neither crushed by the present not fearful of the future.' Because such a thing could have happened to any man, but not every man could have borne it without pain. So why see more misfortune in the event than good fortune in your ability to bear it?",
    author: "Marcus Aurelius",
  },
  {
    text: "?????? ???? ?????????????? ???????????? ???? ?????????? ???? ?????? ?????? ?????? ?????????? ???? ???????? ???? ???? ?????????? ???? ?????? ?? ???????? ?????????????? ???????? ?????? ???????? . ???? ?????????? ?????? ???????? ?? ?????? ?????????? ???? ?????? ???? ???????????? ???? .  ???????? ???????????? ???? ???? ???????????? ?????????????? ?????? ?????????? ???????????? ???? ???????? ???????? .",
    author: "Marcus Aurelius",
  },
  { text: "Kindness is invincible.", author: "Marcus Aurelius" },
  {
    text: "If the gods have determined about me and about the things which must happen to me, they have determined well, for it is not easy even to imagine a deity without forethought; and as to doing me harm, why should they have any desire towards that? For what advantage would result to them from this or to the whole, which is the special object of their providence? But if they have not determined about me individually, they have certainly determined about the whole at least, and the things which happen by way of sequence in this general arrangement I ought to accept with pleasure and to be content with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "The man of ambition thinks to find his good in the operations of others; the man of pleasure in his own sensations; but the man of understanding in his own actions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever time you choose is the right time. Not late, not early.",
    author: "Marcus Aurelius",
  },
  { text: "strength and honor", author: "Marcus Aurelius" },
  {
    text: "Whether you are shivering with cold or too hot, sleepy or wide awake, spoken well of or badly, dying, or doing anything else, do not let it interfere with doing what is right. For whatever causes us to die is also one of life's processes. Even for this, nothing is required of us than to accomplish well the task at hand.",
    author: "Marcus Aurelius",
  },
  {
    text: "Retire into thyself. The rational principle which rules has this nature, that it is content with itself when it does what is just, and so secures tranquility.",
    author: "Marcus Aurelius",
  },
  {
    text: "Be not disgusted, nor discouraged, nor dissatisfied, if thou dost not succeed in doing everything according to right principles; but when thou bast failed, return back again, and be content if the greater part of what thou doest is consistent with man's nature, and love this to which thou returnest",
    author: "Marcus Aurelius",
  },
  {
    text: "If all emotions are common coin, then what is unique to the good man? To welcome with affection what is sent by fate. Not to stain or disturb the spirit within him with a mess of false beliefs. Instead, to preserve it faithfully, by calmly obeying God ??? saying nothing untrue, doing nothing unjust. And if the others don???t acknowledge it ??? this life lived in simplicity, humility, cheerfulness ??? he doesn???t resent them for it, and isn???t deterred from following the road where it leads: to the end of life. An end to be approached in purity, in serenity, in acceptance, in peaceful unity with what must be.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never let the future disturb you - you will meet it with the same weapons of reason and mind that, today, guard you against the present...",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not let the future disturb you, for you will arrive there, if you arrive, with the same reason you now apply to the present.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wilt thou, then, my soul, never be good and simple and one and naked, more manifest than the body which surrounds thee?",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t let your imagination be crushed by life as a whole. Don???t try to picture everything bad that could possibly happen. Stick with the situation at hand, and ask, ???Why is this so unbearable? Why can???t I endure it???? You???ll be embarrassed to answer. Then remind yourself that past and future have no power over you. Only the present???and even that can be minimized. Just mark off its limits.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is in your own power to maintain the beauty of your soul, or to be a decent human being.",
    author: "Marcus Aurelius",
  },
  {
    text: "Be cheerful also, and seek not external help nor the tranquility which others give. A man then must stand erect, not be kept erect by others.",
    author: "Marcus Aurelius",
  },
  {
    text: "All of us are creatures of a day; the rememberer and the remembered alike.",
    author: "Marcus Aurelius",
  },
  {
    text: "Objective judgment, now, at this very moment. Unselfish action, now, at this very moment. Willing acceptance???now, at this very moment???of all external events. That???s all you need.",
    author: "Marcus Aurelius",
  },
  {
    text: "To live happily is an inward power of the soul.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything that happens is either endurable or not. If it???s endurable, then endure it. Stop complaining. If it???s unendurable ??? then stop complaining. Your destruction will mean its end as well.",
    author: "Marcus Aurelius",
  },
  {
    text: "Meditate upon what you ought to be in body and soul when death overtakes you; meditate on the brevity of life, and the measureless gulf of eternity behind it and before, and upon the frailty of everything material.",
    author: "Marcus Aurelius",
  },
  {
    text: "Its a dream, a fearful dream, life is",
    author: "Marcus Aurelius",
  },
  {
    text: "Every man is worth just so much as the things about which he busies himself.",
    author: "Marcus Aurelius",
  },
  {
    text: "???praise does not make anything better or worse.",
    author: "Marcus Aurelius",
  },
  {
    text: "No more roundabout discussions of what makes a good man. Be one!",
    author: "Marcus Aurelius",
  },
  {
    text: '???????? ???????? : " ???? ???????? ???????????????? ???? ???????? ???? ???????? ???????? ?????????? ??????????, ?????? ?????? ???? ?????????? ???????????? ???? ???? ?????? ???????????? ???????? ???????? ?????????? ????????????????????, ???????? ?????????? ?? ?????????????? ?? ?????????? ?? ??????. ???? ???????? ???????????????? ???? ???? ???????? ?????? ???????????? ????????????, ???? ???????? ???????????? ??????, ???? ???????????? ??????????',
    author: "Marcus Aurelius",
  },
  {
    text: "All things from eternity are of like forms and come round in a circle.",
    author: "Marcus Aurelius",
  },
  {
    text: "As for others whose lives are not so ordered, he reminds himself constantly of the characters they exhibit daily and nightly at home and abroad, and of the sort of society they frequent; and the approval of such men, who do not even stand well in their own eyes, has no value for him.",
    author: "Marcus Aurelius",
  },
  {
    text: "That all is as thinking makes it so ??? and you control your thinking. So remove your judgements whenever you wish and then there is calm - as the sailor rounding the cape finds smooth water and the welcome of a waveless bay.",
    author: "Marcus Aurelius",
  },
  {
    text: "In this flowing stream, then, on which there is no abiding, what is there of the things which hurry by on which a man would set a high price? It would be just as if a man should fall in love with one of the sparrows which fly by, but it has already passed out of sight.",
    author: "Marcus Aurelius",
  },
  {
    text: "The soul of a man harms itself, first and foremost, when it becomes (as far as it can) a separate growth, a sort of tumour on the universe; because to resent anything that happens is to separate oneself in revolt from Nature, which holds in collective embrace the particular natures of all other things.",
    author: "Marcus Aurelius",
  },
  {
    text: "How many together with whom I came into the world are already gone out of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "From my Great-grandfather, not to have frequented public schools, and to have had good teachers at home, and to know that on such things a man should spend liberally.",
    author: "Marcus Aurelius",
  },
  {
    text: "If unwilling to rise in the morning, say to thyself, ???I awake to do the work of a man.",
    author: "Marcus Aurelius",
  },
  {
    text: "striid andWthdraw into yourself. Our master-reason asks no more than to act justly, and thereby to achieve calm.",
    author: "Marcus Aurelius",
  },
  {
    text: "All of us are creatures of a day; the rememberer and the remembered alike. All is ephemeral???both memory and the object of memory. The time is at hand when you will have forgotten everything; and the time is at hand when all will have forgotten you. Always reflect that soon you will be no one, and nowhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "That to expect bad people not to injure others is crazy. It's to ask the impossible. And to let them behave like that to other people but expect them to exempt you is arrogant--the act of a tyrant.",
    author: "Marcus Aurelius",
  },
  {
    text: "Hour by hour resolve firmly to do what comes to hand with dignity, and with humanity, independence, and justice. Allow your mind freedom from all other considerations. This you can do, if you will approach each action as though it were your last, dismissing the desire to create an impression, the admiration of self, the discontent with your lot. See how little man needs to master, for his days to flow on in quietness and piety: he has but to observe these few counsels, and the gods will ask nothing more.",
    author: "Marcus Aurelius",
  },
  {
    text: "40. The gods either have power or they have not. If they have not, why pray to them? If they have, then instead of praying to be granted or spared such-and-such a thing, why not rather pray to be delivered from dreading it, or lusting for it, or grieving over it? Clearly, if they can help a man at all, they can help him in this way. You will say, perhaps, ???But all that is something they have put in my own power.??? Then surely it were better to use your power and be a free man, than to hanker like a slave and a beggar for something that is not in your power. Besides, who told you the gods never lend their aid even towards things that do lie in our own power? Begin praying in this way, and you will see. Where another man prays ???Grant that I may possess this woman,??? let your own prayer be, ???Grant that I may not lust to possess her.??? Where he prays, ???Grant me to be rid of such-and-such a one,??? you pray, ???Take from me my desire to be rid of him.??? Where he begs, ???Spare me the loss of my precious child,??? beg rather to be delivered from the terror of losing him. In short, give your petitions a turn in this direction, and see what comes.",
    author: "Marcus Aurelius",
  },
  {
    text: "Men seek for seclusion in the wilderness, by the seashore, or in the mountains - a dream you have cherished only too fondly yourself. But such fancies are wholly unworthy of a philosopher, since at any moment you choose you can retire within yourself. Nowhere can man find a quieter or more untroubled retreat than in his own soul; above all, he who possesses resources in himself, which he need only contemplate to secure immediate ease of mind - the ease that is but another word for a well-ordered spirit. Avail yourself often, then, of this retirement, and so continually renew yourself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing is more scandalous than a man that is proud of his humility.",
    author: "Marcus Aurelius",
  },
  {
    text: '???? ???????????? ???????????? ?????? ???????? ?????????????? ?????? ?????? ?????? ?????????? ???? ????????????. ?????? " ?????????????? " ???????? ?? " ???????????? " ???????? ?? " ?????? " ???????? ??????????. ?? ???? ?????? ?????????? ?????????? ???? ?????? ???? ?????? ???????? ???????? ??????????????.',
    author: "Marcus Aurelius",
  },
  {
    text: "The whole universe is change and life itself is but what you deem it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Anger and the sorrow it produces are far more harmful than the things which make us angry.",
    author: "Marcus Aurelius",
  },
  {
    text: "Swiftly the remembrance of all things is buried in the gulf of eternity.",
    author: "Marcus Aurelius",
  },
  {
    text: "How good it is, when you have roast meat or suchlike foods before you, to impress on your mind that this is the dead body of a fish, this the dead body of a bird or pig.",
    author: "Marcus Aurelius",
  },
  {
    text: "Some things are hurrying into existence and others are hurrying out of it and of that which is coming into existence, part is already extinguished. In this flowing stream then, on which there is no abiding, what is there of things which hurry on by on which a man would set a high price. It would be just as if a man should fall in love with one of the sparrows which fly by but has already passed out of sight.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never value the advantages derived from anything involving breach of faith, loss of self-respect, hatred, suspicion, or execration of others, insincerity, or the desire for something which has to be veiled and curtained.",
    author: "Marcus Aurelius",
  },
  {
    text: "Does the emerald lose its beauty for lack of admiration?",
    author: "Marcus Aurelius",
  },
  {
    text: "So other people hurt me? That???s their problem. Their character and actions are not mine. What is done to me is ordained by nature, what I do by my own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Manusia mampu melakukan semua yang Tuhan ingin ia lakukan.",
    author: "Marcus Aurelius",
  },
  {
    text: "Ambition means tying your well-being to what other people say or do. Self-indulgence means tying it to the things that happen to you. Sanity means tying it to your own actions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions???not outside.",
    author: "Marcus Aurelius",
  },
  {
    text: "To read with diligence; not to rest satisfied with a light and superficial knowledge, nor quickly to assent to things commonly spoken",
    author: "Marcus Aurelius",
  },
  {
    text: "But among the things readiest to hand to which you shall turn, let there be these two: One is that things do not touch the soul, for they are external to its movement, but your anguish only comes from judgments within. The other is that all these things which you see now are changing and will cease to be, and constantly bear in mind how many of these changes you have already witnessed. The universe is transformation. Life is judgement.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your mind will be like its habitual thoughts; for the soul becomes dyed with the colour of its thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe is change, and life mere opinion",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou sayest, Men cannot admire the sharpness of thy wits.- Be it so: but there are many other things of which thou canst not say, I am not formed for them by nature. Show those qualities then which are altogether in thy power, sincerity, gravity, endurance of labour, aversion to pleasure, contentment with thy portion and with few things, benevolence, frankness, no love of superfluity, freedom from trifling magnanimity. Dost thou not see how many qualities thou art immediately able to exhibit, in which there is no excuse of natural incapacity and unfitness, and yet thou still remainest voluntarily below the mark? Or art thou compelled through being defectively furnished by nature to murmur, and to be stingy, and to flatter, and to find fault with thy poor body, and to try to please men, and to make great display, and to be so restless in thy mind? No, by the gods: but thou mightest have been delivered from these things long ago. Only if in truth thou canst be charged with being rather slow and dull of comprehension, thou must exert thyself about this also, not neglecting it nor yet taking pleasure in thy dulness.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even if you???re going to live three thousand more years, or ten times that, remember: you cannot lose another life than the one you???re living now, or live another one than the one you???re losing. The longest amounts to the same as the shortest. The present is the same for everyone; its loss is the same for everyone; and it should be clear that a brief instant is all that is lost. For you can???t lose either the past or the future; how could you lose what you don???t have?",
    author: "Marcus Aurelius",
  },
  {
    text: "De multe ori am fost uimit de faptul ca fiecare, desi se iubeste pe sine insusi mai mult decat pe toti ceilalti, pune totusi mai putin pret pe propria parere despre sine decat pe parerea celorlalti despre el.",
    author: "Marcus Aurelius",
  },
  {
    text: "All is ephemeral, both what remembers and what is remembered.",
    author: "Marcus Aurelius",
  },
  {
    text: "We should remark the grace and fascination that there is even in the incidentals of Nature's processes.. When a loaf of bread,. for instance,. is in the oven,. crack appear in it here and there; and these flaws,. though not intended in the baking,. have a rightness of their own,. and sharpen the appetite..",
    author: "Marcus Aurelius",
  },
  {
    text: "Though thou shouldst be going to live three thousand years, and as many times ten thousand years, still remember that no man loses any other life than this which he now lives, nor lives any other than this which he now loses. The longest and shortest are thus brought to the same. For the present is the same to all, though that which perishes is not the same; and so that which is lost appears to be a mere moment.",
    author: "Marcus Aurelius",
  },
  {
    text: "What else did you expect from helping someone out? Isn???t it enough that you???ve done what your nature demands? You want a salary for it too? As if your eyes expected a reward for seeing, or your feet for walking. That???s what they were made for.",
    author: "Marcus Aurelius",
  },
  {
    text: "All things fade into the storied past, and in a little while are shrouded in oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything of the body is a river. Everything of the soul is dream and vapour. Life is war and the abode of a stranger. The only fame after death is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do every act of your life as if it were your last.",
    author: "Marcus Aurelius",
  },
  {
    text: "Frightened of change? But what can exist without it? What???s closer to nature???s heart? Can you take a hot bath and leave the firewood as it was? Eat food without transforming it? Can any vital process take place without something being changed?  Can???t you see? It???s just the same with you???and just as vital to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Give your heart to the trade you have learnt, and draw refreshment from it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Soon you???ll be ashes, or bones. A mere name, at most???and even that is just a sound, an echo. The things we want in life are empty, stale, and trivial. Dogs snarling at each other. Quarreling children???laughing and then bursting into tears a moment later. Trust, shame, justice, truth??????gone from the earth and only found in heaven.??? Why are you still here? Sensory objects are shifting and unstable; our senses dim and easily deceived; the soul itself a decoction of the blood; fame in a world like this is worthless. ???And so? Wait for it patiently???annihilation or metamorphosis. ???And until that time comes???what? Honor and revere the gods, treat human beings as they deserve, be tolerant with others and strict with yourself. Remember, nothing belongs to you but your flesh and blood???and nothing else is under your control.",
    author: "Marcus Aurelius",
  },
  {
    text: "The sexual embrace can only be compared with music and with prayer. (Despite goodreads continual mix-up--Marcus Aurelius gave us that. NOT havelock ellis!)",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing has such power to broaden the mind as the ability to investigate systematically and truly all that comes under thy observation in life.",
    author: "Marcus Aurelius",
  },
  {
    text: "Since it is possible that you might depart from life this very moment, regulate every act and thought accordingly.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never value anything as profitable that compels you to break your promise, to lose your self-respect, to hate any man, to suspect, to curse, to act the hypocrite, to desire anything that needs walls and curtains:",
    author: "Marcus Aurelius",
  },
  {
    text: "It???s silly to try to escape other people???s faults. They are inescapable. Just try to escape your own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything is only for a day, both that which remembers and that which is remembered",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work???as a human being. What do I have to complain of, if I???m going to do what I was born for??? the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm? ???But it???s nicer here. . . . So you were born to feel ???nice???? Instead of doing things and experiencing them? Don???t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can? And you???re not willing to do your job as a human being? Why aren???t you running to do what your nature demands? ???But we have to sleep sometime. . . . Agreed. But nature set a limit on that???as it did on eating and drinking. And you???re over the limit. You???ve had more than enough of that. But not of working. There you???re still below your quota. You don???t love yourself enough. Or you???d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat. Do you have less respect for your own nature than the engraver does for engraving, the dancer for the dance, the miser for money or the social climber for status? When they???re really possessed by what they do, they???d rather stop eating and sleeping than give up practicing their arts.  Is helping others less valuable to you? Not worth your effort?",
    author: "Marcus Aurelius",
  },
  {
    text: "That which rules within, when it is according to nature, will always adapt itself easily to that which is possible and is presented to it. For it requires no definite material, in moving toward its purpose, but rather certain conditions; and it makes a material for itself out of that which opposes it, as a great fire lays hold of a mass that would have extinguished a tiny flame: when the fire is strong, it soon appropriates to itself the matter that is heaped on it and consumes it, rising higher by means of this very material.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the life of man, his time is but a moment, his being an incessant flux, his senses a dim rushlight, his body a prey of worms, his soul an unquiet eddy, his fortune dark, and his fame doubtful. In short, all that is of the body is as coursing waters, all that is of the soul as dreams and vapours; life a warfare, a brief sojourning in an alien land;and after repute, oblivion. Where, then, can man find the power to guide and guard his steps? In one thing and one alone: the love of knowledge.",
    author: "Marcus Aurelius",
  },
  {
    text: "We ought to do good to others as simply as a horse runs, or a bee makes honey, or a vine bears grapes season after season without thinking of the grapes it has borne.",
    author: "Marcus Aurelius",
  },
  {
    text: "10. Forget everything else. Keep hold of this alone and remember it: Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see. The span we live is small???small as the corner of the earth in which we live it. Small as even the greatest renown, passed from mouth to mouth by short-lived stick figures, ignorant alike of themselves and those long dead.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens, happens such as you are either formed by nature able to bear it, or not able to bear it. If such as you are by nature form???d able to bear, bear it and fret not: But if such as you are not naturally able to bear, don???t fret; for when it has consum???d you, itself will perish. Remember, however, you are by nature form???d able to bear whatever it is in the power of your own opinion to make supportable or tolerable, according as you conceive it advantageous, or your duty, to do so.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do unsavory armpits and bad breath make you angry?",
    author: "Marcus Aurelius",
  },
  {
    text: "How much time he gains who does not look to see what his neighbor says or does or thinks, but only at what he does himself, to make it just and holy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Hippocrates cured many illnesses???and then fell ill and died. The Chaldaeans predicted the deaths of many others; in due course their own hour arrived. Alexander, Pompey, Caesar???who utterly destroyed so many cities, cut down so many thousand foot and horse in battle???they too departedthis life. Heraclitus often told us the world would end in fire. But it was moisture that carried him off; he died smeared with cowshit. Democritus was killed by ordinary vermin, Socrates by the human kind. And? You boarded, you set sail, you???ve made the passage. Time to disembark. If it???s for another life, well, there???s nowhere without gods on that side either. If to nothingness, then you no longer have to put up with pain and pleasure, or go on dancing attendance on this battered crate, your body???so much inferior to that which serves it. One is mind and spirit, the other earth and garbage.",
    author: "Marcus Aurelius",
  },
  {
    text: "The offender needs pity, not wrath; those who must needs be corrected, should be treated with tact and gentleness; and one must be always ready to learn better. 'The best kind of revenge is, not to become like unto them.",
    author: "Marcus Aurelius",
  },
  {
    text: "The things ordained for you???teach yourself to be at one with those. And the people who share them with you???treat them with love. With real love.",
    author: "Marcus Aurelius",
  },
  {
    text: "Forget everything else. Keep hold of this alone and remember it: Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see.",
    author: "Marcus Aurelius",
  },
  {
    text: "There is no man so blessed that some who stand by his deathbed won't hail the occasion with delight.",
    author: "Marcus Aurelius",
  },
  {
    text: "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Take the shortest route, the one that nature planned???to speak and act in the healthiest way. Do that, and be free of pain and stress, free of all calculation and pretension.",
    author: "Marcus Aurelius",
  },
  {
    text: "In everything that you do, pause and ask yourself if death is a dreadful thing because it deprives you of this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to assume it???s impossible because you find it hard. But to recognize that if it???s humanly possible, you can do it too.",
    author: "Marcus Aurelius",
  },
  {
    text: "Every hour be firmly resolved... to accomplish the work at hand with fitting and unaffected dignity, goodwill, freedom, justice. Banish from your thoughts all other considerations. This is possible if you perform each act as if it were your last, rejecting every frivolous distraction, every denial of the rule of reason, every pretentious gesture, vain show, and whining complaint against the decrees of fate. Do you see what little is required of a man to live a well-tempered and god-fearing life? Obey these precepts, and the gods will ask nothing more (II.5).",
    author: "Marcus Aurelius",
  },
  { text: "Live every day as if thy last.", author: "Marcus Aurelius" },
  {
    text: "III. I have often wondered how it should come to pass, that every man loving himself best, should more regard other men's opinions concerning himself than his own. For if any God or grave master standing by, should command any of us to think nothing by himself but what he should presently speak out; no man were able to endure it, though but for one day. Thus do we fear more what our neighbours will think of us, than what we ourselves.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t waste the rest of your time here worrying about other people???unless it affects the common good. It will keep you from doing anything useful. You???ll be too preoccupied with what so-and-so is doing, and why, and what they???re saying, and what they???re thinking, and what they???re up to, and all the other things that throw you off and keep you from focusing on your own mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "If anyone can refute me???show me I???m making a mistake or looking at things from the wrong perspective???I???ll gladly change. It???s the truth I???m after, and the truth never harmed anyone. What harms us is to persist in self-deceit and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "The pride which is proud of want of pride is the most intolerable of all.",
    author: "Marcus Aurelius",
  },
  { text: "?????????? ???? ???? ???????? ?????? ?????????????? ??????????", author: "Marcus Aurelius" },
  {
    text: "Keep this constantly in mind: that all sorts of people have died???all professions, all nationalities. Follow the thought all the way down to Philistion, Phoebus, and Origanion. Now extend it to other species. We have to go there too, where all of them have already gone: . . . the eloquent and the wise???Heraclitus, Pythagoras, Socrates . . . . . . the heroes of old, the soldiers and kings who followed them . . . . . . Eudoxus, Hipparchus, Archimedes . . . . . . the smart, the generous, the hardworking, the cunning, the selfish . . . . . . and even Menippus and his cohorts, who laughed at thewhole brief, fragile business. All underground for a long time now. And what harm does it do them? Or the others either???the ones whose names we don???t even know? The only thing that isn???t worthless: to live this life out truthfully and rightly. And be patient with those who don???t.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death is a cessation from the impression of the senses, the tyranny of the passions, the errors of the mind, and the servitude of the body.",
    author: "Marcus Aurelius",
  },
  {
    text: "A good man does not spy around for the black spots in others, but presses unswervingly on towards his mark.",
    author: "Marcus Aurelius",
  },
  {
    text: "But if anything in thy own disposition gives thee pain, who hinders thee from correcting thy opinion? And even if thou art pained because thou art not doing some particular thing which seems to thee to be right, why dost thou not rather act than complain?- But some insuperable obstacle is in the way?- Do not be grieved then, for the cause of its not being done depends not on thee.- But it is not worth while to live if this cannot be done.- Take thy departure then from life contentedly, just as he dies who is in full activity, and well pleased too with the things which are obstacles.",
    author: "Marcus Aurelius",
  },
  {
    text: "True understanding is to see the events of life in this way: 'You are here for my benefit, though rumor paints you otherwise.' And everything is turned to one's advantage when he greets a situation like this: You are the very thing I was looking for. Truly whatever arises in life is the right material to bring about your growth and the growth of those around you. This, in a word, is art-- and this art called 'life' is a practice suitable to both men and gods. Everything contains some special purpose and a hidden blessing; what then could be strange or arduous when all of life is here to greet you like an old and faithful friend?",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work???as a human being. What do I have to complain of, if I???m going to do what I was born for???the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?",
    author: "Marcus Aurelius",
  },
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength. When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius",
  },
  {
    text: "In no great while you will be no one and nowhere, and nothing that you now behold will be in existence, nor will anyone now alive. For it is in the nature of all things to change and alter and perish, so that others may arise in their turn.",
    author: "Marcus Aurelius",
  },
  {
    text: "23. Keep in mind how fast things pass by and are gone???those that are now, and those to come. Existence flows past us like a river: the ???what??? is in constant flux, the ???why??? has a thousand variations. Nothing is stable, not even what???s right here. The infinity of past and future gapes before us???a chasm whose depths we cannot see. So it would take an idiot to feel self-importance or distress. Or any indignation, either. As if the things that irritate us lasted. 24.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even the least of our activities ought to have some end in view.",
    author: "Marcus Aurelius",
  },
  {
    text: "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it. 49a. ???It???s unfortunate that this has happened. No. It???s fortunate that this has happened and I???ve remained unharmed by it???not shattered by the present or frightened of the future. It could have happened to anyone. But not everyone could have remained unharmed by it. Why treat the one as a misfortune rather than the other as fortunate? Can you really call something a misfortune that doesn???t violate human nature? Or do you think something that???s not against nature???s will can violate it? But you know what its will is. Does what???s happened keep you from acting with justice, generosity, self-control, sanity, prudence, honesty, humility, straightforwardness, and all the other qualities that allow a person???s nature to fulfill itself? So remember this principle when something threatens to cause you pain: the thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "The first step: Don???t be anxious. Nature controls it all. And before long you???ll be no one, nowhere???like Hadrian, like Augustus. The second step: Concentrate on what you have to do. Fix your eyes on it. Remind yourself that your task is to be a good human being; remind yourself what nature demands of people. Then do it, without hesitation, and speak the truth as you see it. But with kindness. With humility. Without hypocrisy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Make for thyself a definition or description of the thing which is presented to thee, so as to see distinctly what kind of a thing it is in its substance, in its nudity, in its complete entirety, and tell thyself its proper name, and the names of the things of which it has been compounded, and into which it will be resolved. For nothing is so productive of elevation of mind as to be able to examine methodically and truly every object which is presented to thee in life, and always to look at things so as to see at the same time what kind of universe this is, and what kind of use everything performs in it, and what value everything has with reference to the whole, and what with reference to man, who is a citizen of the highest city, of which all other cities are like families; what each thing is, and of what it is composed, and how long it is the nature of this thing to endure which now makes an impression on me, and what virtue I have need of with respect to it, such as gentleness, manliness, truth, fidelity, simplicity, contentment, and the rest. ...  If thou workest at that which is before thee, following right reason seriously, vigorously, calmly, without allowing anything else to distract thee, but keeping thy divine part pure, as if thou shouldst be bound to give it back immediately; if thou holdest to this, expecting nothing, fearing nothing, but satisfied with thy present activity according to nature, and with heroic truth in every word and sound which thou utterest, thou wilt live happy. And there is no man who is able to prevent this.",
    author: "Marcus Aurelius",
  },
  {
    text: "a limit of time is fixed for thee, which if thou dost not use for clearing away the clouds from thy mind, it will go and thou wilt go, and it will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man???s greatness lies not in wealth and station, as the vulgar believe, not yet in his intellectual capacity, which is often associated with the meanest moral character, the most abject servility to those in high places and arrogance to the poor and lowly; but a man???s true greatness lies in the consciousness of an honest purpose in life, founded on a just estimate of himself and everything else, on frequent self-examination, and a steady obedience to the rule which he knows to be right, without troubling himself, as the emperor says he should not, about what others may think or say, or whether they do or do not do that which he thinks and says and does.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe is change; life is your perception of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Blame and praise have no true effects.",
    author: "Marcus Aurelius",
  },
  {
    text: "The present moment is the only thing of which anyone can be deprived, at least if this is the only thing he has and he cannot lose what he has not got.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you can cut yourself???your mind???free of what other people do and say, of what you???ve said or done, of the things that you???re afraid will happen, the impositions of the body that contains you and the breath within, and what the whirling chaos sweeps in from outside, so that the mind is freed from fate, brought to clarity, and lives life on its own recognizance ???doing what???s right, accepting what happens, and speaking the truth??? If you can cut free of impressions that cling to the mind, free of the future and the past???can make yourself, as Empedocles says, ???a sphere rejoicing in its perfect stillness,??? and concentrate on living what can be lived (which means the present) . . . then you can spend the time you have left in tranquillity. And in kindness. And at peace with the spirit within you.",
    author: "Marcus Aurelius",
  },
  {
    text: "How much time he saves who does not look to see what his neighbor says or does or thinks.",
    author: "Marcus Aurelius",
  },
  {
    text: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. If a god appeared to us???or a wise human being, even ???and prohibited us from concealing our thoughts or imagining anything without immediately shouting it out, we wouldn???t make it through a single day. That???s how much we value other people???s opinions???instead of our own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you need encouragement, think of the qualities the people around you have: this one???s energy, that one???s modesty, another???s generosity, and so on. Nothing is as encouraging as when virtues are visibly embodied in the people around us, when we???re practically showered with them. It???s good to keep this in mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "Within ten days you will seem a god to those to whom you are now a beast and an ape, if you will return to your principles and the worship of reason.",
    author: "Marcus Aurelius",
  },
  {
    text: "I do not regard a man as poor, if the little which remains is enough for him.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you???ve been putting this off, how many extensions the gods gave you, and you didn???t use them. At some point you have to recognize what world it is that you belong to; what power rules it and from what source you spring; that there is a limit to the time assigned you, and if you don???t use it to free yourself it will be gone and will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "We must make haste, then, not only because we are daily nearer to death, but also because the conception of things and the understanding of them cease first.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think not so much of what you lack as of what you have: but of the things that you have, select the best, and then reflect on how eagerly you would have sought them if you did not have them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Disgraceful: for the soul to give up when the body is still going strong.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look within. Within is the fountain of good, and it will ever bubble up, if you will ever dig.",
    author: "Marcus Aurelius",
  },
  {
    text: "So other people hurt me? That???s their problem. Their character and actions are not mine. What",
    author: "Marcus Aurelius",
  },
  {
    text: "In the morning, when you rise unwillingly, let this thought be present: I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist and for which I was brought into the world? Or have I been made for this, to lie under the blankets and keep myself warm? But this is more pleasant. Do you exist then to take your pleasure, and not at all for action or exertion?",
    author: "Marcus Aurelius",
  },
  {
    text: "To stand up straight ??? not straightened",
    author: "Marcus Aurelius",
  },
  {
    text: "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius",
  },
  {
    text: "every man is worth   just so much as the things are worth about which he busies himself. ",
    author: "Marcus Aurelius",
  },
  {
    text: "What is divine deserves our respect because it is good; what is human deserves our affection because it is like us.",
    author: "Marcus Aurelius",
  },
  {
    text: "Precz z ksi????kami! Ju?? nie dawaj si?? im poci??gn????! Nie wolno! (...) ??aknienie za?? ksi????ek precz od siebie rzu??, by?? nie umiera?? w??r??d narzeka??, lecz spokojnie.",
    author: "Marcus Aurelius",
  },
  {
    text: "Life is short. That???s all there is to say. Get what you can from the present???thoughtfully, justly. Unrestrained moderation.",
    author: "Marcus Aurelius",
  },
  {
    text: "32. You have to assemble your life yourself???action by action. And be satisfied if each one achieves its goal, as far as it can. No one can keep that from happening. ???But there are external obstacles.??? Not to behaving with justice, self-control, and good sense. ???Well, but perhaps to some more concrete action. But if you accept the obstacle and work with what you???re given, an alternative will present itself???another piece of what you???re trying to assemble. Action by action.",
    author: "Marcus Aurelius",
  },
  {
    text: "It should be a man's task, says the Imitation, 'to overcome himself, and every day to be stronger than himself.' 'In withstanding of the passions standeth very peace of heart.' 'Let us set the axe to the root, that we being purged of our passions may have a peaceable mind.' To this end there must be continual self-examination. 'If thou may not continually gather thyself together, namely sometimes do it, at least once a day, the morning or the evening. In the morning purpose, in the evening discuss the manner, what thou hast been this day, in word, work, and thought.",
    author: "Marcus Aurelius",
  },
  {
    text: "There???s nothing more insufferable than people who boast about their own humility",
    author: "Marcus Aurelius",
  },
  {
    text: "It is not death that a man should fear, but rather he should fear never beginning to live.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never value anything as profitable that compels you to break your promise, to lose your self-respect, to hate any man, to suspect, to curse, to act the hypocrite, to desire anything that needs walls and curtains: for he who has preferred to everything else his own intelligence and daimon and the worship of its excellence, acts no tragic part, does not groan, will not need either solitude or much company; and, what is chief of all, he will live without either pursuing or flying from death; but whether for a longer or a shorter time he shall have the soul enclosed in the body, he cares not at all: for even if he must depart immediately, he will go as readily as if he were going to do anything else that can be done with decency and order; taking care of this only all through life, that his thoughts abide with the concerns of an intelligent animal and a member of a civil community.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything is only for a day, both that which remembers and that which is remembered.",
    author: "Marcus Aurelius",
  },
  {
    text: "In comparing sins (the way people do) Theophrastus says that the ones committed out of desire are worse than the ones committed out of anger: which is good philosophy. The angry man seems to turn his back on reason out of a kind of pain and inner convulsion. But the man motivated by desire, who is mastered by pleasure, seems somehow more self- indulgent, less manly in his sins. Theophrastus is right, and philosophically sound, to say that the sin committed out of pleasure deserves a harsher rebuke than the one committed out of pain. The angry man is more like a victim of wrongdoing, provoked by pain to anger. The other man rushes into wrongdoing on his own, moved to action by desire.",
    author: "Marcus Aurelius",
  },
  { text: "Not the ???not??? but the ???not yet.", author: "Marcus Aurelius" },
  {
    text: "What am I but a little flesh, a little breath, and the thinking part that rules the whole?",
    author: "Marcus Aurelius",
  },
  {
    text: "A healthy pair of eyes should see everything that can be seen and not say, ???No! Too bright!??? (which is a symptom of ophthalmia). A healthy sense of hearing or smell should be prepared for any sound or scent; a healthy stomach should have the same reaction to all foods, as a mill to what it grinds. So too a healthy mind should be prepared for anything. The one that keeps saying, ???Are my children all right???? or ???Everyone must approve of me??? is like eyes that can only stand pale colors, or teeth that can handle only mush.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look at the past???empire succeeding empire???and from that, extrapolate the future: the same thing. No escape from the rhythm of events. Which is why observing life for forty years is as good as a thousand. Would you really see anything new?",
    author: "Marcus Aurelius",
  },
  {
    text: "If you set yourself to your present task along the path of true reason, with all determination, vigour,and good will: if you admit no distraction, but keep your own divinity pure and standing strong, as if you had to surrender it right now; if you grapple this to you, expecting nothing, shirking nothing, but self-content with each present action taken in accordance with nature and a heroic truthfulness in all that you say and mean - then you will lead a good life. And nobody is able to stop you.",
    author: "Marcus Aurelius",
  },
  {
    text: "People try to get away from it all???to the country, to the beach, to the mountains. You always wish that you could too. Which is idiotic: you can get away from it anytime you like. By going within. Nowhere you can go is more peaceful???more free of interruptions???than your own soul. Especially if you have other things to rely on. An instant???s recollection and there it is: complete tranquillity. And by tranquillity I mean a kind of harmony. So keep getting away from it all???like that. Renew yourself. But keep it brief and basic. A quick visit should be enough to ward off all  . . .  and send you back ready to face what awaits you. What???s there to complain about? People???s misbehavior? But take into consideration: ??? that rational beings exist for one another; ??? that doing what???s right sometimes requires patience; ??? that no one does the wrong thing deliberately; ??? and the number of people who have feuded and envied and hated and fought and died and been buried. . . . and keep your mouth shut. Or are you complaining about the things the world assigns you? But consider the two options: Providence or atoms. And all the arguments for seeing the world as a city. Or is it your body? Keep in mind that when the mind detaches itself and realizes its own nature, it no longer has anything to do with ordinary life???the rough and the smooth, either one. And remember all you???ve been taught???and accepted???about pain and pleasure. Or is it your reputation that???s bothering you? But look at how soon we???re all forgotten. The abyss of endless time that swallows it all. The emptiness of all those applauding hands. The people who praise us???how capricious they are, how arbitrary. And the tiny region in which it all takes place. The whole earth a point in space???and most of it uninhabited. How many people there will be to admire you, and who they are. So keep this refuge in mind: the back roads of your self. Above all, no strain and no stress. Be straightforward. Look at things like a man, like a human being, like a citizen, like a mortal. And among the things you turn to, these two: i. That things have no hold on the soul. They stand there unmoving, outside it. Disturbance comes only from within???from our own perceptions. ii. That everything you see will soon alter and cease to exist. Think of how many changes you???ve already seen. ???The world is nothing but change. Our life is only perception.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t look down on death, but welcome it. It too is one of the things required by nature. Like youth and old age. Like growth and maturity. Like a new set of teeth, a beard, the first gray hair. Like sex and pregnancy and childbirth. Like all the other physical changes at each stage of life, our dissolution is no different. So this is how a thoughtful person should await death: not with indifference, not with impatience, not with disdain, but simply viewing it as one of the things that happen to us. Now you anticipate the child???s emergence from its mother???s womb; that???s how you should await the hour when your soul will emerge from its compartment. Or perhaps you need some tidy aphorism to tuck away in the back of your mind. Well, consider two things that should reconcile you to death: the nature of the things you???ll leave behind you, and the kind of people you???ll no longer be mixed up with. There???s no need to feel resentment toward them???in fact, you should look out for their well-being, and be gentle with them???but keep in mind that everything you believe is meaningless to those you leave behind. Because that???s all that could restrain us (if anything could)???the only thing that could make us want to stay here: the chance to live with those who share our vision. But now? Look how tiring it is???this cacophony we live in. Enough to make you say to death, ???Come quickly. Before I start to forget myself, like them.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you seek tranquillity, do less.??? Or (more accurately) do what???s essential???what the logos of a social being requires, and in the requisite way. Which brings a double satisfaction: to do less, better. Because most of what we say and do is not essential. If you can eliminate it, you???ll have more time, and more tranquillity. Ask yourself at every moment, ???Is this necessary???? But we need to eliminate unnecessary assumptions as well. To eliminate the unnecessary actions that follow.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can???t tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own???not of the same blood or birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate him. We were born to work together like feet, hands, and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on him: these are obstructions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Pride is a master of deception: when you think you???re occupied in the weightiest business, that???s when he has you in his spell.",
    author: "Marcus Aurelius",
  },
  {
    text: "From my governor, to be neither of the green nor of the blue party at the games in the Circus, nor a partisan either of the Parmularius or the Scutarius at the gladiators' fights; from him too I learned endurance of labor, and to want little, and to work with my own hands, and not to meddle with other people's affairs, and not to be ready to listen to slander.",
    author: "Marcus Aurelius",
  },
  {
    text: "???Then where is harm to be found? In your capacity to see it. Stop doing that and everything will be fine.",
    author: "Marcus Aurelius",
  },
  {
    text: "recognize the malice, cunning, and hypocrisy that power produces, and the peculiar ruthlessness often shown by people from ???good families.",
    author: "Marcus Aurelius",
  },
  {
    text: "No thefts of free will reported.???[???Epictetus.]",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???? ?????????? ???????? ???? ????????. ?????????????? ?????????? ?? ?????????? ?? ??????????????. ???????? ?????????????? ???? ???????????? ???? ?????????? ????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "???? ?????? ???? ?????????? ???? ?????? ????????. ???? ???? ???????? ???????????? ???? ???????? ????????????. ???? ?????? ???????????? ???? ?????????? ????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "IN THE morning when thou risest unwillingly, let this thought be present- I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist and for which I was brought into the world?",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ???????? ?????? ???????? ???????? ???????? ?? ?????? ???? ?????? ????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Perfection of character: to live your last day, every day, without frenzy, or sloth, or pretense.",
    author: "Marcus Aurelius",
  },
  {
    text: "No te aficiones m??s que a lo que te acontezca y a lo que forme la trama de la vida. ??Pues qu?? otra cosa podr?? serte m??s oportuna?",
    author: "Marcus Aurelius",
  },
  {
    text: "?????? ?????? ???? ???? ???????? ???? ?????? ???????????? ???????? ?????? ???????? ?????? ?? ???????? ?????????? ?????? ???????????? ???????? ?????? ???????? ???????? ?????? ???????? ???? ???????? ???????? ??????????, ???????? ???? ???????????? ???????????? ?????????? ???????? ???????? ?????????? ?? ?????? ???????? ?? ???? ???????? ???????????? ?????? ??????????",
    author: "Marcus Aurelius",
  },
  {
    text: "The end and object of a rational constitution is, to do nothing rashly, to be kindly affected towards men, and in all things willingly to submit unto the gods. Casting therefore all other things aside, keep thyself to these few, and remember withal that no man properly can be said to live more than that which is now present, which is but a moment of time.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???? ?????????? ???????? ?????????? ?????????? .. ???? ???? ?????? ???????? ?????? ???????? ???????? ?????????? ?????????????? ???????? . ?????????????? ???????? ?? ???????????? ???????????? ???????????? ???????? ?????????????? ???????????????? ?????????? ?????? ?????????? ?????????? ???????????? ?? ???????????? ???????????????? ???? ?????? ?????????????? ???????????? ?????? ??????????????",
    author: "Marcus Aurelius",
  },
  { text: "He who eats my bread does my will.", author: "Marcus Aurelius" },
  {
    text: "fame in a world like this is worthless.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything is interwoven, and the web is holy; none of its parts are unconnected. They are composed harmoniously, and together they compose the world. One world, made up of all things. One divinity, present in them all.",
    author: "Marcus Aurelius",
  },
  {
    text: "In a little while you will have forgotten everything; in a little while everything will have forgotten you.",
    author: "Marcus Aurelius",
  },
  {
    text: "We ought to consider not only that our life is daily wasting away and a smaller part of it is left, but also that if a man should live longer, it is quite uncertain whether the understanding will still continue sufficient for the comprehension of things and retain the power of contemplation that strives to acquire the knowledge of the divine and the human. For if he shall begin to fall into dotage, perspiration and nutrition and imagination and appetite and whatever else there is of the kind will not fail; but the power of making use of ourselves, and filling up the measure of our duty, and clearly separating all appearances, and considering whether a man should now depart from life, and whatever else of the kind absolutely requires a disciplined reason, all this is already extinguished. We must make haste then, not only because we are daily nearer to death, but also because the conception of things and the understanding of them cease first.",
    author: "Marcus Aurelius",
  },
  {
    text: "17. Human life. Duration: momentary. Nature: changeable. Perception: dim. Condition of Body: decaying. Soul: spinning around. Fortune: unpredictable. Lasting Fame: uncertain. Sum Up: The body and its parts are a river, the soul a dream and mist, life is warfare and a journey far from home, lasting reputation is oblivion. Then what can guide us? Only philosophy. Which means making sure that the power within stays safe and free from assault, superior to pleasure and pain, doing nothing randomly or dishonestly and with imposture, not dependent on anyone else???s doing something or not doing it. And making sure that it accepts what happens and what it is dealt as coming from the same place it came from. And above all, that it accepts death in a cheerful spirit, as nothing but the dissolution of the elements from which each living thing is composed. If it doesn???t hurt the individual elements to change continually into one another, why are people afraid of all of them changing and separating? It???s a natural thing. And nothing natural is evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "III. They seek for themselves private retiring places, as country villages, the sea-shore, mountains; yea thou thyself art wont to long much after such places. But all this thou must know proceeds from simplicity in the highest degree. At what time soever thou wilt, it is in thy power to retire into thyself, and to be at rest, and free from all businesses. A man cannot any whither retire better than to his own soul; he especially who is beforehand provided of such things within, which whensoever he doth withdraw himself to look in, may presently afford unto him perfect ease and tranquillity. By tranquillity I understand a decent orderly disposition and carriage, free from all confusion and tumultuousness. Afford then thyself this retiring continually, and thereby refresh and renew thyself. Let these precepts be brief and fundamental, which as soon as thou dost call them to mind, may suffice thee to purge thy soul throughly, and to send thee away well pleased with those things whatsoever they be, which now again after this short withdrawing of thy soul into herself thou dost return unto. For what is it that thou art offended at? Can it be at the wickedness of men, when thou dost call to mind this conclusion, that all reasonable creatures are made one for another? and that it is part of justice to bear with them? and that it is against their wills that they offend? and how many already, who once likewise prosecuted their enmities, suspected, hated, and fiercely contended, are now long ago stretched out, and reduced unto ashes? It is time for thee to make an end. As for those things which among the common chances of the world happen unto thee as thy particular lot and portion, canst thou be displeased with any of them, when thou dost call that our ordinary dilemma to mind, either a providence, or Democritus his atoms; and with it, whatsoever we brought to prove that the whole world is as it were one city? And as for thy body, what canst thou fear, if thou dost consider that thy mind and understanding, when once it hath recollected itself, and knows its own power, hath in this life and breath (whether it run smoothly and gently, or whether harshly and rudely), no interest at all, but is altogether indifferent: and whatsoever else thou hast heard and assented unto concerning either pain or pleasure? But the care of thine honour and reputation will perchance distract thee? How can that be, if thou dost look back, and consider both how quickly all things that are, are forgotten, and what an immense chaos of eternity was before, and will follow after all things: and the vanity of praise, and the inconstancy and variableness of human judgments and opinions, and the narrowness of the place, wherein it is limited and circumscribed? For the whole earth is but as one point; and of it, this inhabited part of it, is but a very little part; and of this part, how many in number, and what manner of men are they, that will commend thee? What remains then, but that thou often put in practice this kind of retiring of thyself, to this little part of thyself; and above all things, keep thyself from distraction, and intend not anything vehemently, but be free and consider all things, as a man whose proper object is Virtue, as a man whose true nature is to be kind and sociable, as a citizen, as a mortal creature. Among other things, which to consider, and look into thou must use to withdraw thyself, let those two be among the most obvious and at hand. One, that the things or objects themselves reach not unto the soul, but stand without still and quiet, and that it is from the opinion only which is within, that all the tumult and all the trouble doth proceed. The next, that all these things, which now thou seest, shall within a very little while be changed, and be no more: and ever call to mind, how many changes and alterations in the world thou thyself hast already been an eyewitness of in thy time. This world is mere change, and this life, opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "La mejor forma de defenderte, es no parecerte al ellos",
    author: "Marcus Aurelius",
  },
  {
    text: "Yes, keep on degrading yourself, soul. But soon your chance at dignity will be gone. Everyone gets one life. Yours is almost used up, and instead of treating yourself with respect, you have entrusted your own happiness to the souls of others.",
    author: "Marcus Aurelius",
  },
  {
    text: "Jangan pernah menyakiti orang lain dengan perbuatan mau pun kata-kata.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not waste what remains of your life in speculating about your neighbours, unless with a view to some mutual benefit. To wonder what so-and-so is doing and why, or what he is saying, or thinking, or scheming ??? in a word, anything that distracts you from fidelity to the Ruler within you ??? means a loss of opportunity for some other task.",
    author: "Marcus Aurelius",
  },
  {
    text: "And so accept everything that happens, even if it is disagreeable, because it leads to this, to the health of the universe and to the prosperity and felicity of Zeus",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever may happen to you, it was prepared for you from all eternity; and the implication of causes was from eternity spinning the thread of your being, and of that which is incident to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "People who labor all their lives but have no purpose to direct every thought and impulse toward are wasting their time???even when hard at work.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is man's peculiar duty to love even those who wrong him.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you have been putting off these things, and how often you have received an opportunity from the gods, and yet do not use it.",
    author: "Marcus Aurelius",
  },
  {
    text: "How cruel???to forbid people to want what they think is good for them. And yet that???s just what you won???t let them do when you get angry at their misbehavior. They???re drawn toward what they think is good for them. ???But it???s not good for them. Then show them that. Prove it to them. Instead of losing your temper.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nowhere you can go is more peaceful???more free of interruptions???than your own soul. Especially",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not waste the remainder of thy life in thoughts about others, when thou dost not refer thy thoughts to some object of common utility.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your mind will be like its habitual thoughts; for the soul becomes dyed with the color of its thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you work at that which is before you, following right reason   seriously, vigorously, calmly, without allowing anything else to distract   you, but keeping your divine part pure, as if you should be bound   to give it back immediately; if you hold to this, expecting nothing,   fearing nothing, but satisfied with your present activity according   to nature, and with heroic truth in every word and sound which you   utter, you will live happy. And there is no man who is able to   prevent this.",
    author: "Marcus Aurelius",
  },
  {
    text: "This you must always bear in mind, what is the nature of the whole, and what is my nature, and how this is related to that, and what kind of a part it is of what kind of a whole; and that there is no one who hinders you from always doing and saying the things that conform to the nature of which you are a part.",
    author: "Marcus Aurelius",
  },
  {
    text: "And give up your thirst for books, so that you do not die a grouch, but in true grace and heartfelt gratitude to the god",
    author: "Marcus Aurelius",
  },
  {
    text: "It is not fit that I should give myself pain, for I have never intentionally given pain even to another.",
    author: "Marcus Aurelius",
  },
  {
    text: "The time of a man's life is as a point; the substance of it ever flowing, the sense obscure; and the whole composition of the body tending to corruption. His soul is restless, fortune uncertain, and fame doubtful; to be brief, as a stream so are all things belonging to the body; as a dream, or as a smoke, so are all that belong unto the soul. Our life is a warfare, and a mere pilgrimage. Fame after life is no better than oblivion. What is it then that will adhere and follow? Only one thing, philosophy. And philosophy doth consist in this, for a man to preserve that spirit which is within him, from all manner of contumelies and injuries, and above all pains or pleasures; never to do anything either rashly, or feignedly, or hypocritically: wholly to depend from himself and his own proper actions: all things that happen unto him to embrace contentedly, as coming from Him from whom he himself also came; and above all things, with all meekness and a calm cheerfulness, to expect death, as being nothing else but the resolution of those elements, of which every creature is composed.",
    author: "Marcus Aurelius",
  },
  {
    text: "Alexander the Great and his mule driver both died and the same thing happened to both.",
    author: "Marcus Aurelius",
  },
  {
    text: "Y recuerda que has de tratarles como a hombres, porque son tan humanos como t?? y por tanto te resultan tan imprescindibles como la mand??bula inferior lo es para la superior.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is not to be like that.",
    author: "Marcus Aurelius",
  },
  {
    text: "goodness???what defines a good person. Keep to it in everything you do.",
    author: "Marcus Aurelius",
  },
  {
    text: "In a sense, people are our proper occupation. Our job is to do them good and put up with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "As a horse when he has run, a dog when he has tracked the game, a bee when it has made the honey, so a man when he has done a good act, does not call out for others to come and see, but he goes on to another act, as a vine goes on to produce again the grapes in season.",
    author: "Marcus Aurelius",
  },
  {
    text: "No lo hagas, si no conviene; no lo digas si no es verdad.",
    author: "Marcus Aurelius",
  },
  {
    text: "Why should any of these things that happen externally, so much distract thee? Give thyself leisure to learn some good thing, and cease roving and wandering to and fro. Thou must also take heed of another kind of wandering, for they are idle in their actions, who toil and labour in this life, and have no certain scope to which to direct all their motions, and desires.",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself, \"I have to go to work - as a human being. What do I have to complain of, if I'm going to do what I was born for - the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?",
    author: "Marcus Aurelius",
  },
  {
    text: "These things thou must always have in mind: What is the nature of the universe, and what is mine???in particular: This unto that what relation it hath: what kind of part, of what kind of universe it is: And that there is nobody that can hinder thee, but that thou mayest always both do and speak those things which are agreeable to that nature, whereof thou art a part.",
    author: "Marcus Aurelius",
  },
  {
    text: "For it is according to nature, and nothing is evil which is according to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long thou hast already put off these things, and how",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider how quickly all things are dissolved and resolved:",
    author: "Marcus Aurelius",
  },
  {
    text: "Maximus was my model for self-control, fixity of purpose, and cheerfulness under ill-health or other misfortunes. His character was an admirable combination of dignity and charm, and all the duties of his station were performed quietly and without fuss. He gave everyone the conviction that he spoke as he believed, and acted as he judged right. Bewilderment or timidity were unknown to him; he was never hasty, never dilatory; nothing found him at a loss. He indulged neither in despondency nor forced gaiety, nor had anger or jealousy any power over him. Kindliness, sympathy, and sincerity all contributed to give the impression of a rectitude that was innate rather than inculcated. Nobody was ever made by him to feel inferior, yet none could have presumed to challenge his pre-eminence. He was also the possessor of an agreeable sense of humour.",
    author: "Marcus Aurelius",
  },
  {
    text: "All of us are working on the same project. Some consciously, with understanding; some without knowing it. (I think this is what Heraclitus meant when he said that ???those who sleep are also hard at work??????that they too collaborate in what happens.) Some of us work in one way, and some in others. And those who complain and try to obstruct and thwart things???they help as much as anyone. The world needs them as well. So make up your mind who you???ll choose to work with. The force that directs all things will make good use of you regardless???will put you on its payroll and set you to work. But make sure it???s not the job Chrysippus speaks of: the bad line in the play, put there for laughs.",
    author: "Marcus Aurelius",
  },
  {
    text: "Spend not the remnant of thy days in thoughts and fancies concerning other men, when it is not in relation to some common good, when by it thou art hindered from some other better work.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do your best to convince them. But act on your own, if justice requires it. If met with force, then fall back on acceptance and peaceability. Use the setback to practice other virtues. Remember that our efforts are subject to circumstances; you weren???t aiming to do the impossible. ???Aiming to do what, then? To try. And you succeeded. What you set out to do is accomplished.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ?????? ???????? ???????????? ?????? ???????? - ??????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Such as are your habitual thoughts, such also will be the character of your mind; for the soul is dyed by the thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "???? ???????? ???????? ?????? ?????? ???? ???? ?????? ???? - ????????????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Now it is true that these may impede my action, but they are no impediments to my affects and disposition, which have the power of acting conditionally and changing: for the mind converts and changes every hindrance to its activity into an aid; and so that which is a hindrance is made a furtherance to an act; and an obstacle on the road helps us along this road.",
    author: "Marcus Aurelius",
  },
  {
    text: "Treat what you don???t have as nonexistent. Look at what you have, the things you value most, and think of how much you???d crave them if you didn???t have them. But be careful. Don???t feel such satisfaction that you start to overvalue them ???that it would upset you to lose them.",
    author: "Marcus Aurelius",
  },
  {
    text: "I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stupidity is expecting figs in winter, or children in old age.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stop drifting. You???re not going to re-read your Brief Comments, your Deeds of the Ancient Greeks and Romans, the commonplace books you saved for your old age. Sprint for the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can.",
    author: "Marcus Aurelius",
  },
  {
    text: "Bear in mind that the measure of a man is the worth of the things he cares about.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let nothing be done rashly, and at random, but all things according to the most exact and perfect rules of art.",
    author: "Marcus Aurelius",
  },
  {
    text: "??????????? ????????? ??? ?????????????????? ??????? ???????????, ????? ??????????? ????????????? ????? ???????????????????? ?????????????????? ??????? ???????? ?????????????? ???????? ????????????? ???????? ?????????????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Souviens toi que chacun ne vit que dans le moment pr??sent, dans l'instant. Le reste, c'est le pass?? ou un obscur avenir. Petite est donc l'??tendue de la vie.",
    author: "Marcus Aurelius",
  },
  {
    text: "Like seeing roasted meat and other dishes in front of you and suddenly realizing: This is a dead fish. A dead bird. A dead pig. Or that this noble vintage is grape juice, and the purple robes are sheep wool dyed with shellfish blood. Or making love???something rubbing against your penis, a brief seizure and a little cloudy liquid. Perceptions like that???latching onto things and piercing through them, so we see what they really are. That???s what we need to do all the time???all through our lives when things lay claim to our trust???to lay them bare and see how pointless they are, to strip away the legend that encrusts them. Pride is a master of deception: when you think you???re occupied in the weightiest business, that???s when he has you in his spell.",
    author: "Marcus Aurelius",
  },
  {
    text: "Practice really hearing what people say. Do your best to get inside their minds.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can???t tell good from evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "Kingship: to earn a bad reputation by good deeds.",
    author: "Marcus Aurelius",
  },
  {
    text: "You???ve given aid and they???ve received it. And yet, like an idiot, you keep holding out for more: to be credited with a Good Deed, to be repaid in kind. Why?",
    author: "Marcus Aurelius",
  },
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.  Waste no more time arguing about what a good man should be. Be one. Waste no more time arguing about what a good man should be. Be one. Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart. If it is not right do not do it; if it is not true do not say it. The universe is change; our life is what our thoughts make it. Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    text: "Be not querulous, be Content with little, be kind, be free; avoid all superfluity, all vain prattling; be magnanimous.",
    author: "Marcus Aurelius",
  },
  {
    text: "But death and life, honor and dishonor, pain and pleasure???all these things equally happen to good men and bad, being things which make us neither better nor worse. Therefore they are neither good nor evil.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Take away thy opinion, and then there is taken away the complaint, "I have been harmed." Take away the complaint, "I have been harmed," and the harm is taken away.   That which does not make a man worse than he was, also does not make his life worse, nor does it harm him either from without or from within.',
    author: "Marcus Aurelius",
  },
  {
    text: "The tranquillity that comes when you stop caring what they say. Or think, or do. Only what you do. (Is this fair? Is this the right thing to do?)  . . .  not to be distracted by their darkness. To run straight for the finish line, unswerving.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to feel exasperated, or defeated, or despondent because your days aren't packed with wise and moral actions. But to get back up when you fail, to celebrate behaving like a human - however imperfectly - and fully embrace the pursuit that you've embarked on.",
    author: "Marcus Aurelius",
  },
  {
    text: "Beautiful things of any kind are beautiful in themselves and sufficient to themselves. Praise is extraneous. The object of praise remains what it was???no better and no worse. This applies, I think, even to ???beautiful??? things in ordinary life???physical objects, artworks. Does anything genuinely beautiful need supplementing? No more than justice does???or truth, or kindness, or humility. Are any of those improved by being praised? Or damaged by contempt? Is an emerald suddenly flawed if no one admires it? Or gold, or ivory, or purple? Lyres? Knives? Flowers? Bushes?",
    author: "Marcus Aurelius",
  },
  {
    text: "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.",
    author: "Marcus Aurelius",
  },
  {
    text: "Either the gods have no power or they have power. If, then, they have no power, why do you pray to them? But if they have power, why do you not pray for them to give you the faculty of not fearing any of the things that you fear, or of not desiring any of the things that you desire, or not being pained at anything, rather than pray that they should grant this or refuse that? For certainly if they can cooperate with men, they can cooperate for these purposes. But perhaps you will say, the gods have placed this in your power. Well, then, is it not better to use what is in your power like a free man than to desire in a slavish and abject way what is not in your power? And who has told you that the gods do not aid us even in the things that are in our power?",
    author: "Marcus Aurelius",
  },
  {
    text: "Stop whatever you???re doing for a moment and ask yourself: Am I afraid of death because I won???t be able to do this anymore?",
    author: "Marcus Aurelius",
  },
  {
    text: "To live a good life: We have the potential for it. If we can learn to be indifferent to what makes no difference. This is how we learn: by looking at each thing, both the parts and the whole. Keeping in mind that none of them can dictate how we perceive it. They don???t impose themselves on us. They hover before us, unmoving. It is we who generate the judgments???inscribing them on ourselves. And we don???t have to. We could leave the page blank???and if a mark slips through, erase it instantly. Remember how brief is the attentiveness required. And then our lives will end. And why is it so hard when things go against you? If it???s imposed by nature, accept it gladly and stop fighting it. And if not, work out what your own nature requires, and aim at that, even if it brings you no glory. None of us is forbidden to pursue our own good.",
    author: "Marcus Aurelius",
  },
  {
    text: "That you don???t know for sure it is a mistake. A lot of things are means to some other end. You have to know an awful lot before you can judge other people???s actions with real understanding.",
    author: "Marcus Aurelius",
  },
  {
    text: "That it???s not what they do that bothers us: that???s a problem for their minds, not ours. It???s our own misperceptions. Discard them. Be willing to give up thinking of this as a catastrophe . . . and your anger is gone. How do you do that? By recognizing that you???ve suffered no disgrace. Unless disgrace is the only thing that can hurt you, you???re doomed to commit innumerable offenses???to become a thief, or heaven only knows what else.",
    author: "Marcus Aurelius",
  },
  {
    text: "The mind is the ruler of the soul. It should remain unstirred by agitations of the flesh???gentle and violent ones alike. Not mingling with them, but fencing itself off and keeping those feelings in their place. When they make their way into your thoughts, through the sympathetic link between mind and body, don???t try to resist the sensation. The sensation is natural. But don???t let the mind start in with judgments, calling it ???good??? or ???bad.",
    author: "Marcus Aurelius",
  },
  {
    text: "To read with diligence; not to rest satisfied with a light and superficial knowledge, nor quickly to assent to things commonly spoken of:",
    author: "Marcus Aurelius",
  },
  {
    text: "That kindness is invincible, provided it???s sincere???not ironic or an act. What can even the most vicious person do if you keep treating him with kindness and gently set him straight???if you get the chance???correcting him cheerfully at the exact moment that he???s trying to do you harm. ???No, no, my friend. That isn???t what we???re here for. It isn???t me who???s harmed by that. It???s you.??? And show him, gently and without pointing fingers, that it???s so. That bees don???t behave like this???or any other animals with a sense of community. Don???t do it sardonically or meanly, but affectionately???with no hatred in your heart. And not ex cathedra or to impress third parties, but speaking directly. Even if there are other people around.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything fades so quickly, turns into legend, and soon oblivion covers it. And those are the ones who shone. The rest??????unknown, unasked-for??? a minute after death. What is ???eternal??? fame? Emptiness. Then what should we work for? Only this: proper understanding; unselfish action; truthful speech. A resolve to accept whatever happens as necessary and familiar, flowing like water from that same source and spring.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you start to lose your temper, remember: There???s nothing manly about rage. It???s courtesy and kindness that define a human being???and a man. That???s who possesses strength and nerves and guts, not the angry whiners. To react like that brings you closer to impassivity???and so to strength. Pain is the opposite of strength, and so is anger. Both are things we suffer from, and yield to.",
    author: "Marcus Aurelius",
  },
  {
    text: "The world is maintained by change???in the elements and in the things they compose. That",
    author: "Marcus Aurelius",
  },
  {
    text: "Your three components: body, breath, mind. Two are yours in trust; to the third alone you have clear title. If you can cut yourself???your mind???free of what other people do and say, of what you???ve said or done, of the things that you???re afraid will happen, the impositions of the body that contains you and the breath within, and what the whirling chaos sweeps in from outside, so that the mind is freed from fate, brought to clarity, and lives life on its own recognizance???doing what???s right, accepting what happens, and speaking the truth??? If you can cut free of impressions that cling to the mind, free of the future and the past???can make yourself, as Empedocles says, ???a sphere rejoicing in its perfect stillness,??? and concentrate on living what can be lived (which means the present) . . . then you can spend the time you have left in tranquillity. And in kindness. And at peace with the spirit within you.",
    author: "Marcus Aurelius",
  },
  {
    text: "How ridiculous not to flee from one's own wickedness, which is possible, yet endeavour to flee from another's, which is not.",
    author: "Marcus Aurelius",
  },
  {
    text: "consider how much more pain is brought on us by the anger and vexation caused by such acts than by the acts themselves, at which we are angry and vexed. Ninth,",
    author: "Marcus Aurelius",
  },
  {
    text: "The fraction of infinity, of that vast abyss of time, allotted to each of us. Absorbed in an instant into eternity. The fraction of all substance, and all spirit. The fraction of the whole earth you crawl about on. Keep all that in mind, and don???t treat anything as important except doing what your nature demands, and accepting what Nature sends you.",
    author: "Marcus Aurelius",
  },
  {
    text: "in the ways of Nature there is no evil to be found.",
    author: "Marcus Aurelius",
  },
  {
    text: "And the things which conduce in any way to the commodity of life, and of which fortune gives an abundant supply, he [my father] used without arrogance and without excusing himself; so that when he had them, he enjoyed them without affectation, and when he had them not, he did not want them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider the past; such great changes of political supremacies. Thou mayest foresee also the things which will be. For they will certainly be of like form, and it is not possible that they should deviate from the order of the things which take place now: accordingly to have contemplated human life for forty years is the same as to have contemplated it for ten thousand years. For what more wilt thou see?",
    author: "Marcus Aurelius",
  },
  {
    text: "Begin the morning by saying to yourself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil. But I, who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him. For we are made for cooperation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to nature; and it is acting against one another to be vexed and to turn away.",
    author: "Marcus Aurelius",
  },
  {
    text: "Human lives are brief and trivial. Yesterday a blob of semen; tomorrow embalming fluid, ash. To pass through this brief life as nature demands. To give it upwithout complaint. Like an olive that ripens and falls. Praising its mother, thanking the tree it grew on.",
    author: "Marcus Aurelius",
  },
  {
    text: "Frightened of change? But what can exist without it? What???s closer to nature???s heart? Can you take a hot bath and leave the firewood as it was? Eat food without transforming it? Can any vital process take place without something being changed? Can???t you see? It???s just the same with you???and just as vital to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "When people injure you, ask yourself what good or harm they thought would come of it. If you understand that, you???ll feel sympathy rather than outrage or anger. Your sense of good and evil may be the same as theirs, or near it, in which case you have to excuse them. Or your sense of good and evil may differ from theirs. In which case they???re misguided and deserve your compassion. Is that so hard?",
    author: "Marcus Aurelius",
  },
  {
    text: "Death is a cessation of the impressions through the senses, and of the pulling of the strings that move the appetites, and of the discursive movements of the thoughts, and of the service to the flesh.",
    author: "Marcus Aurelius",
  },
  {
    text: "A better wrestler. But not a better citizen, a better person, a better resource in tight places, a better forgiver of faults.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everywhere, at each moment, you have the option: ??? to accept this event with humility ??? to treat this person as he should be treated ??? to approach this thought with care, so that nothing irrational creeps in.",
    author: "Marcus Aurelius",
  },
  {
    text: "People who are excited by posthumous fame forget that the people who remember them will soon die too. And those after them in turn. Until their memory, passed from one to another like a candle flame, gutters and goes out.",
    author: "Marcus Aurelius",
  },
  {
    text: "He that sinneth, sinneth unto himself. He that is unjust, hurts himself, in that he makes himself worse than he was before. Not he only that committeth, but he also that omitteth something, is oftentimes unjust.",
    author: "Marcus Aurelius",
  },
  {
    text: "How do we know that Telauges wasn???t a better man than Socrates? It???s not enough to ask whether Socrates??? death was nobler, whether he debated with the sophists more adeptly, whether he showed greater endurance by spending the night out in the cold, and when he was ordered to arrest the man from Salamis decided it was preferable to refuse, and ???swaggered about the streets??? (which one could reasonably doubt). What matters is what kind of soul he had. Whether he was satisfied to treat men with justice and the gods with reverence and didn???t lose his temper unpredictably at evil done by others, didn???t make himself the slave of other people???s ignorance, didn???t treat anything that nature did as abnormal, or put up with it as an unbearable imposition, didn???t put his mind in his body???s keeping.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think continually how many physicians have died, after often knitting their foreheads over their patients; how many astrologers after prophesying other men's deaths, as though to die were a great matter; how many philosophers after endless debate on death or survival after death; how many paladins after slaying their thousands; how many tyrants after using their power over men's lives with monstrous arrogance, as if themselves immortal; how many entire cities have, if I may use the term, died, Helice, Pompeii, Herculaneum, and others innumerable. Run over, too, the many also you know of, one after another. One followed this man's funeral and then was himself laid on the bier; another followed him, and all in a little while. This is the whole matter: see always how ephemeral and cheap are the things of man- yesterday, a spot of albumen, tomorrow, ashes or a mummy. Therefore make your passage through this span of time in obedience to Nature and gladly lay down your life, as an olive, when ripe, might fall, blessing her who bare it and grateful to thee which gave it life.",
    author: "Marcus Aurelius",
  },
  {
    text: "El movimiento de los ??tomos corre hacia arriba, hacia abajo, circularmente. Pero el curso de la virtud no est?? sujeto a ninguno de estos giros. Tiene, m??s bien, un no s?? qu?? divino, de modo que hace su jornada por una ??rbita dif??cil e incomprensible.",
    author: "Marcus Aurelius",
  },
  {
    text: "A trite but effective tactic against the fear of death: think of the list of people who had to be pried away from life. What did they gain by dying old? In the end, they all sleep six feet under???Caedicianus, Fabius, Julian, Lepidus, and all the rest. They buried their contemporaries, and were buried in turn. Our lifetime is so brief. And to live it out in these circumstances, among these people, in this body? Nothing to get excited about. Consider the abyss of time past, the infinite future. Three days of life or three generations: what???s the difference?",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work???as a human being. What do I have to complain of, if I???m going to do what I was born for???the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm? ???But it???s nicer here. . . . So you were born to feel ???nice???? Instead of doing things and experiencing them? Don???t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can? And you???re not willing to do your job as a human being? Why aren???t you running to do what your nature demands? ???But we have to sleep sometime. . . . Agreed. But nature set a limit on that???as it did on eating and drinking. And you???re over the limit. You???ve had more than enough of that. But not of working. There you???re still below your quota. You don???t love yourself enough. Or you???d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat. Do you have less respect for your own nature than the engraver does for engraving, the dancer for the dance, the miser for money or the social climber for status? When they???re really possessed by what they do, they???d rather stop eating and sleeping than give up practicing their arts. Is helping others less valuable to you? Not worth your effort?",
    author: "Marcus Aurelius",
  },
  {
    text: "Give up your thirst for books so that you do not die a grouch.",
    author: "Marcus Aurelius",
  },
  {
    text: "B.C.)???Stoicism stressed the search for inner peace and ethical certainty despite the apparent chaos of the external world by emulating in one???s personal conduct the underlying orderliness and lawfulness of nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you suppose that the things that are not within your power are good or bad for you, then if you suffer a bad thing or the loss of a good thing, you will blame the gods and hate men, too: those who are the cause of the misfortune or the loss, or those who are suspected of being the likely cause; and indeed we do a great injustice when we dwell on such matters. But if we judge only those things that are in our power to be good or bad, there remains no reason either for finding fault with God or standing in a hostile attitude to man.",
    author: "Marcus Aurelius",
  },
  {
    text: "1. Our inward power, when it obeys nature, reacts to events by accommodating itself to what it faces???to what is possible. It needs no specific material. It pursues its own aims as circumstances allow; it turns obstacles into fuel. As a fire overwhelms what would have quenched a lamp. What???s thrown on top of the conflagration is absorbed, consumed by it???and makes it burn still higher.",
    author: "Marcus Aurelius",
  },
  {
    text: "How good it is when you have roast meat or suchlike foods before you, to impress on your mind that this is the dead body of a fish, this is the dead body of a bird or pig; and again, that the Falernian wine is the mere juice of grapes, and your purple edged robe simply the hair of a sheep soaked in shell-fish blood! And in sexual intercourse that it is no more than the friction of a membrane and a spurt of mucus ejected.  How good these perceptions are at getting to the heart of the real thing and penetrating through it, so you can see it for what it is! This should be your practice throughout all your life: when things have such a plausible appearance, show them naked, see their shoddiness, strip away their own boastful account of themselves. Vanity is the greatest seducer of reason: when you are most convinced that your work is important, that is when you are most under its spell.",
    author: "Marcus Aurelius",
  },
  {
    text: "things: and the vanity of praise, and the inconstancy",
    author: "Marcus Aurelius",
  },
  {
    text: "It is in our power to have no opinion about a thing and not to be disturbed in our soul; for things themselves have no natural power to form our judgments.",
    author: "Marcus Aurelius",
  },
  {
    text: "???? ?????? ?????????? ?????????? ?????????? ?????? ???????? ???? ???????? ?????????????? ?????????? ?????????????? ?????????????? . ???????? ?????????? ???? ???? ?????????? ?????? ???????????? ?????????? ???? ?? ?????? ???????????? ???????????? ??????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "???? ?????????? ???????????? ?????????? ???????????? ???? ?????????? ?????????? . ???? ???? ???????????? ???????? ?????????? ???????????? ?????????????? ???????????? ?????? ?????????? ?? ?????? ???????????? ???????? ???? ???????? ?????????? ?????????? ???????????????? ?????? ?????????? ?????? ?????????? ???????????? ?????? ???????????? ???? ??????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Constantly think of the universe as one living creature, embracing one being and soul; how all is absorbed into the one consciousness of this living creature; how it compasses all things with a single purpose, and how all things work together to cause all that comes to pass, and their wonderful web and texture.",
    author: "Marcus Aurelius",
  },
  {
    text: "A little flesh, a little breath, and a Reason to rule all ??? that is myself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Honor and revere the gods, treat human beings as they deserve, be tolerant with others and strict with yourself. Remember, nothing belongs to you but your flesh and blood???and nothing else is under your control.",
    author: "Marcus Aurelius",
  },
  {
    text: "God give me patience, to reconcile with what I am not able to change Give me strength to change what I can And give me wisdom to distinguish one from another.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you???re honest and straightforward and mean well, it should show in your eyes. It should be unmistakable.",
    author: "Marcus Aurelius",
  },
  {
    text: "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "About what am I now employing my own soul? On every occasion I must ask myself this question, and inquire, What have I now in this part of me which they call the ruling principle? and whose soul have I now,???that of a child, or of a young man, or of a feeble woman, or of a tyrant, or of a domestic animal, or of a wild beast?",
    author: "Marcus Aurelius",
  },
  {
    text: "To stop talking about what the good man is like, and just be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever this is that I am, it is a little flesh and breath, and the ruling part. Throw away thy books; no longer distract thyself: it is not allowed; but as if thou wast now dying, despise the flesh; it is blood and bones and a network, a contexture of nerves, veins, and arteries. See the breath also, what kind of a thing it is, air, and not always the same, but every moment sent out and again sucked in. The third then is the ruling part: consider thus: Thou art an old man; no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer be either dissatisfied with thy present lot, or shrink from the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "When people treat you ill, blame your conduct, or report anything to your disadvantage, enter into the very soul of them ; examine their understandings, and see of what nature they are. You will be fully convinced that the opinion of such mortals is not worth one troublesome thought. However, you must be kind to them, for nature has made them your relations. Besides, the gods give them all sort of countenance, warn them by dreams and prophecy, and help them to those things they have a mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "No matter what anyone says or does, my task is to be good.",
    author: "Marcus Aurelius",
  },
  {
    text: "Menjalani kehidupan setiap harinya seolah - olah hari itu adalah hari terakhir, tidak pernah mengalami kebingungan, tidak pernah bersikap apatis, tidak pernah latah untuk ikut - ikutan, itu semua adalah karakter sempurna",
    author: "Marcus Aurelius",
  },
  {
    text: "Observe, in short, how transient and trivial is all mortal life; yesterday a drop of semen, tomorrow a handful of spice or ashes. Spend, therefore, these fleeting moments of earth as Nature would have you spend them, and then go to your rest with a good grace, as an olive falls in its season, with a blessing for the earth.",
    author: "Marcus Aurelius",
  },
  {
    text: "Our thoughts is what our life make it",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now take what???s left and live it properly.",
    author: "Marcus Aurelius",
  },
  {
    text: "- \"Everything has come into being for a purpose - a horse, say, a vine. Does this surprise you? Even the sun will say, 'I came into being for a purpose': likewise the other gods. For what purpose, then, were you created? For your pleasure? Just see whether this idea can be entertained.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything has come into being for a purpose - a horse, say, a vine. Does this surprise you? Even the sun will say, 'I came into being for a purpose': likewise the other gods. For what purpose, then, were you created? For your pleasure? Just see whether this idea can be entertained.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do external things distract you? Then make time for yourself to learn something worthwhile; stop letting yourself be pulled in all directions. But make sure you guard against the other kind of confusion. People who labor all their lives but have no purpose to direct every thought and impulse toward are wasting their time???even when hard at work.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you have procrastinated, and how consistently you have failed to put to good use you suspended sentence from the gods. It is about time you realized the nature of the universe (of which you are part) and of the pwoer that rules it (to which your art owes its existence). Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it. (II.4)",
    author: "Marcus Aurelius",
  },
  {
    text: "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil. But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me; not [only] of the same blood or seed, but that it participates in [the same] intelligence and [the same] portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him. For we are made for co-operation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. [A] To act against one another, then, is contrary to nature; and it is acting against one another to be vexed and to turn away.",
    author: "Marcus Aurelius",
  },
  {
    text: "How cruel???to forbid people to want what they think is good for them. And yet that???s just what you won???t let them do when you get angry at their misbehavior. They???re drawn toward what they think is good for them. ???But it???s not good for them. Then show them that. Prove it to them. Instead of losing your temper.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you need encouragement, think of the qualities the people around you have: this one???s energy, that one???s modesty, another???s generosity, and so on. Nothing is as encouraging as when virtues are visibly embodied in the people around us, when we???re practically showered with them. It???s good to keep this in mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "That which is not good for the bee-hive, cannot be good for the bee.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even when the gods stood on the side of righteousness, they were concerned with the act more than with the intent.",
    author: "Marcus Aurelius",
  },
  {
    text: "17. To pursue the unattainable is insanity, yet the thoughtless can never refrain from doing so.",
    author: "Marcus Aurelius",
  },
  {
    text: "Put from you the belief that 'I have been wronged', and with it will go the feeling. Reject your sense of injury, and the injury itself disappears.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stoics held that material objects alone existed; but immanent in the material universe was a spiritual force which acted through them, manifesting itself under many forms, as fire, aether, spirit, soul, reason, the ruling principle.",
    author: "Marcus Aurelius",
  },
  {
    text: "At every instant the objects and events in the world around us bombard us with impressions. As they do so they produce a phantasia, a mental impression. From this the mind generates a perception (hypolepsis), which might best be compared to a print made from a photographic negative. Ideally this print will be an accurate and faithful representation of the original. But it may not be. It may be blurred, or it may include shadow images that distort or obscure the original. Chief among these are inappropriate value judgments: the designation as ???good??? or ???evil??? of things that in fact are neither good nor evil. For example, my impression that my house has just burned down is simply that???an impression or report conveyed to me by my senses about an event in the outside world. By contrast, my perception that my house has burned down and I have thereby suffered a terrible tragedy includes not only an impression, but also an interpretation imposed upon that initial impression by my powers of hypolepsis. It is by no means the only possible interpretation, and I am not obliged to accept it. I may be a good deal better off if I decline to do so. It is, in other words, not objects and events but the interpretations we place on them that are the problem. Our duty is therefore to exercise stringent control over the faculty of perception, with the aim of protecting our mind from error.",
    author: "Marcus Aurelius",
  },
  {
    text: "The second discipline, that of action, relates to our relationship with other people. Human beings, for Marcus as for the Stoics generally, are social animals, a point he makes often (e.g., 5.16, 8.59, 9.1). All human beings possess not only a share of the logos but also the ability to use it (that is what makes us human and distinguishes us from other animals). But it would perhaps be more accurate to say that we are participants in the logos, which is as much a process as a substance. Marcus himself more than once compares the world ruled by logos to a city in which all human beings are citizens, with all the duties inherent in citizenship. As human beings we are part of nature, and our duty is to accommodate ourselves to its demands and requirements??????to live as nature requires,??? as Marcus often puts it. To do this we must make proper use of the logos we have been allotted, and perform as best we can the functions assigned us in the master plan of the larger, cosmic logos, of which it is a part. This requires not merely passive acquiescence in what happens, but active cooperation with the world, with fate and, above all, with other human beings. We were made, Marcus tells us over and over, not for ourselves but for others, and our nature is fundamentally unselfish. In our relationships with others we must work for their collective good, while treating them justly and fairly as individuals.",
    author: "Marcus Aurelius",
  },
  {
    text: "That whenever I felt like helping someone who was short of money, or otherwise in need, I never had to be told that I had no resources to do it with. And that I was never put in that position myself???of having to take something from someone else.",
    author: "Marcus Aurelius",
  },
  {
    text: "The third discipline, the discipline of will, is in a sense the counterpart to the second, the discipline of action. The latter governs our approach to the things in our control, those that we do; the discipline of will governs our attitude to things that are not within our control, those that we have done to us (by others or by nature). We control our own actions and are responsible for them. If we act wrongly, then we have done serious harm to ourselves (though not, it should be emphasized, to others, or to the logos). By contrast, things outside our control have no ability to harm us. Acts of wrongdoing by a human agent (torture, theft, or other crimes) harm the agent, not the victim. Acts of nature such as fire, illness, or death can harm us only if we choose to see them as harmful. When we do so, we question the benevolence and providence of the logos, and thereby degrade our own logos. This, of course, we must not do. Instead we must see things for what they are (here the discipline of perception is relevant) and accept them, by exercising the discipline of will, or what Epictetus calls (in a phrase quoted by Marcus) ???the art of acquiescence.??? For if we recognize that all events have been foreseen by the logos and form part of its plan, and that the plan in question is unfailingly good (as it must be), then it follows that we must accept whatever fate has in store for us, however unpleasant it may appear, trusting that, in Alexander Pope???s phrase, ???whatever is, is right.??? This applies to all obstacles and (apparent) misfortunes, and in particular to death???a process that we cannot prevent, which therefore does not harm us, and which accordingly we must accept willingly as natural and proper.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have to assemble your life yourself???action by action. And be satisfied if each one achieves its goal, as far as it can. No one can keep that from happening. ???But there are external obstacles.??? Not to behaving with justice, self-control, and good sense. ???Well, but perhaps to some more concrete action. But if you accept the obstacle and work with what you???re given, an alternative will present itself???another piece of what you???re trying to assemble. Action by action.",
    author: "Marcus Aurelius",
  },
  {
    text: "Give thyself time to learn something new and good, and cease to be whirled around.",
    author: "Marcus Aurelius",
  },
  {
    text: "to how much envy and fraud and hypocrisy the state of a tyrannous king is subject unto, and how they who are commonly called [Eupatridas Gk.], i.e. nobly born, are in some sort incapable, or void of natural affection.",
    author: "Marcus Aurelius",
  },
  {
    text: "that that life which any the longest liver, or the shortest liver parts with, is for length and duration the very same, for that only which is present, is that, which either of them can lose, as being that only which they have; for that which he hath not, no man can truly be said to lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???? ?????????? ???? ?????? ???????? . ???????? ???????? ?????????? ???????????? ???????????? . ?????????? ?????????? ???? ???????? ????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "When Theophrastus is comparing sins ??? so far as they are commonly acknowledged to be comparable ??? he affirms the philosophic truth that sins of desire are more culpable than sins of passion. For passion???s revulsion from reason at least seems to bring with it a certain discomfort, and a half-felt sense of constraint; whereas sins of desire, in which pleasure predominates, indicate a more self-indulgent and womanish disposition. Both experience and philosophy, then, support the contention that a sin which is pleasurable deserves graver censure than one which is painful. In the one case the offender is like a man stung into an involuntary loss of control by some injustice; in the other, eagerness to gratify his desire moves him to do wrong of his own volition.",
    author: "Marcus Aurelius",
  },
  {
    text: "No random actions, none not based on underlying principles.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is circumstances (difficulties) which show what men are. Therefore when a difficulty falls upon you, remember that God, like a trainer of wrestlers, has matched you with a rough young man. For what purpose? you may say. Why, that you may become an Olympic conqueror; but it is not accomplished without sweat. In my opinion no man has had a more profitable difficulty than you have had, if you choose to make use of it as an athlete would deal with a young antagonist.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long thou hast already put off these things, and how often a certain day and hour as it were, having been set unto thee by the gods, thou hast neglected it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember this, that very little is needed to make a happy life.",
    author: "Marcus Aurelius",
  },
  {
    text: "People try to get away from it all???to the country, to the beach, to the mountains. You always wish that you could too. Which is idiotic: you can get away from it anytime you like. By going within. Nowhere you can go is more peaceful???more free of interruptions???than your own soul.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let not the general representation unto thyself of the wretchedness of this our mortal life, trouble thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "Some men, when they do you a kindness, at once demand the payment of gratitude from you; others are more modest than this. However, they remember the favor, and look upon you as their debtor in a manner. A third sort shall scarce know what they have done. These are much like a vine, which is satisfied by being fruitful in its kind, and bears a bunch of grapes without expecting any thanks for it. A fleet horse or greyhound do not make a noise when they have done well, nor a bee neither when she has made a little honey. And thus a man that has done a kindness never proclaims it, but does another as soon as he can, just like a vine that bears again the next season. Now we should imitate those who are so obliging as hardly to reflect on their beneficence??? (v. 6).",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ?????????????? ???? ???????????????????? ???????? ???????? ????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "I observed mildness of temper, and unchangeable resolution in the things that he had determined after due deliberation; and no vainglory in those things that men call honors; and a love of labor and perseverance; and a readiness to listen to those who had anything to propose for the common weal; and undeviating firmness in giving to every man according to his deserts; and a knowledge derived from experience of the occasions for vigorous action and for remission.",
    author: "Marcus Aurelius",
  },
  {
    text: "X. Labour not as one to whom it is appointed to be wretched, nor as one that either would be pitied, or admired; but let this be thine only care and desire; so always and in all things to prosecute or to forbear, as the law of charity, or mutual society doth require.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not look around to discover other people's ruling principles, but look straight to this, to what nature leads you, both the universal nature through which things happen to you, and your own nature through the acts which must be done by you.",
    author: "Marcus Aurelius",
  },
  {
    text: "My soul, will you ever be good, simple, individual, bare, brighter than the body that covers you? Will you ever taste the disposition to love and affection? Will you ever be complete and free of need, missing nothing, desiring nothing live or lifeless for the enjoyment of pleasure?",
    author: "Marcus Aurelius",
  },
  {
    text: "Our actions may be impeded by them, but there can be no impeding our intentions or our dispositions. Because we can accommodate and adapt. The mind adapts and converts to its own purposes the obstacle to our acting.",
    author: "Marcus Aurelius",
  },
  {
    text: "Surely it is an excellent plan, when you are seated before delicacies and choice foods, to impress upon your imagination that this is the dead body of a fish, that the dead body of a bird or a pig; and again, that the Falernian wine is grape juice and that robe of purple a lamb's fleece dipped in a shellfish's blood; and in matters of sex intercourse, that it is the attrition of an entrail and a convulsive expulsion of a mere mucus. Surely these are excellent imaginations, going to the heart of actual facts and penetrating them so as to see the kind of things they really are. You should adopt this practice all through your life, and where things make an impression which is very plausible, uncover their nakedness, see into their cheapness, strip off the profession on which they vaunt themselves. For pride is an arch-seducer of reason, and just when you fancy you are most certainly busy in good works, then you are mostly certainly guilty of imposture.",
    author: "Marcus Aurelius",
  },
  {
    text: "Since it is possible that thou mayest depart from life this very moment, regulate every act and thought accordingly.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together: your own existence and the things that happen to you",
    author: "Marcus Aurelius",
  },
  {
    text: "That which rules within, when it is according to nature, will always adapt itself easily to that which is possible and is presented to it. For it requires no definite material, in moving toward its purpose, but rather certain conditions; and it makes a material for itself out of that which opposes it, as a great fire lays hold of a mass that would have extinguished a tiny flame: when the fire is strong, it soon appropriates to itself the matter that is heaped on it and consumes it, rising higher by means of this very material.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe, then, is God, of whom the popular gods are manifestations; while legends and myths are allegorical. The soul of man is thus an emanation from the godhead, into whom it will eventually be re-absorbed.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you deal with irrational animals, with things and circumstances, be generous and straightforward. You are rational; they are not.",
    author: "Marcus Aurelius",
  },
  {
    text: "No carelessness in your actions. No confusion in your words. No imprecision in your thoughts. No retreating into your own soul, or trying to escape it. No overactivity. They kill you, cut you with knives, shower you with curses. And that somehow cuts your mind off from clearness, and sanity, and self-control, and justice? A man standing by a spring of clear, sweet water and cursing it. While the fresh water keeps on bubbling up. He can shovel mud into it, or dung, and the stream will carry it away, wash itself clean, remain unstained. To have that. Not a cistern but a perpetual spring. How? By working to win your freedom. Hour by hour. Through patience, honesty, humility.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never shirk the proper dispatch of your duty, no matter if you are freezing or hot, groggy or well-rested, vilified or praised, not even if dying or pressed by other demands.",
    author: "Marcus Aurelius",
  },
  {
    text: "The Stoic makes no differentiation between a small act of kindness by a simple person and a great act of virtue from a learned sage. Virtue is virtue, and in both cases the result is happiness for the one who is virtuous.",
    author: "Marcus Aurelius",
  },
  {
    text: "He claimed that a man's life should be valued according to the value of the things to which he gave his attention.",
    author: "Marcus Aurelius",
  },
  {
    text: "8. It can ruin your life only if it ruins your character. Otherwise it cannot harm you???inside or out.",
    author: "Marcus Aurelius",
  },
  {
    text: "The existence of evil does not harm the world. And an individual act of evil does not harm the victim. Only one person is harmed by it???and he can stop being harmed as soon as he decides to.",
    author: "Marcus Aurelius",
  },
  {
    text: "To be free of passion and yet full of love.",
    author: "Marcus Aurelius",
  },
  {
    text: "BEGIN the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil. But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him, For we are made for co-operation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to nature; and it is acting against one another to be vexed and to turn away.",
    author: "Marcus Aurelius",
  },
  {
    text: "He is an abscess on the universe who withdraws and separates himself from the reason of our common nature through being displeased with the things that happen; for the same nature that produces these things has produced you, too:",
    author: "Marcus Aurelius",
  },
  {
    text: "Ask yourself at every moment, 'Is this necessary?",
    author: "Marcus Aurelius",
  },
  {
    text: "The soul of man is thus an emanation from the godhead, into whom it will eventually be re-absorbed. The divine ruling principle makes all things work together for good, but for the good of the whole. The highest good of man is consciously to work with God for the common good, and this is the sense in which the Stoic tried to live in accord with nature. In the individual it is virtue alone which enables him to do this; as Providence rules the universe, so virtue in the soul must rule man.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing that goes on in anyone else???s mind can harm you. Nor can the shifts and changes in the world around you. ???Then where is harm to be found? In your capacity to see it. Stop doing that and everything will be fine. Let the part of you that makes that judgment keep quiet even if the body it???s attached to is stabbed or burnt, or stinking with pus, or consumed by cancer. Or to put it another way: It needs to realize that what happens to everyone???bad and good alike???is neither good nor bad.",
    author: "Marcus Aurelius",
  },
  {
    text: "We speak of the sun???s light as ???pouring down on us,??? as ???pouring over us??? in all directions. Yet it???s never poured out. Because it doesn???t really pour; it extends. Its beams (aktai) get their name from their extension (ekteinesthai). To see the nature of a sunbeam, look at light as it falls through a narrow opening into a dark room. It extends in a straight line, striking any solid object that stands in its way and blocks the space beyond it. There it remains???not vanishing, or falling away. That???s what the outpouring???the diffusion???of thought should be like: not emptied out, but extended. And not striking at obstacles with fury and violence, or falling away before them, but holding its ground and illuminating what receives it. What doesn???t transmit light creates its own darkness.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
    author: "Marcus Aurelius",
  },
  {
    text: "For the present is the only thing of which a man can be deprived, if it is true that this is the only thing which he has, and that a man cannot lose a thing if he has it not.",
    author: "Marcus Aurelius",
  },
  {
    text: "Jangan mencintai apapun kecuali yang datang padamu, karena adakah yang dapat memenuhi kebutuhanmu dengan lebih tepat?",
    author: "Marcus Aurelius",
  },
  {
    text: "From Alexander the Platonic, not frequently nor without necessity to say to any one, or to write in a letter, that I have not leisure; nor continually to excuse the neglect of duties required by our relations to those with whom we live, by alleging urgent occupations.",
    author: "Marcus Aurelius",
  },
  {
    text: "Constantly regard the universe as one living being, having one substance and one soul; and observe how all things have reference to one perception, the perception of this one living being; and how all things act with one movement; and how all things are the cooperating causes of all things that exist; observe, too, the continuous spinning of the thread and the contexture of the web.",
    author: "Marcus Aurelius",
  },
  {
    text: "They seek for themselves private retiring places, as country villages, the sea-shore, mountains; yea thou thyself art wont to long much after such places. But all this thou must know proceeds from simplicity in the highest degree. At what time soever thou wilt, it is in thy power to retire into thyself, and to be at rest, and free from all businesses. A man cannot any whither retire better than to his own soul; he especially who is beforehand provided of such things within, which whensoever he doth withdraw himself to look in, may presently afford unto him perfect ease and tranquillity.",
    author: "Marcus Aurelius",
  },
  {
    text: "Dig deep; the water- goodness- is down there. And as long as you keep digging, it will keep bubbling up",
    author: "Marcus Aurelius",
  },
  {
    text: "To enter others??? minds and let them enter yours.",
    author: "Marcus Aurelius",
  },
  { text: "refrain from all anger and passion.", author: "Marcus Aurelius" },
  {
    text: "Love the discipline you know, and let it support you. Entrust",
    author: "Marcus Aurelius",
  },
  {
    text: "73. When you have done a good act and another has received it, why do you look for a third thing besides these, as fools do, either to have the reputation of having done a good act or to obtain a return?",
    author: "Marcus Aurelius",
  },
  {
    text: "But Marcus Aurelius knows that what the heart is full of, the man will do. 'Such as thy thoughts and ordinary cogitations are,' he says, 'such will thy mind be in time.' And every page of the book shows us that he knew thought was sure to issue in act. He drills his soul, as it were, in right principles, that when the time comes, it may be guided by them. To wait until the emergency is to be too late.",
    author: "Marcus Aurelius",
  },
  {
    text: "If thou workest at that which is before thee, following right reason seriously, vigorously, calmly, without allowing anything else to distract thee, but keeping thy divine part pure, as if thou shouldst be bound to give it back immediately; if thou holdest to this, expecting nothing, fearing nothing, but satisfied with thy present activity according to nature, and with heroic truth in every word and sound which thou utterest, thou wilt live happy. And there is no man who is able to prevent this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Salvation: to see each thing for what it is??? its nature and its purpose. To do only what is right, say only what is true, without holding back. What else could it be but to live life fully??? to pay out goodness like the rings of a chain, without the slightest gap.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to be overwhelmed by what you imagine, but just do what you can and should. And",
    author: "Marcus Aurelius",
  },
  {
    text: "short, know this: Human lives are brief and trivial. Yesterday a blob of semen; tomorrow embalming fluid, ash. To pass through this brief life as nature demands. To give it up without complaint. Like an olive that ripens and falls. Praising its mother, thanking the tree it grew on.",
    author: "Marcus Aurelius",
  },
  {
    text: "But death certainly, and life, honour and dishonour, pain and pleasure, all these things equally happen to good men and bad, being things which make us neither better nor worse. Therefore they are neither good nor evil.",
    author: "Marcus Aurelius",
  },
  {
    text: "17. If a thing is in your own power, why do you do it? But if it is in the power of another, whom do you blame? The atoms (chance) or the gods? Both are foolish. You must blame nobody. For if you can, correct that which is the cause; but if you cannot do this, correct at least the thing itself; but if you cannot do even this, of what use is it to you to find fault? For nothing should be done without a purpose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Concentrate every minute like a Roman???like a man???on doing what???s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can???if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable.",
    author: "Marcus Aurelius",
  },
  {
    text: "To pass through this brief life as nature demands. To give it up without complaint. Like an olive that ripens and falls. Praising its mother, thanking the tree it grew on.",
    author: "Marcus Aurelius",
  },
  {
    text: "Attend to the matter before you, whether it is an opinion or an act or a word. You suffer this justly: for you choose rather to become good tomorrow than to be good today.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing befalls anything which that thing is not naturally made to bear. The same experience befalls another, and he is unruffled and remains unharmed; either because he is unaware that it has happened or because he exhibits greatness of soul. Is it not strange that ignorance and complaisance are stronger than wisdom...?",
    author: "Marcus Aurelius",
  },
  {
    text: "XV. Is any man so foolish as to fear change, to which all things that once were not owe their being? And",
    author: "Marcus Aurelius",
  },
  {
    text: "Do the things external which fall upon thee distract thee? Give thyself time to learn something new and good, and cease to be whirled around. But then thou must also avoid being carried about the other way. For those too are triflers who have wearied themselves in life by their activity, and yet have no object to which to direct every movement, and, in a word, all their thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is the act of an ill-instructed man to blame others for his own bad condition; it is the act of one who has begun to be instructed, to lay the blame on himself; and of one whose instruction is completed, neither to blame another, nor himself.",
    author: "Marcus Aurelius",
  },
  {
    text: "The art of living is more like wrestling than dancing, in as much as it, too, demands a from and watchful stance against any unexpected onset",
    author: "Marcus Aurelius",
  },
  {
    text: "Forget everything else. Keep hold of this alone and remember it: Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see. The span we live is small???small",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to live as if you had endless years ahead of you. Death overshadows you. While you???re alive and able???be good. 18.",
    author: "Marcus Aurelius",
  },
  {
    text: "The mind adapts and converts to its own purposes the obstacle to our acting. The impediment to action advances action. What stands in the way becomes the way. 21.",
    author: "Marcus Aurelius",
  },
  {
    text: "Though thou shouldst be going to live three thousand years, and as many times ten thousand years, still remember that no man loses any other life than this which he now lives, nor lives any other than this which he now loses.",
    author: "Marcus Aurelius",
  },
  {
    text: "Finally, therefore, remember your retreat into this little domain which is yourself, and above all be not disturbed nor on the rack, but be free and look at things as a man, a human being, a citizen, a creature that must die.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nature did not blend things so inextricably that you can???t draw your own boundaries???place your own well-being in your own hands. It???s quite possible to be a good man without anyone realizing it. Remember that. And this too: you don???t need much to live happily. And just because you???ve abandoned your hopes of becoming a great thinker or scientist, don???t give up on attaining freedom, achieving humility, serving others, obeying God.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????? ?????? ???? ?????????????? ???????? ???? ???????? ???????? , ?????? ???????????? ???????? ???????????? ..?????? ???????????? ?????????????? ???????????????? ???????????? ???? ?????????? ?????????? ???????????? ??????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Reject your sense of injury, and the injury itself disappears.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not disturb yourself by thinking of the whole of your life. Do not let your thoughts at once embrace all the various troubles that you may expect to befall you: but on every occasion ask yourself, What is there in this that is intolerable and past bearing? For you will be ashamed to confess. In the next place remember that neither the future nor the past pains you, but only the present. But this is reduced to a very little, if you only circumscribe it and chide your mind, if it is unable to hold out against even this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think, let us say, of the times of Vespasian; and what do you see? Men and women busy marrying, bringing up children, sickening, dying, fighting, feasting, chaffering, farming, flattering, bragging, envying, scheming, calling down curses, grumbling at fate, loving, hoarding, coveting thrones and dignities. Of all that life, not a trace survives today. Or come forward to the days of Trajan; again, it is the same; that life, too, has perished. Take a similar look at the records of other past ages and peoples; mark how one and all, after their short-lived strivings, passed away and were resolved into the elements. More especially, recall some who, within your own knowledge, have followed after vanities instead of contenting themselves with a resolute performance of the duties for which they were created. In such cases it is essential to remind ourselves that the pursuit of any object depends for its value upon the worth of the object pursued. If, then, you would avoid discouragement, never become unduly absorbed in things that are not of the first importance.",
    author: "Marcus Aurelius",
  },
  {
    text: "on every occasion a man should ask himself, Is this one of the unnecessary things?",
    author: "Marcus Aurelius",
  },
  {
    text: "Sixth, consider when thou art much vexed or grieved, that man's life is only a moment, and after a short time we are all laid out dead.",
    author: "Marcus Aurelius",
  },
  {
    text: "To pursue the impossible is madness: but it is impossible for evil men not to do things of this sort.",
    author: "Marcus Aurelius",
  },
  {
    text: '?????? ???????????? "???? ???????????? ????????: ?????? ???????????????????? ???? ????????????" ??????: "???? ?????? ?????????? ??????????',
    author: "Marcus Aurelius",
  },
  {
    text: "To the best of my judgment, when I look at the human character I see no virtue placed there to counter justice. But I see one to counter pleasure: self-control.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????????? ???????????? ???? ???????????????? ?????? ?????????????????? ?????????? ?????? ???? ???????? ???? ???????????? ???????????? ?????? ???? ?????????? ???????????? ?????? ???? ????????. ???? ???? ?????? ???? ?????????????? ?????? ?????????? ???????????? ???????????? ?????? ???? ???????? ???? ???????????? ??????????.  ?????? ???????? ???????????? ???? ?????? ???????? ???????? ???????? ???????? ???????? ???? ????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "everything which belongs to the body is a stream, and what belongs to the soul is a dream",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember: Matter. How tiny your share of it. Time. How brief and fleeting your allotment of it. Fate. How small a role you play in it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Make for yourself a definition or description of the thing that is presented to you, so as to see distinctly what kind of a thing it is in its substance, in its nudity, in its entirety, and tell yourself its proper name and the names of the things of which it has been compounded and into which it will be resolved. For nothing so promotes elevation of mind as the ability to examine methodically and truly every object that is presented to you in life, and always to look at things so as to see at the same time what kind of universe this is, and what kind of use everything performs in it, and what value everything has with reference to the whole, and what with reference to man, who is a citizen of the highest city, of which all other cities are like families; what each thing is, its composition and duration, and what virtue I need bring to it, such as gentleness, manliness, truth, fidelity, simplicity, contentment, and the rest.",
    author: "Marcus Aurelius",
  },
  {
    text: "to conclude the matter, what is even an eternal remembrance? A mere nothing. What then is that about which we ought to employ our serious pains? This one thing, thoughts just, and acts social, and words which never lie, and a disposition which gladly accepts all that happens, as necessary, as usual, as flowing from a principle and source of the same kind.",
    author: "Marcus Aurelius",
  },
  {
    text: "Pride is a master of deception: when you think you're occupied in the weightiest business, that's when he has you in his spell.",
    author: "Marcus Aurelius",
  },
  {
    text: "Call to mind the whole of Substance of which you have a very small portion, and the whole of time whereof a small hair's breadth has been determined for you, and of the chain of causation whereof you are how small a link.",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider the nature of all worldly sensible things; of those especially, which either ensnare by pleasure, or for their irksomeness are dreadful, or for their outward lustre and show are in great esteem and request, how vile and contemptible, how base and corruptible, how destitute of all true life and being they are.",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???????????? ???? ?????????? ???? ???????? ???????? ?????????? ?????????????? ?????? ???????????????? ???????? ???????????? ?????????????? ????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember, however, that you are formed by nature to bear everything whose tolerability depends on your own opinion to make it so, by thinking that it is in your interest or duty to do so.",
    author: "Marcus Aurelius",
  },
  {
    text: "The pomps and glories which he despised were all his; what to most men is an ambition or a dream, to him was a round of weary tasks which nothing but the stern sense of duty could carry him through. And he did his work well.",
    author: "Marcus Aurelius",
  },
  {
    text: "To feel affection for people even when they make mistakes is uniquely human. You can do it, if you simply recognize: that they???re human too, that they act out of ignorance, against their will, and that you???ll both be dead before long. And, above all, that they haven???t really hurt you. They haven???t diminished your ability to choose.",
    author: "Marcus Aurelius",
  },
  {
    text: "If our intellectual part is common, the reason also, in respect of which we are rational beings, is common: if this is so, common also is the reason which commands us what to do, and what not to do; if this is so, there is a common law also; if this is so, we are fellow-citizens; if this is so, we are members of some political community; if this is so, the world is in a manner a state.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou art a little soul bearing about a corpse, as Epictetus used to say. It is no evil for things to undergo change, and no good for things to subsist in consequence of change.",
    author: "Marcus Aurelius",
  },
  {
    text: "Failure to observe what is in the mind of another has seldom made a man unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let the part of your soul that leads and governs be undisturbed by the movements in the flesh, whether of pleasure or of pain; and let it not unite with them, but let it circumscribe itself and limit those affects to their parts. But when these affects rise up to the mind by virtue of that other sympathy that naturally exists in a body that is all one, then you must not strive to resist the sensation, for it is natural: but do not let the ruling part of itself add to the sensation the opinion that it is either good or bad.",
    author: "Marcus Aurelius",
  },
  {
    text: "No malgastes lo que te queda de vida en conjeturar sobre los dem??s, a no ser que busques el bien com??n; pues si te dedicas a imaginar qu?? hace la gente, por qu??, qu?? dice, que piensa, qu?? trama, y cosas parecidas, dejar??s de observar tu propia conciencia interior.",
    author: "Marcus Aurelius",
  },
  {
    text: "30. A philosopher without clothes and one without books. ???I have nothing to eat,??? says he, as he stands there half-naked, ???but I subsist on the logos.??? And with nothing to read, I subsist on it too.",
    author: "Marcus Aurelius",
  },
  {
    text: "This world is mere change, and this life, opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "And here are two of the most immediately useful thoughts you will dip into. First that things cannot touch the mind: they are external and inert; anxieties can only come from your internal judgement. Second, hat all these things you see will change almost as you look at them, and then will be no more. Constantly bring to mind all that you yourself have already seen changed. The universe is change: life is judgement.",
    author: "Marcus Aurelius",
  },
  {
    text: 'You have sent a letter to me through the hand of a "friend" of yours, as you call him. And in your very next sentence you warn me not to discuss with him all the matters that concern you, saying that even you yourself are not accustomed to do this; in other words, you have in the same letter affirmed and denied that he is your friend.',
    author: "Marcus Aurelius",
  },
  {
    text: "Because most of what we say and do is not essential. If you can eliminate it, you???ll have more time, and more tranquillity. Ask yourself at every moment, ???Is this necessary?",
    author: "Marcus Aurelius",
  },
  {
    text: "Among the animals which have not reason one life is distributed; but among reasonable animals one intelligent soul is distributed: just as there is one earth of all things which are of an earthy nature, and we see by one light, and breathe one air, all of us that have the faculty of vision and all that have life. All",
    author: "Marcus Aurelius",
  },
  {
    text: "XII. From Claudius Maximus, in all things to endeavour to have power of myself, and in nothing to be carried about; to be cheerful and courageous in all sudden chances and accidents, as in sicknesses: to love mildness, and moderation, and gravity: and to do my business, whatsoever it be, thoroughly, and without querulousness. Whatsoever he said, all men believed him that as he spake, so he thought, and whatsoever he did, that he did it with a good intent. His manner was, never to wonder at anything; never to be in haste, and yet never slow: nor to be perplexed, or dejected, or at any time unseemly, or excessively to laugh: nor to be angry, or suspicious, but ever ready to do good, and to forgive, and to speak truth; and all this, as one that seemed rather of himself to have been straight and right, than ever to have been rectified or redressed; neither was there any man that ever thought himself undervalued by him, or that could find in his heart, to think himself a better man than he. He would also be very pleasant and gracious.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man without ever the least appearance of anger, or any other passion; able at the same time most exactly to observe the Stoic Apathia, or unpassionateness, and yet to be most tender-hearted: ever of good credit; and yet almost without any noise, or rumour: very learned, and yet making little show.",
    author: "Marcus Aurelius",
  },
  {
    text: "5. Thou sayest, Men cannot admire the sharpness of thy wits.???Be it so: but there are many other things of which thou canst not say, I am not formed from them by nature. Show those qualities then which are altogether in thy power, sincerity, gravity, endurance of labor, aversion to pleasure, contentment with thy portion and with few things, benevolence, frankness, no love of superfluity, freedom from trifling, magnanimity. Dost thou not see how many qualities thou art immediately able to exhibit, in which there is no excuse of natural incapacity and unfitness, and yet thou still remainest voluntarily below the mark? or art thou compelled through being defectively furnished by nature to murmur, and to be stingy, and to flatter, and to find fault with thy poor body, and to try to please men, and to make great display, and to be so restless in thy mind? No, by the gods; but thou mightest have been delivered from these things long ago. Only if in truth thou canst be charged with being rather slow and dull of comprehension, thou must exert thyself about this also, not neglecting it nor yet taking pleasure in thy dullness.",
    author: "Marcus Aurelius",
  },
  {
    text: "For then thou wilt neither blame those who offend involuntarily, nor wilt thou want their approbation, if thou lookest to the sources of their opinions and appetites.",
    author: "Marcus Aurelius",
  },
  {
    text: "5. Every moment think steadily as a Roman and a man to do what thou hast in hand with perfect and simple dignity, and feeling of affection, and freedom, and justice; and to give thyself relief from all other thoughts. And thou wilt give thyself relief, if thou doest every act of thy life as if it were the last, laying aside all carelessness and passionate aversion from the commands of reason, and all hypocrisy, and self-love, and discontent with the portion which has been given to thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "So there are two reasons to embrace what happens. One is that it???s happening to you. It was prescribed for you, and it pertains to you. The thread was spun long ago, by the oldest cause of all. The other reason is that what happens to an individual is a cause of well-being in what directs the world???of its well-being, its fulfillment, of its very existence, even. Because the whole is damaged if you cut away anything???anything at all???from its continuity and its coherence. Not only its parts, but its purposes. And that???s what you???re doing when you complain: hacking and destroying.",
    author: "Marcus Aurelius",
  },
  {
    text: "Truly a rare opportunity was given to Marcus Aurelius of showing what the mind can do in despite of circumstances. Most peaceful of warriors, a magnificent monarch whose ideal was quiet happiness in home life, bent to obscurity yet born to greatness, the loving father of children who died young or turned out hateful, his life was one paradox. That nothing might lack, it was in camp before the face of the enemy that he passed away and went to his own place.",
    author: "Marcus Aurelius",
  },
  {
    text: "People out for posthumous fame forget that the Generations To Come will be the same annoying people they know now.",
    author: "Marcus Aurelius",
  },
  {
    text: "Real good luck would be to abandon life without ever encountering dishonesty, or hypocrisy, or self-indulgence, or pride. But the ???next best voyage??? is to die when you???ve had enough. Or are you determined to lie down with evil? Hasn???t experience even taught you that???to avoid it like the plague? Because it is a plague???a mental cancer???worse than anything caused by tainted air or an unhealthy climate. Diseases like that can only threaten your life; this one attacks your humanity.",
    author: "Marcus Aurelius",
  },
  {
    text: "For times when you feel pain: See that it doesn???t disgrace you, or degrade your intelligence???doesn???t keep it from acting rationally or unselfishly. And in most cases what Epicurus said should help: that pain is neither unbearable nor unending, as long as you keep in mind its limits and don???t magnify them in your imagination. And keep in mind too that pain often comes in disguise??? as drowsiness, fever, loss of appetite. . . . When you???re bothered by things like that, remind yourself: ???I???m giving in to pain.",
    author: "Marcus Aurelius",
  },
  {
    text: "The present is all that they can give up, since that is all you have, and what you do not have, you cannot lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is no evil for things to undergo change, and no good for things to subsist in consequence of change. 43.",
    author: "Marcus Aurelius",
  },
  {
    text: "Neither worse then nor better is a thing made by being praised.",
    author: "Marcus Aurelius",
  },
  {
    text: "And he who pursues pleasure will not abstain from injustice, and this is plainly impiety.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember: philosophy requires only what your nature already demands. What you???ve been after is something else again???something unnatural.",
    author: "Marcus Aurelius",
  },
  {
    text: "It isn't ceasing to live that [I'm] afraid of but never beginning to live properly??",
    author: "Marcus Aurelius",
  },
  {
    text: "It is a shame when the soul is first to give way in this life, and the body does not give way.",
    author: "Marcus Aurelius",
  },
  {
    text: "It isn't ceasing to live that [I'm] afraid of but never beginning to live properly.",
    author: "Marcus Aurelius",
  },
  {
    text: "People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind. . . . So constantly give yourself this retreat, and renew yourself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Es rid??culo no intentar evitar tu propia maldad, lo cual es posible, y, en cambio, intentar evitar la de los dem??s, lo cual es lo imposible.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember that our efforts are subject to circumstances; you weren???t aiming to do the impossible. ???Aiming to do what, then? To try. And you succeeded. What you set out to do is accomplished.",
    author: "Marcus Aurelius",
  },
  {
    text: "As for life therefore, and death, honour and dishonour, labour and pleasure, riches and poverty, all these things happen unto men indeed, both good and bad, equally; but as things which of themselves are neither good nor bad; because of themselves, neither shameful nor praiseworthy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Manage all your actions, words, and thoughts accordingly, since you may at any moment quit life.",
    author: "Marcus Aurelius",
  },
  {
    text: "We live only in the present, in this fleet-footed moment. The rest is lost and behind us, or ahead of us and may never be found. Little of life we know, little the plot of earth on which we dwell, little the memory of even the most famous who have lived, and this memory itself is preserved by generations of little men, who know little about themselves and far less about those who died long ago.",
    author: "Marcus Aurelius",
  },
  {
    text: "If any man can convince and show me that I do not think or act right, I will gladly change; for I seek truth, by which no man was ever injured. But he is injured who abides in his error and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "Live as though today is your last day.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to know what the world is is to be ignorant of where you are. Not to know why it???s here is to be ignorant of who you are. And what it is. Not to know any of this is to be ignorant of why you???re here.",
    author: "Marcus Aurelius",
  },
  {
    text: "Now forget what they think of you. Be satisfied if you can live the rest of your life, however short, as your nature demands. Focus on that, and don???t let anything distract you. You???ve wandered all over and finally realized that you never found what you were after: how to live. Not in syllogisms, not in money, or fame, or self-indulgence. Nowhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you are distressed about anything, the pain is not one to the thing but to your own estimate to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "None of us have much time. And yet you act as if things were eternal???the way you fear and long for them.??? Before long, darkness. And whoever buries you mourned in their turn.",
    author: "Marcus Aurelius",
  },
  {
    text: "He was taught to dress plainly and to live simply, to avoid all softness and luxury.",
    author: "Marcus Aurelius",
  },
  {
    text: "The freedom to do only what God wants, and accept whatever God sends us.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you are offended at any man???s fault, immediately turn to yourself and reflect in what manner you yourself have erred:",
    author: "Marcus Aurelius",
  },
  {
    text: "Go on abusing yourself, O my soul! Not long and you will lose the opportunity to show yourself any respect. We have only one life to live, and yours is almost over. Because you have chosen not to respect yourself, you have made your happiness subject to the opinions others have of you. (Book 2, Verse 6)",
    author: "Marcus Aurelius",
  },
  {
    text: "If you are distressed about anything, the pain is not due to the thing but to your own estimate of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "What man can you show me who places any value on his time, who reckons the worth of each day, who understands that he is dying daily? For we are mistaken when we look forward to death; the major portion of death has already passed. Whatever years be behind us are in death's hands.",
    author: "Marcus Aurelius",
  },
  {
    text: "His education was conducted with all care. The ablest teachers were engaged for him, and he was trained in the strict doctrine of the Stoic philosophy, which was his great delight. He was taught to dress plainly and to live simply, to avoid all softness and luxury. His body was trained to hardihood by wrestling, hunting, and outdoor games; and though his constitution was weak, he showed great personal courage to encounter the fiercest boars. At the same time he was kept from the extravagancies of his day.",
    author: "Marcus Aurelius",
  },
  {
    text: "tranquillity is nothing else than the good ordering of the mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "A little wisp of soul carrying a corpse.??????Epictetus.",
    author: "Marcus Aurelius",
  },
  {
    text: "7. Choose not to be harmed???and you won???t feel harmed. Don???t feel harmed???and you haven???t been.",
    author: "Marcus Aurelius",
  },
  {
    text: "Time is a river, a violent current of events, glimpsed once and already carried past us, and another follows and is gone.",
    author: "Marcus Aurelius",
  },
  {
    text: "The way people behave. They refuse to admire their contemporaries, the people whose lives they share. No, but to be admired by Posterity -- people they've never met and never will -- that's what they set their hearts on. You might as well be upset at not being a hero to your great-grandfather.",
    author: "Marcus Aurelius",
  },
  {
    text: "Some people, when they do someone a favor, are always looking for a chance to call it in. And some aren???t, but they???re still aware of it???still regard it as a debt. But others don???t even do that. They???re like a vine that produces grapes without looking for anything in return. A horse at the end of the race . . . A dog when the hunt is over . . . A bee with its honey stored . . . And a human being after helping others. They don???t make a fuss about it. They just go on to something else, as the vine looks forward to bearing fruit again in season. We should be like that. Acting almost unconsciously. ???Yes. Except conscious of it. Because it???s characteristic of social beings that they see themselves as acting socially. And expect their neighbors to see it too! That???s true. But you???re misunderstanding me. You???ll wind up like the people I mentioned before, misled by plausible reasoning. But if you make an effort to understand what I???m saying, then you won???t need to worry about neglecting your social duty.",
    author: "Marcus Aurelius",
  },
  {
    text: "Constantly observe who those are whose approval you wish to have, and what ruling principles they possess. For then you will neither blame those who offend involuntarily, nor will you want their approval, if you look to the sources of their opinions and appetites.",
    author: "Marcus Aurelius",
  },
  {
    text: "What am I doing with my soul? Interrogate yourself, to find out what inhabits your so-called mind and what kind of soul you have now. A child???s soul, an adolescent???s, a woman???s? A tyrant???s soul? The soul of a predator???or its prey?",
    author: "Marcus Aurelius",
  },
  {
    text: "You are a spirit, bearing the weight of a dead body, as Epictetus used to say.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think often the connection of all things in the world and their mutual relations, they are arguably intertwined with each other and thus have for each other a mutual friendship, and that under the connection that leads him and the unity of matter",
    author: "Marcus Aurelius",
  },
  {
    text: "III. Hippocrates having cured many sicknesses, fell sick himself and died.",
    author: "Marcus Aurelius",
  },
  {
    text: "But cast away the thirst after books, that thou mayest not die murmuring, but cheerfully, truly, and from thy heart thankful to the gods.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t waste the rest of your time here worrying about other people???unless it affects the common good. It will keep you from doing anything useful. You???ll be too preoccupied with what so-and-so is doing, and why, and what they???re saying, and what they???re thinking, and what they???re up to, and all the other things that throw you off and keep you from focusing on your own mind. You need to avoid certain things in your train of thought: everything random, everything irrelevant. And certainly everything self-important or malicious. You need to get used to winnowing your thoughts, so that if someone says, ???What are you thinking about???? you can respond at once (and truthfully) that you are thinking this or thinking that. And it would be obvious at once from your answer that your thoughts were straightforward and considerate ones???the thoughts of an unselfish person, one unconcerned with pleasure and with sensual indulgence generally, with squabbling, with slander and envy, or anything else you???d be ashamed to be caught thinking. Someone like that???someone who refuses to put off joining the elect???is a kind of priest, a servant of the gods, in touch with what is within him and what keeps a person undefiled by pleasures, invulnerable to any pain, untouched by arrogance, unaffected by meanness, an athlete in the greatest of all contests???the struggle not to be overwhelmed by anything that happens. With what leaves us dyed indelibly by justice, welcoming wholeheartedly whatever comes???whatever we???re assigned???not worrying too often, or with any selfish motive, about what other people say. Or do, or think. He does only what is his to do, and considers constantly what the world has in store for him???doing his best, and trusting that all is for the best. For we carry our fate with us???and it carries us. He keeps in mind that all rational things are related, and that to care for all human beings is part of being human. Which doesn???t mean we have to share their opinions. We should listen only to those whose lives conform to nature. And the others? He bears in mind what sort of people they are???both at home and abroad, by night as well as day???and who they spend their time with. And he cares nothing for their praise???men who can???t even meet their own standards.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t be irritated at people???s smell or bad breath. What???s the point? With that mouth, with those armpits, they???re going to produce that odor. ???But they have a brain! Can???t they figure it out? Can???t they recognize the problem? So you have a brain as well. Good for you. Then use your logic to awaken his. Show him. Make him realize it. If he???ll listen, then you???ll have solved the problem. Without anger.",
    author: "Marcus Aurelius",
  },
  {
    text: "Finally, in every event which leads you to sorrow, remember to use this principle: that this is not a misfortune, but that to bear it like a brave man is good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "..a man cannot lose a thing if he has it not.",
    author: "Marcus Aurelius",
  },
  {
    text: "The mind is that which is roused and directed by itself. It makes of itself what it chooses. It makes what it chooses of its own experience.",
    author: "Marcus Aurelius",
  },
  {
    text: "Her ??ey d??????ncenin verdi??i bi??imi al??r. Ve d??????ncenizin kontrol?? sizin elinizdedir. Dolay??s??yla yarg??lar??n??z?? ortadan kald??rmaya karar verdi??inizde huzura kavu??ursunuz. T??pk??, burnu dola??an bir denizcinin sakin suya, dalgas??z bir koya eri??mesi gibi.",
    author: "Marcus Aurelius",
  },
  {
    text: "Does a man offend your pride? Remember he will be dead soon, as will you.",
    author: "Marcus Aurelius",
  },
  {
    text: "We live only in the present, in this fleet-footed moment. The rest is lost and behind us, or ahead of us and may never be found. Little of life we know, little the plot of earth on which we dwell, little the memory of even the most famous who have lived, and this memory itself is preserved by generations of little men, who know little about themselves and far less about those who died long ago. (Book 3, Verse 10)",
    author: "Marcus Aurelius",
  },
  {
    text: "To feel affection for people even when they make mistakes is uniquely human. You can do it, if you simply recognize: that they???re human too, that they act out of ignorance, against their will, and that you???ll both be dead before long. And, above all, that they haven???t really hurt you. They haven???t diminished your ability to choose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider how quickly all things are dissolved and resolved: the bodies and substances themselves, into the matter and substance of the world: and their memories into the general age and time of the world.",
    author: "Marcus Aurelius",
  },
  {
    text: "To be cheerful, and to stand in no need, either of other men's help or attendance, or of that rest and tranquillity, which thou must be beholding to others for. Rather like one that is straight of himself, or hath ever been straight, than one that hath been rectified.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can???t tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own???not of the same blood or birth, but the same mind, and possessing a share of the divine.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death. The end of sense-perception, of being controlled by our emotions, of mental activity, of enslavement to our bodies.",
    author: "Marcus Aurelius",
  },
  {
    text: "consider that for whatever purpose each thing has been constituted, for this it has been constituted, and towards this it is carried; and its end is in that towards which it is carried; and where the end is, there also is the advantage and the good of each thing. Now the good for the reasonable animal is society; for that we are made for society has been shown above.",
    author: "Marcus Aurelius",
  },
  {
    text: "I am composed of a body and a soul. Things that happen to the body are meaningless. It cannot discriminate among them. Nothing has meaning to my mind except its own actions. Which are within its own control. And it???s only the immediate ones that matter. Its past and future actions too are meaningless.",
    author: "Marcus Aurelius",
  },
  {
    text: "If the gods have made decisions about me and the things that happen to me, then they were good decisions. (It???s hard to picture a god who makes bad ones.) And why would they expend their energies on causing me harm? What good would it do them???or the world, which is their primary concern? And if they haven???t made decisions about me as an individual, they certainly have about the general welfare. And anything that follows from that is something I have to welcome and embrace. And if they make no decisions, about anything???and it???s blasphemous even to think so (because if so, then let???s stop sacrificing, praying, swearing oaths, and doing all the other things we do, believing the whole time that the gods are right here with us)???if they decide nothing about our lives . . . well, I can still make decisions. Can still consider what it???s to my benefit to do. And what benefits anyone is to do what his own nature requires. And mine is rational. Rational and civic. My city and state are Rome???as Antoninus. But as a human being? The world. So for me, ???good??? can only mean what???s good for both communities.",
    author: "Marcus Aurelius",
  },
  { text: "Fire feeds on obstacles", author: "Marcus Aurelius" },
  {
    text: "For there is no retreat that is quieter or freer from trouble than a man???s own soul, especially when he has within him such thoughts that by looking into them he is immediately in perfect tranquillity; and tranquillity is nothing else than the good ordering of the mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "No longer wander at hazard; for neither wilt thou read thy own memoirs, nor the acts of the ancient Romans and Hellenes, and the selections from books which thou wast reserving for thy old age. Hasten then to the end which thou hast before thee, and throwing away idle hopes, come to thy own aid, if thou carest at all for thyself, while it is in thy power.",
    author: "Marcus Aurelius",
  },
  {
    text: "hold every hour in your grasp. Lay hold of to-day's task, and you will not need to depend so much upon to-morrow's. While we are postponing, life speeds by. Nothing, Lucilius, is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to be offended with other men's liberty of speech, and to apply myself unto philosophy.",
    author: "Marcus Aurelius",
  },
  {
    text: "At some point you have to recognize what world it is that you belong to; what power rules it and from what source you spring; that there is a limit to the time assigned you, and if you don???t use it to free yourself it will be gone and will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "Note that everything that happens, happens justly, and if you observe carefully, you will find it to be so, not only with respect to the continuity of the series of things, but with respect to what is just, as if it were done by one who assigns to each thing its value.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let it happen, if it wants, to whatever it can happen to. And what???s affected can complain about it if it wants. It doesn???t hurt me unless I interpret its happening as harmful to me. I can choose not to.",
    author: "Marcus Aurelius",
  },
  {
    text: "All that comes to pass is as familiar and well known as the rose in spring, and the grape in summer. Of like fashion are sickness, death, calumny, intrigue, and all that gladdens or saddens the foolish.",
    author: "Marcus Aurelius",
  },
  {
    text: "Always remember what Heraclitus said: 'The death of earth is the birth of water, the death of water is the birth of atmosphere, the death of atmosphere is fire, and conversely.' Remember, too, his image of the man who forgets the way he is going; and: 'They are at variance with that with which they most continuously have converse (Reason which governs the Universe), and the things they meet with every day appear alien to them'; and again: 'We suppose that we act and speak'; and: 'We must not be like children with parents,' that is, accept things simply as we have received them.",
    author: "Marcus Aurelius",
  },
  {
    text: "He is a fugitive, he who flees from the reason that governs our soicial life; a blind man, he who closes the eyes of his mind; a beggar, he who depends on another and does not possess within himself all that is necessary for life; an abscess on the body of the universe, he who sets himself apart and cuts himself off from the reason of our common nature because he is dissatisfied with what comes to pass; for this is brought about by the same order of nature that brought you too into being.",
    author: "Marcus Aurelius",
  },
  {
    text: "to believe those things, which are commonly spoken, by such as take upon them to work wonders, and by sorcerers, or prestidigitators, and impostors; concerning the power of charms, and their driving out of demons, or evil spirits; and the like. Not to keep quails for the game; nor to be mad after such things. Not to be offended with other men's liberty of speech, and to apply myself unto philosophy. Him also I must thank, that ever I heard first Bacchius, then Tandasis and Marcianus, and that I did write dialogues in my youth; and that I took liking to the philosophers' little couch and skins, and such other things, which by the Grecian discipline are proper to those who profess philosophy.",
    author: "Marcus Aurelius",
  },
  {
    text: "As for thy thirst after books, away with it with all speed.",
    author: "Marcus Aurelius",
  },
  {
    text: "Body. Soul. Mind. Sensations: the body. Desires: the soul. Reasoning: the mind. To experience sensations: even grazing beasts do that. To let your desires control you: even wild animals do that???and rutting humans, and tyrants (from Phalaris to Nero . . .). To make your mind your guide to what seems best: even people who deny the gods do that. Even people who betray their country. Even people who do . . . behind closed doors. If all the rest is common coin, then what is unique to the good man? To welcome with affection what is sent by fate. Not to stain or disturb the spirit within him with a mess of false beliefs. Instead, to preserve it faithfully, by calmly obeying God???saying nothing untrue, doing nothing unjust. And if the others don???t acknowledge it???this life lived with simplicity, humility, cheerfulness???he doesn???t resent them for it, and isn???t deterred from following the road where it leads: to the end of life. An end to be approached in purity, in serenity, in acceptance, in peaceful unity with what must be.",
    author: "Marcus Aurelius",
  },
  {
    text: "Men seek retreats for themselves - in the country, by the sea, in the hills - and you yourself are particularly prone to this yearning. But all this is quite unphilosophic, when it is open to you, at any time you want, to retreat into yourself. No retreat offers someone more quiet and relaxation than that into his own mind, especially if he can dip into thoughts there which put him at immediate and complete ease: and by ease I simply mean a well-ordered life. So constantly give yourself this retreat, and renew yourself. The doctrines you will visit there should be few and fundamental, sufficient at one meeting to wash away all your pain and send you back free of resentment at what you must rejoin.",
    author: "Marcus Aurelius",
  },
  {
    text: "And those who complain and try to obstruct and thwart things???they help as much as anyone. The world needs them as well.",
    author: "Marcus Aurelius",
  },
  {
    text: "I am composed of the formal and the material; and neither of them will perish into non-existence, as neither of them came into existence out of non-existence. Every part of me then will be reduced by change into some part of the universe, and that again will change into another part of the universe, and so on for ever.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t waste the rest of your time here worrying about other people???unless it affects the common good. It will keep you from doing anything useful. You???ll be too preoccupied with what so-and-so is doing, and why, and what they???re saying, and what they???re thinking, and what they???re up to, and all the other things that throw you off and keep you from focusing on your own mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "To love only what happens, what was destined. No greater harmony.",
    author: "Marcus Aurelius",
  },
  {
    text: "Bear in mind that everything that exists is already fraying at the edges, and in transition, subject to fragmentation and to rot. Or that everything was born to die.",
    author: "Marcus Aurelius",
  },
  {
    text: "External things are not the problem. It???s your assessment of them. Which you can erase right now. If the problem is something in your own character, who???s stopping you from setting your mind straight? And if it???s that you???re not doing something you think you should be, why not just do it? ???But there are insuperable obstacles. Then it???s not a problem. The cause of your inaction lies outside you. ???But how can I go on living with that undone? Then depart, with a good conscience, as if you???d done it, embracing the obstacles too.",
    author: "Marcus Aurelius",
  },
  {
    text: "It stares you in the face. No role is so well suited to philosophy as the one you happen to be in right now.",
    author: "Marcus Aurelius",
  },
  {
    text: "Reverence that which is best in the universe; and this is that which makes use of all things and directs all things. And in like manner also reverence that which is best in thyself; and this is of the same kind as that. For in thyself also, that which makes use of everything else, is this, and thy life is directed by this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou art an old man; no longer let this be a slave, no longer be pulled by the strings like a puppet to unsocial movements, no longer either be dissatisfied with thy present lot, or shrink from the future. All",
    author: "Marcus Aurelius",
  },
  {
    text: "Beautiful things of any kind are beautiful in themselves and sufficient to themselves. Praise is extraneous. The object of praise remains what it was???no better and no worse.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even if you???re going to live three thousand more years, or ten times that, remember: you cannot lose another life than the one you???re living now, or live another one than the one you???re losing. The longest amounts to the same as the shortest. The present is the same for everyone; its loss is the same for everyone; and it should be clear that a brief instant is all that is lost. For you can???t lose either the past or the future; how could you lose what you don???t have? Remember two things: i. that everything has always been the same, and keeps recurring, and it makes no difference whether you see the same things recur in a hundred years or two hundred, or in an infinite period; ii. that the longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have, you cannot lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Well, then, shall mere glory distract you? Look at the swiftness of the oblivion of all men; the gulf of endless time, behind and before; the hollowness of applause, the fickleness and folly of those who seem to speak well of you, and the narrow room in which it is confined. This should make you pause. For the entire earth is a point in space, and how small a corner thereof is this your dwelling place, and how few and how paltry those who will sing your praises here!",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember: philosophy requires only what your nature already demands.",
    author: "Marcus Aurelius",
  },
  {
    text: "He who is greedy of credit and reputation after his death, doth not consider, that they themselves by whom he is remembered, shall soon after every one of them be dead; and they likewise that succeed those; until at last all memory, which hitherto by the succession of men admiring and soon after dying hath had its course, be quite extinct.",
    author: "Marcus Aurelius",
  },
  {
    text: "You can discard most of the junk that clutters your mind???things that exist only there???and clear out space for yourself: . . . by comprehending the scale of the world . . . by contemplating infinite time . . . by thinking of the speed with which things change???each part of every thing; the narrow space between our birth and death; the infinite time before; the equally unbounded time that follows.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you run up against someone else???s shamelessness, ask yourself this: Is a world without shamelessness possible? No. Then don???t ask the impossible. There have to be shameless people in the world. This is one of them. The same for someone vicious or untrustworthy, or with any other defect. Remembering that the whole class has to exist will make you more tolerant of its members. Another useful point to bear in mind: What qualities has nature given us to counter that defect? As an antidote to unkindness it gave us kindness. And other qualities to balance other flaws. And when others stray off course, you can always try to set them straight, because every wrongdoer is doing something wrong???doing something the wrong way. And how does it injure you anyway? You???ll find that none of the people you???re upset about has done anything that could do damage to your mind. But that???s all that ???harm??? or ???injury??? could mean. Yes, boorish people do boorish things. What???s strange or unheard-of about that? Isn???t it yourself you should reproach???for not anticipating that they???d act this way? The logos gave you the means to see it???that a given person would act a given way???but you paid no attention. And now you???re astonished that he???s gone and done it. So when you call someone ???untrustworthy??? or ???ungrateful,??? turn the reproach on yourself. It was you who did wrong. By assuming that someone with those traits deserved your trust. Or by doing them a favor and expecting something in return, instead of looking to the action itself for your reward. What else did you expect from helping someone out? Isn???t it enough that you???ve done what your nature demands? You want a salary for it too? As if your eyes expected a reward for seeing, or your feet for walking. That???s what they were made for. By doing what they were designed to do, they???re performing their function. Whereas humans were made to help others. And when we do help others???or help them to do something???we???re doing what we were designed for. We perform our function.",
    author: "Marcus Aurelius",
  },
  {
    text: "keeps in mind that all rational things are related, and that to care for all human beings is part of being human. Which",
    author: "Marcus Aurelius",
  },
  {
    text: "Concentrate every minute like a Roman???like a man???on doing what???s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can???if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable. You see how few things you have to do to live a satisfying and reverent life? If you can manage this, that???s all even the gods can ask of you.",
    author: "Marcus Aurelius",
  },
  {
    text: "If they???ve made a mistake, correct them gently and show them where they went wrong. If you can???t do that, then the blame lies with you. Or no one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let not the future trouble you; for you will come to it, if come you must, bearing with you the same reason which you are using now to meet the present.",
    author: "Marcus Aurelius",
  },
  {
    text: "36. Man, thou hast been a citizen in this great state [the world]: what difference does it make to thee whether for five years [or three]? for that which is conformable to the laws is just for all. Where is the hardship then, if no tyrant nor yet an unjust judge sends thee away from the state, but nature who brought thee into it? the same as if a praetor who has employed an actor dismisses him from the stage. ???But I have not finished the five acts, but only three of them.??????Thou sayest well, but in life the three acts are the whole drama; for what shall be a complete drama is determined by him who was once the cause of its composition, and now of its dissolution: but thou art the cause of neither. Depart then satisfied, for he also who releases thee is satisfied",
    author: "Marcus Aurelius",
  },
  {
    text: "The ruler must be a philosopher as well as a king; and he must govern unwillingly, because he loves philosophy better than dominion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together: your own existence and the things that happen to you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Does another do me wrong? Let him look to it. He has his own disposition, his own activity. I now have what the universal nature wills me to have; and I do what my nature now wills me to do.",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ?????????????? ?? ?????????? ???????? ???????????? ?????????????? ?? ???????? ?????? ???????????? ?????????? ???????? ?????? ???????? ??????????????",
    author: "Marcus Aurelius",
  },
  {
    text: "My mind. What is it? What am I making of it? What am I using it for? Is it empty of thought? Isolated and torn loose from those around it? Melted into flesh and blended with it, so that it shares its urges?",
    author: "Marcus Aurelius",
  },
  {
    text: "I have no right to do myself an injury. Have I ever injured anyone else if I could avoid it?",
    author: "Marcus Aurelius",
  },
  {
    text: "If it doesn't harm your character, how can it harm your life?",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to be offended with other men's liberty of speech, and to apply myself unto philosophy. Him",
    author: "Marcus Aurelius",
  },
  {
    text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t be ashamed to need help. Like a soldier storming a wall, you have a mission to accomplish. And if you???ve been wounded and you need a comrade to pull you up? So what?",
    author: "Marcus Aurelius",
  },
  {
    text: "I am happy, though this has happened to me, because I continue free from pain, neither crushed by the present nor fearing the future",
    author: "Marcus Aurelius",
  },
  {
    text: "thereby gain much leisure, and save much trouble, and therefore at every action a man must privately by way of admonition suggest unto himself, What? may not this that now I go about,",
    author: "Marcus Aurelius",
  },
  {
    text: "Soon, you will have forgotten everything.  Soon, everybody will have forgotten you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Men seek retreats for themselves, houses in the country, seashores, and mountains; and thou too art wont to desire such things very much. But this is altogether a mark of the most common sort of men, for it is in thy power whenever thou shalt choose to retire into thyself. For nowhere, either with more quiet or more freedom from trouble, does a man retire than into his own soul, particularly when he has within him such thoughts that by looking into them he is immediately in perfect tranquillity; and I affirm that tranquillity is nothing else than the good ordering of the mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "But he that honours a reasonable soul in general, as it is reasonable and naturally sociable, doth little regard anything else: and above all things is careful to preserve his own, in the continual habit and exercise both of reason and sociableness: and thereby doth co-operate with him, of whose nature he doth also participate; God.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing happens to any man that he is not formed by nature to bear.",
    author: "Marcus Aurelius",
  },
  {
    text: "with how little he was satisfied, such as lodging, bed, dress, food, servants;",
    author: "Marcus Aurelius",
  },
  {
    text: "to be grave without affectation: to observe carefully the several dispositions of my friends, not to be offended with idiots, nor unseasonably to set upon those that are carried with the vulgar opinions, with the theorems, and tenets of philosophers: his conversation being an example how a man might accommodate himself to all men and companies; so that though his company were sweeter and more pleasing than any flatterer's cogging and fawning; yet was it at the same time most respected and reverenced:",
    author: "Marcus Aurelius",
  },
  {
    text: "If therefore it be a thing external that causes thy grief, know, that it is not that properly that doth cause it, but thine own conceit and opinion concerning the thing: which thou mayest rid thyself of, when thou wilt.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have embarked, made the voyage, and come to shore; get out. If indeed to another life, there is no want of gods, not even there. But if to a state without sensation, you will cease to be held by pains and pleasures, and to be a slave to the vessel, which is as much inferior as that which serves it is superior: for the one is intelligence and deity; the other is earth and corruption.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thus thou must use to keep thyself to the first motions and apprehensions of things, as they present themselves outwardly; and add not unto them from within thyself through mere conceit and opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Forget everything else. Keep hold of this alone and remember it: Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see. The span we live is small???small as the corner of the earth in which we live it. Small as even the greatest renown, passed from mouth to mouth by short-lived stick figures, ignorant alike of themselves and those long dead.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everything you???re trying to reach???by taking the long way round???you could have right now, this moment. If you???d only stop thwarting your own attempts. If you???d only let go of the past, entrust the future to Providence, and guide the present toward reverence and justice. Reverence: so you???ll accept what you???re allotted. Nature intended it for you, and you for it. Justice: so that you???ll speak the truth, frankly and without evasions, and act as you should???and as other people deserve.",
    author: "Marcus Aurelius",
  },
  {
    text: "And consider this which is near to thee, this boundless abyss of the past and of the future in which all things disappear. How then is he not a fool who is puffed up with such things or plagued about them and makes himself miserable? for they vex him only for a time, and a short time. Think",
    author: "Marcus Aurelius",
  },
  {
    text: "Were you to live three thousand years, or even thirty thousand, remember that the sole life which a man can lose is that which he is living at the moment; and furthermore, that he can have no other life except the one he loses.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing that goes on in anyone else???s mind can harm you. Nor can the shifts and changes in the world around you. ???Then where is harm to be found? In your capacity to see it. Stop doing that and everything will be fine. Let the part of you that makes that judgment keep quiet even if the body it???s attached to is stabbed or burnt, or stinking with pus, or consumed by cancer. Or to put it another way: It needs to realize that what happens to everyone???bad and good alike???is neither good nor bad. That what happens in every life???lived naturally or not???is neither natural nor unnatural.",
    author: "Marcus Aurelius",
  },
  {
    text: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. If a god appeared to us???or a wise human being, even???and prohibited us from concealing our thoughts or imagining anything without immediately shouting it out, we wouldn???t make it through a single day. That???s how much we value other people???s opinions???instead of our own.",
    author: "Marcus Aurelius",
  },
  {
    text: "To read with diligence; not to rest satisfied with a light and superficial knowledge, nor quickly to assent to things commonly spoken of: whom",
    author: "Marcus Aurelius",
  },
  {
    text: "The student as boxer, not fencer. The fencer???s weapon is picked up and put down again. The boxer???s is part of him. All he has to do is clench his fist.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to be slack and negligent; or loose, and wanton in thy actions; nor contentious, and troublesome in thy conversation; nor to rove and wander in thy fancies and imaginations. Not basely to contract thy soul; nor boisterously to sally out with it, or furiously to launch out as it were, nor ever to want employment.",
    author: "Marcus Aurelius",
  },
  {
    text: "When someone seems to have injured you: But how can I be sure? And in any case, keep in mind: ??? that he???s already been tried and convicted???by himself. (Like scratching your own eyes out.) ??? that to expect a bad person not to harm others is like expecting fig trees not to secrete juice, babies not to cry, horses not to neigh???the inevitable not to happen. What else could they do???with that sort of character? If you???re still angry, then get to work on that.",
    author: "Marcus Aurelius",
  },
  {
    text: "You should always look on human life as short and cheap. Yesterday sperm: tomorrow a mummy or ashes.",
    author: "Marcus Aurelius",
  },
  {
    text: "that there is but a certain limit of time appointed unto thee, which if thou shalt not make use of to calm and allay the many distempers of thy soul, it will pass away and thou with it, and never after return. II.",
    author: "Marcus Aurelius",
  },
  {
    text: "To be angry at something means you???ve forgotten: That everything that happens is natural. That the responsibility is theirs, not yours. And further . . . That whatever happens has always happened, and always will, and is happening at this very moment, everywhere. Just like this. What links one human being to all humans: not blood, or birth, but mind. And . . . That an individual???s mind is God and of God. That nothing belongs to anyone. Children, body, life itself???all of them come from that same source. That it???s all how you choose to see things. That the present is all we have to live in. Or to lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your principles have life in them. For how can they perish, unless the ideas that correspond to them are extinguished? And it is up to you to be constantly fanning them into new flame.",
    author: "Marcus Aurelius",
  },
  {
    text: "For the sole thing of which any man can be deprived is the present; since this is all he owns, and nobody can lose what is not his.",
    author: "Marcus Aurelius",
  },
  {
    text: "Our life is a warfare, and a mere pilgrimage.",
    author: "Marcus Aurelius",
  },
  {
    text: "The logos gave you the means to see it???that a given person would act a given way???but you paid no attention. And now you???re astonished that he???s gone and done it. So when you call someone ???untrustworthy??? or ???ungrateful,??? turn the reproach on yourself. It was you who did wrong.",
    author: "Marcus Aurelius",
  },
  {
    text: "People ask, ???Have you ever seen the gods you worship? How can you be sure they exist???? Answers: i. Just look around you. ii. I???ve never seen my soul either. And yet I revere it. That???s how I know the gods exist and why I revere them???from having felt their power, over and over.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thus the Stoics arrive at their main thesis. Virtue alone is admirable, virtue is absolutely self-sufficient; the good man needs no help from circumstances, neither sickness nor adversity can harm him; he is a king, a god among men.",
    author: "Marcus Aurelius",
  },
  {
    text: "Your mind will take on the character of your most frequent thoughts: souls are dyed by thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "For nowhere either with more quiet or more freedom from trouble does a man retire than into his own soul, particularly when he has within him such thoughts that by looking into them he is immediately in perfect tranquility; and I affirm that tranquility is nothing else than the good ordering of the mind. Constantly then give to thyself this retreat, and renew thyself; and let thy principles be brief and fundamental, which, as soon as thou shalt recur to them, will be sufficient to cleanse the soul completely, and to send thee back free from all discontent with the things to which thou returnest.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death hangs over thee. While thou livest, while it is in thy power, be good.",
    author: "Marcus Aurelius",
  },
  {
    text: "What???s there to complain about? People???s misbehavior? But take into consideration: that rational beings exist for one another; that doing what???s right sometimes requires patience; that no one does the wrong thing deliberately; and the number of people who have feuded and envied and hated and fought and died and been buried.  ??? and keep your mouth shut.",
    author: "Marcus Aurelius",
  },
  {
    text: "12. If you do the job in a principled way, with diligence, energy and patience, if you keep yourself free of distractions, and keep the spirit inside you undamaged, as if you might have to give it back at any moment??? If you can embrace this without fear or expectation???can find fulfillment in what you???re doing now, as Nature intended, and in superhuman truthfulness (every word, every utterance)???then your life will be happy. No one can prevent that. 13. Doctors keep their scalpels and other instruments handy, for emergencies. Keep your philosophy ready too???ready to understand heaven and earth. In everything you do, even the smallest thing, remember the chain that links them. Nothing earthly succeeds by ignoring heaven, nothing heavenly by ignoring the earth. 14. Stop drifting. You???re not going to re-read your Brief Comments, your Deeds of the Ancient Greeks and Romans, the commonplace books you saved for your old age. Sprint for the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you apply yourself to the task before you, following right reason seriously, vigorously, calmly, without allowing anything else to distract you, but keeping your divine part pure, as if you might be bound to give it back immediately; if you hold to this, expecting nothing, fearing nothing, but satisfied with your present activities according to nature, and with heroic truth in every word and sound which you utter, you will live happily. And there is no man who is able to prevent this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Choose not to be harmed???and you won???t feel harmed. Don???t feel harmed???and you haven???t been.",
    author: "Marcus Aurelius",
  },
  {
    text: "And as upon thy face and looks, thy mind hath easily power over them to keep them to that which is grave and decent; so let it challenge the same power over the whole body also.",
    author: "Marcus Aurelius",
  },
  {
    text: "To suffer change can be no hurt; as no benefit it is, by change to attain to being. The age and time of the world is as it were a flood and swift current, consisting of the things that are brought to pass in the world. For as soon as anything hath appeared, and is passed away, another succeeds, and that also will presently out of sight.",
    author: "Marcus Aurelius",
  },
  {
    text: "I do my duty: other things trouble me not; for they are either things without life, or things without reason, or things that have rambled and know not the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "our own worth is measured by what we devote our energy to.",
    author: "Marcus Aurelius",
  },
  {
    text: "So here is a rule to remember in future, when anything tempts you to feel bitter: not, ???This is a misfortune,??? but ???To bear this worthily is good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "And so he will see even the real gaping jaws of wild beasts with no less pleasure than those which painters and sculptors show by imitation; and in an old woman and an old man he will be able to see a certain maturity and comeliness; and the attractive loveliness of young persons he will be able to look on with chaste eyes; and many such things will present themselves, not pleasing to every man, but to him only who has become truly familiar with nature and her works.",
    author: "Marcus Aurelius",
  },
  {
    text: "A poor soul burdened with a corpse,' Epictetus calls you.",
    author: "Marcus Aurelius",
  },
  {
    text: "For all things fade and turn to fable, and quickly too, utter oblivion covers them like sand.",
    author: "Marcus Aurelius",
  },
  {
    text: "XXVIII. And these your professed politicians, the only true practical philosophers of the world, (as they think of themselves) so full of affected gravity, or such professed lovers of virtue and honesty, what wretches be they in very deed; how vile and contemptible in themselves? O man! what ado doest thou keep?",
    author: "Marcus Aurelius",
  },
  {
    text: "Men exist for the sake of one another. Teach them then or bear with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "No difference between here and there: the city that you live in is the world.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wretched am I, says one, that this has befallen me. Nay, say you, happy I, who, tho??? this has befallen me, can still remain without sorrow, neither broken by the present, nor dreading the future. The like might have befallen any one; but every one could not have remained thus undejected. Why should the event be called a misfortune, rather than this strength of mind a felicity? But, can you call that a misfortune, to a man, which does not frustrate the intention of his nature? Can that frustrate the intention of it, or hinder it to attain its end, which is not contrary to the will or purpose of his nature; What is this will or purpose? Sure you have learned it. Doth this event hinder you to be just, magnanimous, temperate, prudent, cautious of rash assent, free from error, possessed of a sense of honour and modesty, and of true liberty; or from meriting those other characters, which whoever enjoys, hath all his nature requires, as its proper perfection? And then, upon every occasion of sorrow, remember the maxim, that this event is not a misfortune, but the bearing it courageously is a great felicity.",
    author: "Marcus Aurelius",
  },
  {
    text: "Is my understanding sufficient for this or not? If it is sufficient, I use it for the work as an instrument given by the universal nature. But if it is not sufficient, then either I retire from the work and give way to him who is able to do it better,",
    author: "Marcus Aurelius",
  },
  {
    text: "A very ridiculous thing it is, that any man should dispense with vice and wickedness in himself, which is in his power to restrain; and should go about to suppress it in others, which is altogether impossible.",
    author: "Marcus Aurelius",
  },
  {
    text: "A key point to bear in mind: The value of attentiveness varies in proportion to its object. You???re better off not giving the small things more time than they deserve.",
    author: "Marcus Aurelius",
  },
  {
    text: "Is any man afraid of change? Why what can take place without change? What then is more pleasing or more suitable to the universal nature? And canst thou take a bath unless the wood undergoes a change? And canst thou be nourished, unless the food undergoes a change? And can anything else that is useful be accomplished without change? Dost thou not see then that for thyself also to change is just the same, and equally necessary for the universal nature? Through",
    author: "Marcus Aurelius",
  },
  {
    text: "How strangely men act. They will not praise those who are living at the same time and living with themselves; but to be themselves praised by posterity, by those whom they have never seen or ever will see, this they set much value on. But this is very much the same as if you should be grieved because those who have lived before you did not praise you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou art a little soul bearing about a corpse, as Epictetus used to say (I. C. 19). 42. It is no evil for things to undergo change, and no good for things to subsist in consequence of change. 43. Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place, and this will be carried away too.",
    author: "Marcus Aurelius",
  },
  {
    text: "And thou wilt give thyself relief if thou doest every act of thy life as if it were the last, laying aside all carelessness and passionate aversion from the commands of reason, and all hypocrisy, and self-love, and discontent with the portion which has been given to thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "III. Do, soul, do; abuse and contemn thyself; yet a while and the time for thee to respect thyself, will be at an end. Every man's happiness depends from himself, but behold thy life is almost at an end, whiles affording thyself no respect, thou dost make thy happiness to consist in the souls, and conceits of other men. IV. Why should any of these things that happen externally, so much distract thee? Give thyself leisure to learn some good thing, and cease roving and wandering to and fro. Thou must also take heed of another kind of wandering, for they are idle in their actions, who toil and labour in this life, and have no certain scope to which to direct all their motions, and desires.",
    author: "Marcus Aurelius",
  },
  {
    text: "Moreover, to endure labour; nor to need many things; when I have anything to do, to do it myself rather than by others; not to meddle with many businesses; and not easily to admit of any slander.",
    author: "Marcus Aurelius",
  },
  {
    text: "To conclude, always observe how ephemeral and worthless human things are, and what was yesterday a little mucus tomorrow will be a mummy or ashes.",
    author: "Marcus Aurelius",
  },
  {
    text: "X. It is the part of a man endowed with a good understanding faculty, to consider what they themselves are in very deed, from whose bare conceits and voices, honour and credit do proceed: as also what it is to die, and how if a man shall consider this by itself alone, to die, and separate from it in his mind all those things which with it usually represent themselves unto us, he can conceive of it no otherwise, than as of a work of nature, and he that fears any work of nature, is a very child. Now death, it is not only a work of nature, but also conducing to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Does the emerald lose its beauty for lack of admiration? Does gold, or ivory, or purple? A lyre or a dagger, a rosebud or a sapling?",
    author: "Marcus Aurelius",
  },
  {
    text: "FROM my grandfather Verus I learned good morals and the government of my temper.  From the reputation and remembrance of my father, modesty and a manly character. From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich. From",
    author: "Marcus Aurelius",
  },
  {
    text: "If thou findest in human life anything better than justice, truth, temperance, fortitude, and, in a word, anything better than thy own mind's self-satisfaction in the things which it enables thee to do according to right reason, and in the condition that is assigned to thee without thy own choice; if, I say, thou seest anything better than this, turn to it with all thy soul, and enjoy that which thou hast found to be the best. But if nothing appears to be better than the deity which is planted in thee, which has subjected to itself all thy appetites, and carefully examines all the impressions, and, as Socrates said, has detached itself from the persuasions of sense, and has submitted itself to the gods, and cares for mankind; if thou findest everything else smaller and of less value than this, give place to nothing else, for if thou dost once diverge and incline to it, thou wilt no longer without distraction be able to give the preference to that good thing which is thy proper possession and thy own; for it is not right that anything of any other kind, such as praise from the many, or power, or enjoyment of pleasure, should come into competition with that which is rationally and politically or practically good. All these things, even though they may seem to adapt themselves to the better things in a small degree, obtain the superiority all at once, and carry us away. But do thou, I say, simply and freely choose the better, and hold to it.- But that which is useful is the better.- Well then, if it is useful to thee as a rational being, keep to it; but if it is only useful to thee as an animal, say so, and maintain thy judgement without arrogance: only take care that thou makest the inquiry by a sure method.",
    author: "Marcus Aurelius",
  },
  {
    text: "They despise one another, yet they flatter one another;they sant to get above another and get they bow down to one another.",
    author: "Marcus Aurelius",
  },
  {
    text: "55. The existence of evil does not harm the world. And an individual act of evil does not harm the victim. Only one person is harmed by it???and he can stop being harmed as soon as he decides to.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stop allowing your mind to be a slave, to be jerked about by selfish impulses, to kick against fate and the present, and to mistrust the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "The Stoic discovers the model for his virtuous conduct in studying the laws of nature; just as each object, plant, and animal serves its fated role in the larger order, so the human strives to steer his actions in accordance with his unique power, reason, his inner mirror of the logos that governs the universe.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing is more pathetic than people who run around in circles, ???delving into the things that lie beneath??? and conducting investigations into the souls of the people around them, never realizing that all you have to do is to be attentive to the power inside you and worship it sincerely. To",
    author: "Marcus Aurelius",
  },
  {
    text: "The substance of the universe is obedient and compliant; and the reason that governs it has in itself no cause for doing evil, for it has no malice, nor does it do evil to anything, nor is anything harmed by it. But all things are made and perfected according to this reason.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou hast also forgotten that every man's mind partakes of the Deity, and issueth from thence; and that no man can properly call anything his own, no not his son, nor his body, nor his life; for that they all proceed from that One who is the giver of all things:",
    author: "Marcus Aurelius",
  },
  {
    text: "He who has seen the present has seen everything, that which happened in the most distant past and that which will happen in the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "Either pain affects the body (which is the body???s problem) or it affects the soul. But the soul can choose not to be affected, preserving its own serenity, its own tranquillity. All our decisions, urges, desires, aversions lie within. No evil can touch them.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the morning when thou risest unwillingly, let this thought be present,???I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist and for which I was brought into the world? Or have I been made for this, to lie in the bed-clothes and keep myself warm????But this is more pleasant.???Dost thou exist then to take thy pleasure, and not at all for action or exertion? Dost thou not see the little plants, the little birds, the ants, the spiders, the bees working together to put in order their several parts of the universe? And art thou unwilling to do the work of a human being, and dost thou not make haste to do that which is according to thy nature?",
    author: "Marcus Aurelius",
  },
  {
    text: "It was my tutor who dissuaded me from patronizing Green or Blue at the races, or Light or Heavy in the ring;",
    author: "Marcus Aurelius",
  },
  {
    text: "To the gods I am indebted for having good grandfathers, good parents, a good sister, good teachers, good associates, good kinsmen and friends, nearly everything good. Further, I owe it to the gods that I was not hurried into any offence against any of them, though I had a disposition which, if opportunity had offered, might have led me to do something of this kind; but, through their favour, there never was such a concurrence of circumstances as put me to the trial.",
    author: "Marcus Aurelius",
  },
  {
    text: "You can live here as you expect to live there.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is, in other words, not objects and events but the interpretations we place on them that are the problem. Our duty is therefore to exercise stringent control over the faculty of perception, with the aim of protecting our mind from error.",
    author: "Marcus Aurelius",
  },
  {
    text: "Loss is nothing else but change, and change is Nature's delight.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don't live as though you were going to live a myriad years. Fate is hanging over your head; while you have life, while you may, become good.",
    author: "Marcus Aurelius",
  },
  {
    text: "If our intellectual part is common, the reason also, in respect of which we are rational beings, is common: if this is so, common also is the reason which commands us what to do, and what not to do;",
    author: "Marcus Aurelius",
  },
  {
    text: "We were made, Marcus tells us over and over, not for ourselves but for others, and our nature is fundamentally unselfish. In our relationships with others we must work for their collective good, while treating them justly and fairly as individuals.",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work ??? as a human being. What do I have to complain of, if I???m going to do what I was born for ??? the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?",
    author: "Marcus Aurelius",
  },
  {
    text: "Waste no more time arguing that a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Set aside a certain number of days, during which you shall be content with the scantiest and cheapest fare, with coarse and rough dress, saying to yourself the while: "Is this the condition that I feared?',
    author: "Marcus Aurelius",
  },
  {
    text: "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now. But if anything in your own disposition gives you pain, who hinders you from correcting your opinion? And even if you are pained because you are not doing some particular thing that seems to you to be right, why do you not rather act than complain? ???But some insuperable obstacle is in the way.??? Do not be grieved then, for the cause of its not being done depends not on you. ???But it is not worthwhile to live if this cannot be done.??? Take your departure then from life contentedly, just as he dies who is in full activity, and well pleased, too, with the things that are obstacles.",
    author: "Marcus Aurelius",
  },
  {
    text: "From my governor, to be neither of the green nor of the blue party at the games in the Circus, nor a partisan either of the Parmularius or the Scutarius at the gladiators' fights; from him too I learned endurance of labour, and to want little, and to work with my own hands, and not to meddle with other people's affairs, and not to be ready to listen to slander. From",
    author: "Marcus Aurelius",
  },
  {
    text: "Run down the list of those who felt intense anger at something: the most famous, the most unfortunate, the most hated, the most whatever: Where is all that now? Smoke, dust, legend???or not even a legend. Think of all the examples. And how trivial the things we want so passionately are.",
    author: "Marcus Aurelius",
  },
  {
    text: "Concentrate every minute like a Roman???like a man???on doing what???s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can???if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable. You",
    author: "Marcus Aurelius",
  },
  {
    text: "Human society is a single organism, like an individual human body or a tree. But",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider the whole universe whereof thou art but a very little part, and the whole age of the world together, whereof but a short and very momentary portion is allotted unto thee, and all the fates and destinies together, of which how much is it that comes to thy part and share.",
    author: "Marcus Aurelius",
  },
  {
    text: "God sees the minds (ruling principles) of all men bared of the material vesture and rind and impurities. For with his intellectual part alone he touches the intelligence only which has flowed and been derived from himself into these bodies. And if thou also usest thyself to do this, thou wilt rid thyself of thy much trouble.",
    author: "Marcus Aurelius",
  },
  {
    text: "You should always be ready to apply these two rules of action, the first, to do nothing other than what the kingly and law-making art ordains for the benefits of humankind, and, the second, to be prepared to change your mind if someone is at hand to put you right and guide you away from some groundless opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "The despicable phoniness of people who say, ???Listen, I???m going to level with you here.??? What does that mean? It shouldn???t even need to be said. It should be obvious???written in block letters on your forehead. It should be audible in your voice, visible in your eyes, like a lover who looks into your face and takes in the whole story at a glance. A straightforward, honest person should be like someone who stinks: when you???re in the same room with him, you know it. But false straightforwardness is like a knife in the back.",
    author: "Marcus Aurelius",
  },
  {
    text: "Either the gods have power or they don???t. If they don???t, why pray? If they do, then why not pray for something else instead of for things to happen or not to happen? Pray not to feel fear. Or desire, or grief. If the gods can do anything, they can surely do that for us.???But those are things the gods left up to me. Then isn???t it better to do what???s up to you???like a free man ???than to be passively controlled by what isn???t, like a slave or beggar? And what makes you think the gods don???t care about what???s up to us? Start praying like this and you???ll see. Not ???some way to sleep with her??????but a way to stop wanting to. Not ???some way to get rid of him??????but a way to stop trying. Not ???some way to save my child??????but a way to lose your fear. Redirect your prayers like that, and watch what happens.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everywhere, at each moment, you have the option: to accept this event with humility [will]; to treat this person as he should be treated [action]; to approach this thought with care, so that nothing irrational creeps in [perception].",
    author: "Marcus Aurelius",
  },
  {
    text: "The body and its parts are a river, the soul a dream and mist, life is warfare and a journey far from home, lasting reputation is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Objective judgment ??? Unselfish action ??? Willing acceptance ??? of all external events.",
    author: "Marcus Aurelius",
  },
  {
    text: "Is your cucumber bitter? Throw it away. Are there briars in your path? Turn aside. That is enough. Do not go on to say, 'Why were things of this sort ever brought into the world?' The student of nature will only laugh at you; just as a carpenter or a shoemaker would laugh, if you found fault with the shavings and scraps from their work which you saw in the shop. Yet they, at least, have somewhere to throw their litter; whereas Nature has no such out-place. That is the miracle of her workmanship: that in spite of this self-limitation, she nevertheless transmutes into herself everything that seems worn-out or old or useless, and re-fashions it into new creations, so as never to need either fresh supplies from without, or a place to discard her refuse. Her own space, her own materials and her own skill are sufficient for her.",
    author: "Marcus Aurelius",
  },
  {
    text: "The earth, saith the poet, doth often long after the rain. So is the glorious sky often as desirous to fall upon the earth, which argues a mutual kind of love between them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Another does wrong. What is that to me? Let him look to it; he has his own disposition, his own activity. I have now what Universal Nature wills me to have, and I do what my own nature wills me to do.",
    author: "Marcus Aurelius",
  },
  {
    text: "Desnudas de su corteza contempla las causas: los significados de las acciones, qu?? es el sufrimiento, qu?? es el placer, qu?? es la muerte, qu?? es la fama, qui??n es el culpable de tu propia falta de tiempo, c??mo nadie es impedido por otro, que todo es suposici??n[482].",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing happens to any man which he is not formed by nature to bear.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you have been putting off these things, and how often you have received an opportunity from the gods, and yet do not use it. You must now at last perceive of what universe you are a part, and from what administrator of the universe your existence flows, and that a limit of time is fixed for you, which if you do not use for clearing away the clouds from your mind, it will go and you will go, and it will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "No hay que censurar a los dioses porque no yerran en nada, ni contra su voluntad ni a prop??sito. Tampoco a los hombres, porque en nada yerran si no es contra su voluntad. En conclusi??n no hay que censurar a nadie.",
    author: "Marcus Aurelius",
  },
  {
    text: "When the longest- and shortest-lived of us dies their loss is precisely equal. For the sole thing of which any of us can be deprived is the present, since this is all we own, and nobody can lose what is not theirs.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is peculiar to man to love even those who do wrong. And this happens, if when they do wrong it occurs to you that they are fellow humans and that they do wrong through ignorance and unintentionally, and that soon both of you will die; and above all, that the wrongdoer has done you no harm, for he has not made your ruling faculty worse than it was before.",
    author: "Marcus Aurelius",
  },
  {
    text: "You can discard most of the junk that clutters your mind???things that exist only there???and clear out space for yourself:  ??? by comprehending the scale of the world  ??? by contemplating infinite time  ??? by thinking of the speed with which things change???each part of every thing; the narrow space between our birth and death; the infinite time before; the equally unbounded time that follows.",
    author: "Marcus Aurelius",
  },
  {
    text: "general, and a scarcity of individual healers. It was the doctrine of Marcus Aurelius that most of the ills of life come to us from our own imagination, that it was not in the power of others seriously to interfere with the calm, temperate life of an individual, and that when a fellow being did anything to us that seemed unjust he was acting in ignorance, and that instead of stirring up anger within us it should stir our pity for him. Oftentimes by careful self-examination we should find that the fault was more our own than that of our fellow, and our sufferings were rather from our own opinions than from anything",
    author: "Marcus Aurelius",
  },
  {
    text: "To the world: Your harmony is mine. Whatever time you choose is the right time. Not late, not early.",
    author: "Marcus Aurelius",
  },
  {
    text: "For the entire earth is but a point, and the place of your own habitation but a minute corner in it. (...) Remember then to withdraw into the little field of self. Above all, never struggle or strain; but be master of yourself.",
    author: "Marcus Aurelius",
  },
  {
    text: "How free from all vanity he carried himself in matter of honour and dignity, (as they are esteemed:) his laboriousness and assiduity, his readiness to hear any man, that had aught to say tending to any common good:",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not despise death, but be well content with it, since this, too, is one of those things that nature wills. For such as it is to be young and to grow old, and to increase and to reach maturity, and to have teeth and beard and grey hairs, and to beget, and to be pregnant and to bring forth, and all the other natural operations that the seasons of your life bring, such also is dissolution. This, then, is consistent with the character of a reflecting man, to be neither careless nor impatient nor contemptuous with respect to death, but to wait for it as one of the operations of nature. As you now wait for the time when the child shall come out of your wife???s womb, so be ready for the time when your soul shall fall out of this envelope.",
    author: "Marcus Aurelius",
  },
  {
    text: "How free from all vanity he carried himself in matter of honour and dignity, (as they are esteemed:) his laboriousness and assiduity, his readiness to hear any man, that had aught to say tending to any common good: how generally and impartially he would give every man his due; his skill and knowledge,",
    author: "Marcus Aurelius",
  },
  {
    text: "If you seek tranquillity, do less.??? Or (more accurately) do what???s essential???what",
    author: "Marcus Aurelius",
  },
  {
    text: "The whole Universe is change, and life itself is but what you deem it.",
    author: "Marcus Aurelius",
  },
  {
    text: "What is not good for the hive is no good for the bee",
    author: "Marcus Aurelius",
  },
  {
    text: "lowly; but a man's true greatness lies in the consciousness of an honest purpose in life, founded on a just estimate of himself and everything else, on frequent self-examination, and a steady obedience to the rule which he knows to be right, without troubling himself, as the emperor says he should not, about what others may think or say, or whether they do or do not do that which he thinks and says and does.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is ridiculous not to escape from one???s own vices, which is possible, while trying to escape the vices of others, which is impossible.",
    author: "Marcus Aurelius",
  },
  {
    text: "Reverence the sovereign power over things in the Universe; this is what uses all and marshals all. In like manner, too, reverence the sovereign power in yourself; and this is of one kind with that. For in you also this is what uses the rest, and your manner of living is governed by this.",
    author: "Marcus Aurelius",
  },
  {
    text: "He who dreads death, dreads either an extinction of all sense, or dreads a different sort of sensation. If all sense is extinguished, there can be no sense of evil. If a different sort of sense is acquired, you become another sort of living creature; and don???t cease to live.",
    author: "Marcus Aurelius",
  },
  {
    text: "(...) you have grown beyond supposing such actions to be either good or bad, and therefore it will be so much the easier to be tolerant of another's blindness.",
    author: "Marcus Aurelius",
  },
  {
    text: "And to behave in a conciliatory way when people who have angered or annoyed us want to make up.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have no assurance that they are doing wrong at all, for the motives of man's actions are not always what they seem. There is generally much to learn before any judgement can be pronounced with certainty on another's doings.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe is flux, life is opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "To undertake nothing: i. at random or without a purpose; ii. for any reason but the common good.",
    author: "Marcus Aurelius",
  },
  {
    text: "At best suffer patiently, if thou canst not suffer joyously.",
    author: "Marcus Aurelius",
  },
  {
    text: "People who love what they do wear themselves down doing it, they even forget to wash or eat.",
    author: "Marcus Aurelius",
  },
  {
    text: "Te embarcaste, hiciste el viaje, llegaste al puerto: ??desembarca!",
    author: "Marcus Aurelius",
  },
  {
    text: "Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self surrender.",
    author: "Marcus Aurelius",
  },
  {
    text: "One man after burying another has been laid out dead, and another buries him; and all this in a short time. To conclude, always observe how ephemeral and worthless human things are, and what was yesterday a little mucus, to-morrow will be a mummy or ashes. Pass then through this little space of time conformably to nature, and end thy journey in content, just as an olive falls off when it is ripe, blessing nature who produced it, and thanking the tree on which it grew.",
    author: "Marcus Aurelius",
  },
  { text: "No pointless actions.", author: "Marcus Aurelius" },
  {
    text: "If it is not right, do not do it: if it is not true, do not say it. For let your impulse be in your own power.",
    author: "Marcus Aurelius",
  },
  {
    text: "Today I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Say to yourself first thing in the morning: today I shall meet people who are meddling, ungrateful, aggressive, treacherous, malicious, unsocial. All this has afflicted them through their ignorance of true good and evil. But I have that the nature of good is what is right, and the nature of evil what is wrong; and I reflected that the nature of the offender himself is akin to my own -- not a kinship of blood or seed, but a sharing in the same mind, the same fragment of divinity. Therefore I cannot be harmed by any of them, as none will infect me with their wrong. Nor can I be angry with my kinsman or hate him. We were born for cooperation, like feet, like hands, like eyelids, like the rows of upper and lower teeth. So to work in opposition to one another is against nature: and anger or rejection is opposition.",
    author: "Marcus Aurelius",
  },
  {
    text: "And that might be applied to him which is recorded of Socrates, that he was able both to abstain from, and to enjoy, those things which many are too weak to abstain from, and cannot enjoy without excess. But to be strong enough both to bear the one and to be sober in the other is the mark of a man who has a perfect and invincible soul, such as he showed in the illness of Maximus.",
    author: "Marcus Aurelius",
  },
  {
    text: "Every man's happiness depends from himself, but behold thy life is almost at an end, whiles affording thyself no respect, thou dost make thy happiness to consist in the souls, and conceits of other men.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.",
    author: "Marcus Aurelius",
  },
  {
    text: "The thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
    author: "Marcus Aurelius",
  },
  { text: "?????????? ???????? ???????????? ???????? ????????????", author: "Marcus Aurelius" },
  {
    text: "Pride is a master of deception: when you think you???re occupied in the weightiest business, that???s when he has you in his spell. (Compare Crates on Xenocrates.)",
    author: "Marcus Aurelius",
  },
  {
    text: "..Is this what I was created for? To huddle under the blankets and stay warm?",
    author: "Marcus Aurelius",
  },
  {
    text: "Be content to seem what you really are.",
    author: "Marcus Aurelius",
  },
  {
    text: "So remember this principle when something threatens to cause you pain: the thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not suppose you are hurt, and your complaint ceases; cease your complaint, and you are not hurt??? (iv. 7),",
    author: "Marcus Aurelius",
  },
  {
    text: "And he cares nothing for their praise???men who can???t even meet their own standards.",
    author: "Marcus Aurelius",
  },
  {
    text: "And I observed that he had overcome all passion for boys;",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider that everything is opinion, and opinion is in thy power. Take away then, when thou choosest, thy opinion, and like a mariner, who has doubled the promontory, thou wilt find calm, everything stable, and a waveless bay. Any",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long thou hast been putting off these things, and how often thou hast received an opportunity from the gods, and yet dost not use it. Thou must now at last perceive of what universe thou art a part, and of what administrator of the universe thy existence is an efflux, and that a limit of time is fixed for thee, which if thou dost not use for clearing away the clouds from thy mind, it will go and thou wilt go, and it will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "BEGIN the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial.",
    author: "Marcus Aurelius",
  },
  {
    text: "External things are not the problem. It???s your assessment of them. Which you can erase right now. If the problem is something in your own character, who???s stopping you from setting your mind straight?",
    author: "Marcus Aurelius",
  },
  {
    text: "Why doth a little thing said or done against thee make thee sorry? It is no new thing; it is not the first, nor shall it be the last, if thou live long. At best suffer patiently, if thou canst not suffer joyously.",
    author: "Marcus Aurelius",
  },
  {
    text: "And not to think of philosophy as your instructor, but as the sponge and egg white that relieve ophthalmia???as a soothing ointment, a warm lotion. Not",
    author: "Marcus Aurelius",
  },
  {
    text: "Should not thou rather blame thyself, who, when upon very good grounds of reason, thou mightst have thought it very probable, that such a thing would by such a one be committed, didst not only not foresee it, but moreover dost wonder at it, that such a thing should be.",
    author: "Marcus Aurelius",
  },
  {
    text: "If there were anything harmful on the other side of death, they would have made sure that the ability to avoid it was within you.",
    author: "Marcus Aurelius",
  },
  {
    text: "I learned endurance of labour, and to want little, and to work with my own hands, and not to meddle with other people's affairs, and not to be ready to listen to slander.",
    author: "Marcus Aurelius",
  },
  {
    text: "There is a kind of river of things passing into being and Time is a violent torrent. For no sooner is each seen, than it has been carried away, and another is being carried by, and that, too, will be carried away.",
    author: "Marcus Aurelius",
  },
  {
    text: "Est?? cerca que t?? te olvides de todo y tambi??n lo est?? que todos te olviden.",
    author: "Marcus Aurelius",
  },
  {
    text: "Adapt yourself to the things among which your lot has been cast and love sincerely the fellow creatures with whom destiny has ordained that you shall live.",
    author: "Marcus Aurelius",
  },
  {
    text: "Neither must he use himself to cut off actions only, but thoughts and imaginations also, that are unnecessary for so will unnecessary consequent actions the better be prevented and cut off.",
    author: "Marcus Aurelius",
  },
  {
    text: "19. Everything is here for a purpose, from horses to vine shoots. What???s surprising about that? Even the sun will tell you, ???I have a purpose,??? and the other gods as well. And why were you born? For pleasure? See if that answer will stand up to questioning.",
    author: "Marcus Aurelius",
  },
  {
    text: "Not to be offended with other men's liberty of speech,",
    author: "Marcus Aurelius",
  },
  {
    text: "How ridiculous and what a stranger he is who is surprised at anything which happens in life.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thus there are two reasons why you must be content with what happens to you: first because it was for you it came to pass, for you it was ordered and to you it was related, a thread of destiny stretching back to the most ancient causes; secondly because that which has come to each individually is a cause of the welfare and the completion in very truth of the actual continuance of that which governs the Whole.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death smiles at us all, all a man can do is smile back.",
    author: "Marcus Aurelius",
  },
  {
    text: "Casting aside other things, hold to the precious few; and besides bear in mind that every man lives only the present, which is an indivisible point, and that all the rest of his life is either past or is uncertain.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have seen those things, look now at these: do not trouble yourself, make yourself simple. Does a man do wrong? He does wrong to himself. Has some chance befallen you? It is well; from Universal Nature, from the beginning, all that befalls was determined for you and the thread was spun. The sum of the matter is this: life is short; the present must be turned to profit with reasonableness and right. Be sober without effort.",
    author: "Marcus Aurelius",
  },
  {
    text: "To the gods I am indebted for having good grandfathers, good parents, a good sister, good teachers, good associates, good kinsmen and friends, nearly everything good.",
    author: "Marcus Aurelius",
  },
  {
    text: "So must a good ear, and a good smell be ready for whatsoever is either to be heard, or smelt: and a good stomach as indifferent to all kinds of food, as a millstone is, to whatsoever she was made for to grind. As ready therefore must a sound understanding be for whatsoever shall happen. But he that saith, O that my children might live! and, O that all men might commend me for whatsoever I do! is an eye that seeks after green things; or as teeth, after that which is tender.",
    author: "Marcus Aurelius",
  },
  {
    text: "All human beings have a share of the logos, and all have roles to play in the vast design that is the world. But this is not to say that all humans are equal or that the roles they are assigned are interchangeable. Marcus, like most of his contemporaries, took it for granted that human society was hierarchical, and this is borne out by the images he uses to describe it. Human society is a single organism, like an individual human body or a tree. But the trunk of the tree is not to be confused with the leaves, or the hands and feet with the head. Our duty to act justly does not mean that we must treat others as our equals; it means that we must treat them as they deserve. And their deserts are determined in part by their position in the hierarchy.",
    author: "Marcus Aurelius",
  },
  {
    text: "Altogether the interval is small between birth and death; and consider with how much trouble, and in company with what sort of people and in what a feeble body this interval is laboriously passed. Do not then consider life a thing of any value. For look to the immensity of time behind thee, and to the time which is before thee, another boundless space. In this infinity then what is the difference between him who lives three days and him who lives three generations?",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever this is that I am, it is flesh and a little spirit and an intelligence. Throw away your books; stop letting yourself be distracted. That is not allowed. Instead, as if you were dying right now, despise your flesh. A mess of blood, pieces of bone, a woven tangle of nerves, veins, arteries. Consider what the spirit is: air, and never the same air, but vomited out and gulped in again every instant. Finally, the intelligence. Think of it this way: You are an old man. Stop allowing your mind to be a slave, to be jerked about by selfish impulses, to kick against fate and the present, and to mistrust the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "Use thyself; as often, as thou seest any man do anything, presently (if it be possible) to say unto thyself, What is this man's end in this his action? But begin this course with thyself first of all, and diligently examine thyself concerning whatsoever thou doest.",
    author: "Marcus Aurelius",
  },
  {
    text: "to grumble at anything that happens is a rebellion against Nature, in some part of which are bound up the natures of all other things.",
    author: "Marcus Aurelius",
  },
  {
    text: "where a man can live, there he can also live well. But he must live in a palace;- well then, he can also live well in a palace.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever this is that I am, it is flesh and a little spirit and an intelligence. Throw away your books; stop letting yourself be distracted. That is not allowed. Instead, as if you were dying right now, despise your flesh. A mess of blood, pieces of bone, a woven tangle of nerves, veins, arteries. Consider what the spirit is: air, and ever the same air, but vomited out and gulped in again every instant. Finally, the intelligence. Think of it this way: You are an old man. Stop allowing your mind to be a slave, to be jerked about by selfish impulses, to kick against fate and the present, and to mistrust the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe, then, is God, of whom the popular gods are manifestations; while legends and myths are allegorical. The soul of man is thus an emanation from the godhead, into whom it will eventually be re-absorbed. The divine ruling principle makes all things work together for good, but for the good of the whole. The highest good of man is consciously to work with God for the common good, and this is the sense in which the Stoic tried to live in accord with nature. In the individual it is virtue alone which enables him to do this; as Providence rules the universe, so virtue in the soul must rule man.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgement about it. And it is in your power to wipe out this judgement now. But if anything in your own disposition gives you pain, who hinders you from correcting your opinion? And even if you are pained because you are not doing some particular thing that seems to you to be right, why do you not rather act than complain?",
    author: "Marcus Aurelius",
  },
  {
    text: "Were you to live three thousand years, or even thirty thousand, remember that the sole life which a man can lose is that which he is living at the moment; and furthermore, that he can have no other life except the one he loses. This means that the longest life and the shortest amount to the same thing. For the passing minute is every man???s equal possession, but what has once gone by is not ours.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man should always have these two rules in readiness; the one, to do only whatever the reason of the ruling and legislating faculty may suggest for the use of men; the other, to change thy opinion, if there is any one at hand who sets thee right and moves thee from any opinion. But this change of opinion must proceed only from a certain persuasion, as of what is just or of common advantage, and the like, not because it appears pleasant or brings reputation. Hast",
    author: "Marcus Aurelius",
  },
  {
    text: "Of the life of man the duration is but a point, its substance streaming away, its perception dim, the fabric of the entire body prone to decay, and the soul a vortex, and fortune incalculable, and fame uncertain. In a word all the things of the body are as a river, and the things of the soul as a dream and a vapour; and life is a warfare and a pilgrim???s sojourn, and fame after death is only forgetfulness.",
    author: "Marcus Aurelius",
  },
  {
    text: "If it is not right, do not do it: if it is not true, do not say it.",
    author: "Marcus Aurelius",
  },
  {
    text: "IV. He that sinneth, sinneth unto himself. He that is unjust, hurts himself, in that he makes himself worse than he was before. Not he only that committeth, but he also that omitteth something, is oftentimes unjust.",
    author: "Marcus Aurelius",
  },
  {
    text: "Another useful point to bear in mind: What qualities has nature given us to counter that defect? As an antidote to unkindness it gave us kindness. And other qualities to balance other flaws.",
    author: "Marcus Aurelius",
  },
  {
    text: "Hark ye, friend; you have been a burgher of this great city. What matter whether you have lived in it but five years or three? If you have observed the laws of the corporation, the length or shortness of the time makes no difference. Where is the hardship, then, if Nature, that planted you here, orders your removal? You cannot say you are sent off by a tyrant or an unjust judge. No; you quit the stage as fairly as a player does that has his discharge from the master of the revels. But I have only gone through three acts, and not held out till the end of the fifth, you say. Well, but in life three acts make the play entire. He that ordered the first scene now gives the sign for shutting up the last. You are neither accountable for one nor the other.",
    author: "Marcus Aurelius",
  },
  {
    text: "Sexual ecstasy is like death. It is one of the secrets of nature???s wisdom.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best kind of revenge is, not to become like unto them.' There",
    author: "Marcus Aurelius",
  },
  {
    text: "Lucilla saw Verus die, and then Lucilla died. Secunda saw Maximus die, and then Secunda died. Epitynchanus saw Diotimus die, and Epitynchanus died. Antoninus saw Faustina die, and then Antoninus died. Such is everything. Celer saw Hadrian die, and then Celer died. And those sharp-witted men, either seers or men inflated with pride, where are they? For instance the sharp-witted men, Charax and Demetrius the Platonist and Eudaemon, and any one else like them. All ephemeral, dead long ago. Some indeed have not been remembered even for a short time, and others have become the heroes of fables, and again others have disappeared even from fables. Remember this then, that this little compound, thyself, must either be dissolved, or thy poor breath must be extinguished, or be removed and placed elsewhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "25. Try how the life of the good man suits thee, the life of him who is satisfied with his portion out of the whole, and satisfied with his own just acts and benevolent disposition.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing is as encouraging as when virtues are visibly embodied in the people around us, when we???re practically showered with them.",
    author: "Marcus Aurelius",
  },
  {
    text: "he may not be profound, he is always sincere.",
    author: "Marcus Aurelius",
  },
  { text: "Practice even what seems impossible.", author: "Marcus Aurelius" },
  {
    text: "And thou wilt give thyself relief, if thou doest every act of thy life as if it were the last, laying aside all carelessness and passionate aversion from the commands of reason, and all hypocrisy, and self-love, and discontent with the portion which has been given to thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "It should be a man's task, says the Imitation, 'to overcome himself, and every day to be stronger than himself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Keep before your eyes the swift onset of oblivion, and the abysses of eternity before us and behind; mark how hollow are the echoes of applause, how fickle and undiscerning the judgments of professed admirers, and how puny the arena of human fame. For the entire earth is but a point, and the place of our own habitation but a minute corner in it; and how many are therein who will praise you, and what sort of men are they?",
    author: "Marcus Aurelius",
  },
  {
    text: "Choose not to be harmed???and you won???t feel harmed.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stop talking about what the good man is like, and just be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "in an old woman and an old man he will be able to see a certain maturity and comeliness; and the attractive loveliness of young persons he will be able to look on with chaste eyes; and many such things will present themselves, not pleasing to every man, but to him only who has become truly familiar with nature and her works.",
    author: "Marcus Aurelius",
  },
  {
    text: "vex not thy spirit at the course of things,they not heed thy vexations.",
    author: "Marcus Aurelius",
  },
  {
    text: "A prudent governor will not roughly oppose even the superstitions of his people; and though he may wish that they were wiser, he will know that he cannot make them so by offending their prejudices.",
    author: "Marcus Aurelius",
  },
  {
    text: "Let the god that is within you be the champion of the being you are.",
    author: "Marcus Aurelius",
  },
  {
    text: "If some one tells you that so and so speaks ill of you, do not defend yourself against what he says, but answer, 'He did not know my other faults, or he would not have mentioned these alone.' It",
    author: "Marcus Aurelius",
  },
  {
    text: "Then consider the Middle (and later the New) Comedy and what it aimed at???gradually degenerating into mere realism and empty technique.",
    author: "Marcus Aurelius",
  },
  {
    text: "This thou must always bear in mind, what is the nature of the whole, and what is my nature, and how this is related to that, and what kind of a part it is of what kind of a whole; and that there is no one who hinders thee from always doing and saying the things which are according to the nature of which thou art a part.",
    author: "Marcus Aurelius",
  },
  {
    text: "I walk in Nature's way until I shall lie down and rest, breathing my last in this from which I draw my daily breath, and lying down on this from which my father drew his vital seed, my mother her blood, my nurse her milk; from which for so many years I am fed and watered day by day; which bears my footstep and my misusing it for so many purposes.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do, soul, do; abuse and contemn thyself; yet a while and the time for thee to respect thyself, will be at an end. Every man's happiness depends from himself, but behold thy life is almost at an end, whiles affording thyself no respect, thou dost make thy happiness to consist in the souls, and conceits of other men.",
    author: "Marcus Aurelius",
  },
  {
    text: "For nowhere, either with more quiet or more freedom from trouble, does a man retire than into his own soul, particularly when he has within him such thoughts that by looking into them he is immediately in perfect tranquillity; and I affirm that tranquillity is nothing else than the good ordering of the mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "You should take no action unwillingly, selfishly, uncritically, or with conflicting motives. Do not dress up your thoughts in smart finery: do not be a gabbler or a meddler. Further, let the god that is within you be the champion of the being you are a male, mature in years, a statesman, a Roman, a ruler: one who has taken his post like a soldier waiting for the Retreat from life to sound, and ready to depart, past the need for any loyal oath or human witness. And see that you keep a cheerful demeanour, and retain your independence of outside help and the peace which others can give. Your duty is to stand straight - not held straight.",
    author: "Marcus Aurelius",
  },
  {
    text: ".. how worthless are all these poor people who are engaged in matters political, and, as they suppose, are playing the philosopher. All drivelers. Well then, man: do what Nature now requires. Set yourself in motion, if it is in your power, and do not look about to see if anyone will observe it, nor expect Plato's Republic: but be content if the smallest thing goes on well, and consider such an event to be no small matter.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do you have reason? I have. Why then do you not use it? For if reason does its own work, what else could you wish for?",
    author: "Marcus Aurelius",
  },
  {
    text: "all things soon pass away and become a mere tale, and complete oblivion soon buries them. And I say this of those who have shone in a wondrous way.",
    author: "Marcus Aurelius",
  },
  {
    text: "Is an emerald suddenly flawed if no one admires it?",
    author: "Marcus Aurelius",
  },
  {
    text: "Take pleasure in one thing and rest in it, in passing from one social act to another social act, thinking of God.",
    author: "Marcus Aurelius",
  },
  {
    text: "But fortunate means that a man has assigned to himself a good fortune: and a good fortune is good disposition of the soul, good emotions, good actions.",
    author: "Marcus Aurelius",
  },
  {
    text: '???\tWhatever anyone does or says, I must be good; just as if the emerald were always saying this: "Whatever anyone does or says, I must still be emerald, and keep my color.',
    author: "Marcus Aurelius",
  },
  {
    text: "Keep reminding yourself of the way things are connected, of their relatedness. All things are implicated in one another and in sympathy with each other. This event is the consequence of some other one. Things push and pull on each other, and breathe together, and are one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Inlatura parerea: este inlaturat ???am fost vatamat???; inlatura ???am fost vatamat??? este inlaturat si prejudiciul.",
    author: "Marcus Aurelius",
  },
  {
    text: "Similarly, man is born for deeds of kindness; and when he has done a kindly action, or otherwise served the common welfare, he has done what he was made for, and has received his quittance.",
    author: "Marcus Aurelius",
  },
  {
    text: "Si te afliges por alguna causa externa, no es ella lo que te importuna, sino el juicio que t?? haces de ella. Y borrar ese juicio, de ti depende. Pero si te aflige algo que radica en tu disposici??n, ??Qui??n te impide rectificar tu criterio?",
    author: "Marcus Aurelius",
  },
  {
    text: "Let there be freedom from perturbations with respect to the things which come from the external cause; and let there be justice in the things done by virtue of the internal cause, that is, let there be movement and action terminating in this, in social acts, for this is according to thy nature. Thou",
    author: "Marcus Aurelius",
  },
  {
    text: "Entonces, ??qu?? es lo que puede escoltamos? S??lo una cosa, la filosof??a. Esto es vigilar que el esp??ritu divino interior est?? sin vejaci??n, sin da??o, m??s fuerte que los placeres y los sufrimientos, que no haga nada al azar ni con mentira o fingimiento, que no tenga necesidad de que otro haga o deje de hacer algo. Y adem??s que acepte lo que ocurre y lo que se le ha asignado como algo que viene de all?? de donde ??l vino. Por encima de todo, aguardar la muerte con el pensamiento favorable de que no es otra cosa sino disgregaci??n de los elementos de los que est?? compuesto cada ser vivo. Si precisamente para los elementos en s?? no hay nada terrible en que cada uno se transforme sin interrupci??n en otro, ??por qu?? uno ve con malos ojos la transformaci??n y disgregaci??n de todos? En efecto, se produce seg??n la naturaleza y nada es malo si es seg??n la naturaleza.",
    author: "Marcus Aurelius",
  },
  {
    text: "The goal that you hope you will one day arrive at after a long and roundabout journey you are able to possess right now, if only you do not deny it to yourself. That is, if you can let go of the past, entrust the future to Providence and redirect the present according to justice and the sacred. To the sacred, so that you welcome what has been given to you, for Nature has brought this to you, and you to it; and to justice, in order that you may speak the truth freely and without distortion, and that you may act in accordance with what is lawful and right. Do not allow yourself to be hindered by the harmful actions, judgments, or the words of another, or by the sensations of the flesh which has formed itself around you. Let the body take care of those. But if, when you have come to the end, having let go of all other things, you honor only your guiding part and the divinity that is within you, and you do not fear ceasing to live so much as you fear never having begun to live in accordance with Nature--then you will be a man who is worth of the Cosmos that created you; and you will cease to live like a stranger in your own land, that is, surprised at unexpected everyday occurrences and wholly distracted by this and that.",
    author: "Marcus Aurelius",
  },
  {
    text: "Ningu??m vale mais que as suas ambi????es",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens to every man, this is for the interest of the universal:",
    author: "Marcus Aurelius",
  },
  {
    text: "Never esteem of anything as profitable, which shall ever constrain thee either to break thy faith, or to lose thy modesty; to hate any man, to suspect, to curse, to dissemble, to lust after anything, that requireth the secret of walls or veils.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou canst remove out of the way many useless things among those which disturb thee, for they lie entirely in thy opinion; and thou wilt then gain for thyself ample space by comprehending the whole universe in thy mind, and by contemplating the eternity of time, and observing the rapid change of every several thing, how short is the time from birth to dissolution, and the illimitable time before birth as well as the equally boundless time after dissolution. All",
    author: "Marcus Aurelius",
  },
  {
    text: "Of Diognetus, not to busy myself about vain things, and not easily to believe those things, which are commonly spoken, by such as take upon them to work wonders, and by sorcerers, or prestidigitators, and impostors; concerning the power of charms, and their driving out of demons, or evil spirits; and the like.",
    author: "Marcus Aurelius",
  },
  {
    text: "43. Time is a river, a violent current of events, glimpsed once and already carried past us, and another follows and is gone.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wie weit bist du in der Erkenntnis, da?? keine andere Lebensweise zum Philosophieren so geeignet sei, als die, die du jetzt gerade f??hrst?",
    author: "Marcus Aurelius",
  },
  {
    text: "Let no act be done without a purpose, nor otherwise than according to the perfect principles of art.",
    author: "Marcus Aurelius",
  },
  {
    text: "si te elevaran en el aire y miraras hacia abajo las cosas humanas y su versatilidad, piensa que las despreciar??as al verlas todas al mismo tiempo que las que habitan por todo el aire y la atm??sfera[489]. Y que cuantas veces seas elevado ver??s lo mismo, lo semejante, su brevedad. De eso depende el delirio de grandeza.",
    author: "Marcus Aurelius",
  },
  {
    text: "He who loves fame considers another man???s activity to be his own good; and he who loves pleasure, his own sensations; but he who has understanding, considers his own acts to be his own good. It",
    author: "Marcus Aurelius",
  },
  {
    text: "If you remove your judgement of anything that seems painful, you yourself stand quite immune to pain. 'What self?' Reason. 'But I am not just reason.' Granted. So let reason cause itself no pain, and if some other part of you is in trouble, it can form its own judgement for itself.",
    author: "Marcus Aurelius",
  },
  {
    text: "a man when he has done a good act, does not call out for others to come and see, but he goes on to another act, as a vine goes on to produce again the grapes in season.-",
    author: "Marcus Aurelius",
  },
  {
    text: "No desde??es la muerte; antes bien, ac??gela gustosamente, en la convicci??n de que ??sta tambi??n es una de las cosas que la naturaleza quiere. Porque cual es la juventud, la vejez, el crecimiento, la plenitud de la vida, el salir los dientes, la barba, las canas, la fecundaci??n, la pre??ez, el alumbramiento y las dem??s actividades naturales que llevan las estaciones de la vida, tal es tambi??n tu propia disoluci??n. Por consiguiente, es propio de un hombre dotado de raz??n comportarse ante la muerte no con hostilidad, ni con vehemencia, ni con orgullo, sino aguardarla como una m??s de las actividades naturales. Y, al igual que t?? aguardas el momento en que salga del vientre de tu mujer el reci??n nacido, as?? tambi??n aguarda la hora en que tu alma se desprender?? de esa envoltura.",
    author: "Marcus Aurelius",
  },
  {
    text: "We shrink from change; yet is there anything that can come into being without it?",
    author: "Marcus Aurelius",
  },
  {
    text: "Your character is simply the sum of your thoughts over time.",
    author: "Marcus Aurelius",
  },
  {
    text: "HE WHO acts unjustly acts impiously. For since the universal nature has made rational animals for the sake of one another to help one another according to their deserts, but in no way to injure one another, he who transgresses her will, is clearly guilty of impiety towards the highest divinity.",
    author: "Marcus Aurelius",
  },
  {
    text: "and to be easy and ready to be reconciled, and well pleased again with them that had offended me, as soon as any of them would be content to seek unto me again.",
    author: "Marcus Aurelius",
  },
  {
    text: "Look in, let not either the proper quality, or the true worth of anything pass thee, before thou hast fully it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Af??nate fijamente, a cada hora, como romano y como var??n, en hacer lo que tuvieres entre manos, con precisa y sincera gravedad, con amor, libertad y justicia, procurando desasirte de cualquier otra preocupaci??n. Lo conseguir??s si ejecutas cada acci??n de tu vida como si fuere la ??ltima, despojada de toda irreflexi??n y de toda apasionada repugnancia al se??or??o de la raz??n, sin falsedad, ni ego??smo, ni displicencia ante las disposiciones del destino. Ya ves cu??n pocos son los principios que debes poseer para vivir una vida pr??spera y temerosa de los dioses. Que los dioses no exigir??n otra cosa a quien observare estos preceptos.",
    author: "Marcus Aurelius",
  },
  {
    text: "No te distraigan los incidentes exteriores. Desoc??pate para aprender algo m??s de bueno, y cesa de andar girando como una devanadera. Conviene asimismo precaverte de otra clase de extrav??o. Que desvar??an los que, a causa de tantos quehaceres, se hast??an de la vida y no tienen blanco alguno al que dirijan todos sus esfuerzos y, en una palabra, sus ideas.",
    author: "Marcus Aurelius",
  },
  {
    text: "...because most of what we say and do is not essential. If you can eliminate it, you'll have more time and more tranquillity. Ask yourself at every moment, is this necessary???",
    author: "Marcus Aurelius",
  },
  {
    text: "With respect to pain, then, and pleasure, or death and life, or honour and dishonour, which the universal nature employs equally, whoever is not equally affected is manifestly acting impiously.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is precisely its unorthodox touches???its intimation of the idea of a personal god, its flashes of vulnerability and pain, its unwavering commitment to virtue above pleasure and to tranquillity above happiness, its unmistakable stamp of an uncompromisingly honest soul seeking the light of grace in a dark world???that lend the work its special power to charm and inspire.",
    author: "Marcus Aurelius",
  },
  {
    text: "Of my grandfather Verus I have learned to be gentle and meek, and to refrain from all anger and passion.",
    author: "Marcus Aurelius",
  },
  {
    text: "all these things, which thou seest, change immediately and will no longer be; and constantly bear in mind how many of these changes thou hast already witnessed. The",
    author: "Marcus Aurelius",
  },
  {
    text: "And indeed he who pursues pleasure as good, and avoids pain as evil, is guilty of impiety.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nada m??s infeliz que el hombre que lo inquiere todo girando de aqu?? para all??, que escruta, como dice el poeta, ??las profundidades de la tierra??, que indaga por conjeturas lo que acontece en el alma ajena, sin acabar de entender que le bastar??a s??lo aplicarse al dios que habita en su interior y venerarle como es debido. Este culto consiste en conservarse puro de pasiones; de temeridad y de disgusto por aquello que procede de los dioses y de los hombres. Porque lo que viene de los dioses es digno de respeto, por ser obra de s?? virtuosa; y lo que viene de los hombres nos es caro a causa del parentesco, si bien a veces no deja de ser, en cierto sentido, objeto de compasi??n, por su ignorancia del bien y del mal, ceguera no menor que la que nos impide poder discernir lo blanco de lo negro.",
    author: "Marcus Aurelius",
  },
  {
    text: 'What progress, you ask, have I made? I have begun to be a friend to myself." That was indeed a great benefit; such a person can never be alone. You may be sure that such a man is a friend to all mankind.',
    author: "Marcus Aurelius",
  },
  {
    text: "How rotten and spurious is the man who says: ???I have decided to be straightforward with you.",
    author: "Marcus Aurelius",
  },
  {
    text: "FROM MY GRANDFATHER VERUS I LEARNED GOOD MORALS AND THE government of my temper.",
    author: "Marcus Aurelius",
  },
  {
    text: "el no dejarme regir, ni aun en las cosas m??nimas, por otros principios que por la raz??n;",
    author: "Marcus Aurelius",
  },
  {
    text: "Mihin tahansa kyll??styisinkin, niin aina pysyn onnellisena, sill?? onnellinen on se, joka pystyy luomaan itselleen onnellisen kohtalon. Onnellinen kohtalo taas on hyv?? mieliala, hyv??t taipumukset, hyv??t teot.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you deal with irrational animals, with things and circumstances, be generous and straightforward. You are rational; they are not. When you deal with fellow human beings, behave as one. They share in the logos. And invoke the gods regardless. Don???t worry about how long you???ll go on doing this. A single afternoon would be enough. 24.",
    author: "Marcus Aurelius",
  },
  {
    text: "Se deshonra el alma del hombre particularmente cuando, por lo que a s?? toca, viene a hacerse como un divieso o una excrecencia en el cuerpo del mundo; porque irritarse con alguno de los acontecimientos que sobrevienen es como un absceso de la naturaleza universal, de la cual participan las naturalezas de todos los otros seres. El alma se deshonra asimismo cuando se muestra adversa a alguno de los otros hombres, o se comporta con ??l con intenci??n de hacerle mal, como acontece con las almas pose??das de ira. Lo tercero, se deshonra cuando se da por vencida del dolor o el placer. Lo cuarto, cuando disimula, finge y altera la verdad por obra o de palabra. Lo quinto, cuando lanza su actividad o sus apetitos sin blanco fijo, y lo ejecuta todo al azar, y sin continuidad, siendo as?? que aun las m??s peque??as acciones debieran tender a un fin propuesto: y el fin de los seres racionales es obedecer a la raz??n y a la ley de la naturaleza, la m??s augusta de las ciudades y gobiernos.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Consider individuals, survey men in general; there is none whose life does not look forward to the morrow. "What harm is there in this," you ask? Infinite harm; for such persons do not live, but are preparing to live. They postpone everything. Even if we paid strict attention, life would soon get ahead of us; but as we are now, life finds us lingering and passes us by as if it belonged to another, and though it ends on the final day, it perishes every day. But I must not exceed the bounds of a letter, which ought not to fill the reader\'s left hand. So I shall postpone to another day our case against the hair-splitters, those over-subtle fellows who make argumentation supreme instead of subordinate. Farewell. Letter XLVI - On a New Book by Lucilius I received the book of yours which you promised me. I opened it hastily with the idea of glancing over it at leisure; for I meant only to taste the volume. But by its own charm the book coaxed me into traversing it more at length. You may understand from this fact how eloquent it was;',
    author: "Marcus Aurelius",
  },
  {
    text: "Im allgemeinen schadet das B??se der Welt nicht, und im einzelnen Falle schadet es nur dem, dem es verg??nnt ist, sich frei davon zu machen, sobald er nur will.",
    author: "Marcus Aurelius",
  },
  {
    text: "Why all this guesswork? You can see what needs to be done. If you can see the road, follow it.",
    author: "Marcus Aurelius",
  },
  {
    text: "You may leave this life at any moment: have this possibility in your mind in all that you do or say or think. Now departure from the world of men is nothing to fear. If gods exist: because they would not involve you in any harm. If they do not exist, or if they have no care for humankind, then what is life to me in a world devoid of gods, or devoid of providence?",
    author: "Marcus Aurelius",
  },
  {
    text: "Destr??i a opini??o, e destru??do estar?? o pensamento ???fui prejudicado???. Destr??i a queixa ???fui prejudicado???, e destru??do estar?? o dano.",
    author: "Marcus Aurelius",
  },
  {
    text: "En ning??n lugar encuentra el hombre refugio m??s apacible, m??s tranquilo, que en su propia alma, sobre todo cuando atesora aquellos bienes que, con una sola ojeada, nos devuelven en seguida la libertad del esp??ritu: y lo que yo llamo libertad de esp??ritu no es otra cosa que el estado de un alma bien ordenada. Conc??dete, pues, constantemente, este descanso y rehazte con ??l. Tendr??s para ello ciertas m??ximas breves y elementales que, prontamente reducidas a la memoria, te borrar??n toda pesadumbre y te restituir??n libre de enfado, a tus funciones habituales. Porque, ??qu?? cosa no puedes soportar con paciencia? ??La ruindad de los hombres? Recuerda a este respecto que los seres razonables nacieron el uno para el otro, que de justicia deben sufrirse mutuamente, que sus faltas son involuntarias; piensa en los que, heridos de muerte, dados a la enemistad, al odio, traspasados por la lanza, est??n tendidos en la tumba, reducidos a cenizas. ??C??lmate, pues!",
    author: "Marcus Aurelius",
  },
  {
    text: "Jos jokin tuntuu sinusta vaikealta, niin ??l?? ajattele, ett?? ihminen ei voi sit?? kest????. Jos sen sijaan jokin on mahdollista ihmisen suorittaa, niin arvele voivasi itsekin siit?? selviyty??.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Qu?? hay, pues, que nos pueda llevar a salvamento? Una sola y ??nica cosa: la filosof??a. Y ??sta consiste en conservar el dios interior sin ultraje ni da??o, para que triunfe de placeres y dolores, para que no obre al acaso, y se mantenga lejos de toda falsedad y disimulo, al margen de que se haga o no se haga esto o aquello; adem??s, para que acepte la parte que le tocare en los varios sucesos accidentales e integrantes de su parte, como procedentes de aquel origen de quien procede ??l mismo; y, en particular, para que aguarde la muerte en actitud pl??cida, no viendo en ella otra cosa m??s que la disoluci??n de los elementos de que consta todo ser viviente. Si no hay nada temible para los mismos elementos en esta transformaci??n incesante de uno en otro, ??por qu?? temer la transformaci??n y disoluci??n de todas las otras cosas? Esto es conforme con la naturaleza: y nada es malo de cuanto a ella se acomoda.",
    author: "Marcus Aurelius",
  },
  {
    text: "????, ?????? ???????? ???????????????? ?????? ?????????????? ????????????????, ???????????????????? ?????????????????? ?????? ?????????????? ????????????????, ?? ????, ?????? ???????????? ???? ????????, ???????? ?????????????? ????????",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ???? ???? ???? ???????????????? ?????????????????? ??????, ???? ?? ?????????? ???????? ???????????? ????????????????????, ??????, ?????????????????? ????????, ?????? ???????????????? ?? ????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thy present opinion founded on understanding, and thy present conduct directed to social good, and thy present disposition of contentment with everything which happens- that is enough. Wipe out imagination: check desire: extinguish appetite: keep the ruling faculty in its own power. Among",
    author: "Marcus Aurelius",
  },
  {
    text: "From Plato: the man who has an elevated mind and takes a view of all time and of all substance, dost thou suppose it possible for him to think that human life is anything great? It is not possible, he said. Such a man then will think that death also is no evil.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Be like a rocky promontory against which the restless surf continually pounds; it stands fast while the churning sea is lulled to sleep at its feet. I hear you say, "How unlucky that this should happen to me!" Not at all! Say instead, "How lucky that I am not broken by what has happened and am not afraid of what is about to happen. The same blow might have struck anyone, but not many would have absorbed it without capitulation or complaint.',
    author: "Marcus Aurelius",
  },
  {
    text: "The nearer a man comes to a calm mind, the closer he is to strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "What need of prompt or hint when it is open to yourself to discern what needs to be done - and, if you can see your way, to follow it with kind but undeviating intent. If you cannot see the way, hold back and consult your best advisors. if some other factors obstruct this advice, proceed on your present resources, but with cautious deliberations, keeping always to what seems just. Justice is the best aim, as any failure is in fact a failure of justice. A man following reason in all things combines relaxation with initiative, spark with composure.",
    author: "Marcus Aurelius",
  },
  {
    text: "esta adversidad no es un infortunio, mas soportarlo noblemente es una suerte.                               50.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wait for it patiently???annihilation or metamorphosis.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens to every man, this is for the interest of the universal: this might be sufficient. But further thou wilt observe this also as a general truth, if thou dost observe, that whatever is profitable to any man is profitable also to other men. But let the word profitable be taken here in the common sense as said of things of the middle kind [neither good nor bad].",
    author: "Marcus Aurelius",
  },
  {
    text: "The soul becomes dyed with the colours of its thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "No malogres la parte de vida que te queda en averiguar vidas ajenas, a no ser que te propongas alg??n fin ??til a la comunidad. Te privas ciertamente de cumplir tu deber al revolver en tu imaginaci??n lo que hace fulano y por qu?? lo hace, qu?? dice, qu?? piensa, qu?? trama, y otras ocupaciones de esta ??ndole que te distraen de la consideraci??n de tu facultad rectora. Conviene, pues, no ensartar en la cadena de nuestros pensamientos lo que es temerario y vano y, m??s especialmente, lo f??til y lo malvado. Hay que avezarse, adem??s, a tener s??lo ideas tales que si alguien de repente te preguntare, bruscamente: ????En qu?? piensas ahora???, pudieras responder al instante, con toda franqueza: ??en esto?? o ??en aquello??. Se dejar?? ver entonces, pronto y evidentemente, que todo lo tuyo es simple, bondadoso, digno de un ser sociable e indiferente a los placeres y, en su conjunto, a las ideas de una vida voluptuosa; un ser que no abriga envidia, celos, desconfianza u otra pasi??n por la cual te fuera preciso avergonzarte al manifestar que la posee tu ??nimo.",
    author: "Marcus Aurelius",
  },
  {
    text: "Each of us lives only now, in this brief instant. The rest of our life has been lived already, or is impossible to see because it lies in the unknowable future.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou hast already had sufficient experience, that of those many things that hitherto thou hast erred and wandered about, thou couldst not find happiness in any of them. Not in syllogisms, and logical subtilties, not in wealth, not in honour and reputation, not in pleasure. In none of all these. Wherein then is it to be found? In the practice of those things, which the nature of man, as he is a man, doth require. How then shall he do those things? If his dogmata, or moral tenets and opinions (from which all motions and actions do proceed), be right and true.",
    author: "Marcus Aurelius",
  },
  {
    text: "Todo lo que ocurre, ocurre con raz??n. Lo descubrir??s, si fijamente lo observares. No digo s??lo que todo viene en fuerza de las consecuencias, pero tambi??n con relaci??n a la justicia, y como si alguien distribuyera a cada cual las recompensas seg??n su merecido. Sigue, pues, observando como has empezado, y todo cuanto hicieres hazlo con la intenci??n de ser un hombre de bien, seg??n la idea espec??fica que suele formarse del hombre recto. Practica esta regla en todas tus acciones.",
    author: "Marcus Aurelius",
  },
  {
    text: "If thou art pained by any external thing, it is not this that disturbs thee, but thy own judgment about it. And it is in thy power to wipe out this judgment now.",
    author: "Marcus Aurelius",
  },
  {
    text: "Art thou angry with him whose armpits stink? Art thou angry with him whose mouth smells foul? What good will this danger do thee? He has such a mouth, he has such arm-pits: it is necessary that such an emanation must come from such things- but the man has reason, it will be said, and he is able, if he takes pain, to discover wherein he offends- I wish thee well of thy discovery. Well then, and thou hast reason: by thy rational faculty stir up his rational faculty; show him his error, admonish him. For if he listens, thou wilt cure him, and there is no need of anger.",
    author: "Marcus Aurelius",
  },
  {
    text: "Basta abandonar todo o passado, confiar o futura ?? provid??ncia e dirigir a a????o presente para a piedade e a justi??a.",
    author: "Marcus Aurelius",
  },
  {
    text: "Everywhere and continually it is in your power to be reverently content with your present circumstance, to behave to men who are present with you according to right and to handle skillfully the present impression, that nothing you have not mastered may cross the threshold of the mind.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Y qu?? tiene de malo o extra??o que la persona sin educaci??n haga cosas propias de un ineducado? Procura que no debas inculparte m??s a ti mismo por no haber previsto que ??se cometer??a ese fallo, porque t?? dispon??as de recursos suministrados por la raz??n para cerciorarte de que es natural que ??se cometer??a ese fallo; y a pesar de tu olvido, te sorprendes de su error. Y sobre todo, siempre que censures a alguien como desleal o ingrato, rec??gete en ti mismo. Porque obviamente tuyo es el fallo si has confiado que ten??a tal disposici??n, que iba a guardarte fidelidad, o si, al otorgarle un favor, no se lo concediste de buena gana, ni de manera que pudiese obtener al punto de tu acci??n misma todo el fruto.",
    author: "Marcus Aurelius",
  },
  {
    text: "Love that only which happens to thee and is spun with the thread of thy destiny. For what is more suitable? In",
    author: "Marcus Aurelius",
  },
  {
    text: "Is any man afraid of change? Why what can take place without change? What then is more pleasing or more suitable to the universal nature? And canst thou take a bath unless the wood undergoes a change? And canst thou be nourished, unless the food undergoes a change? And can anything else that is useful be accomplished without change?",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t be anxious. Nature controls it all. And before long you???ll be no one, nowhere.",
    author: "Marcus Aurelius",
  },
  {
    text: "The sun appears to pour itself down, and indeed its light pours in all direction, but the stream does not run out. This pouring is linear extension: that is why its beams are called rays, because they radiate in extended lines. You can see what a ray is if you observe the sun's light entering a dark room through a narrow opening. It extends in a straight line and impacts, so to speak, on any solid body in its path which blocks passage through the air on the other side: it settles there and does not slip off or fall.",
    author: "Marcus Aurelius",
  },
  {
    text: "He who follows reason in all things is both tranquil and active at the same time, and also cheerful and collected.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do nothing against thy will, nor contrary to the community, nor without due examination, nor with reluctancy.",
    author: "Marcus Aurelius",
  },
  {
    text: "VIII. Never esteem of anything as profitable, which shall ever constrain thee either to break thy faith, or to lose thy modesty; to hate any man, to suspect, to curse, to dissemble, to lust after anything, that requireth the secret of walls or veils.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wherever you go, there you are???the same person, with the same patterns of thought.",
    author: "Marcus Aurelius",
  },
  {
    text: "Every portion of me will be reassigned as another portion of the world, and that in turn transformed into another. Ad infinitum.",
    author: "Marcus Aurelius",
  },
  {
    text: "Habite en ti la serenidad, la ausencia de necesidad de ayuda externa y de la tranquilidad que procuran otros. Conviene, por consiguiente, mantenerse recto, no enderezado.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wipe out the imagination. Stop the pulling of the strings. Confine thyself to the present. Understand well what happens either to thee or to another. Divide and distribute every object into the causal (formal) and the material. Think of thy last hour. Let the wrong which is done by a man stay there where the wrong was done. Direct",
    author: "Marcus Aurelius",
  },
  {
    text: "In all his conversation, far from all inhumanity, all boldness, and incivility, all greediness and impetuosity; never doing anything with such earnestness, and intention, that a man could say of him, that he did sweat about it: but contrariwise, all things distinctly, as at leisure; without trouble; orderly, soundly, and agreeably.",
    author: "Marcus Aurelius",
  },
  {
    text: "Casting therefore all other things aside, keep thyself to these few, and remember withal that no man properly can be said to live more than that which is now present, which is but a moment of time.",
    author: "Marcus Aurelius",
  },
  {
    text: "still remember that no man loses any other life than this which he now lives, nor lives any other than this which he now loses.",
    author: "Marcus Aurelius",
  },
  {
    text: "That way you'll see human life for what it is. Smoke. Nothing. Especially when you recall that once things alter they cease to exist through all the endless years to come. Then why such turmoil?",
    author: "Marcus Aurelius",
  },
  {
    text: "what death is, and the fact that, if a man looks at it in itself, and by the abstractive power of reflection resolves into their parts all the things which present themselves to the imagination in it, he will then consider it to be nothing else than an operation of nature;",
    author: "Marcus Aurelius",
  },
  {
    text: "Enter their minds, and you'll find the judges you're so afraid of???and how judiciously they judge themselves.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember, however, that thou art formed by nature to bear everything, with respect to which it depends on thy own opinion to make it endurable and tolerable, by thinking that it is either thy interest or thy duty to do this.",
    author: "Marcus Aurelius",
  },
  {
    text: "Tra??e ya sebe odmori??te na selu, nad morem ili u planinama. I ti obi??no te??i?? za ne??im takvim. Sve je to ipak vrlo glupo jer se mo??e??, u kojem god trenutku da to po??eli??, povu??i u dubinu sebe. Nigdje, naime, ne mo??e ??ovjek prona??i takvoga skloni??ta kao u vlastitoj du??i, osobito onaj koji u sebi ima takvo uto??iste da odmah osjeti lako??u kada se u njega zagleda. Lako??om ne nazivam ni??ta drugo nego unutarnji red. Koristi taj zaklon ??to je mogu??e ??e????e i obnavljaj samoga sebe.",
    author: "Marcus Aurelius",
  },
  {
    text: "nor does he deviate from the way which leads to the end of life, to which a man ought to come pure, tranquil, ready to depart, and without any compulsion perfectly reconciled to his lot.",
    author: "Marcus Aurelius",
  },
  {
    text: "Other people???s mistakes? Leave them to their makers.",
    author: "Marcus Aurelius",
  },
  {
    text: "You are but an impression, and not at all what you seem to be'.",
    author: "Marcus Aurelius",
  },
  {
    text: "What then is that which is able to conduct a man? One thing and only one, philosophy. But this consists in keeping the daemon within a man free from violence and unharmed, superior to pains and pleasures, doing nothing without purpose, nor yet falsely and with hypocrisy, not feeling the need of another man???s doing or not doing anything; and besides, accepting all that happens, and all that is allotted, as coming from thence, wherever it is, from whence he himself came; and, finally, waiting for death with a cheerful mind, as being nothing else than a dissolution of the elements of which every living being is compounded. But if there is no harm to the elements themselves in each continually changing into another, why should a man have any apprehension about the change and dissolution of all the elements? For it is according to nature, and nothing is evil which is according to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Por lo dem??s, todo lo que es bello en cierto modo, bello es por s?? mismo, y termina en s?? m??smo sin considerar el elogio como parte de s?? mismo. En consecuencia, ni se empeora ni se mejora el objeto que se alaba.",
    author: "Marcus Aurelius",
  },
  {
    text: "Of all existing things some are in our power, and others are not in our power.",
    author: "Marcus Aurelius",
  },
  {
    text: "That soul which is ever ready, even now presently (if need be) from the body, whether by way of extinction, or dispersion, or continuation in another place and estate to be separated, how blessed and happy is it! But this readiness of it, it must proceed, not from an obstinate and peremptory resolution of the mind, violently and passionately set upon Opposition, as Christians are wont; but from a peculiar judgment; with discretion and gravity, so that others may be persuaded also and drawn to the like example, but without any noise and passionate exclamations.",
    author: "Marcus Aurelius",
  },
  {
    text: "Give what thou wilt, and take away what thou wilt, saith he that is well taught and truly modest, to Him that gives, and takes away. And it is not out of a stout and peremptory resolution, that he saith it, but in mere love, and humble submission.",
    author: "Marcus Aurelius",
  },
  {
    text: "21. If anyone can refute me???show me I???m making a mistake or looking at things from the wrong perspective???I???ll gladly change. It???s the truth I???m after, and the truth never harmed anyone. What harms us is to persist in self-deceit and ignorance.",
    author: "Marcus Aurelius",
  },
  {
    text: "This that I am, whatever it be, is mere flesh and a little breath and the ruling Reason.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing that goes on in anyone else???s mind can harm you. Nor can the shifts and changes in the world around you. ???Then where is harm to be found? In your capacity to see it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Mancher, der jemandem eine Gef??lligkeit erwiesen hat, ist sogleich bei der Hand, sie ihm in Rechnung zu stellen; ein anderer ist zwar dazu nicht sogleich bereit, denkt sich aber doch denselben in anderer Hinsicht als seinen Schuldner und hat den geleisteten Dienst immer in Gedanken. Ein dritter dagegen wei?? gewisserma??en nicht einmal, was er geleistet hat; er ist dem Weinstocke gleich, der Trauben tr??gt und nichts weiter will, zufrieden, da?? er seine Frucht gegeben hat. Wie ein Pferd, das dahin rennt, ein Hund nach der Jagd und eine Biene, die ihren Honig bereitet: so der Mensch, der Gutes getan hat; er posaunt es nicht aus, sondern schreitet zu einem andern guten Werke, wie der Weinstock sich berankt, um zu seiner Zeit wieder Trauben zu tragen.",
    author: "Marcus Aurelius",
  },
  {
    text: "11. When thou hast been compelled by circumstances to be disturbed in a manner, quickly return to thyself, and do not continue out of tune longer than the compulsion lasts; for thou wilt have more mastery over the harmony by continually recurring to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "When thou hast assumed these names, good, modest, true, rational, a man of equanimity, and magnanimous, take care that thou dost not change these names; and if thou shouldst lose them, quickly return to them. And remember that the term Rational was intended to signify a discriminating attention to every several thing and freedom from negligence; and that Equanimity is the voluntary acceptance of the things",
    author: "Marcus Aurelius",
  },
  {
    text: "????????????????, ?????????????????? ?? ?????????????? ??????????????, ???? ?????????????????? ???????? ??????????????????, ???? ???????????????????? ?? ????????, ???? ???? ?????????????????? ?????????????? ?????? ?????????????????????? ?? ??????. ?????????? ???????????????? ???????? ???????????????? ?? ?????? ??? ?? ?????? ?????????? ??????????????????; ?? ???????? ?????????? ???? ???????????? ???? ????????????????????????, ???? ??????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "No obres como quien ha de vivir diez mil a??os. Lo irreparable est?? ya suspendido encima de ti. Mientras vives, mientras es a??n posible, s?? hombre de bien.",
    author: "Marcus Aurelius",
  },
  {
    text: "From Claudius Maximus, in all things to endeavour to have power of myself, and in nothing to be carried about; to be cheerful and courageous in all sudden chances and accidents, as in sicknesses: to love mildness, and moderation, and gravity: and to do my business, whatsoever it be, thoroughly, and without querulousness.",
    author: "Marcus Aurelius",
  },
  {
    text: "Some things are hurrying into existence, and others are hurrying out of it;",
    author: "Marcus Aurelius",
  },
  {
    text: "preocuparse de su propio cuerpo con mesura, no como si tuviera apego a la vida, sin llegar al maquillaje pero tampoco desde luego al abandono, de forma que por su propia diligencia precisaba poqu??simo de la medicina, de sus medicamentos o ung??entos, de uso interno o externo; ceder",
    author: "Marcus Aurelius",
  },
  {
    text: "That I have such a wife, so obedient,",
    author: "Marcus Aurelius",
  },
  {
    text: "Stoicism is thus from the outset a deterministic system that appears to leave no room for human free will or moral responsibility. In reality the Stoics were reluctant to accept such an arrangement, and attempted to get around the difficulty by defining free will as a voluntary accommodation to what is in any case inevitable. According to this theory, man is like a dog tied to a moving wagon. If the dog refuses to run along with the wagon he will be dragged by it, yet the choice remains his: to run or be dragged.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Cu??nta holgura se logra si no se mira lo que el vecino dijo, hizo o pens??, sino lo que hace uno mismo, para que tambi??n esta acci??n sea justa, santa y conforme con el bien! No observes los malos caracteres, sino lleva adelante tu camino hacia el fin, sin mirar ac?? ni all??, por los lados.",
    author: "Marcus Aurelius",
  },
  {
    text: "aplicar la an??cdota referida a S??crates[162] de que pod??a al tiempo abstenerse y disfrutar de aquello por lo que la mayor??a en caso de abstinencia se siente d??bil y en caso de disfrute se dejan llevar; ser fuerte y resistente y en ambas cosas ser sobrio [es",
    author: "Marcus Aurelius",
  },
  {
    text: "whilst yet thou livest, whilst thou mayest, be good.",
    author: "Marcus Aurelius",
  },
  {
    text: "Continually, and, if possible, in the case of every mental image, consider its nature, realize its emotional content, and judge it rationally.",
    author: "Marcus Aurelius",
  },
  {
    text: "Most of what we say and do is not necessary, and its omission would save both time and trouble. At every step, therefore, a man should ask himself, 'Is this one of the things that are superfluous?' Moreover, not idle actions only but even idle impressions ought to be suppressed; for the unnecessary action will not ensue.",
    author: "Marcus Aurelius",
  },
  {
    text: "The way to peace is to be content with yourself, honor the light of reason within, live in harmony with others, and be grateful to the gods for the universe and your role in it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do, soul, do; abuse and contemn thyself; yet a while and the time for thee to respect thyself, will be at an end.",
    author: "Marcus Aurelius",
  },
  {
    text: "Yes, you can???if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable.",
    author: "Marcus Aurelius",
  },
  {
    text: "XXV. How hast thou carried thyself hitherto towards the Gods? towards thy parents? towards thy brethren? towards thy wife? towards thy children? towards thy masters? thy foster-fathers? thy friends? thy domestics? thy servants? Is it so with thee, that hitherto thou hast neither by word or deed wronged any of them? Remember withal through how many things thou hast already passed, and how many thou hast been able to endure; so that now the legend of thy life is full, and thy charge is accomplished. Again, how many truly good things have certainly by thee been discerned? how many pleasures, how many pains hast thou passed over with contempt? how many things eternally glorious hast thou despised? towards how many perverse unreasonable men hast thou carried thyself kindly, and discreetly?",
    author: "Marcus Aurelius",
  },
  {
    text: "Desde el alba hay que decirse con ??nfasis a uno mismo: me topar?? con el entrometido, con el desagradecido, con el soberbio, con el taimado, con el malicioso, el insociable. Todos",
    author: "Marcus Aurelius",
  },
  {
    text: "For a man cannot lose either the past or the future: for what a man has not, how can any one take this from him?",
    author: "Marcus Aurelius",
  },
  {
    text: "Yo, al contrario, tras haber contemplado la naturaleza del bien y ver que es algo bello, y la del mal y ver que es algo vergonzoso, y la naturaleza del que yerra y ver que es de mi linaje, no por la misma sangre o simiente, sino por ser part??cipe de la inteligencia[180] y fracci??n divina[181], tampoco puedo subir perjuicio por parte de alguno de ellos, porque nadie me cubrir?? de verg??enza; tampoco puedo encolerizarme con el que es de mi linaje ni odiarlo. Hemos",
    author: "Marcus Aurelius",
  },
  {
    text: "Soon you'll be ashes or bones. A mere name at most - and even that is just a sound, an echo. The things we want in life are empty, stale, trivial.",
    author: "Marcus Aurelius",
  },
  {
    text: "Entrar en conflicto unos con otros es contrario a la naturaleza; conflicto es enfadarse y darse media vuelta. ",
    author: "Marcus Aurelius",
  },
  {
    text: "Zbog ??ega si nezadovoljan? Zbog prevrtljivosti ljudi? Jo?? jednom promisli o tome kako razumna stvorenja postoje zbog uzajamne pomo??i i kako je razumijevanje drugoga dio pravednosti, i kako ljudi grije??e nerado i protiv svoje volje, i tome koliko je ljudi, koji su se borili i uzajamno sumnji??ili, mrzili, ??iji su odnosi bili na no??u, umrlo i raspalo se u prah - pomisli o tome i kona??no se odmori.",
    author: "Marcus Aurelius",
  },
  {
    text: "which are assigned to thee by the common nature; and that Magnanimity is the elevation of the intelligent part above the pleasurable or painful sensations of the flesh, and above that poor thing called fame, and death, and all such things. If, then, thou maintainest thyself in the possession of these names, without desiring to be called by these names by others, thou wilt be another person and wilt enter on another life. For to continue to be such as thou hast hitherto been, and to be tom in pieces and defiled in such a life, is the character of a very stupid man and one overfond of his life, and like those half-devoured fighters with wild beasts, who though covered with wounds and gore, still intreat to be kept to the following day, though they will be exposed in the same state to the same claws and bites. Therefore fix thyself in the possession of these few names: and if thou art able to abide in them, abide as if thou wast removed to certain islands of the Happy.",
    author: "Marcus Aurelius",
  },
  {
    text: "How unsound and insincere is he who says, I have determined to deal with thee in a fair way.???What art thou doing, man?",
    author: "Marcus Aurelius",
  },
  {
    text: "A prudent governor will not roughly oppose even the superstitions of his people; and though he may wish they were wiser, he will know that he cannot make them so by offending their prejudices.",
    author: "Marcus Aurelius",
  },
  {
    text: "finally, waiting for death with a cheerful mind, as being nothing else than a dissolution of the elements of which every living being is compounded.",
    author: "Marcus Aurelius",
  },
  {
    text: "Est??s viendo qu?? pocas son las cosas que debe uno dominar para poder vivir una vida pr??spera y respetuosa con la divinidad, porque los dioses no exigir??n nada m??s al que mantenga esto.",
    author: "Marcus Aurelius",
  },
  {
    text: "Inquire of yourself as soon as you wake from sleep, whether it will make any difference to you, if another does what is just and right. It will make no difference.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man might have applied that to him, which is recorded of Socrates, that he knew how to want, and to enjoy those things, in the want whereof, most men show themselves weak; and in the fruition, intemperate: but to hold out firm and constant, and to keep within the compass of true moderation and sobriety in either estate, is proper to a man, who hath a perfect and invincible soul; such as he showed himself in the sickness of Maximus.",
    author: "Marcus Aurelius",
  },
  {
    text: "forzoso que sean infelices quienes no siguen de cerca los movimientos de su propia alma.",
    author: "Marcus Aurelius",
  },
  {
    text: "And why is it so hard when things go against you? If it???s imposed by nature, accept it gladly and stop fighting it. And if not, work out what your own nature requires, and aim at that, even if it brings you no glory.",
    author: "Marcus Aurelius",
  },
  {
    text: "To grieve or be angry about or fear what happens to you is to be a fugitive from the law of nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even if you were destined to live three thousand years, or ten times that long, nevertheless remember that no one loses any life other than the one he lives, or lives any life other than the life he loses. It follows that the longest and the shortest lives are brought to the same state. The present moment is equal for all; so what is passing is equal also; the loss therefore turns out to be the merest fragment of time. No one can lose either the past or the future -- how could anyone be deprived of what he does not possess? So always remember these two things. First, that all things have been of the same kind from everlasting, coming round and round again, and it makes no difference whether one will see the same things for a hundred years, or two hundred years, or for an infinity of time. Second, that both the longest-lived and the earliest to die suffer the same loss. It is only the present moment of which either stands to be deprived: and if indeed this is all he has, he cannot lose what he does not have.",
    author: "Marcus Aurelius",
  },
  {
    text: "que est?? enojado se revuelve contra la raz??n aparentemente con cierta tristeza y encogimiento inconsciente, mientras que el que yerra por apetencia se deja vencer por el placer y aparentemente es m??s licencioso y femeninamente d??bil en sus faltas. Con",
    author: "Marcus Aurelius",
  },
  {
    text: "Use thyself even unto those things that thou doest at first despair of. For the left hand we see, which for the most part hieth idle because not used; yet doth it hold the bridle with more strength than the right, because it hath been used unto it.",
    author: "Marcus Aurelius",
  },
  {
    text: "El que no sabe qu?? es el universo no sabe d??nde est??. El que no sabe para qu?? ha crecido no sabe qui??n es. El que deja sin resolver una sola de estas cosas no podr??a decir ni qu?? es el universo ni para qu?? ha crecido. Entonces, ??c??mo te parece que es quien va detr??s del ruido de gente que aplaude sin saber ni d??nde est?? ni qui??n es?",
    author: "Marcus Aurelius",
  },
  {
    text: "La muerte y la vida, la buena fama y la mala, el sufrimiento y el placer, la riqueza y la pobreza, todas esas cosas ocurren indistintamente a los hombres tanto a los buenos como a los malos porque no son ni hermosas ni vergonzosas. No son ni buenas ni malas[192]",
    author: "Marcus Aurelius",
  },
  {
    text: "How plain does it appear that there is not another condition of life so well suited for philosophising as this in which thou now happenest to be.",
    author: "Marcus Aurelius",
  },
  {
    text: "2.12 Es propio de la facultad inteligente fijarse en c??mo desaparece r??pidamente todo, las propias personas en el universo, los recuerdos de esas personas en el tiempo; en",
    author: "Marcus Aurelius",
  },
  { text: "Phocion", author: "Marcus Aurelius" },
  {
    text: "These two things be common to the souls, as of God, so of men, and of every reasonable creature, first that in their own proper work hey cannot be hindered by anything: and secondly, that their happiness doth consist in a disposition to, and in the practice of righteousness; and that in these their desire is terminated.",
    author: "Marcus Aurelius",
  },
  {
    text: "No hay nada m??s desventurado que quien recorre todo en derredor, explora ??lo que est?? debajo de la tierra??, dice[193], e investiga en las almas de los que est??n cerca mediante el uso de indicios[194], sin darse cuenta de que basta estar s??lo ante el esp??ritu divino que est?? dentro de uno mismo y ser su servidor de verdad. Este",
    author: "Marcus Aurelius",
  },
  {
    text: "He that knoweth not what the world is, knoweth not where he himself is. And he that knoweth not what the world was made for, cannot possibly know either what are the qualities, or what is the nature of the world.",
    author: "Marcus Aurelius",
  },
  {
    text: "We are all mere nuggets of incense on the one altar. Some burn down now , some later - there is no difference .",
    author: "Marcus Aurelius",
  },
  {
    text: "Now a man should take away not only unnecessary acts, but also, unnecessary thoughts, for thus superfluous acts will not follow after. Try",
    author: "Marcus Aurelius",
  },
  {
    text: "XXIX. As they that long after figs in winter when they cannot be had; so are they that long after children, before they be granted them. XXX.",
    author: "Marcus Aurelius",
  },
  {
    text: "The highest good was the virtuous life. Virtue alone is happiness, and vice is unhappiness. Carrying this theory to its extreme, the Stoic said that there could be no gradations between virtue and vice, though of course each has its special manifestations.",
    author: "Marcus Aurelius",
  },
  {
    text: "2. How can our principles become dead, unless the impressions [thoughts] which correspond to them are extinguished? But it is in thy power continuously to fan these thoughts into a flame. I can have that opinion about anything, which I ought to have. If I can, why am I disturbed? The things which are external to my mind have no relation at all to my mind. Let this be the state of thy affects, and thou standest erect. To recover thy life is in thy power. Look at things again as thou didst use to look at them; for in this consists the recovery of thy life.",
    author: "Marcus Aurelius",
  },
  {
    text: "a ripe mature man, a perfect sound man; one that could not endure to be flattered; able to govern both himself and others.",
    author: "Marcus Aurelius",
  },
  {
    text: "Qui una sola cosa ha valore: trascorrere tutta la vita nella verit?? e nella giustizia pur trattando con indulgenza i bugiardi e gli ingiusti.",
    author: "Marcus Aurelius",
  },
  {
    text: 'no matter what anyone says or does, my task is to be good. like gold or emerald or purple repeating to itself, "no matter what anyone says or does, my task is to be emerald, my color undiminished.',
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???????? ???? ???? ???????????????????????? ?? ????????????, ?????????? ????????????, ?????????? ?? ????????????????????, ???? ???? ?????????? ???? ???????????????? ???????????????????? ???? ?????????????? ?????????? ?????? ????????, ?? ?????????? ???????????????????????? ???? ???????? ?? ???????????????? ???????????????????????????? ?????? ???????????? ????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is high time for thee, to understand that there is somewhat in thee, better and more divine than either thy passions, or thy sensual appetites and affections",
    author: "Marcus Aurelius",
  },
  {
    text: "Is any man so foolish as to fear change, to which all things that once were not owe their being? And what is it, that is more pleasing and more familiar to the nature of the universe?",
    author: "Marcus Aurelius",
  },
  {
    text: "Studying philosophy instills modesty and straightforwardness in your character.",
    author: "Marcus Aurelius",
  },
  { text: "HE WHO ACTS UNJUSTLY ACTS IMPIOUSLY.", author: "Marcus Aurelius" },
  {
    text: "They contemn one another, and yet they seek to please one another: and whilest they seek to surpass one another in worldly pomp and greatness, they most debase and prostitute themselves in their better part one to another.",
    author: "Marcus Aurelius",
  },
  {
    text: "time is fixed for thee, which if thou dost not use for clearing away the clouds from thy mind, it will go and thou wilt go, and it will never return. Every",
    author: "Marcus Aurelius",
  },
  {
    text: "But by all means bear this in mind, that within a very short time both thou and he will be dead; and soon not even your names will be left behind.",
    author: "Marcus Aurelius",
  },
  {
    text: "say to thyself, This day I shalt have to do with an idle curious man, with an unthankful man, a railer, a crafty, false, or an envious man; an unsociable uncharitable man. All these ill qualities have happened unto them, through ignorance of that which is truly good and truly bad. But I that understand the nature of that which is good, that it only is to be desired, and of that which is bad, that it only is truly odious and shameful: who know moreover, that this transgressor, whosoever he be, is my kinsman, not by the same blood and seed, but by participation of the same reason, and of the same divine particle; How can I either be hurt by any of those, since it is not in their power to make me incur anything that is truly reproachful? or",
    author: "Marcus Aurelius",
  },
  {
    text: "He blind, who cannot see with the eyes of his understanding.",
    author: "Marcus Aurelius",
  },
  {
    text: "A human being has close kinship with the whole human race -- not a bond of blood or seed, but a community of mind. And you have forgotten this too, that every man's mind is a god and has flowed from that source; that nothing is our own property, but even our child, our body, our very soul have come from that source; that all is as thinking makes it so; that each of us lives only the present moment, and the present moment is all we lose.",
    author: "Marcus Aurelius",
  },
  {
    text: "For indeed whatsoever proceeds from the gods, deserves respect for their worth and excellency; and whatsoever proceeds from men, as they are our kinsmen, should by us be entertained, with love, always; sometimes, as proceeding from their ignorance, of that which is truly good and bad, (a blindness no less, than that by which we are not able to discern between white and black:) with a kind of pity and compassion also.",
    author: "Marcus Aurelius",
  },
  {
    text: "A man must not only consider how daily his life wasteth and decreaseth, but this also, that if he live long, he cannot be certain, whether his understanding shall continue so able and sufficient, for either discreet consideration, in matter of businesses; or for contemplation: it being the thing, whereon true knowledge of things both divine and human, doth depend.",
    author: "Marcus Aurelius",
  },
  {
    text: "Basta con poner tu atenci??n y deseo en ser bueno contigo mismo en cualquier cosa que hagas. Recuerda",
    author: "Marcus Aurelius",
  },
  {
    text: "How many of them who came into the world at the same time when I did, are already gone out of it? LII.",
    author: "Marcus Aurelius",
  },
  {
    text: "Excava dentro. Dentro est?? la fuente del bien que puede siempre borbotar de nuevo mientras excaves.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember how long you have been putting off things, and how often you have received an opportunity from the gods, and yet not use it. You must now at last perceive that you are part of the universe, and that the universe's existence is an efflux, and that a limit of time is fixed for you, which if you do not use for clearing away the clouds from your mind, it will go and you will go, and it will never return.   Every",
    author: "Marcus Aurelius",
  },
  {
    text: "Auf die Dauer der Zeit nimmt die Seele die Farbe der Gedanken an.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou must hasten therefore; not only because thou art every day nearer unto death than other, but also because that intellective faculty in thee, whereby thou art enabled to know the true nature of things, and to order all thy actions by that knowledge, doth daily waste and decay: or, may fail thee before thou die.",
    author: "Marcus Aurelius",
  },
  {
    text: "El arte de vivir es m??s parecido al de la lucha que al de la danza en la medida que, ante lo que le cae a uno de improviso, hay que mantenerse preparado y sin caerse.",
    author: "Marcus Aurelius",
  },
  { text: "concupiscence,", author: "Marcus Aurelius" },
  {
    text: "thou wilt cease to be held by pains and pleasures, and to be a slave to the vessel, which is as much inferior as that which serves it is superior: for the one is intelligence and deity; the other is earth and corruption.",
    author: "Marcus Aurelius",
  },
  {
    text: "No reniegues, ni renuncies, ni te impacientes, si no se materializa la ejecuci??n de cada acci??n seg??n criterios rectos; por el contrario, aunque te quedes fuera de combate, vuelve a ??l con insistencia, cont??ntate si la mayor parte de tus acciones est??n por encima de lo humano y desea el combate al que vuelves. No",
    author: "Marcus Aurelius",
  },
  {
    text: "For with what art thou discontented? With the badness of men? Recall to thy mind this conclusion, that rational animals exist for one another, and that to endure is a part of justice, and that men do wrong involuntarily; and consider how many already, after mutual enmity, suspicion, hatred, and fighting, have been stretched dead, reduced to ashes; and be quiet at last.",
    author: "Marcus Aurelius",
  },
  {
    text: "that it is not men's acts which disturb us, for those acts have their foundation in men's ruling principles, but it is our own opinions which disturb us. Take away these opinions then, and resolve to dismiss thy judgement about an act as if it were something grievous, and thy anger is gone. How then shall I take away these opinions? By reflecting that no wrongful act of another brings shame on thee:",
    author: "Marcus Aurelius",
  },
  {
    text: "The Roman religion was in fact of the nature of a bargain: men paid certain sacrifices and rites, and the gods granted their favour, irrespective of right or wrong. In",
    author: "Marcus Aurelius",
  },
  {
    text: "De beste manier om je op iemand te wreken, is niet te worden zoals hij.",
    author: "Marcus Aurelius",
  },
  {
    text: "Acu??rdate de esto y de lo siguiente, que de poqu??simas cosas depende tener una vida feliz. Y",
    author: "Marcus Aurelius",
  },
  {
    text: "it is only this present, a moment of time, that a man lives: all the rest either has been lived or may never",
    author: "Marcus Aurelius",
  },
  {
    text: "If any god told thee that thou shalt die to-morrow, or certainly on the day after to-morrow, thou wouldst not care much whether it was on the third day or on the morrow, unless thou wast in the highest degree mean-spirited- for how small is the difference?- So think it no great thing to die after as many years as thou canst name rather than to-morrow.",
    author: "Marcus Aurelius",
  },
  {
    text: "no renuncies a ser libre, decente, comunitario, d??cil ante dios.",
    author: "Marcus Aurelius",
  },
  {
    text: "it is only this present, a moment of time, that a man lives: all the rest either has been lived or may never be.",
    author: "Marcus Aurelius",
  },
  {
    text: "that it is not men's acts which disturb us, for those acts have their foundation in men's ruling principles, but it is our own opinions which disturb us. Take away these opinions then, and resolve to dismiss thy judgement about an act as if it were something grievous, and thy anger is gone. How then shall I take away these opinions? By reflecting that no wrongful act of another brings shame on thee: for unless that which is shameful is alone bad, thou also must of necessity do many things wrong, and become a robber and everything else. Eighth,",
    author: "Marcus Aurelius",
  },
  {
    text: "To recover your life is within your power; simply view things again as once you viewed them, for your revival rests in that.",
    author: "Marcus Aurelius",
  },
  {
    text: "In order to live in accord with nature, it is necessary to know what nature is; and to this end a threefold division of philosophy is made???into Physics, dealing with the universe and its laws, the problems of divine government and teleology; Logic, which trains the mind to discern true from false; and Ethics, which applies the knowledge thus gained and tested to practical life.",
    author: "Marcus Aurelius",
  },
  {
    text: "The soul of man is thus an emanation from the godhead, into whom it will eventually be re-absorbed. The divine ruling principle makes all things work together for good, but for the good of the whole. The highest good of man is consciously to work with God for the common good, and this is the sense in which the Stoic tried to live in accord with nature. In the individual it is virtue alone which enables him to do this; as Providence rules the universe, so virtue in the soul must rule man.",
    author: "Marcus Aurelius",
  },
  {
    text: "Hip??crates[207], tras sanar muchas enfermedades, enferm?? ??l y muri??. Los",
    author: "Marcus Aurelius",
  },
  {
    text: "La perfecci??n del car??cter supone que cada d??a transcurra como el ??ltimo, sin palpitos, sin cabezadas, sin actuaciones teatrales.",
    author: "Marcus Aurelius",
  },
  {
    text: "Which thou shalt do; if thou shalt go about every action as thy last action, free from all vanity, all passionate and wilful aberration from reason, and from all hypocrisy, and self-love, and dislike of those things, which by the fates or appointment of God have happened unto thee. Thou",
    author: "Marcus Aurelius",
  },
  {
    text: "Occupy thyself with few things, says the philosopher, if thou wouldst be tranquil.-",
    author: "Marcus Aurelius",
  },
  {
    text: "Te embarcaste, navegaste, arribaste. Desembarca. Si es a otra vida, nada est?? vac??o de dioses, tampoco all??. Si es en la insensibilidad[212], dejar??s de soportar sufrimientos y placeres, dejar??s de ser esclavo para un recipiente tan inferior como superior es la parte que manda comparada con la que sirve, porque mandan la inteligencia y el esp??ritu divino mientras que son sirvientes la tierra y los despojos sanguinolentos.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t imagine that something is good for you if, in pursuing it, you must break a promise, harm anyone else, lose self-respect, act hypocritically, or hide in shame.",
    author: "Marcus Aurelius",
  },
  {
    text: "No honres nunca como tu conveniencia lo que te fuerce en alguna ocasi??n a infringir la confianza de la que gozas, a dejar a un lado la verg??enza, odiar a alguien, sospechar, maldecir, aparentar, anhelar algo que precisa de muros y cortinajes[217]. Quien escoge su propia inteligencia, el esp??ritu divino y los ritos propios de su virtud no hace una elecci??n tr??gica, no se lamenta, no precisar?? ni de soledad ni de muchedumbre. Y lo m??s importante, vivir?? sin perseguir ni huir. Si hace uso de su alma, encerrada en su cuerpo, durante mayor o menor intervalo de tiempo no le importa nada en absoluto. Porque aunque tenga ya que separarse se alejar?? tan liberado como si ejecutara alguna otra de las acciones que pueden ejecutarse con decencia y orden, con esta ??nica preocupaci??n durante toda su vida, que su reflexi??n se ocupe en algo impropio de un animal inteligente y social.",
    author: "Marcus Aurelius",
  },
  {
    text: "to say all in a word, everything which belongs to the body is a stream, and what belongs to the soul is a dream and vapour, and life is a warfare and a stranger???s sojourn, and after-fame is oblivion.",
    author: "Marcus Aurelius",
  },
  {
    text: "In the mind that is once truly disciplined and purged, thou canst not find anything, either foul or impure, or as it were festered: nothing that is either servile, or affected: no partial tie; no malicious averseness; nothing obnoxious; nothing concealed.",
    author: "Marcus Aurelius",
  },
  {
    text: "H?? fulanos que quando fazem algum favor a algu??m est??o logo prontos para lan??ar no livro de contas o agradecimento devido.",
    author: "Marcus Aurelius",
  },
  {
    text: "See how soon everything is forgotten, and look at the chaos of infinite time on each side of [the present], and the emptiness of applause, and the changeableness and want of judgment in those who pretend to give praise, and the narrowness of the space within which it is circumscribed [and be quiet at last]. For the whole earth is a point, and how small",
    author: "Marcus Aurelius",
  },
  {
    text: "The chief obstacle is that we are quick to be satisfied with ourselves. If we find someone to call us good men, cautious and principled, we acknowledge him. We are not content with a moderate eulogy, but accept as our due whatever flattery has shamelessly heaped upon us. We agree with those who call us best and wisest, although we know they often utter many falsehoods: we indulge ourselves so greatly that we want to be praised for a virtue which is the opposite of our behavior. A man hears himself called ???most merciful??? while he is inflicting torture.. So it follows that we don???t want to change because we believe we are already excellent.",
    author: "Marcus Aurelius",
  },
  {
    text: "What is this, fundamentally? What is its nature and substance, its reason for being? What is it doing in the world? How long is it here for?",
    author: "Marcus Aurelius",
  },
  { text: "obsequious courting of the mob", author: "Marcus Aurelius" },
  {
    text: "Put from you the belief that I have been wronged and with it will go the feeling. Reject your sense of injury, and the injury itself disappears.",
    author: "Marcus Aurelius",
  },
  {
    text: "You have a mind? ???Yes. Well, why not use it? Isn???t that all you want???for it to do its job?",
    author: "Marcus Aurelius",
  },
  {
    text: "47. Suppose that a god announced that you were going to die tomorrow ???or the day after.??? Unless you were a complete coward you wouldn???t kick up a fuss about which day it was???what difference could it make? Now recognize that the difference between years from now and tomorrow is just as small.",
    author: "Marcus Aurelius",
  },
  {
    text: "Que la divinidad que est?? en ti sea gu??a de un ser varonil, respetable, social, romano, de un jefe que se coloca en su puesto como alguien que, liberado, esperara el toque de retreta para escapar de la vida, sin necesidad de un juramento ni de ning??n hombre como testigo[213]. Por dentro, radiante[214] sin necesidad de servidumbre o tranquilidad exteriores. Hay que ser recto, no corregido.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Hay que soportar el viento de los dioses / y sus trabajos sin queja??[357]",
    author: "Marcus Aurelius",
  },
  {
    text: "This then remains: Remember to retire into this little territory of thy own, and, above all, do not distract or strain thyself, but be free, at look and things as a man, as a human being, as a citizen, as a mortal.",
    author: "Marcus Aurelius",
  },
  {
    text: "Pero si se hace evidente que no existe nada mejor que el propio esp??ritu divino que se asienta en ti, que tiene subordinados a su control tus impulsos particulares, que analiza tus representaciones, que se ha apartado de las emociones sensoriales, como dec??a S??crates[215], que se ha subordinado a los dioses y que se preocupa de los hombres, si descubres que todo lo dem??s es menor y de inferior valor que eso, no cedas terreno a ninguna otra cosa, porque si te postras y te inclinas una vez, no podr??s ya tranquilamente rendir honor preferente a ese bien que te es particular. No",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing is more pathetic than people who run around in circles, ???delving into the things that lie beneath??? and conducting investigations into the souls of the people around them, never realizing that all you have to do is to be attentive to the power inside you and worship it sincerely. To worship it is to keep it from being muddied with turmoil and becoming aimless and dissatisfied with nature???divine and human. What is divine deserves our respect because it is good; what is human deserves our affection because it is like us. And our pity too, sometimes, for its inability to tell good from bad???as terrible a blindness as the kind that can???t tell white from black.",
    author: "Marcus Aurelius",
  },
  {
    text: "(2) 14. ???????? ???? ???????? ???? ?????????????????????? ?????????????? ?????? ???????????? ?????? ?? ?????? ???????????????? ??????????, ?????? ???? ???? ???????????? ??????????????, ?????? ?????????? ???? ???????????????? ???????????? ??????????, ?????????? ??????, ?????????????? ???? ????????????????, ?? ?????????? ???? ???????????????? ???????????? ??????????, ?????????? ??????, ?????????????? ????????????????. ?????????????? ?????????? ?????????????????????????????? ?????????? ?????????? ???? ???????????????????? ???? ?????????? ??????????????. ???????? ?????????????????? ?????? ???????? ??????????, ?? ?????????????????????????? ?????????? ?? ???????????? ??? ?? ???????????????? ?????? ??????????-?????????????? ?? ??????????????????. ?????????? ???? ?????????? ???????????????? ???? ??????????????????, ???? ??????????????????. ?????? ?????? ?????? ???? ???????????? ?? ???????? ????, ???????? ?? ???? ?????????  ????????, ?????????????? ?????????????? ?? ???????? ??????????????. ????-????????????: ?????? ???? ???????? ?????????? ???????????? ????????, ???????????????? ?? ??????????????????????, ?? ???????????? ???????????? ??????????????????????, ?????????????????? ???? ???????? ?? ???? ???? ?????? ??????, ?????? ????????????, ?????? ???? ?????????????????????? ??????????. ????-????????????: ???????????????? ?????????????????????? ?? ??????????????, ???????? ?????????? ????????, ????????????, ?? ????????????????, ???????? ?? ???? ????. ?????????????????? ??? ?????? ??????, ???????? ?????????? ????????????????, ?????? ???????????? ???? ?? ??????????????????, ?? ?????????? ???? ???????????????? ????????, ?????? ???? ????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "If anyone can give me good reason to think that I am going astray in my thoughts or my actions, I will gladly change my ways. For I seek the truth, which has never caused harm to anyone; no, the person who is harmed is one who persists in his self-deception and ignorance. 22",
    author: "Marcus Aurelius",
  },
  {
    text: "every man is worth just so much as the things are worth about which he busies himself. In",
    author: "Marcus Aurelius",
  },
  {
    text: "If you suffer distress because of some external cause, it is not the thing itself that troubles you but your judgement about it, and it is within your power to cancel that judgement at any moment.",
    author: "Marcus Aurelius",
  },
  {
    text: "The fencer???s weapon is picked up and put down again. The boxer???s is part of him. All he has to do is clench his fist.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens at all happens as it should; you will find this true, if you watch narrowly.",
    author: "Marcus Aurelius",
  },
  {
    text: "??????????? ??????????????????? ???????????? ?????????????????????? ?????????????????, ??????????????????, ????????????????, ?????????????, ??????????????, ?????????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "queda como propio de la persona buena desear y conformarse con lo que le ocurre y estar entrelazado con su destino. Al",
    author: "Marcus Aurelius",
  },
  {
    text: "And to have learned how to accept favors from friends without losing your self-respect or appearing ungrateful.",
    author: "Marcus Aurelius",
  },
  {
    text: "Nothing that goes on in anyone else???s mind can harm you.",
    author: "Marcus Aurelius",
  },
  {
    text: "When jarred, unavoidably, by circumstance, revert at once to yourself, and don???t lose the rhythm more than you can help. You???ll have a better group of harmony if you keep on going back to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "When you are disturbed by events and lose your serenity, quickly return to yourself and don't stay upset longer than the experience lasts; for you'll have more mastery over your inner harmony by continually returning to it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Si llevas a cabo la tarea presente de acuerdo con la raz??n recta, con diligencia, con fuerza, con buen ??nimo y no te desv??as en nada accesorio sino que vigilas que tu esp??ritu divino permanezca puro como si ya hubiera que devolverlo, si te agarras a eso sin esperar ni evitar nada, sino que te conformas en tu actuaci??n presente a la naturaleza y en lo que dices y declaras a la verdad romana, tendr??s una buena vida. Nadie hay que pueda imped??rtelo.",
    author: "Marcus Aurelius",
  },
  {
    text: "Practice even at the things that you have lost all hope of achieving. For the left hand, though inefficient at everything else through lack of practice, is more powerful than the right when it comes to gripping the bridle; for it has had good practice at that.",
    author: "Marcus Aurelius",
  },
  {
    text: "The universe is transformation; life is opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "The perfection of moral character consists in this, in passing every day as the last, and in being neither violently excited nor torpid nor playing the hypocrite.",
    author: "Marcus Aurelius",
  },
  {
    text: "There is nothing more shameful than perfidious friendship.",
    author: "Marcus Aurelius",
  },
  {
    text: "His mood is one of strenuous weariness; he does his duty as a good soldier, waiting for the sound of the trumpet which shall sound the retreat; he has not that cheerful confidence which led Socrates through a life no less noble, to a death which was to bring him into the company of gods he had worshipped and men whom he had revered.",
    author: "Marcus Aurelius",
  },
  {
    text: "our own worth is measured by what we devote our energy to.  4.",
    author: "Marcus Aurelius",
  },
  {
    text: "Things of themselves cannot touch the soul at all. They have no entry to the soul, and cannot turn or move it. The soul alone turns and moves itself, making all externals presented to it cohere with the judgements it thinks worthy of itself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou must now at last perceive of what universe thou art a part, and of what administrator of the universe thy existence is an efflux, and that a limit of time is fixed for thee, which if thou dost not use for clearing away the clouds from thy mind, it will go and thou wilt go, and it will never return.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t be irritated at people???s smell or bad breath. What???s the point? With that mouth, with those armpits, they???re going to produce that odor. ???But they have a brain! Can???t they figure it out? Can???t they recognize the problem? So you have a brain as well. Good for you. Then use your logic to awaken his. Show him. Make him realize it. If he???ll listen, then you???ll have solved the problem. Without anger. 28a.",
    author: "Marcus Aurelius",
  },
  {
    text: "spend not thy time in thinking, what such a man doth, and to what end: what he saith, and what he thinks, and what he is about, and such other things or curiosities, which make a man to rove and wander from the care and observation of that part of himself, which is rational, and overruling",
    author: "Marcus Aurelius",
  },
  {
    text: "According to this theory, man is like a dog tied to a moving wagon. If the dog refuses to run along with the wagon he will be dragged by it, yet the choice remains his: to run or be dragged. In the same way, humans are responsible for their choices and actions, even though these have been anticipated by the logos and form part of its plan.",
    author: "Marcus Aurelius",
  },
  {
    text: "Never wilt your soul, never be just good, simple or unpolished. Manifest more then the body that surrounds yourself.",
    author: "Marcus Aurelius",
  },
  {
    text: "Casting therefore all other things aside, keep thyself to these few, and remember withal that no man properly can be said to live more than that which is now present, which is but a moment of time. Whatsoever is besides either is already past, or uncertain.",
    author: "Marcus Aurelius",
  },
  {
    text: "??ak i da ??ivi?? tri hiljade godina, ili mo??da deset puta toliko, uvek treba da misli?? na to kako niko ne mo??e izgubiti nikakav drugi ??ivot, do li onaj kojim je ??iveo i da niko nije ??iveo nekim drugim ??ivotom, nego onim koji je izgubio. Zato je i najdu??i ??ivot jednak onome koji je najkra??i. Jer je sada??nji ??ivot isti za sve, onaj koji je izgubljen, nije vi??e na??, a ono ??to gubimo, ose??amo kao gubitak samo u jednom trenutku. Niko ne mo??e izgubiti pro??li ili budu??i ??ivot, jer kako neko mo??e uzeti nekome ono ??to nema ? Prema tome, uvek treba misliti o dve istine : prvo, da je sve od pamtiveka isto, da se sve u odre??enim vremenskim razmacima ponovo vra??a i da ne postoji nikakva razlika u tome da li iste stvari posmatra?? tokom sto ili dvesta godina ili tokom ??itave ve??nosti; drugo, da smr??u podjednako gube i najstariji starac i najmla??i mladi??. Jer svaki od njih mo??e biti li??en samo sada??njeg trenutka, po??to, u stvari, samo njega i ima, a ono ??to neko nema ne mo??e ni izgubiti.",
    author: "Marcus Aurelius",
  },
  {
    text: "Consider yourself to be dead, and to have completed your life up to the present time; and now live according to nature the remainder which is allowed you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Ambition means tying your well-being to what other people say or do. Self-indulgence means tying it to the things that happen to you. Sanity means tying it to your own actions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Keep thyself therefore, truly simple, good, sincere, grave, free from all ostentation, a lover of that which is just, religious, kind, tender-hearted, strong and vigorous to undergo anything that becomes thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "Every instrument, tool, vessel, if it does that for which it has been made, is well, and yet he who made it is not there. But in the things which are held together by nature there is within and there abides in them the power which made them; wherefore the more is it fit to reverence this power, and to think, that, if thou dost live and act according to its will, everything in thee is in conformity to intelligence. And thus also in the universe the things which belong to it are in conformity to intelligence.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is crazy to want what is impossible. And impossible for the wicked not to do so.",
    author: "Marcus Aurelius",
  },
  {
    text: "12. From Alexander the Platonist, not to say to anyone often or without necessity, nor write in a letter, I am too busy, nor in this fashion constantly plead urgent affairs as an excuse for evading the obligations entailed upon us by our relations towards those around us.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou art a little soul bearing about a corpse,",
    author: "Marcus Aurelius",
  },
  {
    text: "Observe constantly that all things take place by change, and accustom thyself to consider that the nature of the Universe loves nothing so much as to change the things which are and to make new things like them. For everything that exists is in a manner the seed of that which will be. But thou art thinking only of seeds which are cast into the earth or into a womb: but this is a very vulgar notion.",
    author: "Marcus Aurelius",
  },
  {
    text: "for a man to be proud and high conceited, that he is not proud and high conceited, is of all kind of pride and presumption, the most intolerable.",
    author: "Marcus Aurelius",
  },
  {
    text: "Ons leven is slechts wat onze gedachten ervan maken.",
    author: "Marcus Aurelius",
  },
  {
    text: "Secondly, neither have I ever seen mine own soul, and yet I respect and honour it. So then for the Gods, by the daily experience that I have of their power and providence towards myself and others, I know certainly that they are, and therefore worship them.",
    author: "Marcus Aurelius",
  },
  {
    text: "Remember, nothing belongs to you but your flesh and blood???and nothing else is under your control.",
    author: "Marcus Aurelius",
  },
  {
    text: "El tiempo de la vida humana es un punto: la sustancia, fluente; la sensaci??n, oscurecida; toda la constituci??n del cuerpo, corruptible; en resumen, todas las cosas propias del cuerpo son a manera de un r??o; las del alma, sue??o y vaho; la vida, una lucha, un destierro; la fama de la posteridad, olvido. Qu?? hay, pues, que nos pueda llevar a salvamento? Una sola y ??nica cosa: la filosof??a. Y ??sta consiste en conservar el dios interior sin ultraje ni da??o, para que triunfe de placeres y de dolores, para que no obre al acaso, y se mantenga lejos de toda falsedad y disimulo, al margen de que se haga o no se haga esto o aquello; adem??s, para que acepte la parte que le tocare en los varios sucesos accidentales e integrales de su parte, como procedentes de aquel origen de quien procede ??l mismo; y, en particular, para que aguarde la muerte en actitud pl??cida, no viendo en ella otra cosa m??s que la disoluci??n de los elementos de que consta todo ser viviente. Si no hay nada temible para los mismos elementos en esta transformaci??n incesante de uno en otro, por qu?? temer la transformaci??n y disoluci??n de todas las otras cosas? Esto es conforme con la naturaleza: y nada es malo cuanto de ella se acomoda.",
    author: "Marcus Aurelius",
  },
  {
    text: "Either a universe with order and purpose or a medley thrown together by chance, but that too has order. Or can there be order of a kind in your inner world, but no order in the Whole, especially as all things are distinguished from one another, yet intermingle, and respond to each other?",
    author: "Marcus Aurelius",
  },
  {
    text: "From Sextus, a benevolent disposition, and the example of a family governed in a fatherly manner, and the idea of living conformably to nature; and gravity without affectation, and to look carefully after the interests of friends, and to tolerate ignorant persons, and those who form opinions without consideration:",
    author: "Marcus Aurelius",
  },
  {
    text: "When it allows its action and impulse to be without a purpose, to be random and disconnected: even the smallest things ought to be directed toward a goal.",
    author: "Marcus Aurelius",
  },
  {
    text: "There is but one light of the sun, though it be intercepted by walls and mountains, and other thousand objects. There is but one common substance of the whole world, though it be concluded and restrained into several different bodies, in number infinite. There is but one common soul, though divided into innumerable particular essences and natures. So is there but one common intellectual soul, though it seem to be divided.",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ??????, ?????? ?????????? ???????????????????????? ???????????? ????????, ??????????, ???????????????? ??????????????????????, ???? ???????????????? ?????????????????????? ??????????, ???? ???????????? ????????????????, ???? ?????????????????? ???? ?? ??????????????????, ???? ?? ????????????????????????. ???? ?????????? ???????? ??? ?? ?????? ?????????? ?????????????? ??? ???????????? ???? ?????????????????? ?? ???????????? ???? ??????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Aunque sean dos, el camino es uno s??lo.",
    author: "Marcus Aurelius",
  },
  {
    text: "The value of attentiveness varies in proportion to its object. You???re better off not giving the small things more time than they deserve.",
    author: "Marcus Aurelius",
  },
  {
    text: "One is a careful distinction between things which are in our power and things which are not. Desire and dislike, opinion and affection, are within the power of the will; whereas health, wealth, honour, and other such are generally not so. The Stoic was called upon to control his desires and affections, and to guide his opinion; to bring his whole being under the sway of the will or leading principle, just as the universe is guided and governed by divine Providence.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thou must be like a promontory of the sea, against which though the waves beat continually, yet it both itself stands, and about it are those swelling waves stilled and quieted.",
    author: "Marcus Aurelius",
  },
  {
    text: "Desechado, pues, de ti todo otro cuidado, pon s??lo la atenci??n en unos pocos preceptos. Y acu??rdate que cada uno no vive m??s que el presente, indeciblemente peque??o. El resto de la vida, o ya se acab?? de vivir, o es incierto. Brev??simo es, pues, el instante que cada uno vive, brev??simo el espacio donde habita, brev??sima la fama de la posteridad. Y aun ??sta no existe m??s que por una sucesi??n de pigmeos que morir??n muy en breve, que no se conocen a s?? mismos, y todav??a menos al hombre que muri?? tanto antes.",
    author: "Marcus Aurelius",
  },
  {
    text: "At dawn, when you have trouble getting out of bed, tell yourself: ???I have to go to work???as a human being. What do I have to complain of, if I???m going to do what I was born for???the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm? ??????But it???s nicer here?????? So you were born to feel ???nice???? Instead of doings things and experiencing them? Don???t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can? And you???re not willing to do your job as a human being? Why aren???t you running to do what your nature demands? ??????But we have to sleep sometime?????? Agreed. But nature set a limit on that???as it did on eating and drinking. And you???re over the limit. You???ve had more than enough of that. But not of working. There you???re still below your quota. You don???t love yourself enough. Or you???d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat. Do you have less respect for your own nature than the engraver does for engraving, the dancer for dance, the miser for money or the social climber for status? When they???re really possessed by what they do, they???d rather stop eating and sleeping than give up practicing their arts.",
    author: "Marcus Aurelius",
  },
  {
    text: 'Remember what Marcus Aurelius said: "Accept the things to which life binds you, and love the people with whom life brings you together, but do so with all your heart.',
    author: "Marcus Aurelius",
  },
  {
    text: "Make for thyself a definition or description of the thing which is presented to thee, so as to see distinctly what kind of a thing it is in its substance, in its nudity, in its complete entirety, and tell thyself its proper name, and the names of the things of which it has been compounded, and into which it will be resolved.",
    author: "Marcus Aurelius",
  },
  {
    text: "no ser tramposo, tener nobleza, aguantar los trabajos, despreciar los placeres, no quejarse de tu destino, necesitar poco, la buena disposici??n, la liberalidad, la sencillez, no ser charlat??n, la grandeza. ??",
    author: "Marcus Aurelius",
  },
  {
    text: "Alexander the Macedonian and his groom by death were brought to the same state; for either they were received among the same seminal principles of the universe, or they were alike dispersed among the atoms. Consider",
    author: "Marcus Aurelius",
  },
  {
    text: "En tu mano est?? reavivar continuamente su llama. Puedo",
    author: "Marcus Aurelius",
  },
  {
    text: "One is that things do not touch the soul, for they are external and remain immovable; but our perturbations come only from the opinion which is within. The other is that all these things, which thou seest, change immediately and will no longer be; and constantly bear in mind how many of these changes thou hast already witnessed. The universe is transformation; life is opinion.",
    author: "Marcus Aurelius",
  },
  { text: "existence", author: "Marcus Aurelius" },
  {
    text: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinions than our own.",
    author: "Marcus Aurelius",
  },
  {
    text: "Think of the countless changes in which you yourself have bad a part. The whole universe is change, and life is but what you deem it.",
    author: "Marcus Aurelius",
  },
  {
    text: "If anyone can show me, and prove to me, that I am wrong in thought or deed, I will gladly change. I think the truth , which never yet hurt anybody. It is only persistence and self-delusion and ignorance which does harm.",
    author: "Marcus Aurelius",
  },
  {
    text: "And that might be applied to him which is recorded of Socrates, that he was able both to abstain from, and to enjoy, those things which many are too weak to abstain from, and cannot enjoy without excess.",
    author: "Marcus Aurelius",
  },
  {
    text: "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others. If then a god or a wise teacher should present himself to a man and bid him to think of nothing and to design nothing which he would not express as soon as he conceived it, he could not endure it even for a single day. So much more respect have we to what our neighbours shall think of us than to what we shall think of ourselves.",
    author: "Marcus Aurelius",
  },
  {
    text: "a society of equal laws, governed by equality of status and of speech, and of rulers who respect the liberty of their subjects above all else.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Cu??ntos de los agasajados con muchos himnos est??n ya entregados al olvido! ??Cu??ntos de los que hicieron esos himnos hace tiempo que est??n ausentes!",
    author: "Marcus Aurelius",
  },
  {
    text: "The other is that all these things, which thou seest, change immediately and will no longer be; and constantly bear in mind how many of these changes thou hast already witnessed. The universe is transformation: life is opinion.",
    author: "Marcus Aurelius",
  },
  {
    text: "Death is such as generation is, a mystery of nature; a composition out of the same elements, and a decomposition into the same;",
    author: "Marcus Aurelius",
  },
  {
    text: "No te averg??ences de recibir ayuda porque tienes delante realizar la tarea que te corresponde como el soldado que ataca una muralla. ??",
    author: "Marcus Aurelius",
  },
  {
    text: "What then is that which is able to conduct a man? One thing and only one, philosophy. But this consists in keeping the daemon within a man free from violence and unharmed, superior to pains and pleasures, doing nothing without purpose, nor yet falsely and with hypocrisy, not feeling the need of another man???s doing or not doing anything; and besides, accepting all that happens, and all that is allotted, as coming from thence, wherever it is, from whence he himself came; and, finally, waiting for death with a cheerful mind, as being nothing else than a dissolution of the elements of which every living being is compounded.",
    author: "Marcus Aurelius",
  },
  {
    text: "If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgement about it. And it is in thy power to wipe out this judgement now. But if anything in thy own disposition gives thee pain, who hinders thee from correcting thy opinion? And even if thou art pained because thou art not doing some particular thing which seems to thee to be right, why dost thou not rather act than complain?",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???? ?????????????????? ?????????? ?????????????? ????????????????????????, ?????????? ?????????????? ???????????? ???? ???????????? ???????????? ???????? ???? ???? ???????????????? ???????? ???????????? ????????????????????????, ???? ???? ???????????????? ?? ?????????????? ???? ???????????? ??????????????, ???? ???? ???????????????????? ?????? ???????????????? ?????????????? ?? ???? ???? ???????????????? ???? ?????????????? ?????????????? ?????????? ???????????????????? ???????????? ?????????????????? ??? ?????????? ???????????? ?? ?????????????? ???? ?????????????????????? ???? ?????????????????????? ?? ?????????? ???????????????? ???????? ?????????? ????????????????????, ?????????? ?? ?????????? ??????????????????, ?????????? ???????????? ??????????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Love the art, poor as it may be, that you have learned, and be content with it; and pass through the rest of life like one who has entrusted to the gods with his whole soul all that he has, making yourself neither the tyrant nor the slave of any man.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do external things distract you? Then make time for yourself to learn something worthwhile; stop letting yourself be pulled in all directions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Whatever happens, happens rightly. Watch closely, and you will find this true. In the succession of events there is not mere sequence alone, but an order that is just right, as from the hand of one who dispense to their due.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you were asked to spell the name Antoninus, would you rap out each letter at the top of voice, and then, if your hearers grew angry, grow angry yourself in turn? Rather, would you not proceed to enumerate the several letters quietly one by one? Well then; remember that here in life every piece of duty is likewise made up of its separate items. Pay careful attention to each of these, without fuss and without returning temper for temper, and so ensure the methodical completion of your task.",
    author: "Marcus Aurelius",
  },
  {
    text: "In this infinity then what is the difference between him who lives three days and him who lives three generations? Always",
    author: "Marcus Aurelius",
  },
  {
    text: "system, let this first be established, that I am a part of the whole which is governed by nature; next, I am in a manner intimately related to the parts which are of the same kind with myself. For remembering this, inasmuch as I am a part, I shall be discontented with none of the things which are assigned to me out of the whole; for nothing is injurious to the part, if it is for the advantage of the whole. For the whole contains nothing which is not for its advantage; and all natures indeed have this common principle, but the nature of the universe has this principle besides, that it cannot be compelled even by any external cause to generate anything harmful to itself. By",
    author: "Marcus Aurelius",
  },
  {
    text: '264. "Such as you are your habitual thoughts, such also will be the character of your mind; for your soul is dyed through the thoughts."~',
    author: "Marcus Aurelius",
  },
  {
    text: "XLVI. The ambitious supposeth another man's act, praise and applause, to be his own happiness; the voluptuous his own sense and feeling; but he that is wise, his own action.",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ???????????????? ?????????? ?? ??????????? ???????????? ???????????????? ???? ????, ?????? ???????????? ?????? ?????????????????? ????????????????, ???? ???????? ??????????????, ???????????????????????????? ?? ???? ?? ???????????? ??????????????, ???? ?????????????????? ????????????, ???????????????????????? ?? ?????????????????????????? ??????, ??????????????, ????-????????????????, ???????? ??????????, ???? ???????????????????????????????? ????????????????????????, ?????????????????? ?????????? ?????????? ????????????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "4. I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others. If then a god or a wise teacher should present himself to a man and bid him to think of nothing and to design nothing that he would not express as soon as he conceived it, he could not endure it even for a single day. So it is clear that we accord much more respect to what our neighbors think of us than to what we think of ourselves.",
    author: "Marcus Aurelius",
  },
  {
    text: "Stir up thy mind, and recall thy wits again from thy natural dreams, and visions, and when thou art perfectly awoken, and canst perceive that they were but dreams that troubled thee, as one newly awakened out of another kind of sleep look upon these worldly things with the same mind as thou didst upon those, that thou sawest in thy sleep.",
    author: "Marcus Aurelius",
  },
  {
    text: "Do not act as if you had ten thousand years to live ... while you have life in you, while you still can, make yourself good.",
    author: "Marcus Aurelius",
  },
  {
    text: "Is any man afraid of change? Why what can take place without change? What then is more pleasing or more suitable to the universal nature? And canst thou take a bath unless the wood undergoes a change? And canst thou be nourished, unless the food undergoes a change? And can anything else that is useful be accomplished without change? Dost thou not see then that for thyself also to change is just the same, and equally necessary for the universal nature?",
    author: "Marcus Aurelius",
  },
  {
    text: "Hay que reflexionar continuamente en cu??ntos m??dicos han muerto tras haber fruncido el entrecejo muchas veces por sus enfermos",
    author: "Marcus Aurelius",
  },
  {
    text: "LII. To them that are sick of the jaundice, honey seems bitter; and to them that are bitten by a mad dog, the water terrible; and to children, a little ball seems a fine thing. And why then should I be angry? or do I think that error and false opinion is less powerful to make men transgress, than either choler, being immoderate and excessive, to cause the jaundice; or poison, to cause rage?",
    author: "Marcus Aurelius",
  },
  {
    text: "How ridiculous and what a stranger he is who is surprised at anything that happens in life.",
    author: "Marcus Aurelius",
  },
  {
    text: "hay que ver siempre lo humano como flor de un d??a e inconsistente, ayer era una mucosidad, ma??ana ser?? momia y cenizas. Ese",
    author: "Marcus Aurelius",
  },
  {
    text: "Haga o diga alguien lo que quiera, obligado estoy a ser bueno. Como",
    author: "Marcus Aurelius",
  },
  {
    text: "Betimes in the morning say to thyself, This day I shalt have to do with an idle curious man, with an unthankful man, a railer, a crafty, false, or an envious man; an unsociable uncharitable man. All these ill qualities have happened unto them, through ignorance of that which is truly good and truly bad.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Soy afortunado porque, a pesar de haberme ocurrido eso, permanezco sin pena y no me rompo por el presente ni temo el porvenir.?? Porque",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????? ???? ?????????? ?? ?????????? ?????????????? ?????????????????? ?? ?????????????? ???????????? ???????????????????????? ?? ?????????????? ????. ???????????????????????? ?????????????? ???????? ???????? ???????????????????????? ????????, ???????????????????????????? ?? ?? ?????????????????????? ??????????????, ?????????????????? - ?????????????????? ???? ?????????????? ????????????????????????????; ?????????? ???????? ???? ?? ?????????????????? ?? ?????????????? ?????????? ?? ???????????????? ?????????????????????? ???? ?????????????????? ?? ??????????????, ?? ?????????? ???????????? ??????????????. ???????????? ?????? ???? ???? ?? ???????????? ??????????????, ?????????? ???? ????????????, ???????????????????? ?????? ?????????????? ?????? ???????? ??????????????????????????, ?????????? ?????????????????????????????? ???? ???? ???????? ?????? ???????? ?????????? ??????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "If you find something very difficult to achieve yourself, don???t imagine it impossible???for anything possible and proper for another person can be achieved as easily by you.",
    author: "Marcus Aurelius",
  },
  {
    text: "??Consideras, en resumen, que es desgracia del hombre lo que no es desacierto de la naturaleza humana? ??",
    author: "Marcus Aurelius",
  },
  {
    text: "You have the power to strip away many superfluous troubles located wholly in your judgement, and to possess a large room for yourself embracing in thought the whole cosmos, to consider everlasting time, to think of the rapid change in the parts of each thing, of how short it is from birth until dissolution, and how the void before birth and that after dissolution are equally infinite.",
    author: "Marcus Aurelius",
  },
  {
    text: "Self reliance, always. And cheerfulness.",
    author: "Marcus Aurelius",
  },
  {
    text: "If within the power of another, whom do you blame???atoms or gods? To do either is folly.",
    author: "Marcus Aurelius",
  },
  {
    text: "For we are made for co-operation, like feet, like hands, like eyelids, like the rows of the upper and lower teeth. To act against one another then is contrary to nature; and it is acting against one another to be vexed and to turn away.",
    author: "Marcus Aurelius",
  },
  {
    text: "habla y act??a en todo seg??n lo que sea m??s sano. Ese planteamiento te libera de golpes, de vacilaci??n, de preocupaci??n y afectaci??n.",
    author: "Marcus Aurelius",
  },
  {
    text: "No malogres la parte de vida que te queda en averiguar vidas ajenas, a no ser que te propongas alg??n fin ??til a la comunidad.",
    author: "Marcus Aurelius",
  },
  {
    text: "la naturaleza tambi??n nos dio su medida, tambi??n nos la dio del comer y del beber, no obstante, t?? sobrepasas lo que es suficiente. Pero",
    author: "Marcus Aurelius",
  },
  {
    text: "By remembering, then, that I am a part of such a whole, I shall be content with everything that happens. And inasmuch as I am in a manner intimately related to the parts which are of the same kind with myself, I shall do nothing unsocial, but I shall rather direct myself to the things which are of the same kind with myself, and I shall turn an my efforts to the common interest, and divert them from the contrary. Now, if these things are done so, life must flow on happily, just as thou mayest observe that the life of a citizen is happy, who continues a course of action which is advantageous to his fellow-citizens, and is content with whatever the state may assign to him. The",
    author: "Marcus Aurelius",
  },
  {
    text: "?????????????? ??????????????????, ???????????????????? ?? ???????????? ???? ????????. ?????????????? ???????????? ???? ????????, ???????????????????? ?? ?????????? ????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Thy speech is not right, O man! if thou supposest that he that is of any worth at all, should apprehend either life or death, as a matter of great hazard and danger; and should not make this rather his only care, to examine his own actions, whether just or unjust: whether actions of a good, or of a wicked man, c. For thus in very truth stands the case, O ye men of Athens. What place or station soever a man either hath chosen to himself, judging it best for himself; or is by lawful authority put and settled in, therein do I think (all appearance of danger notwithstanding) that he should continue, as one who feareth neither death, nor anything else, so much as he feareth to commit anything that is vicious and shameful, c.",
    author: "Marcus Aurelius",
  },
  {
    text: "Que no te aparte que detr??s venga la cr??tica o la palabra de algunos, por el contrario, si est?? bien hecho o bien dicho, no te subestimes. Ellos",
    author: "Marcus Aurelius",
  },
  {
    text: "never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    author: "Marcus Aurelius",
  },
  {
    text: "???????? ???? ?????????????????????? ???? ???????????? ????????-???????? ????????????????, ???? ???????????????? ???????? ???? ???????? ?????? ????????, ?? ???????? ???????????????? ?? ??????. ???? ?????????????????? ?????????????????? ?? ?????????? ????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "This day I shalt have to do with an idle curious man, with an unthankful man, a railer, a crafty, false, or an envious man; an unsociable uncharitable man. All these ill qualities have happened unto them, through ignorance of that which is truly good and truly bad. But I",
    author: "Marcus Aurelius",
  },
  {
    text: "Practice even what seems impossible. The left hand is useless at almost everything, for lack of practice. But it guides the reins better than the right. From practice.  7.",
    author: "Marcus Aurelius",
  },
  {
    text: "??A cu??ntos Crisipos se ha tragado ya la eternidad, a cu??ntos S??crates, a cu??ntos Epictetos! Que se te ocurra lo mismo ante absolutamente cualquier hombre y cosa.",
    author: "Marcus Aurelius",
  },
  {
    text: "I am unhappy, because this has happened to me.??? Not so: say, ???I am happy, though this has happened to me, because I continue free from pain, neither crushed by the present nor fearing the future.",
    author: "Marcus Aurelius",
  },
  {
    text: "Avanzo por los caminos que son conformes a la naturaleza hasta, tras caer, tomar un descanso; expiro en el aire de donde respiro cada d??a y caigo en la tierra de donde mi padre aport?? su peque??a semilla, mi madre su peque??a cantidad de sangre[279], la nodriza su peque??a cantidad de leche, de donde me nutro y riego cada d??a durante tantos a??os, aquello que me lleva como caminante y que malgasto para mi propio perjuicio en tantas cosas.",
    author: "Marcus Aurelius",
  },
  {
    text: "For the whole earth is a point, and how small a nook in it is this thy dwelling, and how few are there in it, and what kind of people are they who will praise thee. This then remains: Remember to retire into this little territory of thy own, and above all do not distract or strain thyself, but be free, and look at things as a man, as a human being, as a citizen, as a mortal.",
    author: "Marcus Aurelius",
  },
  {
    text: "The highest good of man is consciously to work with God for the common good, and this is the sense in which the Stoic tried to live in accord with nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "That men of a certain type should behave as they do is inevitable. To wish it otherwise were to wish the fig-tree would not yield its juice. In any case, remember that in a very little while both you and he will be dead, and your very names will quickly be forgotten.",
    author: "Marcus Aurelius",
  },
  {
    text: "How quickly all things disappear, in the universe the bodies themselves, but in time the remembrance of them; what is the nature of all sensible things, and particularly those which attract with the bait of pleasure or terrify by pain, or are noised abroad by vapoury fame; how worthless, and contemptible, and sordid, and perishable, and dead they are???all this it is the part of the intellectual faculty to observe. To",
    author: "Marcus Aurelius",
  },
  {
    text: "Pneuma is the power???the vital breath???that animates animals and humans. It is, in Dylan Thomas???s phrase, ???the force that through the green fuse drives the flower,??? and is present even in lifeless materials like stone or metal as the energy that holds the object together???the",
    author: "Marcus Aurelius",
  },
  {
    text: "When an opponent in the gymnasium gashes us with his nails or bruises our head in a collision, we do not protest or take offence, and we do not suspect him ever afterwards of malicious intent. However, we do regard him with a wary eye; not in enmity or suspicion, yet good-temperedly keeping our distance. So let it be, too, at other times in life; let us agree to overlook a great many things in those who are, as it were, our fellow-contestants. A simple avoidance, as I have said, is always open to us, without either suspicion or ill will.",
    author: "Marcus Aurelius",
  },
  {
    text: "When the object perishes, the pneuma that animated it is reabsorbed into the logos as a whole. This process of destruction and reintegration happens to individual objects at every moment.",
    author: "Marcus Aurelius",
  },
  {
    text: "Si la ciudad se perjudica no hay que irritarse con quien la perjudica, por el contrario hay que se??alarle qu?? es lo que le pas?? desapercibido.",
    author: "Marcus Aurelius",
  },
  {
    text: "5. Concentrate every minute like a Roman???like a man???on doing what???s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can???if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable. You see how few things you have to do to live a satisfying and reverent life? If you can manage this, that???s all even the gods can ask of you.",
    author: "Marcus Aurelius",
  },
  {
    text: "Don???t look at things the way wrong-doers do. Don???t look at things as wrong-doers want you too, either. Instead, strive to see things in truth, as they really are.",
    author: "Marcus Aurelius",
  },
  {
    text: "My city and my country, as I am Antoninus, is Rome; as I am a man, it is the world.",
    author: "Marcus Aurelius",
  },
  {
    text: "the Stoics had always approved of participation in public life, and this stand struck a chord with the Roman aristocracy, whose code of values placed a premium on political and military activity.",
    author: "Marcus Aurelius",
  },
  {
    text: "For in those things that properly belong unto the mind, she cannot be hindered by any man",
    author: "Marcus Aurelius",
  },
  {
    text: "Nunca juzgues ??til para ti mismo lo que tal vez te obligue alg??n d??a a quebrantar la palabra dada, a renunciar al pudor, a odiar; recelar, imprecar, disimular, desear lo que s??lo puede hacerse a puertas cerradas y tras las cortinas. El hombre que a todo antepusiere su inteligencia, su genio interior y los misterios del culto debido a la gloria de ??ste, ese hombre no representar?? una tragedia, no se entregar?? al llanto, prescindir?? de la soledad como de la muchedumbre; y, lo que es m??s, vivir?? sin aprestarse y sin huir de la muerte. No se inquietar?? por gozar, durante un intervalo m??s o menos largo de tiempo, de este soplo que rodea su cuerpo. Que, aunque conviniere desprenderse de ??l al mismo punto, marchar?? tan ??gilmente como har??a en cualquiera otra de las funciones de la vida, moderada y decorosamente. La sola cosa que procura durante toda su vida es preservar su inteligencia de una deformaci??n contraria a la naturaleza de un ser inteligente y sociable.",
    author: "Marcus Aurelius",
  },
  {
    text: "Indeed, the application of the adjective ???stoic??? to a person who shows strength and courage in misfortune probably owes more to the aristocratic Roman value system than it does to Greek philosophers. Stoicism",
    author: "Marcus Aurelius",
  },
  {
    text: "Niemand ist so gl??cklich, da?? nicht eins an seinem Sterbelager einige stehen sollten, die diesen Fall willkommen hei??en. Ist??s auch ein trefflicher und weiser Mensch, so findet sich am Ende doch immer jemand, der aufatmend von ihm sagt: nun werde ich von diesem Zuchtmeister erl??st; er war zwar keinem von uns l??stig, aber ich hatte immer das Gef??hl, als verdamme er uns stillschweigend alle miteinander! Und das ist beim Tode eines Trefflichen! Wie vieles mag unsereiner also an sich haben, um deswillen so mancher w??nscht, von uns befreit zu werden. Daran denke in deiner Sterbestunde!",
    author: "Marcus Aurelius",
  },
  {
    text: "?????? ??????????????????: ?? ??????, ?????? ????????????, ?? ????, ?? ?????? ????????????.",
    author: "Marcus Aurelius",
  },
  {
    text: "Anywhere you can lead your life, you can lead a good one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Either teach them better if it be in thy power; or if it be not, remember that for this use, to bear with them patiently, was mildness and goodness granted unto thee.",
    author: "Marcus Aurelius",
  },
  {
    text: "The world is nothing but change. Our life is only perception.",
    author: "Marcus Aurelius",
  },
  {
    text: "tanto el que goza de un tiempo m??s largo como el que ha de morir r??pidamente deja atr??s lo mismo, porque s??lo es el presente de lo que va a verse privado, si es eso lo ??nico que tiene y si uno no deja atr??s lo que no tiene.",
    author: "Marcus Aurelius",
  },
  {
    text: "My soul, will you ever be good, simple, individual, bare, brighter than the body covers you? Will you ever taste the disposition to love and affection? Will you ever be complete and free of need, missing nothing, desiring nothing live or lifeless for the enjoyment of pleasure?",
    author: "Marcus Aurelius",
  },
  {
    text: "One is a careful distinction between things which are in our power and things which are not. Desire and dislike, opinion and affection, are within the power of the will; whereas health, wealth, honour, and other such are generally not so. The Stoic was called upon to control his desires and affections, and to guide his opinion;",
    author: "Marcus Aurelius",
  },
  {
    text: "Every soul, the philosopher says, is involuntarily deprived of truth; consequently in the same way it is deprived of justice and temperance and benevolence and everything of the kind. It is most necessary to bear this constantly in mind, for thus thou wilt be more gentle towards all.",
    author: "Marcus Aurelius",
  },
  {
    text: "Wherein Antoninus recordeth, What and of whom, whether Parents, Friends, or Masters; by their good examples, or good advice and counsel, he had learned:",
    author: "Marcus Aurelius",
  },
  {
    text: "Take away thy opinion, and then there is taken away the complaint, ???I have been harmed.??? Take away the complaint, ???I have been harmed,??? and the harm is taken away.",
    author: "Marcus Aurelius",
  },
  {
    text: "Man, what are you talking about? Me in chains? You may fetter my leg but my will, not even Zeus himself can overpower.",
    author: "Marcus Aurelius",
  },
  {
    text: "hold every hour in your grasp. Lay hold of to-day's task, and you will not need to depend so much upon to-morrow's. While we are postponing, life speeds by. Nothing, Lucilius, is ours, except time. We were entrusted by nature with the ownership of this single thing, so fleeting and slippery that anyone who will can oust us from possession. What fools these mortals be! They allow the cheapest and most useless things, which can easily be replaced, to be charged in the reckoning, after they have acquired them; but they never regard themselves as in debt when they have received some of that precious commodity, ??? time! And yet time is the one loan which even a grateful recipient cannot repay.",
    author: "Marcus Aurelius",
  },
  {
    text: "And thou wilt give thyself relief, if thou doest every act of thy life as if it were the last,",
    author: "Marcus Aurelius",
  },
  {
    text: "What is evil to thee does not subsist in the ruling principle of another; nor yet in any turning and mutation of thy corporeal covering. Where is it then? It is in that part of thee in which subsists the power of forming opinions about evils. Let this power then not form such opinions, and all is well. And if that which is nearest to it, the poor body, is burnt, filled with matter and rottenness, nevertheless let the part which forms opinions about these things be quiet, that is, let it judge that nothing is either bad or good which can happen equally to the bad man and the good. For that which happens equally to him who lives contrary to nature and to him who lives according to nature, is neither according to nature nor contrary to nature.",
    author: "Marcus Aurelius",
  },
  {
    text: "All that exists is the seed of what will emerge from it.",
    author: "Marcus Aurelius",
  },
  {
    text: '?????? ?????????????????? ?????? ???????? ???? ?? ?????????????????????? ???????????? ???????????? ?????????? ?? ???? ?? ???????????????????????? ?? ???????????????????? ???????????? ????????. ??? "???? ?????? ?????". ??? ?? ?????????? ?????????????????????? ???????????????????? ???????? ?????????????????? ?? ??????. ?????????? ?????? ?????????????????????? ?????????????????? ?? ?????????? ???????? ??????????, ?????????? ???????????????? ???? ??????????????, ???? ????????, ??????????, ????????, ?????????? ?????? ?????????????? ?? ??????????, ??.??. ?????????? ?????? ????????????????, ?????? ?????? ???? ??????????, ???? ?????? ?? ??????, ?????? ?????????? ?????????? ?????????????????? ?????? ?? ????????????, ?????? ?? ?? ?????????????? ??????????????????. ???????? ????, ?????? ?????????????????? ?????????? ?????????????????? ?????? ?? ?????????????? ?? ???????????????????????? ?? ????????????????, ?????? ?? ?? ?????????????? ???????????????? ????, ???? ???????????????? ?? ???????????????? ?? ???? ???????? ???????????? ??????.',
    author: "Marcus Aurelius",
  },
  {
    text: "Nicht den Tod sollte man f??rchten, sondern da?? man nie beginnen wird, zu leben.",
    author: "Marcus Aurelius",
  },
  {
    text: "It is royal to do good and to be abused.",
    author: "Marcus Aurelius",
  },
  {
    text: "things????I was once a fortunate man, but I lost it, I know not how.???But fortunate means that a man has assigned to himself a good fortune: and a good fortune is good disposition of the soul, good emotions, good actions.",
    author: "Marcus Aurelius",
  },
  {
    text: "Contempla il corso degli astri52 immaginando di ruotare con loro e pensa come gli elementi si trasformano continuamente gli uni negli altri. Il pensiero di queste cose, infatti, purifica dalle brutture della vita terrena.",
    author: "Marcus Aurelius",
  },
  {
    text: "Even chance is not divorced from nature, from the inweaving and and enfolding of things governed by Providence.",
    author: "Marcus Aurelius",
  },
  {
    text: "be not either a man of many words, or busy about too many things.",
    author: "Marcus Aurelius",
  },
  {
    text: "But death and life, success and failure, pain and pleasure, wealth and poverty, all these happen to good and bad alike, and they are neither noble or shameful???and hence neither good nor bad.",
    author: "Marcus Aurelius",
  },
  {
    text: "That I was not long brought up by the concubine of my father; that I preserved the flower of my youth. That I took not upon me to be a man before my time, but rather put it off longer than I needed. That I lived under the government of my lord and father, who would take away from me all pride and vainglory, and reduce me to that conceit and opinion that it was not impossible for a prince to live in the court without a troop of guards and followers, extraordinary apparel, such and such torches and statues, and other like particulars of state and magnificence; but that a man may reduce and contract himself almost to the state of a private man, and yet for all that not to become the more base and remiss in those public matters and affairs, wherein power and authority is requisite.",
    author: "Marcus Aurelius",
  },
  {
    text: "Acquire the contemplative way of seeing how all things change into one another, and constantly attend to it, and exercise thyself about this part of philosophy. For nothing is so much adapted to produce magnanimity. But as to what any man shall say or think about him, or do against him, he never even thinks of it, being himself contented with these two things: (1) with acting justly in what he now does, and (2) being satisfied with what is now assigned to him. He lays aside all distracting and busy pursuits- and desires nothing else - than to do what is right, and accomplish God's will.\" [Book X v. 11]",
    author: "Marcus Aurelius",
  },
  {
    text: "We have two ears and one mouth, so we should listen more than we say.",
    author: "Zeno of Citium",
  },
  {
    text: "Man conquers the world by conquering himself.",
    author: "Zeno of Citium",
  },
  {
    text: "The goal of life is living in agreement with Nature.",
    author: "Zeno of Citium",
  },
  {
    text: "if being is many, it must be both like and unlike, and this is impossible, for neither can the like be unlike, nor the unlike like",
    author: "Zeno of Citium",
  },
  {
    text: "The reason why we have two ears and only one mouth is that we may listen the more and talk the less.",
    author: "Zeno of Citium",
  },
  {
    text: "We have two ears and one mouth, therefore we should listen twice as much as we speak.",
    author: "Zeno of Citium",
  },
  {
    text: "Well-being is attained little by little, and nevertheless is no little thing itself.",
    author: "Zeno of Citium",
  },
];

export { quotes };
