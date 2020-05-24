class House:
    def __init__(self, num_bath, num_bedroom):
        # define attributes
        self.numFloors = 2
        self.backyard = 1
        self.frontyard = 1
        self.kitchen = 1
        self.bathrooms = num_bath
        self.bedrooms = num_bedroom
        self.hasPool = False
        self.numFurniture = 0

    def addPool(self):
        self.hasPool = True
        return self

    def addFurniture(self, count):
        self.numFurniture += count
        return self


house1 = House(2, 3)
house2 = House(1, 3)
house3 = House(3, 4)

house1.addPool()
house1.addFurniture(5)
house1.addFurniture(2)

print(house1.addFurniture(5).addFurniture(2).addPool().addFurniture(5))

print(house1.hasPool)
print(house2.hasPool)

print(house1.bathrooms)
print(house2.bathrooms)

print(house1.numFurniture)
print(house3.numFurniture)

print(house1.__dict__)
