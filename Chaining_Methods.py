class User:		# declare a class and give it name User
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_balance(self):
        print(f"User name: {self.name}. Account balance: {self.account_balance}")
        return self

    def transfer_money(self, otheruser, amount):
        self.account_balance -= amount
        otheruser.account_balance += amount
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
