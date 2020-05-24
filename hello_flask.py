from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return "hello!"


@app.route('/nba')
def show_nba_stuff():
    return "Placeholder for nba text Placeholder for nba text Placeholder for nba text Placeholder for nba text"


@app.route('/soccer')
def show_soccer_stuff():
    return "Placeholder soccer text Placeholder soccer text  Placeholder soccer text Placeholder soccer text Placeholder soccer text Placeholder soccer text"


@app.route('/soccer/players/<playerid>')
def showAPlayer(playerid):
    return f"here is info about player number {playerid}"

# repeat/2/potatoes
@app.route('/repeat/<num>/<word>')
def repeatsomestuff(num, word):
    thegreatestPlayers = ["Lebron", "Kobe", "Allen Iverson", "Lucka Doncic", "Jordan", "Shaq"]

    return render_template("yahoo.html", var1=num, var2=word, var3=thegreatestPlayers)

    num = int(num)
    return word*num


if __name__ == "__main__":
    app.run(debug=True)


# https: / www.espn.com/soccer/team/_/id/363/chealsea
# https: / www.espn.com/soccer/team/_/id/359/arsenal
