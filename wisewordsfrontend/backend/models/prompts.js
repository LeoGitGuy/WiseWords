module.exports.prompts = {
  classification : {
    "prompt": `Classify this text into one of the following 4 semantic categories:
    \n1) A Company meeting. 
    \n2) A General conversation.
    \n3) A Teacher or Professor talking to his students.
    \n4) A draft for an E-Mail. 
    \n###\n
    Good morning pupils, today is Thursday. 
    This is the memo for your homework. 
    For history class, don't forget to read up about Rome in the book on page 21. 
    Also don't forget to hand in the essay, about the founding of Rome, until next Thursday. 
    What else did I want to say? Also, for art you have to upload your art picture on Moodle until 12 PM. 
    Yeah, don't forget all this stuff. I hope you all have a productive day. 
    \n###\n
    Semantic Category: 3) A Teacher or Professor talking to the students.
    \n###\n
    Hey guys, just for the meeting today a quick heads up. 
    We had a meeting yesterday with Maxxon, who develop our new motor for our skateboards. 
    They said we should talk about their newly developed Motor R200. 
    Also don't forget that today we have a meeting with Munich Woodworks at 3:00 PM 
    I have set you guys an outlook calendar entry. 
    and another Teams call with our axle company which is at, I think, 4:00 AM. 
    Also, don't forget in one week our sustainability report is due. 
    Yeah, I think that's all I wanted to say I guess. Yep, have a great day. 
    \n###\n
    Semantic Category: 1) A Company meeting.
    \n###\n
    Hey Rick, I have to tell you about my holiday in Canada. 
    You won't believe how close we were to death. 
    First we had a 5 day hiking trip on Vancouver Island on the West Coast trail where we 
    just had to live out of our bags and walked 400 km along the coast. Then we even saw a bear! 
    I have to end now, but I will tell you the whole story later.
    \n###\n
    Semantic Category: 2) A General conversation.
    \n###\n
    Write an Email to klassen@gmail.com. 
    Hello Mrs. Klassen, today I researched your company in the internet and I thought I should apply for you. 
    The robots, your are bulding, look really nice. 
    I also liked the culture in your company. 
    Is it ok to give my CV to you? Please call me back. 
    Best regards, Simon Ritch.
    \n###\n
    Semantic Category: 4) A draft for an E-Mail. 
    \n###\n
    Yesterday we had a awesome boat cruise through the inside passage where we saw whales. 
    You won't believe it how funny it was to see the tourists hunting for photos of whales.
    \nI don't want to make this message to long but one last story. 
    We went on a 3 day hike at the Kluane lake. But we got completely lost 
    because there were no real trails and we only had a small map.
    \nMy girlfriend did not have her glasses on so she thought all the time that 
    she saw a bear everywhere.\n###\nSemantic Category: 2) A General conversation.
    \n###\n
    Create email to Mr. Watson. I am sick today. work on Hyperloop is on halt because 
    of whether conditions. Intern Mick Harley comes tomorrow. someone has to pick him up at 8. 
    Nevermind, he has the keys already. No one has to pick him up. Susan wants to quit her job. 
    so we need to talk to her about her issue with Jim. See you tomorrow.
    \n###\n
    Semantic Category: 4) A draft for an E-Mail. 
    \n###\n
    Hey Guys, I hope you all have a pleasant morning. 
    Please repeat yesterday's economics homework again. 
    I have not decided when this will be due. 
    I saw some of you did some really terrible mistakes so far. 
    For Logics class please upload your work until 12 PM on Moodle. 
    Also don't forget buses are all cancelled. 
    And your computer science teacher is sick.
    \n###\n
    Semantic Category: 3) A Teacher or Professor talking to the students
    \n###\n
    Good morning, I hope you slept well. I just realized I have only the weekends to meet up. 
    I do have uni starting today and also. 
    Some events for the makeathon are online, like some talks tonight and some quizzes. 
    Those kind of team building things. 
    But you know, I'm sure I have time. 
    If you have time, if not, next week is also good. 
    I am off now to work training. 
    I said I'd be there at 8:30, but yeah, it's pretty casual since he's not paying me for 
    today and training should be paid in my opinion. 
    So I'm going to walk up there when I want an and then come back and then 12:00 PM 
    I start with programming class and then at 2:30 with Bulgarian II. 
    And which I'm super excited for and I looked at the textbook and like I can read it and understand it already. 
    So you know, I think it will be just in slightly modifying and my knowledge of Macedonian 
    into knowledge of Bulgarian, which is important because last time I went to Sofia 
    they kept correcting me because they didn't realize that I was speaking Macedonian. 
    \n###\n
    Semantic Category: 2) A General conversation.\n`,
    "temperature": 0.3,
    "max_tokens": 10,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "stop": ["."],
    },
    general : {
      "prompt" : `
      
      
      
      `,
      "temperature": 0.3,
      "max_tokens": 10,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "stop": ["."],
    },
  education : {
    "prompt": `Summarize for a school or university class. Do not repeat yourself. Use different emojis.
    \n### \nGood morning pupils, today is Thursday. This is the memo for your homework. 
    For history class, don't forget to read up about Rome in the book on page 21. 
    Also don't forget to bake and decorate your cakes for our little party next Thursday, 
    the twenty-second of January. What else did I want to say? Also, 
    for art you have to upload your art picture on Moodle until 12 PM. 
    Practice your cartwheel for sport class for next week. 
    Yeah, don't forget all this stuff. I hope you all have a productive day. 
    Oh I almost forgot, the principal announced that all class trips are cancelled. 
    So sadly our class trip to the museum is also cancelled
    \n### \n
    Subjects:\n- History\n- Art\n- Sport
    \nTO-DO:\n- 📖 time: ?, Read up about Rome in the History book on page 21. 
    \n- 🎊 time: 22.01, Bake and decorate cakes
    \n- 👨‍🎨 time: until 12:00 PM, Upload you Art pictures on Moodle. 
    \n- 🏃 time: next week, Practice your cartwheel for Sport class. 
    \nGeneral Info:\n- 🏛❌ time: ?, Class trip to the museum is cancelled
    \n### 
    \nHi guys. Until tonight you should finish up you math homework from yesterdays lecture. 
    Also do not forget to hand in your videos for art class. 
    Just send me the youtube link. Tomorrows lecture starts one hour later at 9. 
    Practice your cartwheel for gym class for next week. I wish you all have a good day. 
    And your gym teacher for tomorrows class will be someone else as your teacher is on vacation.
    \n###\n
    Subjects:\n- Math\n- Art
    \nTO-DO:\n- 📊 time: tonight, Finish up your Math homework. 
    \n- 🎥 time: ?, Hand in your videos for Art class via a youtube link. 
    \nGeneral Info:\n- 📅😴 time: tomorrow at 9:00 PM, Our Lecture starts later. 
    \n- 🏋️‍♂️ time: tomorrow, Gym teacher is a substitute
    \n###\n
    Good day, I hope you all have a pleasant morning. Please repeat yesterday's economics homework again. 
    I have not decided when this will be due. 
    I saw some of you did some really terrible mistakes so far. 
    For Foundations of Artificial Intelligence please upload your code until 12 PM on Github. 
    Also don't forget buses are all cancelled. And your computer science professor is sick.  
    \n###\n
    Subjects:\n- Economics\n- Foundations of Artificial Intelligence\n
    TO-DO:\n- 😾 time: today , Repeat yesterday's Economics homework. 
    \n- 👨‍💻 time: until 12:00 PM, Upload your code for Foundations of Artificial Intelligence on Github. 
    \nGeneral Info: 
    \n- 🚌 time: ?, Buses are all cancelled. 
    \n- 🤒👨‍🏫 time: ?, Computer science professor is sick. 
    \n###\n
    Hello Kevin, Thanks for handing in your homework! 
    However, I have recognised some mistakes in your text and marked them in red. 
    Please remember to write more in the present tense next time. 
    It might help you to look at the grammar from the last two weeks again.
    \nThe next german lesson will be on the second of august at 8am. I expect a correction by then. 
    Have a nice day, Mr. Claaßen.
    \n###\n
    Subjects:\n- ?
    \nTO-DO:\n- 🖋 time: ?, Be mindful of the tenses when writing a text. 
    \nGeneral Info: 
    \n- 📅🇩🇪 time: 02.08 at 8am, Next German lesson.
    \n###\n
    Good evening Mr. Classen, as soon as there will be a free place in the language class, you will be notified immediately. 
    Thank you for your interest in the French language. 
    Bien cordialement, C. Popp
    \n###\n
    Subjects:
    \n- French\n
    To-Dos: \n- ?\nGeneral Info: 
    \n- 🇫🇷 time: ?, Immediate notification when there is a free place in French.
    \n###\n
    Dear students, The exam of the lecture series Digital Innovation has been corrected and the results can be viewed in WueStudy today. 
    There will be another \"edition\" of the lecture series with new contributions in the winter semester. 
    A new round of the Social Innovators Challenge will take place in the summer semester. 
    We, the start-up advisory service at the Service Centre for Research and Technology Transfer, 
    the Career Centre at JMU and the Office for Innovation and Start-ups at the University of Bamberg 
    are looking for ideas and project proposals that offer innovative solutions to social challenges. 
    To participate in the competition, you must submit an idea paper by 04 May 2021. If your idea is to 
    be considered in the further course of the competition, a convincing elevator pitch video must be created 
    by 27 June. We will assist you in this process, in the form of online consultations and short video trainings.  
    In addition to individual feedback and support in the implementation of the project plans, there are cash prizes of up to 2,000€ to be won. 
    Interested? More information about the Challenge can be found on our website. We are looking forward to your ideas! 
    Best regards, Your team from the start-up advisory service at JMU.
    \n###\n
    Subjects:\n- Digital Innovation\n
    To-Dos: 
    \n- 💡🌐 time: 04.05.2021, Submit Idea paper.
    \n- 📹 time: 27.06, Create elevator pitch video. 
    \nGeneral Info: 
    \n- 🏫 time: today, Exam for the lecture series Digital Innovation is corrected.
    \n- 🚀 time: winter semester, New lecture series of Digital Innovation.
    \n- 🏆 time: summer semester, New round of the Social Innovators Challenge.
    \n- 💰 time: ?, Cash prizes of up to 2,000€.
    \n- 😊🕸 time: ?, Interested? More information about the Challenge can be found on our website.
    \n###\n
    Dear course participants, you have booked the course \"Introduction to Git \" 
    or you are on the waiting list.I wanted to inform you that there is again a long waiting list, 
    so if you do not want to/can not participate, please cancel the course by tomorrow, 
    either in the course shop or by sending an email to me. (even if you are on the waiting list). 
    The people on the waiting list will thank you for it!
    \n###\n
    Subjects:\n- Introduction to Git
    \nTo-Dos: 
    \n- ⏰ time: tomorrow, Cancel the course  
    \"Introduction to Git \" if you do not want to participate.\nGeneral Info:\n- ?
    \n###\n`,
    "temperature": 0.3,
    "max_tokens": 160,
    "top_p": 1,
    "frequency_penalty": 0.15,
    "presence_penalty": 0,
    "stop": ["###"],
    }
};