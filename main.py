import requests
import time
import os

data = []
for _ in range(0,2):

    res = requests.get("https://opentdb.com/api.php?amount=10")
    if res.status_code == 200:
        data.extend(res.json()["results"])
    else:
        res = requests.get("https://opentdb.com/api.php?amount=10")
  
    # data.append(res.json()["results"])

easy = [item for item in data if item["difficulty"] == "easy"]
medium = [item for item in data if item["difficulty"] == "medium"]
hard = [item for item in data if item["difficulty"] == "hard"]

print(easy)

class quizApp():

    def __init__(self,easy,medium,hard):
        self.easy = easy
        self.medium = medium
        self.hard = hard
        
    def displayEasy(self):
        for i in range(len(self.easy)):
            print(self.easy[i]["question"])
            options = self.easy[i]["incorrect_answers"]
            options.append(self.easy[i]["correct_answer"])
            for j in range(len(options)):
                print(j+1,options[j])
            user_ans = input("Enter your answer : ")
            self.check(self.easy[i]["correct_answer"],user_ans)
          
 
    def check(self,correct_answer,user_ans):
        if correct_answer == user_ans:
            print("correct 👍")
        else:
            print("wrong 👎")


while True:
    x = input("Do you wanna play quiz? : ")
    if x.lower() == "yes":
        

        print("great!!")
        time.sleep(2)
  
        mode = input("Enter the mode \n1.easy\n2.medium\n3.hard \n\n: ")


        if mode == "1" or mode.lower() == "easy" :
            quiz = quizApp(easy,medium,hard)
            quiz.displayEasy()
        break
    elif x.lower() == "no":
        break

        