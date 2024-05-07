{
  // AS-IS
  class GuessStatisticsMessage {
    private printGussStatistics(candidate: string, count: number) {
      let number: string;
      let verb: string;
      let pluralModifer: string;

      if (count === 0) {
        number = "no";
        verb = "are";
        pluralModifer = "s";
      } else if (count === 1) {
        number = "1";
        verb = "is";
        pluralModifer = "";
      } else {
        number = String(count);
        verb = "are";
        pluralModifer = "s";
      }

      const guessMessage = `There ${verb} ${number} ${candidate} ${pluralModifer}`;
      console.log(guessMessage);
    }
  }
}

{
  // TO-BE
  class GuessStatisticsMessage {
    private number: string;
    private verb: string;
    private pluralModifer: string;

    make(candidate: string, count: number) {
      this.createPluralDependentMessageParts(count);
      const guessMessage = `There ${this.verb} ${this.number} ${candidate} ${this.pluralModifer}`;
      return guessMessage;
    }

    private createPluralDependentMessageParts(count: number) {
      if (count === 0) {
        this.thereAreNoLetters();
      } else if (count === 1) {
        this.thereIsOneLetter();
      } else {
        this.thereAreManyLetters(count);
      }
    }

    private thereAreManyLetters(count: number) {
      this.number = `${count}`;
      this.verb = "are";
      this.pluralModifer = "s";
    }

    private thereIsOneLetter() {
      this.number = "1";
      this.verb = "is";
      this.pluralModifer = "";
    }

    private thereAreNoLetters() {
      this.number = "no";
      this.verb = "are";
      this.pluralModifer = "s";
    }
  }
}
