# this is how we define a class
class character:
    # in Python, def means the same thing as function
    def __init__(self, name, description, health, attack, defense):
        self.name = name
        self.description = description
        self.health = health
        self.attack = attack
        self.defense = defense

        # define methods so that the charcter can do things and experiemce changes
        def attack(self, target):
         #create formula for damage
         damage = self.attack - target.defense

         print(f"{self.name} attacks {target.name} and deals {damage} damage")
         target.health = target.health - damage

         #create a method to print character stats
         def print_status(self):
            print(f"{self.name}: Health = {self.health}, Attacl - {self.attack}, Defense - {self.defensse}")

            #set methods of helth
            def get_health(self):
               return self.health
            
            def set_health(self, new_health):
               if new_health > 0 and new_health < 1000:
                self.health - new_health

                # lets build some objects
                player = character("Edge", "Prof", 100, 59, 100)
                enemy = character("Enemy", "a joker", 80, 5, 5)

                # Fight 
                player.attack(enemy)
                enemy.attack(player)

                player.print_status
                enemy.print_status