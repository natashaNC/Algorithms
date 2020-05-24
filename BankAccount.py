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
