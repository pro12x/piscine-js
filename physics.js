/*
    Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.
    He must use the Second Law of Motion that states, "when the forces acting on an object are unbalanced, the object will accelerate."
    This acceleration is dependent upon the force that acts upon the object and the object's mass.
    So he wants to know what the acceleration of that object is, depending on its properties:
        mass of xx
        Δv of xx
        Δt of xx
        force of xx
        distance xx
        time xx

    Create a function named getAcceleration that calculates the acceleration of a given object. For example:
*/

function getAcceleration(object) {
    if (object.hasOwnProperty("f") && object.hasOwnProperty("m")) {
        return object.f / object.m
    } else if (object.hasOwnProperty("Δv") && object.hasOwnProperty("Δt")) {
        return object.Δv / object.Δt
    } else if (object.hasOwnProperty("t") && object.hasOwnProperty("d")) {
        return 2 * object.d / (object.t * object.t)
    } else {
        return "impossible"
    }
}

