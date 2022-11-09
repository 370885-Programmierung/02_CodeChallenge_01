
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Deklaration

// let zahl1 = +(prompt ("Zahl eingeben:")) //es kann auch Number() oder parseInt() verwendet werden
// let zahl2 = +(prompt ("Zahl eingeben:"))

// Berechnung

// console.log ("Die Summe der Zahlen ist: " + (zahl1 + zahl2).toFixed(2)) //Ausgabe der Summe auf zwei Kommastellen gerundet



//eine Variante
// let zahl1 = parseFloat(prompt ("Zahl eingeben:"))
// let zahl2 = parseFloat(prompt ("Zahl eingeben:"))

// console.log ("Die Summe der Zahlen ist: " + zahl1 + zahl2)

//Die minmalistische Variante

console.log(+(prompt ("Zahl:")) + +(prompt ("Zahl:"))) // Nachteil, keine Inputüberprüfung