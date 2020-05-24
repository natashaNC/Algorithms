class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.interest = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance ${self.balance}")
        return self

    def yield_interest(self):
        interest = self.balance * self.interest
        self.balance += self.balance + interest
        return self


bankaccount1 = BankAccount(0.05, 0)
bankaccount2 = BankAccount(0.05, 100)

bankaccount1.deposit(100).deposit(500).deposit(700).withdraw(700).yield_interest().display_account_info()
bankaccount2.deposit(800000).deposit(509855450).withdraw(700).withdraw(24554).withdraw(5554).withdraw(52578).yield_interest().display_account_info()


class User:		# declare a class and give it name User
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.checking = BankAccount(int_rate=0.00, balance=0)
        self.savings = BankAccount(int_rate=0.01, balance=0)
        # self.account_balance = 0

    def make_deposit(self, amount):
        # self.account_balance += amount
        self.checking.deposit(amount)
        self.savings.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        # self.account_balance -= amount
        self.checking.withdraw(amount)
        self.savings.withdraw(amount)
        return self

    def display_balance(self):
        print(f"User name: {self.name}. Account balance:{self.checking.display_account_info()}")
        print(f"User name: {self.name}. Account balance:{self.savings.display_account_info()}")
        return self

    def transfer_money(self, otheruser, amount):
        self.checking.withdraw(amount)
        otheruser.checking.withdraw(amount)
        self.savings.withdraw(amount)
        otheruser.savings.withdraw(amount)
        print("Transfer approved")

        self.display_balance()
        otheruser.display_balance()
        return self


user1 = User("Michael", "michael@codingdojo.com")
user2 = User("Alice", "alice@nba.com")
user3 = User("Topanga", "topanga@codingdojo.com")

user1.make_deposit(5000).make_deposit(550).make_deposit(57).make_withdrawal(20).display_balance().transfer_money(user3, 1000)
user2.make_deposit(500).make_deposit(1000000).make_withdrawal(5000).make_withdrawal(5000).display_balance()
user3.make_deposit(5000000).make_withdrawal(2000000).make_withdrawal(50000).make_withdrawal(1000000).display_balance()
