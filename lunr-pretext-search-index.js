var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The Activities in this book are adapted from activities in David Austin's Understanding Linear Algebra and Drew Lewis and Steven Clontz's Linear Algebra for Team-Based Inquiry Learning.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   This is a workbook with activities intended to be used with Austin's Understanding Linear Algebra. Most Activities are adaptations of the activities in his text to be implemented in a team-based learning format.  "
},
{
  "id": "ch1sec1",
  "level": "1",
  "url": "ch1sec1.html",
  "type": "Section",
  "number": "1.1",
  "title": "What can we expect",
  "body": " What can we expect  In these first explorations, we aim to develop some intuition for the type of behavior we can expect to see when looking at solutions of systems of linear equations. The solution to a linear equation in three unknowns , , and is a plane. Use cards as models for planes to study the solutions to systems of linear equations in three variables.    Consider a system of two equations in three variables. Use two notecards to model the two planes. For each of the following questions, be prepared to explain your answer and\/or give an example.   Is it possible that there are no solutions to a system of two equations in three unknowns?   possible  not possible   Is it possible that the solution to a system of two equations in three unknowns is a single point?   possible  not possible    If you are studying a system of two equations in three variables, what would be the most likely solution set?   the empty set (no solution)  exactly one solution  infinitely many solutions in the form of a line  infinitely many solutions in the form of a plane       Consider a system of four equations in three uknowns. Use four notecards to model the four planes. For each of the following questions, be prepared to explain your answer and\/or give an example.   Is it possible that the solution set for four equations in three variables forms a line?   not possible  possible    Is it possible that the solution set for four equations in three variables forms a plane?   not possible  possible    If you are studying a system of four equations in three variables, what would be the most likely solution set?   the empty set (no solution)  exactly one solution  infinitely many solutions in the form of a line  infinitely many solutions in the form of a plane     Suppose we have 500 linear equations in 10 unknowns. The most likely solution set would be   the empty set (no solution).  exactly one solution.  infinitely many solutions.      Suppose we have 10 linear equations in 500 unknowns. The most likely solution set would be   the empty set (no solution).  exactly one solution.  infinitely many solutions.     "
},
{
  "id": "ch1sec1-3",
  "level": "2",
  "url": "ch1sec1.html#ch1sec1-3",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": " Consider a system of two equations in three variables. Use two notecards to model the two planes. For each of the following questions, be prepared to explain your answer and\/or give an example.   Is it possible that there are no solutions to a system of two equations in three unknowns?   possible  not possible   Is it possible that the solution to a system of two equations in three unknowns is a single point?   possible  not possible    If you are studying a system of two equations in three variables, what would be the most likely solution set?   the empty set (no solution)  exactly one solution  infinitely many solutions in the form of a line  infinitely many solutions in the form of a plane   "
},
{
  "id": "ch1sec1-4",
  "level": "2",
  "url": "ch1sec1.html#ch1sec1-4",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": " Consider a system of four equations in three uknowns. Use four notecards to model the four planes. For each of the following questions, be prepared to explain your answer and\/or give an example.   Is it possible that the solution set for four equations in three variables forms a line?   not possible  possible    Is it possible that the solution set for four equations in three variables forms a plane?   not possible  possible    If you are studying a system of four equations in three variables, what would be the most likely solution set?   the empty set (no solution)  exactly one solution  infinitely many solutions in the form of a line  infinitely many solutions in the form of a plane   "
},
{
  "id": "ch1sec1-5",
  "level": "2",
  "url": "ch1sec1.html#ch1sec1-5",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": " Suppose we have 500 linear equations in 10 unknowns. The most likely solution set would be   the empty set (no solution).  exactly one solution.  infinitely many solutions.    "
},
{
  "id": "ch1sec1-6",
  "level": "2",
  "url": "ch1sec1.html#ch1sec1-6",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": " Suppose we have 10 linear equations in 500 unknowns. The most likely solution set would be   the empty set (no solution).  exactly one solution.  infinitely many solutions.    "
},
{
  "id": "ch1sec2",
  "level": "1",
  "url": "ch1sec2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Finding solutions to systems of linear equations",
  "body": " Finding solutions to systems of linear equations    One of our goals will be to use algbra to find solutions to our systems of equations.    Use algebra to show that the following two equations cannot be true at the same time.   You are showing that the equations are inconsistent . What contradiction do you reach?       If a solutions exists, the system is consistent . Consider the following linear system.     Find three different solutions for this system.    Let where is an arbitrary real number, then find an expression for in terms of . Use this to write the solution set for the linear system.      Consider the following linear system.   Describe the solution set to the linear system by setting and , and then solving for and .     We can use an augmented matrix to represent the system of equations.   Two systems of linear equations (and their corresponding augmented matrices) are said to be equivalent equivalent matrices if they have the same solution set.     Following are seven procedures used to manipulate an augmented matrix. If the procedure results in an equivalent augmented matrix (preseves the corresponding solution set), label the procedure as valid . If the procedure might change the solution set of the corresponding linear system, label it as invalid .   Swap two rows.  Swap two columns.  Add a constant to every term in a row.  Multiply a row by a nonzero constant.  Add a constant multiple of one row to another row.  Replace a column with zeros.  Replace a row with zeros.      Two matrices are row equivalent if we can use a series of valid row operation to get from one matrix to the next.     Suppose that you have a system of linear equations in the unknowns and whose augmented matrix is row equivalent to Write the system of linear equations corresponding to the augmented matrix. Then describe the solution set of the system of equations in as much detail as you can.  >  Suppose that you have a system of linear equations in the unknowns and whose augmented matrix is row equivalent to Write the system of linear equations corresponding to the augmented matrix. Then describe the solution set of the system of equations in as much detail as you can.       Consider the following (equivalent) linear systems.   A)   B)   C)     D)   E)   F)    Rank the six linear systems from most complicated to simplest.       We can rewrite the previous systems of equations in terms of equivalences of augmented matrices.   Determine the row operation(s) necessary in each step to transform the most complicated system's augmented matrix into the simplest.     Suppose that the augmented matrix of a system of linear equations has the following shape where could be any real number.    How many equations are there in this system and how many unknowns?   The most likely solution set is   the empty set (no solution).  exactly one solution.  infinitely many solutions.    Suppose that this augmented matrix is row equivalent to Make a choice for the names of the unknowns and write the corresponding system of linear equations. Does the system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?   The remaining activities require you to use Gaussian elimination to convert the matrix to reduced row echelon form , abbreviated RREF.     Consider the matrix Which row operation is the best choice for the first move in converting to RREF?   Add row 3 to row 2 ( )  Add row 2 to row 3 ( )  Swap row 1 to row 2 ( )  Add -2 row 2 to row 1 ( )        Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 3 ( )  Add -2 row 1 to row 2 ( )  Add 2 row 2 to row 3 ( )  Add 2 row 3 to row 2 ( )        Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 2 ( )  Add -1 row 3 to row 2 ( )  Add -1 row 2 to row 3 ( )  Add row 2 to row 1 ( )        Use Gaussian elimination to describe the solutions to the following systems of linear equations.   Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?    Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?    Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?      The following activities are optional, but provide additional practice with Gaussian elimination.    Consider the matrix     Perform three row operations to produce a matrix closer to RREF.    Finish putting it in RREF.       Consider the matrix   Compute .       Consider the matrix   Compute .    "
},
{
  "id": "ch1sec2-3",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-3",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  Use algebra to show that the following two equations cannot be true at the same time.   You are showing that the equations are inconsistent . What contradiction do you reach?   "
},
{
  "id": "ch1sec2-4",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-4",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  If a solutions exists, the system is consistent . Consider the following linear system.     Find three different solutions for this system.    Let where is an arbitrary real number, then find an expression for in terms of . Use this to write the solution set for the linear system.   "
},
{
  "id": "ch1sec2-5",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-5",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  Consider the following linear system.   Describe the solution set to the linear system by setting and , and then solving for and .   "
},
{
  "id": "ch1sec2-6",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "ch1sec2-7",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-7",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": " Two systems of linear equations (and their corresponding augmented matrices) are said to be equivalent equivalent matrices if they have the same solution set. "
},
{
  "id": "ch1sec2-8",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-8",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  Following are seven procedures used to manipulate an augmented matrix. If the procedure results in an equivalent augmented matrix (preseves the corresponding solution set), label the procedure as valid . If the procedure might change the solution set of the corresponding linear system, label it as invalid .   Swap two rows.  Swap two columns.  Add a constant to every term in a row.  Multiply a row by a nonzero constant.  Add a constant multiple of one row to another row.  Replace a column with zeros.  Replace a row with zeros.     "
},
{
  "id": "ch1sec2-9",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row equivalent "
},
{
  "id": "ch1sec2-10",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-10",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "  Suppose that you have a system of linear equations in the unknowns and whose augmented matrix is row equivalent to Write the system of linear equations corresponding to the augmented matrix. Then describe the solution set of the system of equations in as much detail as you can.  >  Suppose that you have a system of linear equations in the unknowns and whose augmented matrix is row equivalent to Write the system of linear equations corresponding to the augmented matrix. Then describe the solution set of the system of equations in as much detail as you can.  "
},
{
  "id": "ch1sec2-11",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-11",
  "type": "Activity",
  "number": "1.2.6",
  "title": "",
  "body": "  Consider the following (equivalent) linear systems.   A)   B)   C)     D)   E)   F)    Rank the six linear systems from most complicated to simplest.   "
},
{
  "id": "ch1sec2-12",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-12",
  "type": "Activity",
  "number": "1.2.7",
  "title": "",
  "body": "  We can rewrite the previous systems of equations in terms of equivalences of augmented matrices.   Determine the row operation(s) necessary in each step to transform the most complicated system's augmented matrix into the simplest.   "
},
{
  "id": "ch1sec2-13",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-13",
  "type": "Activity",
  "number": "1.2.8",
  "title": "",
  "body": " Suppose that the augmented matrix of a system of linear equations has the following shape where could be any real number.    How many equations are there in this system and how many unknowns?   The most likely solution set is   the empty set (no solution).  exactly one solution.  infinitely many solutions.    Suppose that this augmented matrix is row equivalent to Make a choice for the names of the unknowns and write the corresponding system of linear equations. Does the system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?  "
},
{
  "id": "ch1sec2-14",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination reduced row echelon form "
},
{
  "id": "ch1sec2-15",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-15",
  "type": "Activity",
  "number": "1.2.9",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the first move in converting to RREF?   Add row 3 to row 2 ( )  Add row 2 to row 3 ( )  Swap row 1 to row 2 ( )  Add -2 row 2 to row 1 ( )    "
},
{
  "id": "ch1sec2-16",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-16",
  "type": "Activity",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 3 ( )  Add -2 row 1 to row 2 ( )  Add 2 row 2 to row 3 ( )  Add 2 row 3 to row 2 ( )    "
},
{
  "id": "ch1sec2-17",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-17",
  "type": "Activity",
  "number": "1.2.11",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 2 ( )  Add -1 row 3 to row 2 ( )  Add -1 row 2 to row 3 ( )  Add row 2 to row 1 ( )    "
},
{
  "id": "ch1sec2-18",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-18",
  "type": "Activity",
  "number": "1.2.12",
  "title": "",
  "body": "  Use Gaussian elimination to describe the solutions to the following systems of linear equations.   Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?    Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?    Does the following linear system have (A) exactly one solution, (B) infinitely many solutions, or (C) no solutions?    "
},
{
  "id": "ch1sec2-20",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-20",
  "type": "Activity",
  "number": "1.2.13",
  "title": "",
  "body": "  Consider the matrix     Perform three row operations to produce a matrix closer to RREF.    Finish putting it in RREF.   "
},
{
  "id": "ch1sec2-21",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-21",
  "type": "Activity",
  "number": "1.2.14",
  "title": "",
  "body": "  Consider the matrix   Compute .   "
},
{
  "id": "ch1sec2-22",
  "level": "2",
  "url": "ch1sec2.html#ch1sec2-22",
  "type": "Activity",
  "number": "1.2.15",
  "title": "",
  "body": "  Consider the matrix   Compute .   "
},
{
  "id": "ch1sec3",
  "level": "1",
  "url": "ch1sec3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Computation with Sage",
  "body": " Computation with Sage  Do the activities directly in Understanding Linear Algebra, Computation with Sage.  "
},
{
  "id": "ch1sec4",
  "level": "1",
  "url": "ch1sec4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Pivots and their influence on solution spaces",
  "body": " Pivots and their influence on solution spaces  Recall that a matrix is in reduced row echelon form ( RREF ) if  The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots .  Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.       For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.             For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.            In this activity we explore possibilities for the number of pivot positions in a matrix.   Given below is a matrix and its reduced row echelon form. Indicate the pivot positions. .   How many pivot positions can there be in one row?   In a matrix, what is the largest possible number of pivot positions? Give an example of a matrix that has the largest possible number of pivot positions.   How many pivots can there be in one column?   In a matrix, what is the largest possible number of pivot positions? Give an example of a matrix that has the largest possible number of pivot positions.   Give an example of a matrix with a pivot position in every row and every column. What is special about such a matrix?     Shown below are three augmented matrices in reduced row echelon form.             For each matrix, identify the pivot positions and determine if the corresponding linear system is (A) consistent or (B) inconsistent. Be able to explain how the location of the pivots determine consistency or inconsistency.   Each of these augmented matrices above has a row in which each entry is zero. What, if anything, does the presence of such a row tell us about the consistency of the corresponding linear system?      Give an example of a augmented matrix in reduced row echelon form that represents a consistent system. Indicate the pivot positions in your matrix and be able to explain why these pivot positions guarantee a consistent system.   Give an example of a augmented matrix in reduced row echelon form that represents an inconsistent system. Indicate the pivot positions in your matrix and be able to explain why these pivot positions guarantee an inconsistent system.   Write the reduced row echelon form of the coefficient matrix of the corresponding linear system in . What do you notice about the pivot positions in this coefficient matrix?     Suppose we have a linear system for which the coefficient matrix has the following reduced row echelon form. What can you determine about the consistency of the linear system?  It is consistent.  It is inconsistent.  You can't determine anything about consistency.        Here are the three augmented matrices in reduced row echelon form that we considered previously.             For each matrix, identify the pivot positions and determine if the corresponding system of linear equations is  consistent with a unique solution.   consistent with infinitely many solutions.   inconsistent with no solutions.     In this activity, we want to understand the connection between pivot positions and when a system of linear equationa has a unique solution.   If possible, give an example of a augmented matrix that corresponds to a system of linear equations having a unique solution. If it is not possible, be able to explain why.  If possible, give an example of a augmented matrix that corresponds to a system of linear equations having a unique solution. If it is not possible, be able to explain why.   What condition on the pivot positions guarantees that a system of linear equations has a unique solution?   If a system of linear equations has a unique solution, what can we say about the relationship between the number of equations and the number of unknowns?   "
},
{
  "id": "ch1sec4-2",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form RREF pivots "
},
{
  "id": "ch1sec4-3",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-3",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.        "
},
{
  "id": "ch1sec4-4",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-4",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": "   For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.        "
},
{
  "id": "ch1sec4-5",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-5",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "   In this activity we explore possibilities for the number of pivot positions in a matrix.   Given below is a matrix and its reduced row echelon form. Indicate the pivot positions. .   How many pivot positions can there be in one row?   In a matrix, what is the largest possible number of pivot positions? Give an example of a matrix that has the largest possible number of pivot positions.   How many pivots can there be in one column?   In a matrix, what is the largest possible number of pivot positions? Give an example of a matrix that has the largest possible number of pivot positions.   Give an example of a matrix with a pivot position in every row and every column. What is special about such a matrix?  "
},
{
  "id": "li-existence-examples",
  "level": "2",
  "url": "ch1sec4.html#li-existence-examples",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": " Shown below are three augmented matrices in reduced row echelon form.             For each matrix, identify the pivot positions and determine if the corresponding linear system is (A) consistent or (B) inconsistent. Be able to explain how the location of the pivots determine consistency or inconsistency.   Each of these augmented matrices above has a row in which each entry is zero. What, if anything, does the presence of such a row tell us about the consistency of the corresponding linear system?  "
},
{
  "id": "ch1sec4-7",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-7",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "   Give an example of a augmented matrix in reduced row echelon form that represents a consistent system. Indicate the pivot positions in your matrix and be able to explain why these pivot positions guarantee a consistent system.   Give an example of a augmented matrix in reduced row echelon form that represents an inconsistent system. Indicate the pivot positions in your matrix and be able to explain why these pivot positions guarantee an inconsistent system.   Write the reduced row echelon form of the coefficient matrix of the corresponding linear system in . What do you notice about the pivot positions in this coefficient matrix?  "
},
{
  "id": "ch1sec4-8",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-8",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Suppose we have a linear system for which the coefficient matrix has the following reduced row echelon form. What can you determine about the consistency of the linear system?  It is consistent.  It is inconsistent.  You can't determine anything about consistency.    "
},
{
  "id": "ch1sec4-9",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-9",
  "type": "Activity",
  "number": "1.4.7",
  "title": "",
  "body": "  Here are the three augmented matrices in reduced row echelon form that we considered previously.             For each matrix, identify the pivot positions and determine if the corresponding system of linear equations is  consistent with a unique solution.   consistent with infinitely many solutions.   inconsistent with no solutions.    "
},
{
  "id": "ch1sec4-10",
  "level": "2",
  "url": "ch1sec4.html#ch1sec4-10",
  "type": "Activity",
  "number": "1.4.8",
  "title": "",
  "body": "In this activity, we want to understand the connection between pivot positions and when a system of linear equationa has a unique solution.   If possible, give an example of a augmented matrix that corresponds to a system of linear equations having a unique solution. If it is not possible, be able to explain why.  If possible, give an example of a augmented matrix that corresponds to a system of linear equations having a unique solution. If it is not possible, be able to explain why.   What condition on the pivot positions guarantees that a system of linear equations has a unique solution?   If a system of linear equations has a unique solution, what can we say about the relationship between the number of equations and the number of unknowns?  "
},
{
  "id": "ch2sec1",
  "level": "1",
  "url": "ch2sec1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors and linear combinations",
  "body": " Vectors and linear combinations      Suppose that    Find expressions for the vectors and sketch them in the plane.    What geometric effect does scalar multiplication by a positive number have on a vector? (A) preserves the length, changes the direction, (B) preserves the direction, changes the length, (C) changes the length and the direction.   What geometric effect does scalar multiplication by a negative number have on a vector? (A) preserves the length, changes the direction, (B) preserves the direction, changes the length, (C) changes the length and the direction.    As in the previous activity, suppose that    Sketch the vectors in the plane.    Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Consider the points at the tips of each of these vectors. An appropriate geometric description for this set of points would be  a line through the tip of parallel to .  a line through the tip of parallel to .  a line through parallel to .     As in the previous activity, suppose that    If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ?      In this activity, we will look at linear combinations of a pair of vectors, with weights and .   Go to the Applet in Activity 2.1.2 in Understanding Linear Algebra.   The weight is initially set to 0. Explain what happens as you vary with ? How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   The vectors that arise when the weight is set to 1 and is varied is  a line through parallel to .  a line through parallel to .  a line through parallel to .     Can the vector be expressed as a linear combination of and ? If so, what are weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?        Given the vectors , we ask if can be expressed as a linear combination of , , and . Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.    Consider the following linear system. Identify vectors , , , and and rephrase the question \"Is this linear system consistent?\" by asking \"Can be expressed as a linear combination of , , and ?\"     Consider the vectors .  Which statement is the most accurate for ?  The vector can be expressed as a linear combination of , , and in exactly one way.  The vector can be expressed as a linear combination of , , and in more than one way.  The vector cannot be expressed as a linear combination of , , and .      Considering just the vectors , , and , determine the most accurate statement.  Every three dimensional vector can be expressed as a linear combination of , , and in exactly one way.  Every three dimensional vector can be expressed as a linear combination of , , and in more than one way.  There are vectors that cannot be expressed as a linear combination of , , and .  Be able to explain how the pivot positions of the matrix help answer this question.  Consider the vectors .  Which statement is the most accurate for ?  The vector can be expressed as a linear combination of , , and in exactly one way.  The vector can be expressed as a linear combination of , , and in more than one way.  The vector cannot be expressed as a linear combination of , , and .      Considering just the vectors , , and from the previous part, determine the most accurate statement.  Every three dimensional vector can be expressed as a linear combination of , , and in exactly one way.  Every three dimensional vector can be expressed as a linear combination of , , and in more than one way.  There are vectors that cannot be expressed as a linear combination of , , and .  Be able to explain how the pivot positions of the matrix help answer this question.    "
},
{
  "id": "ch2sec1-2",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-2",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "   Suppose that    Find expressions for the vectors and sketch them in the plane.    What geometric effect does scalar multiplication by a positive number have on a vector? (A) preserves the length, changes the direction, (B) preserves the direction, changes the length, (C) changes the length and the direction.   What geometric effect does scalar multiplication by a negative number have on a vector? (A) preserves the length, changes the direction, (B) preserves the direction, changes the length, (C) changes the length and the direction.  "
},
{
  "id": "ch2sec1-3",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-3",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": " As in the previous activity, suppose that    Sketch the vectors in the plane.    Consider vectors that have the form where is any scalar. Sketch a few of these vectors when, say, and . Consider the points at the tips of each of these vectors. An appropriate geometric description for this set of points would be  a line through the tip of parallel to .  a line through the tip of parallel to .  a line through parallel to .   "
},
{
  "id": "ch2sec1-4",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-4",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": " As in the previous activity, suppose that    If and are two scalars, then the vector is called a linear combination of the vectors and . Find the vector that is the linear combination when and .    Can the vector be represented as a linear combination of and ?  "
},
{
  "id": "ch2sec1-5",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-5",
  "type": "Activity",
  "number": "2.1.4",
  "title": "",
  "body": "  In this activity, we will look at linear combinations of a pair of vectors, with weights and .   Go to the Applet in Activity 2.1.2 in Understanding Linear Algebra.   The weight is initially set to 0. Explain what happens as you vary with ? How is this related to scalar multiplication?   What is the linear combination of and when and ? You may find this result using the diagram, but you should also verify it by computing the linear combination.   The vectors that arise when the weight is set to 1 and is varied is  a line through parallel to .  a line through parallel to .  a line through parallel to .     Can the vector be expressed as a linear combination of and ? If so, what are weights and ?   Can the vector be expressed as a linear combination of and ? If so, what are weights and ?   Verify the result from the previous part by algebraically finding the weights and that form the linear combination .   Can the vector be expressed as a linear combination of and ? What about the vector ?   Are there any two-dimensional vectors that cannot be expressed as linear combinations of and ?   "
},
{
  "id": "ch2sec1-6",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-6",
  "type": "Activity",
  "number": "2.1.5",
  "title": "",
  "body": "   Given the vectors , we ask if can be expressed as a linear combination of , , and . Rephrase this question by writing a linear system for the weights , , and and use the Sage cell below to answer this question.  "
},
{
  "id": "ch2sec1-7",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-7",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": " Consider the following linear system. Identify vectors , , , and and rephrase the question \"Is this linear system consistent?\" by asking \"Can be expressed as a linear combination of , , and ?\"  "
},
{
  "id": "ch2sec1-8",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-8",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "  Consider the vectors .  Which statement is the most accurate for ?  The vector can be expressed as a linear combination of , , and in exactly one way.  The vector can be expressed as a linear combination of , , and in more than one way.  The vector cannot be expressed as a linear combination of , , and .      Considering just the vectors , , and , determine the most accurate statement.  Every three dimensional vector can be expressed as a linear combination of , , and in exactly one way.  Every three dimensional vector can be expressed as a linear combination of , , and in more than one way.  There are vectors that cannot be expressed as a linear combination of , , and .  Be able to explain how the pivot positions of the matrix help answer this question. "
},
{
  "id": "ch2sec1-9",
  "level": "2",
  "url": "ch2sec1.html#ch2sec1-9",
  "type": "Activity",
  "number": "2.1.8",
  "title": "",
  "body": "Consider the vectors .  Which statement is the most accurate for ?  The vector can be expressed as a linear combination of , , and in exactly one way.  The vector can be expressed as a linear combination of , , and in more than one way.  The vector cannot be expressed as a linear combination of , , and .      Considering just the vectors , , and from the previous part, determine the most accurate statement.  Every three dimensional vector can be expressed as a linear combination of , , and in exactly one way.  Every three dimensional vector can be expressed as a linear combination of , , and in more than one way.  There are vectors that cannot be expressed as a linear combination of , , and .  Be able to explain how the pivot positions of the matrix help answer this question.   "
},
{
  "id": "ch2sec2",
  "level": "1",
  "url": "ch2sec2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix multiplication and linear combinations",
  "body": " Matrix multiplication and linear combinations     matrix multiplication   The product of a matrix by a vector will be the linear combination of the columns of using the components of as weights.  If is an matrix, then must be an -dimensional vector, and the product will be an -dimensional vector. If then .      Use the definition of matrix multiplication to find the product of a matrix and a vector.   Find the matrix product .   Suppose that is the matrix . If is defined, what is the dimension of the vector and what is the dimension of ?   A vector whose entries are all zero is denoted by . If is a matrix, what is the product ?    Suppose that is the identity matrix and . Find the product and be able to explain why is called the identity matrix.   Suppose we write the matrix in terms of its columns as .   If the vector , what is the product ?    Suppose that . Is there a vector such that ?       The equation   We can now relate a matrix equation to a system of equations, where the vector is a vector whose coordinates are the variables in the system of equations.   Consider the linear system . Identify the matrix and vector to express this system in the form .   If and are as below, write the linear system corresponding to the equation . and describe the solution space in set notation.   Describe the solution space (in set notation) of the equation .    Suppose is an matrix. Give the statement that best describes the solution space of the equation .  We can't determine anything about the solution space without the actual matrix .  The only solution for is .  The system is always consistent, but we can't determine any solutions without knowing .  The system is always consistent, and must contain , but may also contain additional solutions.         Consider the matrices .  Suppose we want to form the product . Before computing, first make sure you can explain how you know this product exists and then give the dimensions of the resulting matrix.  Compute the product .  Sage can multiply matrices using the * operator. Define the matrices and in the Sage cell below and check your work by computing .   Are you able to form the matrix product ? If so, use the Sage cell above to find . Is it generally true that ?    Suppose we form the three matrices. .  Compare what happens when you compute and . State your finding as a general principle.   Compare the results of evaluating and and state your finding as a general principle.    When we are dealing with real numbers, we know if and , then . Define matrices   Compute and .   If , is it necessarily true that ?   Again, with real numbers, we know that if , then either or . Define .  Compute .   If , is it necessarily true that either or ?    "
},
{
  "id": "ch2sec2-2",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-2",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": " matrix multiplication   The product of a matrix by a vector will be the linear combination of the columns of using the components of as weights.  If is an matrix, then must be an -dimensional vector, and the product will be an -dimensional vector. If then .   "
},
{
  "id": "ch2sec2-3",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-3",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Use the definition of matrix multiplication to find the product of a matrix and a vector.   Find the matrix product .   Suppose that is the matrix . If is defined, what is the dimension of the vector and what is the dimension of ?  "
},
{
  "id": "ch2sec2-4",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-4",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "A vector whose entries are all zero is denoted by . If is a matrix, what is the product ?  "
},
{
  "id": "ch2sec2-5",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-5",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": " Suppose that is the identity matrix and . Find the product and be able to explain why is called the identity matrix.  "
},
{
  "id": "ch2sec2-6",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-6",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "Suppose we write the matrix in terms of its columns as .   If the vector , what is the product ?    Suppose that . Is there a vector such that ?    "
},
{
  "id": "ch2sec2-7",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-7",
  "type": "Activity",
  "number": "2.2.5",
  "title": "The equation <span class=\"process-math\">\\(A\\xvec = \\bvec\\)<\/span>.",
  "body": " The equation   We can now relate a matrix equation to a system of equations, where the vector is a vector whose coordinates are the variables in the system of equations.   Consider the linear system . Identify the matrix and vector to express this system in the form .   If and are as below, write the linear system corresponding to the equation . and describe the solution space in set notation.   Describe the solution space (in set notation) of the equation .   "
},
{
  "id": "ch2sec2-8",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-8",
  "type": "Activity",
  "number": "2.2.6",
  "title": "",
  "body": "Suppose is an matrix. Give the statement that best describes the solution space of the equation .  We can't determine anything about the solution space without the actual matrix .  The only solution for is .  The system is always consistent, but we can't determine any solutions without knowing .  The system is always consistent, and must contain , but may also contain additional solutions.     "
},
{
  "id": "ch2sec2-9",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-9",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Consider the matrices .  Suppose we want to form the product . Before computing, first make sure you can explain how you know this product exists and then give the dimensions of the resulting matrix.  Compute the product .  Sage can multiply matrices using the * operator. Define the matrices and in the Sage cell below and check your work by computing .   Are you able to form the matrix product ? If so, use the Sage cell above to find . Is it generally true that ?  "
},
{
  "id": "ch2sec2-10",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-10",
  "type": "Activity",
  "number": "2.2.8",
  "title": "",
  "body": " Suppose we form the three matrices. .  Compare what happens when you compute and . State your finding as a general principle.   Compare the results of evaluating and and state your finding as a general principle.  "
},
{
  "id": "ch2sec2-11",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-11",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": " When we are dealing with real numbers, we know if and , then . Define matrices   Compute and .   If , is it necessarily true that ? "
},
{
  "id": "ch2sec2-12",
  "level": "2",
  "url": "ch2sec2.html#ch2sec2-12",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": " Again, with real numbers, we know that if , then either or . Define .  Compute .   If , is it necessarily true that either or ?   "
},
{
  "id": "ch2sec3",
  "level": "1",
  "url": "ch2sec3.html",
  "type": "Section",
  "number": "2.3",
  "title": "The span of a set of vectors",
  "body": " The span of a set of vectors     If the matrix equation is inconsistent, give the statement that best describes the pivots of the augmented matrix .   There must be a pivot in the last row of the augmented matrix.   There must be a pivot in the last column of the augmented matrix.  The augmented matrix must be the identity matrix.  We can't determine anything about the pivots without the specific matrix.        Consider the matrix  .  If , is the equation consistent? If so, find a solution.    If , is the equation consistent? If so, find a solution.    Identify the pivot positions of .   For our two choices of the vector , one equation has a solution and the other does not. What feature of the pivot positions of the matrix tells us to expect this?   There is a row of the coefficient matrix with no pivot position.   There is column of the coefficient matrix with no pivot position.  The coefficient matrix is not the identity matrix.  We can't determine anything about the pivot positions without the specific matrix.       span  The span of a set of vectors is the set of all linear combinations of the vectors.   In other words, the span of consists of all the vectors for which the equation is consistent.  Let's look at two examples to develop some intuition for the concept of span.    Consider the set of vectors .   Go to the Applet in Activity 2.3.2 , part (a) in Understanding Linear Algebra.  What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?  .   We will now look at an example where .   Go to the Applet in Activity 2.3.2 , part (b) in Understanding Linear Algebra.   What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?    In the next couple of activities, we will look at the span of sets of vectors in .  In this activity, we will look at the span of a set of vectors in .   Suppose . Give a written description of and a rough sketch of it.    Consider now the two vectors . Sketch the vectors. Then give a written description of and a rough sketch of it.   Let's now look at this algebraically by writing write . Determine the conditions on , , and so that is in by considering the linear system or . Be able to explain how this relates to your sketch of .  Consider the vectors .   Is the vector in ?    Is the vector in ?   Which of the following is the most appropriate description of ?  is .  is .  is a plane in .  is a line in .     Consider the vectors .  Form the matrix and find its reduced row echelon form.  What does the reduced row echelon form of the above matrix tell you about ?  .  .  .  .     What can we say more generally about when the span of a set of vectors is all of ?   If a set of vectors spans , what can you say about the pivots of the matrix ?  What is the smallest number of vectors such that ?          The vector belongs to exactly when there exists a solution to the vector equation .    Reinterpret this vector equation as a system of linear equations.    Find its solution set, using technology to find of its corresponding augmented matrix.    Given this solution set, does belong to ?       Determine if belongs to by solving an appropriate vector equation.    "
},
{
  "id": "ch2sec3-2",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-2",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "   If the matrix equation is inconsistent, give the statement that best describes the pivots of the augmented matrix .   There must be a pivot in the last row of the augmented matrix.   There must be a pivot in the last column of the augmented matrix.  The augmented matrix must be the identity matrix.  We can't determine anything about the pivots without the specific matrix.    "
},
{
  "id": "ch2sec3-3",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-3",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "   Consider the matrix  .  If , is the equation consistent? If so, find a solution.    If , is the equation consistent? If so, find a solution.    Identify the pivot positions of .   For our two choices of the vector , one equation has a solution and the other does not. What feature of the pivot positions of the matrix tells us to expect this?   There is a row of the coefficient matrix with no pivot position.   There is column of the coefficient matrix with no pivot position.  The coefficient matrix is not the identity matrix.  We can't determine anything about the pivot positions without the specific matrix.     "
},
{
  "id": "ch2sec3-4",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-4",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " span  The span of a set of vectors is the set of all linear combinations of the vectors.  "
},
{
  "id": "activity-intro-span",
  "level": "2",
  "url": "ch2sec3.html#activity-intro-span",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  Consider the set of vectors .   Go to the Applet in Activity 2.3.2 , part (a) in Understanding Linear Algebra.  What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?  "
},
{
  "id": "ch2sec3-8",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-8",
  "type": "Activity",
  "number": "2.3.4",
  "title": "",
  "body": "  We will now look at an example where .   Go to the Applet in Activity 2.3.2 , part (b) in Understanding Linear Algebra.   What vector is the linear combination of and with weights:    and ?    and ?    and ?      Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Can the vector be expressed as a linear combination of and ? Is the vector in the span of and ?   Describe the set of vectors in the span of and .   For what vectors does the equation have a solution?   "
},
{
  "id": "ch2sec3-10",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-10",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "In this activity, we will look at the span of a set of vectors in .   Suppose . Give a written description of and a rough sketch of it.    Consider now the two vectors . Sketch the vectors. Then give a written description of and a rough sketch of it.   Let's now look at this algebraically by writing write . Determine the conditions on , , and so that is in by considering the linear system or . Be able to explain how this relates to your sketch of . "
},
{
  "id": "ch2sec3-11",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-11",
  "type": "Activity",
  "number": "2.3.6",
  "title": "",
  "body": "Consider the vectors .   Is the vector in ?    Is the vector in ?   Which of the following is the most appropriate description of ?  is .  is .  is a plane in .  is a line in .    "
},
{
  "id": "ch2sec3-12",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-12",
  "type": "Activity",
  "number": "2.3.7",
  "title": "",
  "body": "Consider the vectors .  Form the matrix and find its reduced row echelon form.  What does the reduced row echelon form of the above matrix tell you about ?  .  .  .  .    "
},
{
  "id": "ch2sec3-13",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-13",
  "type": "Activity",
  "number": "2.3.8",
  "title": "",
  "body": "What can we say more generally about when the span of a set of vectors is all of ?   If a set of vectors spans , what can you say about the pivots of the matrix ?  What is the smallest number of vectors such that ?  "
},
{
  "id": "ch2sec3-14",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-14",
  "type": "Activity",
  "number": "2.3.9",
  "title": "",
  "body": "  The vector belongs to exactly when there exists a solution to the vector equation .    Reinterpret this vector equation as a system of linear equations.    Find its solution set, using technology to find of its corresponding augmented matrix.    Given this solution set, does belong to ?   "
},
{
  "id": "ch2sec3-15",
  "level": "2",
  "url": "ch2sec3.html#ch2sec3-15",
  "type": "Activity",
  "number": "2.3.10",
  "title": "",
  "body": "  Determine if belongs to by solving an appropriate vector equation.   "
},
{
  "id": "ch2sec4",
  "level": "1",
  "url": "ch2sec4.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear independence",
  "body": " Linear independence  We start these activities by studying the span of two different sets of vectors.   Consider the following vectors in : . Describe the span of these vectors, .   We will now consider a set of vectors that looks very much like the first set: .  Describe the span of these vectors, .   Show that the vector is a linear combination of and by finding weights such that .  Using your work from the previous part, show how any any linear combination of , , and , can be written as a linear combination of and .  Explain why .    linearly independent  linearly dependent   A set of vectors is called linearly dependent if one of the vectors is a linear combination of the others. Otherwise, the set of vectors is called linearly independent .    We would like to develop a means of detecting when a set of vectors is linearly dependent. These questions will point the way.    Consider whether the set of Euclidean vectors is linearly dependent or linearly independent.    Reinterpret this question as an appropriate question about solutions to a vector equation.    Use the solution to this question to answer the original question.     Suppose we have five vectors in that form the columns of a matrix having reduced row echelon form .  Is it possible to write one of the vectors as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors.  Is this set of vectors linearly dependent or independent?   Suppose we have another set of three vectors in that form the columns of a matrix having reduced row echelon form .  Is it possible to write one of these vectors , , as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors.  Is this set of vectors linearly dependent or independent?  By looking at the pivot positions, how can you determine whether the columns of a matrix are linearly dependent or independent?   If one vector in a set is the zero vector , can the set of vectors be linearly independent?  Suppose a set of vectors in has twelve vectors. Is it possible for this set to be linearly independent?       Let be vectors in . Suppose , so the set is linearly dependent. Which of the following is true of the vector equation ?    It is consistent with one solution.    It is consistent with infinitely many solutions.    It is inconsistent.        We now want to explore the connection between linear independence and homogeneous equations.  Explain why the homogenous matrix equation is consistent no matter the matrix .  Consider the matrix whose columns we denote by , , and . Are the vectors , , and linearly dependent or independent?   Give a parametric description (in set notation) of the solution space of the homogeneous equation .  We know that is a solution to the homogeneous equation. Find another solution that is different from . Use your solution to find weights , , and such that .  Use the expression you found in the previous part to write one of the vectors as a linear combination of the others.      What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.      "
},
{
  "id": "ch2sec4-3",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-3",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": " Consider the following vectors in : . Describe the span of these vectors, .  "
},
{
  "id": "ch2sec4-4",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-4",
  "type": "Activity",
  "number": "2.4.2",
  "title": "",
  "body": "We will now consider a set of vectors that looks very much like the first set: .  Describe the span of these vectors, .   Show that the vector is a linear combination of and by finding weights such that .  Using your work from the previous part, show how any any linear combination of , , and , can be written as a linear combination of and .  Explain why .  "
},
{
  "id": "ch2sec4-5",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-5",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": " linearly independent  linearly dependent   A set of vectors is called linearly dependent if one of the vectors is a linear combination of the others. Otherwise, the set of vectors is called linearly independent .   "
},
{
  "id": "ch2sec4-7",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-7",
  "type": "Activity",
  "number": "2.4.3",
  "title": "",
  "body": "  Consider whether the set of Euclidean vectors is linearly dependent or linearly independent.    Reinterpret this question as an appropriate question about solutions to a vector equation.    Use the solution to this question to answer the original question.   "
},
{
  "id": "ch2sec4-8",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-8",
  "type": "Activity",
  "number": "2.4.4",
  "title": "",
  "body": " Suppose we have five vectors in that form the columns of a matrix having reduced row echelon form .  Is it possible to write one of the vectors as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors.  Is this set of vectors linearly dependent or independent?  "
},
{
  "id": "ch2sec4-9",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-9",
  "type": "Activity",
  "number": "2.4.5",
  "title": "",
  "body": "Suppose we have another set of three vectors in that form the columns of a matrix having reduced row echelon form .  Is it possible to write one of these vectors , , as a linear combination of the others? If so, show explicitly how one vector appears as a linear combination of some of the other vectors.  Is this set of vectors linearly dependent or independent?  By looking at the pivot positions, how can you determine whether the columns of a matrix are linearly dependent or independent?  "
},
{
  "id": "ch2sec4-10",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-10",
  "type": "Activity",
  "number": "2.4.6",
  "title": "",
  "body": "If one vector in a set is the zero vector , can the set of vectors be linearly independent? "
},
{
  "id": "ch2sec4-11",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-11",
  "type": "Activity",
  "number": "2.4.7",
  "title": "",
  "body": "Suppose a set of vectors in has twelve vectors. Is it possible for this set to be linearly independent?    "
},
{
  "id": "ch2sec4-12",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-12",
  "type": "Activity",
  "number": "2.4.8",
  "title": "",
  "body": "  Let be vectors in . Suppose , so the set is linearly dependent. Which of the following is true of the vector equation ?    It is consistent with one solution.    It is consistent with infinitely many solutions.    It is inconsistent.     "
},
{
  "id": "ch2sec4-13",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-13",
  "type": "Activity",
  "number": "2.4.9",
  "title": "",
  "body": "  We now want to explore the connection between linear independence and homogeneous equations.  Explain why the homogenous matrix equation is consistent no matter the matrix .  Consider the matrix whose columns we denote by , , and . Are the vectors , , and linearly dependent or independent?   Give a parametric description (in set notation) of the solution space of the homogeneous equation .  We know that is a solution to the homogeneous equation. Find another solution that is different from . Use your solution to find weights , , and such that .  Use the expression you found in the previous part to write one of the vectors as a linear combination of the others.   "
},
{
  "id": "ch2sec4-14",
  "level": "2",
  "url": "ch2sec4.html#ch2sec4-14",
  "type": "Activity",
  "number": "2.4.10",
  "title": "",
  "body": "  What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.     "
},
{
  "id": "ch2sec5",
  "level": "1",
  "url": "ch2sec5.html",
  "type": "Section",
  "number": "2.5",
  "title": "Matrix transformations",
  "body": " Matrix transformations     In the first several activities, we will look at some examples of matrix transformations.    Suppose that is the matrix . We define the matrix transformation so that . The function takes the vector as an input and gives us as the output.  What is ?  What is ?  What is ?  Is there a vector such that ?     Suppose that where .  What is the dimension of the vectors that are inputs for ?  What is the dimension of the vectors that are outputs?  Describe the vectors for which .    If is the matrix , what is in terms of the vectors and ?    Suppose that is a matrix and that . If , what is the matrix ?       Suppose is a linear map, and you know and . What is ?                            Suppose is a linear map, and you know and . What piece of information would help you compute ?    The value of .    The value of .    The value of .    Any of the above.        Let be the linear transformation given by Write the matrix for . The matrix is called the standard matrix for the transformation .      Let be the linear transformation given by     Compute , , and .    Find the standard matrix for , so that .     Applications of matrix transformations     Suppose that we work for a company that produces baked goods, including cakes, donuts, and eclairs. Our company operates two plants, Plant 1 and Plant 2. In one hour of operation,  Plant 1 produces 10 cakes, 50 donuts, and 30 eclairs.  Plant 2 produces 20 cakes, 30 donuts, and 30 eclairs.   If plant 1 operates for hours and Plant 2 for hours, how many cakes does the company produce? How many donuts ? How many eclairs ?  We combine the number of hours the two plants operate into a vector . Likewise, we use a vector to denote the number of cakes , donuts , and eclairs our company produces.  Now define a matrix transformation where represents the number of baked goods produced when the plants are operated for times . If , what are the dimensions of the matrix ?  Find the vector and the vector and use your results to write the matrix .  If we operate Plant 1 for 40 hours and Plant 2 for 50 hours, how many baked goods have we produced?  Suppose the marketing department says we need to produce 1500 cakes, 4700 donuts, and 3300 eclairs. Is it possible to meet this order? If so, how long should the two plants operate?    Continue with the same baked good producing plants from the previous activity. Consider the needed ingredients:  Each cake requires 4 units of flour and and 2 units of sugar.  Each donut requires 1 unit of flour and 1 unit of sugar.  Each eclair requires 1 units of flour and 2 units of sugar.   Suppose we make cakes, donuts, and eclairs. How many units of flour are required? How many units of sugar ?  Write a matrix that defines the matrix transformation .  If Plant 1 operates for 30 hours and Plant 2 operates for 20 hours, how many units of flour and sugar are required?  We can consider the matrix transformation that tells us how many units of flour and sugar are required when we operate the plants for and hours. Find the matrix that defines the transformation .      Suppose we run a company that has two warehouses, which we will call and , and a fleet of 1000 delivery trucks. Every day, a delivery truck goes out from one of the warehouses and returns every evening to one of the warehouses. Every evening,  70% of the trucks that leave return to . The other 30% return to .  50% of the trucks that leave return to and 50% return to .   We will use the vector to represent the number of trucks at location and in the morning. We consider the matrix transformation that describes the number of trucks at location and in the evening.  Suppose that all 1000 trucks begin the day at location and none at . How many trucks are at each location at the end of the day? Therefore, what is the vector ?  Using this result, what is ?  In the same way, suppose that all 1000 trucks begin the day at location and none at . How many trucks are at each location at the end of the day? What is the result ?  Find the matrix such that .  Suppose that there are 100 trucks at and 900 at at the beginning of the day. How many are there at the two locations at the end of the day?   Suppose that there are 550 trucks at and 450 at at the end of the day. How many trucks were there at the two locations at the beginning of the day?    Continue with the same trucking company from the previous activity.  Suppose that all of the trucks are at location on Monday morning.  How many trucks are at each location Monday evening?  How many trucks are at each location Tuesday evening?  How many trucks are at each location Wednesday evening?    Continue with the same trucking company from the previous two activities.  Suppose that is the matrix transformation that transforms the distribution of trucks one morning into the distribution of trucks two mornings later. What is the matrix that defines the transformation ?  Suppose that is the matrix transformation that transforms the distribution of trucks one morning into the distribution of trucks one week later. What is the matrix that defines the transformation ?  What happens to the distribution of trucks after a very long time?   All the trucks end up at location .    All the trucks end up at location .    625 trucks end up at location , while 375 end up at location .    375 trucks end up at location , while 625 end up at location .        "
},
{
  "id": "ch2sec5-3",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-3",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "  Suppose that is the matrix . We define the matrix transformation so that . The function takes the vector as an input and gives us as the output.  What is ?  What is ?  What is ?  Is there a vector such that ?  "
},
{
  "id": "ch2sec5-4",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-4",
  "type": "Activity",
  "number": "2.5.2",
  "title": "",
  "body": "  Suppose that where .  What is the dimension of the vectors that are inputs for ?  What is the dimension of the vectors that are outputs?  Describe the vectors for which .  "
},
{
  "id": "ch2sec5-5",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-5",
  "type": "Activity",
  "number": "2.5.3",
  "title": "",
  "body": " If is the matrix , what is in terms of the vectors and ?  "
},
{
  "id": "ch2sec5-6",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-6",
  "type": "Activity",
  "number": "2.5.4",
  "title": "",
  "body": " Suppose that is a matrix and that . If , what is the matrix ?    "
},
{
  "id": "ch2sec5-7",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-7",
  "type": "Activity",
  "number": "2.5.5",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What is ?                         "
},
{
  "id": "ch2sec5-8",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-8",
  "type": "Activity",
  "number": "2.5.6",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What piece of information would help you compute ?    The value of .    The value of .    The value of .    Any of the above.     "
},
{
  "id": "ch2sec5-9",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-9",
  "type": "Activity",
  "number": "2.5.7",
  "title": "",
  "body": "  Let be the linear transformation given by Write the matrix for . The matrix is called the standard matrix for the transformation .   "
},
{
  "id": "ch2sec5-10",
  "level": "2",
  "url": "ch2sec5.html#ch2sec5-10",
  "type": "Activity",
  "number": "2.5.8",
  "title": "",
  "body": "  Let be the linear transformation given by     Compute , , and .    Find the standard matrix for , so that .   "
},
{
  "id": "lintrasapplications-2",
  "level": "2",
  "url": "ch2sec5.html#lintrasapplications-2",
  "type": "Activity",
  "number": "2.5.9",
  "title": "",
  "body": "  Suppose that we work for a company that produces baked goods, including cakes, donuts, and eclairs. Our company operates two plants, Plant 1 and Plant 2. In one hour of operation,  Plant 1 produces 10 cakes, 50 donuts, and 30 eclairs.  Plant 2 produces 20 cakes, 30 donuts, and 30 eclairs.   If plant 1 operates for hours and Plant 2 for hours, how many cakes does the company produce? How many donuts ? How many eclairs ?  We combine the number of hours the two plants operate into a vector . Likewise, we use a vector to denote the number of cakes , donuts , and eclairs our company produces.  Now define a matrix transformation where represents the number of baked goods produced when the plants are operated for times . If , what are the dimensions of the matrix ?  Find the vector and the vector and use your results to write the matrix .  If we operate Plant 1 for 40 hours and Plant 2 for 50 hours, how many baked goods have we produced?  Suppose the marketing department says we need to produce 1500 cakes, 4700 donuts, and 3300 eclairs. Is it possible to meet this order? If so, how long should the two plants operate?  "
},
{
  "id": "lintrasapplications-3",
  "level": "2",
  "url": "ch2sec5.html#lintrasapplications-3",
  "type": "Activity",
  "number": "2.5.10",
  "title": "",
  "body": " Continue with the same baked good producing plants from the previous activity. Consider the needed ingredients:  Each cake requires 4 units of flour and and 2 units of sugar.  Each donut requires 1 unit of flour and 1 unit of sugar.  Each eclair requires 1 units of flour and 2 units of sugar.   Suppose we make cakes, donuts, and eclairs. How many units of flour are required? How many units of sugar ?  Write a matrix that defines the matrix transformation .  If Plant 1 operates for 30 hours and Plant 2 operates for 20 hours, how many units of flour and sugar are required?  We can consider the matrix transformation that tells us how many units of flour and sugar are required when we operate the plants for and hours. Find the matrix that defines the transformation .   "
},
{
  "id": "lintrasapplications-4",
  "level": "2",
  "url": "ch2sec5.html#lintrasapplications-4",
  "type": "Activity",
  "number": "2.5.11",
  "title": "",
  "body": "  Suppose we run a company that has two warehouses, which we will call and , and a fleet of 1000 delivery trucks. Every day, a delivery truck goes out from one of the warehouses and returns every evening to one of the warehouses. Every evening,  70% of the trucks that leave return to . The other 30% return to .  50% of the trucks that leave return to and 50% return to .   We will use the vector to represent the number of trucks at location and in the morning. We consider the matrix transformation that describes the number of trucks at location and in the evening.  Suppose that all 1000 trucks begin the day at location and none at . How many trucks are at each location at the end of the day? Therefore, what is the vector ?  Using this result, what is ?  In the same way, suppose that all 1000 trucks begin the day at location and none at . How many trucks are at each location at the end of the day? What is the result ?  Find the matrix such that .  Suppose that there are 100 trucks at and 900 at at the beginning of the day. How many are there at the two locations at the end of the day?   Suppose that there are 550 trucks at and 450 at at the end of the day. How many trucks were there at the two locations at the beginning of the day?  "
},
{
  "id": "lintrasapplications-5",
  "level": "2",
  "url": "ch2sec5.html#lintrasapplications-5",
  "type": "Activity",
  "number": "2.5.12",
  "title": "",
  "body": " Continue with the same trucking company from the previous activity.  Suppose that all of the trucks are at location on Monday morning.  How many trucks are at each location Monday evening?  How many trucks are at each location Tuesday evening?  How many trucks are at each location Wednesday evening?  "
},
{
  "id": "lintrasapplications-6",
  "level": "2",
  "url": "ch2sec5.html#lintrasapplications-6",
  "type": "Activity",
  "number": "2.5.13",
  "title": "",
  "body": " Continue with the same trucking company from the previous two activities.  Suppose that is the matrix transformation that transforms the distribution of trucks one morning into the distribution of trucks two mornings later. What is the matrix that defines the transformation ?  Suppose that is the matrix transformation that transforms the distribution of trucks one morning into the distribution of trucks one week later. What is the matrix that defines the transformation ?  What happens to the distribution of trucks after a very long time?   All the trucks end up at location .    All the trucks end up at location .    625 trucks end up at location , while 375 end up at location .    375 trucks end up at location , while 625 end up at location .      "
},
{
  "id": "ch2sec6",
  "level": "1",
  "url": "ch2sec6.html",
  "type": "Section",
  "number": "2.6",
  "title": "The geometry of matrix transformations",
  "body": " The geometry of matrix transformations    For this activity, use the applet in Understanding Linear Algebra, Activity 2.6.2 .  For the following matrices given below, use the diagram to study the effect of the corresponding matrix transformation . For each transformation, describe the geometric effect of the transformation on the plane.  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .      In this activity, we seek to describe some matrix transformations by finding the matrix that gives the desired transformation. All of the transformations that we study here have the form .  Find the matrix of the transformation that has no effect on vectors; that is, . We call this matrix the identity and denote it by .  Find the matrix of the transformation that reflects vectors in over the line .  What is the result of composing the reflection you found in the previous part with itself; that is, what is the effect of reflecting in the line and then reflecting in this line again? Provide a geometric explanation for your result as well as an algebraic one obtained by multiplying matrices.     As above, we can describe various matrix transformations by finding the matrix that gives the desired transformation. All of the transformations that we study here have the form .  Find the matrix that rotates vectors counterclockwise in the plane by .  Compare the result of rotating by and then reflecting in the line to the result of first reflecting in and then rotating .  Find the matrix that results from composing a rotation with itself. Explain the geometric meaning of this operation.  Find the matrix that results from composing a rotation with itself four times; that is, if is the matrix transformation that rotates vectors by , find the matrix for . Explain why your result makes sense geometrically.    Explain why the matrix that rotates vectors counterclockwise by an angle is .      For this last activity, do Activity 2.6.4 in Understanding Linear Algebra.   "
},
{
  "id": "activity-linear-trans-geom",
  "level": "2",
  "url": "ch2sec6.html#activity-linear-trans-geom",
  "type": "Activity",
  "number": "2.6.1",
  "title": "",
  "body": "  For this activity, use the applet in Understanding Linear Algebra, Activity 2.6.2 .  For the following matrices given below, use the diagram to study the effect of the corresponding matrix transformation . For each transformation, describe the geometric effect of the transformation on the plane.  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .  The matrix .   "
},
{
  "id": "ch2sec6-3",
  "level": "2",
  "url": "ch2sec6.html#ch2sec6-3",
  "type": "Activity",
  "number": "2.6.2",
  "title": "",
  "body": "  In this activity, we seek to describe some matrix transformations by finding the matrix that gives the desired transformation. All of the transformations that we study here have the form .  Find the matrix of the transformation that has no effect on vectors; that is, . We call this matrix the identity and denote it by .  Find the matrix of the transformation that reflects vectors in over the line .  What is the result of composing the reflection you found in the previous part with itself; that is, what is the effect of reflecting in the line and then reflecting in this line again? Provide a geometric explanation for your result as well as an algebraic one obtained by multiplying matrices.  "
},
{
  "id": "ch2sec6-4",
  "level": "2",
  "url": "ch2sec6.html#ch2sec6-4",
  "type": "Activity",
  "number": "2.6.3",
  "title": "",
  "body": "  As above, we can describe various matrix transformations by finding the matrix that gives the desired transformation. All of the transformations that we study here have the form .  Find the matrix that rotates vectors counterclockwise in the plane by .  Compare the result of rotating by and then reflecting in the line to the result of first reflecting in and then rotating .  Find the matrix that results from composing a rotation with itself. Explain the geometric meaning of this operation.  Find the matrix that results from composing a rotation with itself four times; that is, if is the matrix transformation that rotates vectors by , find the matrix for . Explain why your result makes sense geometrically.  "
},
{
  "id": "ch2sec6-5",
  "level": "2",
  "url": "ch2sec6.html#ch2sec6-5",
  "type": "Activity",
  "number": "2.6.4",
  "title": "",
  "body": " Explain why the matrix that rotates vectors counterclockwise by an angle is .    "
},
{
  "id": "ch2sec6-6",
  "level": "2",
  "url": "ch2sec6.html#ch2sec6-6",
  "type": "Activity",
  "number": "2.6.5",
  "title": "",
  "body": " For this last activity, do Activity 2.6.4 in Understanding Linear Algebra.  "
},
{
  "id": "ch3sec1",
  "level": "1",
  "url": "ch3sec1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Invertibility",
  "body": " Invertibility     Let's consider the matrices .  Define these matrices in Sage and verify that so that .   Find the solution to the matrix equation using .  Using Sage, multiply and in the opposite order; that is, what do you find when you evaluate ?     Suppose that is an invertible matrix with inverse . This means that every equation of the form has a solution, namely, . Which of the following best describes a restatement of this fact?  The columns of are linearly independent.  The columns of span .      Suppose that is an invertible matrix with inverse . This means that every equation of the form has a solution, namely, . What can you conclude about the pivot positions of the matrix ?  Every column of has a pivot position.  Every row of has a pivot position.  Every row and every column of has a pivot position.     If is an invertible matrix, what is its reduced row echelon form?       In this activity, we let and construct its inverse . For the time being, let's denote the inverse by so that .  We know that . If we write , then we have . This means that we need to solve the equations . Using the Sage cell below, solve these equations for the columns of .   What is the matrix ? Check that and .   To find the columns of , we solved two equations, and . We could do this by augmenting two separate times, forming matrices and finding their reduced row echelon forms. But instead of solving these two equations separately, we could also solve them together by forming the augmented matrix and finding the row reduced echelon form. In other words, we augment by the matrix to form .  Form this augmented matrix and find its reduced row echelon form to find .   Assuming is invertible, we have shown that .    If you have defined a matrix in Sage, you can find it's inverse as A.inverse() . Use Sage to find the inverse of the matrix .     What happens when we try to find the inverse of the matrix ?    Suppose that matrices and are both invertible. What do you find when you simplify the product ? Explain why this shows the product is invertible and .     We have seen how to use Gaussian elimination to find the inverse of a matrix. Now we want to look at how to use matrix multiplication to perform Gaussian Elimination.    Tweaking the identity matrix slightly allows us to write row operations in terms of matrix multiplication.    Create a matrix that doubles the third row of :     Create a matrix that swaps the second and third rows of :     Create a matrix that adds times the third row of to the first row:       Consider the two row operations and applied as follows to show :   Express these row operations as matrix multiplication by expressing as the product of two matrices and : Check your work using technology.    We have now seen how to do Gaussian elimination with matrix multiplication. If we are careful to describe our row operation with lower triangular matrices, then we can connect matrix multiplication to finding the inverse. We will see this through the next couple of activities.    Let . When performing Gaussian elimination on , we first apply a row replacement operation in which we multiply the first row by and add to the second row. After this step, we have a new matrix . .  Show that multiplying by the lower triangular matrix has the same effect as this row operation; that is, show that .  Explain why is invertible and find its inverse .   You should see that there is a simple relationship between and . Describe this relationship and explain why it holds.    To continue the Gaussian elimination algorithm, we need to apply two more row replacements to bring into a triangular form where .  Find the matrices and that perform these row replacement operations so that .  Explain why the matrix product is invertible and use this fact to write . What is the matrix that you find? Why do you think we denote it by ?    Row replacement operations may always be performed by multiplying by a lower triangular matrix. It turns out the other two row operations, scaling and interchange, may also be performed using matrix multiplication. For instance, consider the two matrices .  Show that multiplying by performs a scaling operation and that multiplying by performs a row interchange.  Explain why the matrices and are invertible and state their inverses.    "
},
{
  "id": "ch3sec1-2",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-2",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Let's consider the matrices .  Define these matrices in Sage and verify that so that .   Find the solution to the matrix equation using .  Using Sage, multiply and in the opposite order; that is, what do you find when you evaluate ?  "
},
{
  "id": "ch3sec1-3",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-3",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Suppose that is an invertible matrix with inverse . This means that every equation of the form has a solution, namely, . Which of the following best describes a restatement of this fact?  The columns of are linearly independent.  The columns of span .   "
},
{
  "id": "ch3sec1-4",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-4",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Suppose that is an invertible matrix with inverse . This means that every equation of the form has a solution, namely, . What can you conclude about the pivot positions of the matrix ?  Every column of has a pivot position.  Every row of has a pivot position.  Every row and every column of has a pivot position.  "
},
{
  "id": "ch3sec1-5",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-5",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "  If is an invertible matrix, what is its reduced row echelon form?    "
},
{
  "id": "ch3sec1-6",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-6",
  "type": "Activity",
  "number": "3.1.5",
  "title": "",
  "body": "  In this activity, we let and construct its inverse . For the time being, let's denote the inverse by so that .  We know that . If we write , then we have . This means that we need to solve the equations . Using the Sage cell below, solve these equations for the columns of .   What is the matrix ? Check that and .   To find the columns of , we solved two equations, and . We could do this by augmenting two separate times, forming matrices and finding their reduced row echelon forms. But instead of solving these two equations separately, we could also solve them together by forming the augmented matrix and finding the row reduced echelon form. In other words, we augment by the matrix to form .  Form this augmented matrix and find its reduced row echelon form to find .  "
},
{
  "id": "ch3sec1-8",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-8",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "  If you have defined a matrix in Sage, you can find it's inverse as A.inverse() . Use Sage to find the inverse of the matrix .  "
},
{
  "id": "ch3sec1-9",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-9",
  "type": "Activity",
  "number": "3.1.7",
  "title": "",
  "body": "  What happens when we try to find the inverse of the matrix ? "
},
{
  "id": "ch3sec1-10",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-10",
  "type": "Activity",
  "number": "3.1.8",
  "title": "",
  "body": "  Suppose that matrices and are both invertible. What do you find when you simplify the product ? Explain why this shows the product is invertible and .    "
},
{
  "id": "ch3sec1-12",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-12",
  "type": "Activity",
  "number": "3.1.9",
  "title": "",
  "body": "  Tweaking the identity matrix slightly allows us to write row operations in terms of matrix multiplication.    Create a matrix that doubles the third row of :     Create a matrix that swaps the second and third rows of :     Create a matrix that adds times the third row of to the first row:    "
},
{
  "id": "ch3sec1-13",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-13",
  "type": "Activity",
  "number": "3.1.10",
  "title": "",
  "body": "  Consider the two row operations and applied as follows to show :   Express these row operations as matrix multiplication by expressing as the product of two matrices and : Check your work using technology.   "
},
{
  "id": "ch3sec1-15",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-15",
  "type": "Activity",
  "number": "3.1.11",
  "title": "",
  "body": "  Let . When performing Gaussian elimination on , we first apply a row replacement operation in which we multiply the first row by and add to the second row. After this step, we have a new matrix . .  Show that multiplying by the lower triangular matrix has the same effect as this row operation; that is, show that .  Explain why is invertible and find its inverse .   You should see that there is a simple relationship between and . Describe this relationship and explain why it holds.  "
},
{
  "id": "ch3sec1-16",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-16",
  "type": "Activity",
  "number": "3.1.12",
  "title": "",
  "body": " To continue the Gaussian elimination algorithm, we need to apply two more row replacements to bring into a triangular form where .  Find the matrices and that perform these row replacement operations so that .  Explain why the matrix product is invertible and use this fact to write . What is the matrix that you find? Why do you think we denote it by ?  "
},
{
  "id": "ch3sec1-17",
  "level": "2",
  "url": "ch3sec1.html#ch3sec1-17",
  "type": "Activity",
  "number": "3.1.13",
  "title": "",
  "body": " Row replacement operations may always be performed by multiplying by a lower triangular matrix. It turns out the other two row operations, scaling and interchange, may also be performed using matrix multiplication. For instance, consider the two matrices .  Show that multiplying by performs a scaling operation and that multiplying by performs a row interchange.  Explain why the matrices and are invertible and state their inverses.   "
},
{
  "id": "ch3sec2",
  "level": "1",
  "url": "ch3sec2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Bases and coordinate systems",
  "body": " Bases and coordinate systems    Consider the vectors in .  Find the linear combination .   Express the vector as a linear combination of and .  Find the linear combination .  Express the vector as a linear combination of and .  Explain why every vector in can be written as a linear combination of and in exactly one way.      basis  A set of vectors in is called a basis for if the set of vectors spans and is linearly independent.    Use the definition of a basis to determine whther the following sets of vectors form a basis for the appropriate   In the first activity, we considered a set of vectors in : . Explain why these vectors form a basis for .  Consider the set of vectors in  . and determine whether they form a basis for .  Do the vectors form a basis for ?   We can determine whether a set of vectors is a basis using RREF.  Explain why the vectors form a basis for .  If a set of vectors forms a basis for , what can you guarantee about the pivot positions of the matrix ?  If the set of vectors is a basis for , how many vectors must be in the set?      If is a basis for , that means the reduced row echelon form of the matrix doesn't have a column without a pivot position, and doesn't have a row of zeros. Determine the reduced row echelon form below.       Label each of the sets as   SPANS or DOES NOT SPAN     LINEARLY INDEPENDENT or LINEARLY DEPENDENT    BASIS FOR or NOT A BASIS FOR    by finding for their corresponding matrices.     Now we want to look at how to convert between two different bases. This is called change of basis .    Let's begin with the basis of where .  If the coordinates of in the basis are , what is the vector ?  If , find the coordinates of in the basis ; that is, find .  Find a matrix such that, for any vector , we have . Explain why this matrix is invertible.  Using what you found in the previous part, find a matrix such that, for any vector , we have . What is the relationship between the two matrices you have found in this and the previous part? Explain why this relationship holds.    Suppose now we also consider the basis . Find a matrix that converts coordinates in the basis into coordinates in the basis from the previous activity; that is, . You may wish to think about converting coordinates from the basis into the standard coordinate system and then into the basis .   Suppose we consider the standard basis . What is the relationship between and ?      In the next activity we explore an application of change of basis in the field of computer vision.   Do Activity 3.2.4 Edge detection in Understanding Linear Algebra.   "
},
{
  "id": "ch3sec2-2",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-2",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Consider the vectors in .  Find the linear combination .   Express the vector as a linear combination of and .  Find the linear combination .  Express the vector as a linear combination of and .  Explain why every vector in can be written as a linear combination of and in exactly one way.   "
},
{
  "id": "ch3sec2-3",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  basis  A set of vectors in is called a basis for if the set of vectors spans and is linearly independent.   "
},
{
  "id": "ch3sec2-4",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-4",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "Use the definition of a basis to determine whther the following sets of vectors form a basis for the appropriate   In the first activity, we considered a set of vectors in : . Explain why these vectors form a basis for .  Consider the set of vectors in  . and determine whether they form a basis for .  Do the vectors form a basis for ?  "
},
{
  "id": "ch3sec2-5",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-5",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "We can determine whether a set of vectors is a basis using RREF.  Explain why the vectors form a basis for .  If a set of vectors forms a basis for , what can you guarantee about the pivot positions of the matrix ?  If the set of vectors is a basis for , how many vectors must be in the set?   "
},
{
  "id": "ch3sec2-6",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-6",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "  If is a basis for , that means the reduced row echelon form of the matrix doesn't have a column without a pivot position, and doesn't have a row of zeros. Determine the reduced row echelon form below.    "
},
{
  "id": "ch3sec2-7",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-7",
  "type": "Activity",
  "number": "3.2.5",
  "title": "",
  "body": "  Label each of the sets as   SPANS or DOES NOT SPAN     LINEARLY INDEPENDENT or LINEARLY DEPENDENT    BASIS FOR or NOT A BASIS FOR    by finding for their corresponding matrices.    "
},
{
  "id": "ch3sec2-9",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-9",
  "type": "Activity",
  "number": "3.2.6",
  "title": "",
  "body": "  Let's begin with the basis of where .  If the coordinates of in the basis are , what is the vector ?  If , find the coordinates of in the basis ; that is, find .  Find a matrix such that, for any vector , we have . Explain why this matrix is invertible.  Using what you found in the previous part, find a matrix such that, for any vector , we have . What is the relationship between the two matrices you have found in this and the previous part? Explain why this relationship holds.  "
},
{
  "id": "ch3sec2-10",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-10",
  "type": "Activity",
  "number": "3.2.7",
  "title": "",
  "body": " Suppose now we also consider the basis . Find a matrix that converts coordinates in the basis into coordinates in the basis from the previous activity; that is, . You may wish to think about converting coordinates from the basis into the standard coordinate system and then into the basis . "
},
{
  "id": "ch3sec2-11",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-11",
  "type": "Activity",
  "number": "3.2.8",
  "title": "",
  "body": " Suppose we consider the standard basis . What is the relationship between and ?    "
},
{
  "id": "ch3sec2-13",
  "level": "2",
  "url": "ch3sec2.html#ch3sec2-13",
  "type": "Activity",
  "number": "3.2.9",
  "title": "",
  "body": " Do Activity 3.2.4 Edge detection in Understanding Linear Algebra.  "
},
{
  "id": "ch3sec3",
  "level": "1",
  "url": "ch3sec3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Image Compression",
  "body": " Image Compression  Suppose that we have a basis for . What do we mean by the representation of a vector in the coordinate system defined by ?  The components of the vector are the weights that express as a linear combination of the basis vectors; that is, if .    Since we will be using various bases and the coordinate systems they define, let's review how we translate between coordinate systems.  If we are given the representation , how can we recover the vector ?  If we are given the vector , how can we find ?  Suppose that is a basis for . If , find the vector .   If , find .     Section 3.3 in Understanding Linear Algebra provides some applications of applications of change of basis, including digital color models and image compression.   Do Activity 3.3.2 Color models in Understanding Linear Algebra   "
},
{
  "id": "ch3sec3-4",
  "level": "2",
  "url": "ch3sec3.html#ch3sec3-4",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  Since we will be using various bases and the coordinate systems they define, let's review how we translate between coordinate systems.  If we are given the representation , how can we recover the vector ?  If we are given the vector , how can we find ?  Suppose that is a basis for . If , find the vector .   If , find .   "
},
{
  "id": "ch3sec3-6",
  "level": "2",
  "url": "ch3sec3.html#ch3sec3-6",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": " Do Activity 3.3.2 Color models in Understanding Linear Algebra  "
},
{
  "id": "ch3sec4",
  "level": "1",
  "url": "ch3sec4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Determinants",
  "body": " Determinants  A pair of vectors and is called positively oriented if the angle, measured in the counterclockwise direction, from to is less than ; we say the pair is negatively oriented if it is more than .    determinant  Suppose a matrix has columns and . If the pair of vectors is positively oriented, then the determinant of , denoted , is the area of the parallelogram formed by and . If the pair is negatively oriented, then is minus the area of the parallelogram.    For the next several activities, We will use geometry to find the determinant of some simple matrices.   Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.   Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  What does this lead you to believe is generally true about the determinant of a diagonal matrix?   Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?    Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  What do you notice about the determinant of any matrix of the form ?  What does this say about the determinant of an upper triangular matrix?    Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  When we change the entry in the lower left corner, what is the effect on the determinant?  What does this say about the determinant of a lower triangular matrix?    Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  In general, what is the determinant of a matrix whose columns are linearly dependent?    Consider the matrices .  Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinants of , , and .  What does this suggest is generally true about the relationship of to and ?    The next several activities will investigate the connection between the determinant of a matrix and its invertibility using Gaussian elimination.   Consider the two upper triangular matrices .  Which of the matrices and are invertible?  Use our earlier observation that the determinant of an upper triangular matrix is the product of its diagonal entries to find and .  Explain why an upper triangular matrix is invertible if and only if its determinant is not zero.    Let's now consider the matrix and use the Gaussian elimination process.  We begin with a row replacement operation . What is the relationship between and ?  Next we perform another row replacement operation: . What is the relationship between and ?  Finally, we perform an interchange: to arrive at an upper triangular matrix . What is the relationship between and ?  Since is upper triangular, we can compute its determinant, which allows us to find . What is ? Is invertible?    Consider the matrix .  Perform a sequence of row operations to find an upper triangular matrix that is row equivalent to . Use this to determine .  Is the matrix invertible?    Suppose we apply a sequence of row operations on a matrix to obtain .  Explain why if and only if .  Explain why an matrix is invertible if and only if .    If is an invertible matrix with , what is ?     Another way to calculate the determinant is through cofactor expansion. We will explore cofactor expansions through some examples.    Using a cofactor expansion, show that the determinant of the following matrix . Remember that you can choose any row or column to create the expansion, but the choice of a particular row or column may simplify the computation.   Use a cofactor expansion to find the determinant of .   Explain how the cofactor expansion technique shows that the determinant of a triangular matrix is equal to the product of its diagonal entries.    Sage will compute the determinant of a matrix A with the command A.det() . Use Sage to find the determinant of the matrix .      "
},
{
  "id": "ch3sec4-3",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  determinant  Suppose a matrix has columns and . If the pair of vectors is positively oriented, then the determinant of , denoted , is the area of the parallelogram formed by and . If the pair is negatively oriented, then is minus the area of the parallelogram.   "
},
{
  "id": "ch3sec4-5",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-5",
  "type": "Activity",
  "number": "3.4.1",
  "title": "",
  "body": " Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.   Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  What does this lead you to believe is generally true about the determinant of a diagonal matrix? "
},
{
  "id": "ch3sec4-6",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-6",
  "type": "Activity",
  "number": "3.4.2",
  "title": "",
  "body": " Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  "
},
{
  "id": "ch3sec4-7",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-7",
  "type": "Activity",
  "number": "3.4.3",
  "title": "",
  "body": " Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  What do you notice about the determinant of any matrix of the form ?  What does this say about the determinant of an upper triangular matrix?  "
},
{
  "id": "ch3sec4-8",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-8",
  "type": "Activity",
  "number": "3.4.4",
  "title": "",
  "body": " Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  When we change the entry in the lower left corner, what is the effect on the determinant?  What does this say about the determinant of a lower triangular matrix?  "
},
{
  "id": "ch3sec4-9",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-9",
  "type": "Activity",
  "number": "3.4.5",
  "title": "",
  "body": " Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinant.  Find the determinant of the matrix .  What is the geometric effect of the matrix transformation defined by this matrix?  In general, what is the determinant of a matrix whose columns are linearly dependent?  "
},
{
  "id": "ch3sec4-10",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-10",
  "type": "Activity",
  "number": "3.4.6",
  "title": "",
  "body": " Consider the matrices .  Use the diagram in Activity 3.4.2 of Undertanding Linear Algebra or your own sketch of the appropriate parallelogram to find the determinants of , , and .  What does this suggest is generally true about the relationship of to and ?   "
},
{
  "id": "ch3sec4-12",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-12",
  "type": "Activity",
  "number": "3.4.7",
  "title": "",
  "body": " Consider the two upper triangular matrices .  Which of the matrices and are invertible?  Use our earlier observation that the determinant of an upper triangular matrix is the product of its diagonal entries to find and .  Explain why an upper triangular matrix is invertible if and only if its determinant is not zero.  "
},
{
  "id": "ch3sec4-13",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-13",
  "type": "Activity",
  "number": "3.4.8",
  "title": "",
  "body": " Let's now consider the matrix and use the Gaussian elimination process.  We begin with a row replacement operation . What is the relationship between and ?  Next we perform another row replacement operation: . What is the relationship between and ?  Finally, we perform an interchange: to arrive at an upper triangular matrix . What is the relationship between and ?  Since is upper triangular, we can compute its determinant, which allows us to find . What is ? Is invertible?  "
},
{
  "id": "ch3sec4-14",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-14",
  "type": "Activity",
  "number": "3.4.9",
  "title": "",
  "body": " Consider the matrix .  Perform a sequence of row operations to find an upper triangular matrix that is row equivalent to . Use this to determine .  Is the matrix invertible?  "
},
{
  "id": "ch3sec4-15",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-15",
  "type": "Activity",
  "number": "3.4.10",
  "title": "",
  "body": " Suppose we apply a sequence of row operations on a matrix to obtain .  Explain why if and only if .  Explain why an matrix is invertible if and only if .  "
},
{
  "id": "ch3sec4-16",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-16",
  "type": "Activity",
  "number": "3.4.11",
  "title": "",
  "body": " If is an invertible matrix with , what is ?    "
},
{
  "id": "ch3sec4-18",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-18",
  "type": "Activity",
  "number": "3.4.12",
  "title": "",
  "body": "  Using a cofactor expansion, show that the determinant of the following matrix . Remember that you can choose any row or column to create the expansion, but the choice of a particular row or column may simplify the computation. "
},
{
  "id": "ch3sec4-19",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-19",
  "type": "Activity",
  "number": "3.4.13",
  "title": "",
  "body": " Use a cofactor expansion to find the determinant of . "
},
{
  "id": "ch3sec4-20",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-20",
  "type": "Activity",
  "number": "3.4.14",
  "title": "",
  "body": " Explain how the cofactor expansion technique shows that the determinant of a triangular matrix is equal to the product of its diagonal entries. "
},
{
  "id": "ch3sec4-21",
  "level": "2",
  "url": "ch3sec4.html#ch3sec4-21",
  "type": "Activity",
  "number": "3.4.15",
  "title": "",
  "body": " Sage will compute the determinant of a matrix A with the command A.det() . Use Sage to find the determinant of the matrix .     "
},
{
  "id": "ch3sec5",
  "level": "1",
  "url": "ch3sec5.html",
  "type": "Section",
  "number": "3.5",
  "title": "Subspaces of <span class=\"process-math\">\\(\\real^p\\)<\/span>",
  "body": " Subspaces of    Let's consider the following matrix and its reduced row echelon form. .  Are the columns of linearly independent? Do they span ?  Give a parametric description of the solution space to the homogeneous equation .  Explain how this parametric description produces two vectors and whose span is the solution space to the equation .  What can you say about the linear independence of the set of vectors and ?  Let's denote the columns of as , , , and . Explain why and can be written as linear combinations of and .  Explain why and are linearly independent and .      subspace  A subspace of is a nonempty subset of such that any linear combination of vectors in that set is also in the set.      We will look at some subspaces of .   Explain why a line that does not pass through the origin is not a subspace of .   Explain why any subspace of must contain the zero vector .  Explain why the subset of that consists of only the zero vector is a subspace of .  Explain why the subspace is itself a subspace of .  If and are two vectors in a subspace , explain why is contained in the subspace as well.       dimension  A basis for a subspace of is a set of vectors in that are linearly independent and span . It can be seen that any two bases have the same number of vectors. Therefore, we say that the dimension of the subspace , denoted , is the number of vectors in any basis.      null space  If is an matrix, we call the subset of vectors in satisfying the null space of . We denote it as .    We will explore some null spaces in the next couple of activities.   Consider the matrix  Give a parametric description of the null space .  Give a basis for and state the dimension of .  The null space is a subspace of for which ?    Consider the matrix whose reduced row echelon form is given: .  Give a parametric description of .   Notice that the parametric description gives a set of vectors that span . Explain why this set of vectors is linearly independent and hence forms a basis. What is the dimension of ?    For this matrix, is a subspace of for what ?    What is the relationship between the dimensions of the matrix , the number of pivot positions of and the dimension of ?  Suppose that the columns of a matrix are linearly independent. What can you say about ?  If is an invertible matrix, what can you say about ?    Suppose that is a matrix and that . What can you say about the matrix ?       rank  The rank of a matrix , denoted , is the number of pivot positions of .      column space  If is an matrix, we call the span of its columns the column space of and denote it as .    We will explore some column spaces in the next couple of activities.   Consider the matrix .  Since is the span of the columns, the vectors , , and naturally span . Are these vectors linearly independent?  Show that can be written as a linear combination of and by giving the linear combination. Then explain why .   Explain why the vectors and form a basis for . This shows that is a 2-dimensional subspace of and is therefore a plane in .    Consider the matrix and its reduced row echelon form: . We will call the columns , , , and .  Explain why , , and can be written as a linear combination of .  Explain why is a 1-dimensional subspace of and is therefore a line.  What is the relationship between the dimension and the rank ?  What is the relationship between the dimension of the column space and the null space ?    If is an invertible matrix, what can you say about the column space ?    If , what can you say about the matrix ?       Consider a matrix . Which of the following is equal to the dimension of the null space of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows        Consider a matrix . Which of the following is equal to the dimension of the column space of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows        Consider the matrix Verify that if is an matrix, then holds for . This equation is also known as the Rank-Nullity Theorem.    "
},
{
  "id": "ch3sec5-2",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-2",
  "type": "Activity",
  "number": "3.5.1",
  "title": "",
  "body": "  Let's consider the following matrix and its reduced row echelon form. .  Are the columns of linearly independent? Do they span ?  Give a parametric description of the solution space to the homogeneous equation .  Explain how this parametric description produces two vectors and whose span is the solution space to the equation .  What can you say about the linear independence of the set of vectors and ?  Let's denote the columns of as , , , and . Explain why and can be written as linear combinations of and .  Explain why and are linearly independent and .   "
},
{
  "id": "ch3sec5-3",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-3",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  subspace  A subspace of is a nonempty subset of such that any linear combination of vectors in that set is also in the set.   "
},
{
  "id": "ch3sec5-4",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-4",
  "type": "Activity",
  "number": "3.5.2",
  "title": "",
  "body": "  We will look at some subspaces of .   Explain why a line that does not pass through the origin is not a subspace of .   Explain why any subspace of must contain the zero vector .  Explain why the subset of that consists of only the zero vector is a subspace of .  Explain why the subspace is itself a subspace of .  If and are two vectors in a subspace , explain why is contained in the subspace as well.    "
},
{
  "id": "ch3sec5-5",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-5",
  "type": "Definition",
  "number": "3.5.2",
  "title": "",
  "body": "  dimension  A basis for a subspace of is a set of vectors in that are linearly independent and span . It can be seen that any two bases have the same number of vectors. Therefore, we say that the dimension of the subspace , denoted , is the number of vectors in any basis.   "
},
{
  "id": "ch3sec5-6",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-6",
  "type": "Definition",
  "number": "3.5.3",
  "title": "",
  "body": "  null space  If is an matrix, we call the subset of vectors in satisfying the null space of . We denote it as .   "
},
{
  "id": "ch3sec5-8",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-8",
  "type": "Activity",
  "number": "3.5.3",
  "title": "",
  "body": " Consider the matrix  Give a parametric description of the null space .  Give a basis for and state the dimension of .  The null space is a subspace of for which ?  "
},
{
  "id": "ch3sec5-9",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-9",
  "type": "Activity",
  "number": "3.5.4",
  "title": "",
  "body": " Consider the matrix whose reduced row echelon form is given: .  Give a parametric description of .   Notice that the parametric description gives a set of vectors that span . Explain why this set of vectors is linearly independent and hence forms a basis. What is the dimension of ?    For this matrix, is a subspace of for what ?  "
},
{
  "id": "ch3sec5-10",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-10",
  "type": "Activity",
  "number": "3.5.5",
  "title": "",
  "body": " What is the relationship between the dimensions of the matrix , the number of pivot positions of and the dimension of ?  Suppose that the columns of a matrix are linearly independent. What can you say about ?  If is an invertible matrix, what can you say about ?  "
},
{
  "id": "ch3sec5-11",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-11",
  "type": "Activity",
  "number": "3.5.6",
  "title": "",
  "body": " Suppose that is a matrix and that . What can you say about the matrix ?    "
},
{
  "id": "ch3sec5-12",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-12",
  "type": "Definition",
  "number": "3.5.4",
  "title": "",
  "body": "  rank  The rank of a matrix , denoted , is the number of pivot positions of .   "
},
{
  "id": "ch3sec5-13",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-13",
  "type": "Definition",
  "number": "3.5.5",
  "title": "",
  "body": "  column space  If is an matrix, we call the span of its columns the column space of and denote it as .   "
},
{
  "id": "ch3sec5-15",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-15",
  "type": "Activity",
  "number": "3.5.7",
  "title": "",
  "body": " Consider the matrix .  Since is the span of the columns, the vectors , , and naturally span . Are these vectors linearly independent?  Show that can be written as a linear combination of and by giving the linear combination. Then explain why .   Explain why the vectors and form a basis for . This shows that is a 2-dimensional subspace of and is therefore a plane in .  "
},
{
  "id": "ch3sec5-16",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-16",
  "type": "Activity",
  "number": "3.5.8",
  "title": "",
  "body": " Consider the matrix and its reduced row echelon form: . We will call the columns , , , and .  Explain why , , and can be written as a linear combination of .  Explain why is a 1-dimensional subspace of and is therefore a line.  What is the relationship between the dimension and the rank ?  What is the relationship between the dimension of the column space and the null space ?  "
},
{
  "id": "ch3sec5-17",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-17",
  "type": "Activity",
  "number": "3.5.9",
  "title": "",
  "body": " If is an invertible matrix, what can you say about the column space ?  "
},
{
  "id": "ch3sec5-18",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-18",
  "type": "Activity",
  "number": "3.5.10",
  "title": "",
  "body": " If , what can you say about the matrix ?    "
},
{
  "id": "ch3sec5-19",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-19",
  "type": "Activity",
  "number": "3.5.11",
  "title": "",
  "body": "  Consider a matrix . Which of the following is equal to the dimension of the null space of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows     "
},
{
  "id": "ch3sec5-20",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-20",
  "type": "Activity",
  "number": "3.5.12",
  "title": "",
  "body": "  Consider a matrix . Which of the following is equal to the dimension of the column space of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows     "
},
{
  "id": "ch3sec5-21",
  "level": "2",
  "url": "ch3sec5.html#ch3sec5-21",
  "type": "Activity",
  "number": "3.5.13",
  "title": "",
  "body": "  Consider the matrix Verify that if is an matrix, then holds for . This equation is also known as the Rank-Nullity Theorem.   "
},
{
  "id": "ch4sec1",
  "level": "1",
  "url": "ch4sec1.html",
  "type": "Section",
  "number": "4.1",
  "title": "An introduction to eigenvalues and eigenvectors",
  "body": " An introduction to eigenvalues and eigenvectors    Suppose that is a matrix and that and are vectors such that . Use the linearity of matrix multiplication to express the following vectors in terms of and .   .   .   .   .   .   .      eigenvalue  eigenvector  Given a square matrix , we say that a nonzero vector is an eigenvector of if there is a scalar such that . The scalar is called the eigenvalue associated to the eigenvector .    This definition has an important geometric interpretation that we will investigate in the next few activities.    Suppose that is a nonzero vector and that is a scalar.  What is the geometric relationship between and ?  Let's now consider the eigenvector condition: . Here we have two vectors, and . If , what is the geometric relationship between and ?    Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .    Choose the matrix . Move the vector so that the eigenvector condition holds. What is the eigenvector and what is the associated eigenvalue?  By algebraically computing , verify that the eigenvector condition holds for the vector that you found.  If you multiply the eigenvector that you found by , do you still have an eigenvector? If so, what is the associated eigenvalue?  Are you able to find another eigenvector that is not a scalar multiple of the first one that you found? If so, what is the eigenvector and what is the associated eigenvalue?    Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .  Now consider the matrix . Use the applet to describe any eigenvectors and associated eigenvalues.   Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .  Consider the matrix .  Use the applet to find any eigenvectors and associated eigenvalues.  What geometric transformation does this matrix perform on vectors?  What does this tell you about the presence of eigenvectors for matrix ?  The matrix A has at least two eigenvectors.  The matrix A has at least one eigenvector.  The matrix A has no eigenvectors.      Now we will look at an application of eigenvalues and eigenvectors.    Suppose that we work for a car rental company that has two locations, and . When a customer rents a car at one location, they have the option to return it to either location at the end of the day. After doing some market research, we determine:  80% of the cars rented at location are returned to and 20% are returned to .  40% of the cars rented at location are returned to and 60% are returned to .   Suppose that there are 1000 cars at location and no cars at location on Monday morning. How many cars are there are locations and at the end of the day on Monday?  How many are at locations and at end of the day on Tuesday?   Continue with the car company example.  If we let and be the number of cars at locations and , respectively, at the end of day , we then have We can write the vector to reflect the number of cars at the two locations at the end of day , which says that where .  Suppose that .  Compute and to demonstrate that and are eigenvectors of .  What are the associated eigenvalues and ?   Continue with the car company example and from the previous activity.  We said that 1000 cars are initially at location and none at location . This means that the initial vector describing the number of cars is . Write as a linear combination of and .  Remember that and are eigenvectors of . Use the linearity of matrix multiplicaiton to write the vector , describing the number of cars at the two locations at the end of the first day, as a linear combination of and .  Write the vector as a linear combination of and . Then write the next few vectors as linear combinations of and :   .   .   .   .    What will happen to the number of cars at the two locations after a very long time? Be able to explain how writing as a linear combination of eigenvectors helps you determine the long-term behavior.    "
},
{
  "id": "ch4sec1-2",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-2",
  "type": "Activity",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose that is a matrix and that and are vectors such that . Use the linearity of matrix multiplication to express the following vectors in terms of and .   .   .   .   .   .   .   "
},
{
  "id": "ch4sec1-3",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-3",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  eigenvalue  eigenvector  Given a square matrix , we say that a nonzero vector is an eigenvector of if there is a scalar such that . The scalar is called the eigenvalue associated to the eigenvector .   "
},
{
  "id": "ch4sec1-5",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-5",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "  Suppose that is a nonzero vector and that is a scalar.  What is the geometric relationship between and ?  Let's now consider the eigenvector condition: . Here we have two vectors, and . If , what is the geometric relationship between and ?  "
},
{
  "id": "ch4sec1-6",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-6",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": " Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .    Choose the matrix . Move the vector so that the eigenvector condition holds. What is the eigenvector and what is the associated eigenvalue?  By algebraically computing , verify that the eigenvector condition holds for the vector that you found.  If you multiply the eigenvector that you found by , do you still have an eigenvector? If so, what is the associated eigenvalue?  Are you able to find another eigenvector that is not a scalar multiple of the first one that you found? If so, what is the eigenvector and what is the associated eigenvalue?  "
},
{
  "id": "ch4sec1-7",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-7",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": " Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .  Now consider the matrix . Use the applet to describe any eigenvectors and associated eigenvalues. "
},
{
  "id": "ch4sec1-8",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-8",
  "type": "Activity",
  "number": "4.1.5",
  "title": "",
  "body": " Use the applet in Understanding Linear Algebra Activity 4.1.2, part c .  Consider the matrix .  Use the applet to find any eigenvectors and associated eigenvalues.  What geometric transformation does this matrix perform on vectors?  What does this tell you about the presence of eigenvectors for matrix ?  The matrix A has at least two eigenvectors.  The matrix A has at least one eigenvector.  The matrix A has no eigenvectors.     "
},
{
  "id": "activity-eigen-intro",
  "level": "2",
  "url": "ch4sec1.html#activity-eigen-intro",
  "type": "Activity",
  "number": "4.1.6",
  "title": "",
  "body": "  Suppose that we work for a car rental company that has two locations, and . When a customer rents a car at one location, they have the option to return it to either location at the end of the day. After doing some market research, we determine:  80% of the cars rented at location are returned to and 20% are returned to .  40% of the cars rented at location are returned to and 60% are returned to .   Suppose that there are 1000 cars at location and no cars at location on Monday morning. How many cars are there are locations and at the end of the day on Monday?  How many are at locations and at end of the day on Tuesday? "
},
{
  "id": "ch4sec1-11",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-11",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": " Continue with the car company example.  If we let and be the number of cars at locations and , respectively, at the end of day , we then have We can write the vector to reflect the number of cars at the two locations at the end of day , which says that where .  Suppose that .  Compute and to demonstrate that and are eigenvectors of .  What are the associated eigenvalues and ? "
},
{
  "id": "ch4sec1-12",
  "level": "2",
  "url": "ch4sec1.html#ch4sec1-12",
  "type": "Activity",
  "number": "4.1.8",
  "title": "",
  "body": " Continue with the car company example and from the previous activity.  We said that 1000 cars are initially at location and none at location . This means that the initial vector describing the number of cars is . Write as a linear combination of and .  Remember that and are eigenvectors of . Use the linearity of matrix multiplicaiton to write the vector , describing the number of cars at the two locations at the end of the first day, as a linear combination of and .  Write the vector as a linear combination of and . Then write the next few vectors as linear combinations of and :   .   .   .   .    What will happen to the number of cars at the two locations after a very long time? Be able to explain how writing as a linear combination of eigenvectors helps you determine the long-term behavior.   "
},
{
  "id": "ch4sec2",
  "level": "1",
  "url": "ch4sec2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Finding eigenvalues and eigenvectors",
  "body": " Finding eigenvalues and eigenvectors   Suppose that is a square matrix and that the nonzero vector is a solution to the homogeneous equation .  What can we conclude about the invertibility of ?  is invertible.  is not invertible.  could be either invertible or not invertible.   How does the determinant tell us if there is a nonzero solution to the homogeneous equation ?  The determinant of must be 0.  The determinant of must be nonzero.  The determinant of must be 1.     Suppose that .  Find the determinant . What does this tell us about the solution space to the homogeneous equation ?  Find a basis for .  What is the relationship between the rank of a matrix and the dimension of its null space?      The eigenvalues of a square matrix are defined by the condition that there be a nonzero solution to the homogeneous equation .  If there is a nonzero solution to the homogeneous equation , what can we conclude about the invertibility of the matrix ?  is invertible.  is not invertible.  could be either invertible or not invertible, depending on the invertibility of .    If there is a nonzero solution to the homogeneous equation , what can we conclude about the determinant ?  The determinant of must be 0.  The determinant of must be nonzero.  The determinant of must equal the determinant of .      Let's consider the matrix from which we construct .  Find the determinant .  What kind of equation do you obtain when we set this determinant to zero to obtain ?  Use the determinant you found in the previous part to find the eigenvalues by solving . We considered this matrix in the previous section so we should find the same eigenvalues for that we found by reasoning geometrically there.    Consider the matrix and find its eigenvalues by solving the equation .   Consider the matrix and find its eigenvalues by solving the equation .  This activity focuses on the eigenvalues of triangular matrices.  Find the eigenvalues of the triangular matrix .  What is generally true about the eigenvalues of a triangular matrix?    This activity demonstrates a technique that enables us to find the eigenvalues of a square matrix . Since an eigenvalue is a scalar for which the equation has a nonzero solution, it must be the case that is not invertible. Therefore, its determinant is zero. This gives us the equation whose solutions are the eigenvalues of . This equation is called the characteristic equation of . characteristic equation   In the next few activities, we will find the eigenvectors of a matrix as the null space of the matrix .   Let's begin with the matrix .  We have seen that is an eigenvalue. Form the matrix and find a basis for the eigenspace .  What is the dimension of this eigenspace?  For each of the basis vectors , verify that .  We also saw that is an eigenvalue. Form the matrix and find a basis for the eigenspace .  What is the dimension of this eigenspace?  For each of the basis vectors , verify that .  Is it possible to form a basis of consisting of eigenvectors of ?    Now consider the matrix .  Write the characteristic equation for and use it to find the eigenvalues of .  For each eigenvalue, find a basis for its eigenspace .  Is it possible to form a basis of consisting of eigenvectors of ?    Next, consider the matrix .  Write the characteristic equation for and use it to find the eigenvalues of .  For each eigenvalue, find a basis for its eigenspace .  Is it possible to form a basis of consisting of eigenvectors of ?   Let .  Find the eigenvalues and eigenvectors of the diagonal matrix .  Explain your result by considering the geometric effect of the matrix transformation defined by .    Once we find the eigenvalues of a matrix , describing the eigenspace amounts to the familiar task of describing the null space .   Suppose you have an matrix whose characteristic polynomial is .  Identify the eigenvalues, and their multiplicities, of the matrix based on the characteristic polynomial.  What can you conclude about the dimensions of the eigenspaces?  What is the dimension of the matrix?  Do you have enough information to guarantee that there is a basis of consisting of eigenvectors?   Let .  Find the eigenvalues of and state their multiplicities.  Can you find a basis of consisting of eigenvectors of this matrix?    Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension. > Is there a basis of consisting of eigenvectors of ?   Now consider the matrix whose characteristic equation is also .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?     "
},
{
  "id": "ch4sec2-2",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-2",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": " Suppose that is a square matrix and that the nonzero vector is a solution to the homogeneous equation .  What can we conclude about the invertibility of ?  is invertible.  is not invertible.  could be either invertible or not invertible.   How does the determinant tell us if there is a nonzero solution to the homogeneous equation ?  The determinant of must be 0.  The determinant of must be nonzero.  The determinant of must be 1.   "
},
{
  "id": "ch4sec2-3",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-3",
  "type": "Activity",
  "number": "4.2.2",
  "title": "",
  "body": " Suppose that .  Find the determinant . What does this tell us about the solution space to the homogeneous equation ?  Find a basis for .  What is the relationship between the rank of a matrix and the dimension of its null space?   "
},
{
  "id": "ch4sec2-4",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-4",
  "type": "Activity",
  "number": "4.2.3",
  "title": "",
  "body": "  The eigenvalues of a square matrix are defined by the condition that there be a nonzero solution to the homogeneous equation .  If there is a nonzero solution to the homogeneous equation , what can we conclude about the invertibility of the matrix ?  is invertible.  is not invertible.  could be either invertible or not invertible, depending on the invertibility of .    If there is a nonzero solution to the homogeneous equation , what can we conclude about the determinant ?  The determinant of must be 0.  The determinant of must be nonzero.  The determinant of must equal the determinant of .    "
},
{
  "id": "ch4sec2-5",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-5",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": " Let's consider the matrix from which we construct .  Find the determinant .  What kind of equation do you obtain when we set this determinant to zero to obtain ?  Use the determinant you found in the previous part to find the eigenvalues by solving . We considered this matrix in the previous section so we should find the same eigenvalues for that we found by reasoning geometrically there.  "
},
{
  "id": "ch4sec2-6",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-6",
  "type": "Activity",
  "number": "4.2.5",
  "title": "",
  "body": " Consider the matrix and find its eigenvalues by solving the equation . "
},
{
  "id": "ch4sec2-7",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-7",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": " Consider the matrix and find its eigenvalues by solving the equation . "
},
{
  "id": "ch4sec2-8",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-8",
  "type": "Activity",
  "number": "4.2.7",
  "title": "",
  "body": "This activity focuses on the eigenvalues of triangular matrices.  Find the eigenvalues of the triangular matrix .  What is generally true about the eigenvalues of a triangular matrix?   "
},
{
  "id": "ch4sec2-11",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-11",
  "type": "Activity",
  "number": "4.2.8",
  "title": "",
  "body": " Let's begin with the matrix .  We have seen that is an eigenvalue. Form the matrix and find a basis for the eigenspace .  What is the dimension of this eigenspace?  For each of the basis vectors , verify that .  We also saw that is an eigenvalue. Form the matrix and find a basis for the eigenspace .  What is the dimension of this eigenspace?  For each of the basis vectors , verify that .  Is it possible to form a basis of consisting of eigenvectors of ?  "
},
{
  "id": "ch4sec2-12",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-12",
  "type": "Activity",
  "number": "4.2.9",
  "title": "",
  "body": " Now consider the matrix .  Write the characteristic equation for and use it to find the eigenvalues of .  For each eigenvalue, find a basis for its eigenspace .  Is it possible to form a basis of consisting of eigenvectors of ?  "
},
{
  "id": "ch4sec2-13",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-13",
  "type": "Activity",
  "number": "4.2.10",
  "title": "",
  "body": " Next, consider the matrix .  Write the characteristic equation for and use it to find the eigenvalues of .  For each eigenvalue, find a basis for its eigenspace .  Is it possible to form a basis of consisting of eigenvectors of ?  "
},
{
  "id": "ch4sec2-14",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-14",
  "type": "Activity",
  "number": "4.2.11",
  "title": "",
  "body": "Let .  Find the eigenvalues and eigenvectors of the diagonal matrix .  Explain your result by considering the geometric effect of the matrix transformation defined by .   "
},
{
  "id": "ch4sec2-16",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-16",
  "type": "Activity",
  "number": "4.2.12",
  "title": "",
  "body": " Suppose you have an matrix whose characteristic polynomial is .  Identify the eigenvalues, and their multiplicities, of the matrix based on the characteristic polynomial.  What can you conclude about the dimensions of the eigenspaces?  What is the dimension of the matrix?  Do you have enough information to guarantee that there is a basis of consisting of eigenvectors?  "
},
{
  "id": "ch4sec2-17",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-17",
  "type": "Activity",
  "number": "4.2.13",
  "title": "",
  "body": "Let .  Find the eigenvalues of and state their multiplicities.  Can you find a basis of consisting of eigenvectors of this matrix?  "
},
{
  "id": "ch4sec2-18",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-18",
  "type": "Activity",
  "number": "4.2.14",
  "title": "",
  "body": " Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension. > Is there a basis of consisting of eigenvectors of ?  "
},
{
  "id": "ch4sec2-19",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-19",
  "type": "Activity",
  "number": "4.2.15",
  "title": "",
  "body": "Now consider the matrix whose characteristic equation is also .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?  "
},
{
  "id": "ch4sec2-20",
  "level": "2",
  "url": "ch4sec2.html#ch4sec2-20",
  "type": "Activity",
  "number": "4.2.16",
  "title": "",
  "body": "Consider the matrix whose characteristic equation is .  Identify the eigenvalues and their multiplicities.  For each eigenvalue , find a basis of the eigenspace and state its dimension.  Is there a basis of consisting of eigenvectors of ?   "
},
{
  "id": "ch4sec3",
  "level": "1",
  "url": "ch4sec3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Diagonalization, similarity, and powers of a matrix",
  "body": " Diagonalization, similarity, and powers of a matrix    Let's recall how a vector in can be represented in a coordinate system defined by a basis .  Suppose that we consider the basis defined by .  Find the vector whose representation in the coordinate system defined by is .  Consider the vector and find its representation in the coordinate system defined by .  How do we use the matrix to convert a vector's representation in the coordinate system defined by into its standard representation ? How do we use this matrix to convert into ?  Suppose that we have a matrix whose eigenvectors are and and associated eigenvalues are and . Express the vector as a linear combination of and .  If , find .      Once again, we will consider the matrices . The matrix has eigenvectors and and eigenvalues and . We will consider the basis of consisting of eigenvectors .  If , write as a linear combination of and .  If , find , the representation of in the coordinate system defined by .  If , find , the representation of in the coordinate system defined by .  Explain why .  Explain why for all vectors and hence .  Explain why and verify this relationship by computing in the Sage cell below.        diagonalizable  We say that the matrix is diagonalizable if there is a diagonal matrix and invertible matrix such that .      Find a diagonalization of , if one exists, when .   Can the diagonal matrix be diagonalized? If so, explain how to find the matrices and .   Find a diagonalization of , if one exists, when .     Find a diagonalization of , if one exists, when .     Suppose that where .  Explain why is invertible.  Find a diagonalization of .  Find a diagonalization of .      Consider the diagonal matrix . Find the powers , , and . What is for a general value of ?    Suppose that is a matrix with eigenvector and associated eigenvalue ; that is, . By considering , explain why is also an eigenvector of with eigenvalue .    Suppose that where .  Remembering that the columns of are eigenvectors of , explain why is diagonalizable and find a diagonalization of .  Give another explanation of the diagonalizability of by writing .  In the same way, find a diagonalization of , , and .    Suppose that is a diagonalizable matrix with eigenvalues and . What happens to as becomes very large?       similarity  We say that is similar to if there is an invertible matrix such that .      In case a matrix has complex eigenvalues, we will find a simpler matrix that is similar to . In particular, if has an eigenvalue , then is similar to . We will rewrite in terms of and .  Explain why .  Explain why has the geometric effect of rotating vectors by and stretching them by a factor of .  Let's now consider the matrix : whose eigenvalues are and . We will choose to focus on one of the eigenvalues   Form the matrix using these values of and . Then rewrite the point in polar coordinates by identifying the values of and . Explain the geometric effect of multiplying vectors of .   Suppose that . Verify that .    Explain why .   In the previous activity, we formed the matrix by choosing the eigenvalue . Suppose we had instead chosen .  Form the matrix  Use polar coordinates to describe the geometric effect of .  Using the matrix , show that .    "
},
{
  "id": "ch4sec3-2",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-2",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "  Let's recall how a vector in can be represented in a coordinate system defined by a basis .  Suppose that we consider the basis defined by .  Find the vector whose representation in the coordinate system defined by is .  Consider the vector and find its representation in the coordinate system defined by .  How do we use the matrix to convert a vector's representation in the coordinate system defined by into its standard representation ? How do we use this matrix to convert into ?  Suppose that we have a matrix whose eigenvectors are and and associated eigenvalues are and . Express the vector as a linear combination of and .  If , find .   "
},
{
  "id": "ch4sec3-3",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-3",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Once again, we will consider the matrices . The matrix has eigenvectors and and eigenvalues and . We will consider the basis of consisting of eigenvectors .  If , write as a linear combination of and .  If , find , the representation of in the coordinate system defined by .  If , find , the representation of in the coordinate system defined by .  Explain why .  Explain why for all vectors and hence .  Explain why and verify this relationship by computing in the Sage cell below.     "
},
{
  "id": "ch4sec3-4",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-4",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  diagonalizable  We say that the matrix is diagonalizable if there is a diagonal matrix and invertible matrix such that .   "
},
{
  "id": "ch4sec3-5",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-5",
  "type": "Activity",
  "number": "4.3.3",
  "title": "",
  "body": "  Find a diagonalization of , if one exists, when . "
},
{
  "id": "ch4sec3-6",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-6",
  "type": "Activity",
  "number": "4.3.4",
  "title": "",
  "body": " Can the diagonal matrix be diagonalized? If so, explain how to find the matrices and . "
},
{
  "id": "ch4sec3-7",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-7",
  "type": "Activity",
  "number": "4.3.5",
  "title": "",
  "body": " Find a diagonalization of , if one exists, when .   "
},
{
  "id": "ch4sec3-8",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-8",
  "type": "Activity",
  "number": "4.3.6",
  "title": "",
  "body": " Find a diagonalization of , if one exists, when .   "
},
{
  "id": "ch4sec3-9",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-9",
  "type": "Activity",
  "number": "4.3.7",
  "title": "",
  "body": " Suppose that where .  Explain why is invertible.  Find a diagonalization of .  Find a diagonalization of .   "
},
{
  "id": "ch4sec3-10",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-10",
  "type": "Activity",
  "number": "4.3.8",
  "title": "",
  "body": "  Consider the diagonal matrix . Find the powers , , and . What is for a general value of ?  "
},
{
  "id": "ch4sec3-11",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-11",
  "type": "Activity",
  "number": "4.3.9",
  "title": "",
  "body": " Suppose that is a matrix with eigenvector and associated eigenvalue ; that is, . By considering , explain why is also an eigenvector of with eigenvalue .  "
},
{
  "id": "ch4sec3-12",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-12",
  "type": "Activity",
  "number": "4.3.10",
  "title": "",
  "body": " Suppose that where .  Remembering that the columns of are eigenvectors of , explain why is diagonalizable and find a diagonalization of .  Give another explanation of the diagonalizability of by writing .  In the same way, find a diagonalization of , , and .  "
},
{
  "id": "ch4sec3-13",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-13",
  "type": "Activity",
  "number": "4.3.11",
  "title": "",
  "body": " Suppose that is a diagonalizable matrix with eigenvalues and . What happens to as becomes very large?   "
},
{
  "id": "ch4sec3-14",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-14",
  "type": "Definition",
  "number": "4.3.2",
  "title": "",
  "body": "  similarity  We say that is similar to if there is an invertible matrix such that .   "
},
{
  "id": "ch4sec3-15",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-15",
  "type": "Activity",
  "number": "4.3.12",
  "title": "",
  "body": "  In case a matrix has complex eigenvalues, we will find a simpler matrix that is similar to . In particular, if has an eigenvalue , then is similar to . We will rewrite in terms of and .  Explain why .  Explain why has the geometric effect of rotating vectors by and stretching them by a factor of .  Let's now consider the matrix : whose eigenvalues are and . We will choose to focus on one of the eigenvalues   Form the matrix using these values of and . Then rewrite the point in polar coordinates by identifying the values of and . Explain the geometric effect of multiplying vectors of .   Suppose that . Verify that .    Explain why . "
},
{
  "id": "ch4sec3-16",
  "level": "2",
  "url": "ch4sec3.html#ch4sec3-16",
  "type": "Activity",
  "number": "4.3.13",
  "title": "",
  "body": " In the previous activity, we formed the matrix by choosing the eigenvalue . Suppose we had instead chosen .  Form the matrix  Use polar coordinates to describe the geometric effect of .  Using the matrix , show that .   "
},
{
  "id": "ch4sec4",
  "level": "1",
  "url": "ch4sec4.html",
  "type": "Section",
  "number": "4.4",
  "title": "Dynamical Systems",
  "body": " Dynamical Systems    Suppose that we have a diagonalizable matrix where .  Find the eigenvalues of and find a basis for the associated eigenspaces.  Form a basis of consisting of eigenvectors of and write the vector as a linear combination of basis vectors.  Write as a linear combination of basis vectors.  What is , the representation of in the coordinate system defined by ?  What is , the representation of in the coordinate system defined by ?  What is , the representation of in the coordinate system defined by ?      Suppose we have two species and that interact with one another and that we record the change in their populations from year to year. When we begin our study, the populations, measured in thousands, are and ; after years, the populations are and .  If we know the populations in one year, they are determined in the following year by the expressions We will combine the populations in a vector and note that where .  Verify that are eigenvectors of and find their respective eigenvalues.  Suppose that initially . Write as a linear combination of the eigenvectors and .  Write the vectors , , and as a linear combination of eigenvectors and .  When becomes very large, what happens to the ratio of the populations ?    We will contnue to use the population model from the previous problem: Where we have the corresponding matrix equation with and where .  Begin instead with . What eventually happens to the ratio as becomes very large?  Explain what happens to the ratio as becomes very large no matter what the initial populations are.  After a very long time, by approximately what factor does the population of grow every year? By approximately what factor does the population of grow every year?    In the next few activities, we will consider several ways in which two species might interact with one another. We will consider two species and whose populations in year form a vector and which evolve according to the rule .  Based on the eigenvalues of the matrix defining a dynamical system of the form , we can classify the system as follows:   produces an attractor so that trajectories are pulled in toward the origin.   and produces a saddle in which most trajectories are pushed away from the origin and in the direction of .   produces a repellor in which trajectories are pushed away from the origin.      Suppose that .  Explain why the species do not interact with one another.  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?    Suppose now that .  Explain why is a beneficial species for .  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?    Suppose now that .  Explain why this describes a predator-prey system. Which of the species is the predator and which is the prey?  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?    Suppose now that .  Compare this predator-prey system to the one in the previous activity.  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?      The following type of analysis has been used to study the population of a bison herd. We will divide the population of female bison into three groups: juveniles who are less than one year old; yearlings between one and two years old; and adults who are older than two years.   Each year,  80% of the juveniles survive to become yearlings.  90% of the yearlings survive to become adults.  80% of the adults survive.  40% of the adults give birth to a juvenile.     By , , and , we denote the number of juveniles, yearlings, and adults in year . We have .  Find similar expressions for and in terms of , , and .  As is usual, we write the matrix . Write the matrix such that .  Find the eigenvalues of .  What does the size of the complex eigenvalue tell you about its effect on the long-term behavior of the system?   Use the same model for the herd as the previous activity.  We can write where the matrices and are approximately:  Use this information to give an eigenvector associated with the real eigenvalue.  Make a prediction about the long-term behavior of . For instance, at what rate does it grow?  For every 100 adults, how many juveniles, and yearlings are there? >  Use the same model for the bison herd as the previous activities, but suppose that the birth rate decreases so that only 30% of adults give birth to a juvenile.  How does this affect the long-term growth rate of the herd?   Suppose that the birth rate decreases further so that only 20% of adults give birth to a juvenile. How does this affect the long-term growth rate of the herd?   Find the smallest birth rate that supports a stable population.    "
},
{
  "id": "ch4sec4-2",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-2",
  "type": "Activity",
  "number": "4.4.1",
  "title": "",
  "body": "  Suppose that we have a diagonalizable matrix where .  Find the eigenvalues of and find a basis for the associated eigenspaces.  Form a basis of consisting of eigenvectors of and write the vector as a linear combination of basis vectors.  Write as a linear combination of basis vectors.  What is , the representation of in the coordinate system defined by ?  What is , the representation of in the coordinate system defined by ?  What is , the representation of in the coordinate system defined by ?   "
},
{
  "id": "ch4sec4-3",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-3",
  "type": "Activity",
  "number": "4.4.2",
  "title": "",
  "body": "  Suppose we have two species and that interact with one another and that we record the change in their populations from year to year. When we begin our study, the populations, measured in thousands, are and ; after years, the populations are and .  If we know the populations in one year, they are determined in the following year by the expressions We will combine the populations in a vector and note that where .  Verify that are eigenvectors of and find their respective eigenvalues.  Suppose that initially . Write as a linear combination of the eigenvectors and .  Write the vectors , , and as a linear combination of eigenvectors and .  When becomes very large, what happens to the ratio of the populations ?  "
},
{
  "id": "ch4sec4-4",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-4",
  "type": "Activity",
  "number": "4.4.3",
  "title": "",
  "body": " We will contnue to use the population model from the previous problem: Where we have the corresponding matrix equation with and where .  Begin instead with . What eventually happens to the ratio as becomes very large?  Explain what happens to the ratio as becomes very large no matter what the initial populations are.  After a very long time, by approximately what factor does the population of grow every year? By approximately what factor does the population of grow every year?   "
},
{
  "id": "ch4sec4-6",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attractor saddle repellor "
},
{
  "id": "ch4sec4-7",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-7",
  "type": "Activity",
  "number": "4.4.4",
  "title": "",
  "body": "  Suppose that .  Explain why the species do not interact with one another.  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?  "
},
{
  "id": "ch4sec4-8",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-8",
  "type": "Activity",
  "number": "4.4.5",
  "title": "",
  "body": " Suppose now that .  Explain why is a beneficial species for .  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?  "
},
{
  "id": "ch4sec4-9",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-9",
  "type": "Activity",
  "number": "4.4.6",
  "title": "",
  "body": " Suppose now that .  Explain why this describes a predator-prey system. Which of the species is the predator and which is the prey?  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?  "
},
{
  "id": "ch4sec4-10",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-10",
  "type": "Activity",
  "number": "4.4.7",
  "title": "",
  "body": " Suppose now that .  Compare this predator-prey system to the one in the previous activity.  Which of the six types of dynamical systems do we have?  What happens to both species after a long time?   "
},
{
  "id": "ch4sec4-11",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-11",
  "type": "Activity",
  "number": "4.4.8",
  "title": "",
  "body": "  The following type of analysis has been used to study the population of a bison herd. We will divide the population of female bison into three groups: juveniles who are less than one year old; yearlings between one and two years old; and adults who are older than two years.   Each year,  80% of the juveniles survive to become yearlings.  90% of the yearlings survive to become adults.  80% of the adults survive.  40% of the adults give birth to a juvenile.     By , , and , we denote the number of juveniles, yearlings, and adults in year . We have .  Find similar expressions for and in terms of , , and .  As is usual, we write the matrix . Write the matrix such that .  Find the eigenvalues of .  What does the size of the complex eigenvalue tell you about its effect on the long-term behavior of the system?  "
},
{
  "id": "ch4sec4-12",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-12",
  "type": "Activity",
  "number": "4.4.9",
  "title": "",
  "body": "Use the same model for the herd as the previous activity.  We can write where the matrices and are approximately:  Use this information to give an eigenvector associated with the real eigenvalue.  Make a prediction about the long-term behavior of . For instance, at what rate does it grow?  For every 100 adults, how many juveniles, and yearlings are there? > "
},
{
  "id": "ch4sec4-13",
  "level": "2",
  "url": "ch4sec4.html#ch4sec4-13",
  "type": "Activity",
  "number": "4.4.10",
  "title": "",
  "body": "Use the same model for the bison herd as the previous activities, but suppose that the birth rate decreases so that only 30% of adults give birth to a juvenile.  How does this affect the long-term growth rate of the herd?   Suppose that the birth rate decreases further so that only 20% of adults give birth to a juvenile. How does this affect the long-term growth rate of the herd?   Find the smallest birth rate that supports a stable population.   "
},
{
  "id": "ch4sec5",
  "level": "1",
  "url": "ch4sec5.html",
  "type": "Section",
  "number": "4.5",
  "title": "Markov chains and Google’s PageRank algorithm",
  "body": " Markov chains and Google's PageRank algorithm    Suppose that a rental car company rents from two locations and . We find that 80% of the cars rented from location are returned to while the other 20% are returned to . For cars rented from location , 60% are returned to and 40% to .  We will use and to denote the number of cars at the two locations on day . The following day, the number of cars at equals 80% of and 40% of . This shows that  If we use the vector to represent the distribution of cars on day , find a matrix such that .  Find the eigenvalues and associated eigenvectors of .  Suppose that there are initially 1500 cars, all of which are at location . Write the vector as a linear combination of eigenvectors of .  Write the vectors as a linear combination of eigenvectors of .  What happens to the distribution of cars after a long time?     probability vector  stochastic matrix  A vector whose entries are nonnegative and add to 1 is called a probability vector . A square matrix whose columns are probability vectors is called a stochastic matrix.     Suppose you live in a country with three political parties , , and . We use , , and to denote the percentage of voters voting for that party in election .   Voters will change parties from one election to the next as shown in the figure. We see that 60% of voters stay with the same party. However, 40% of those who vote for party will vote for party in the next election.    Write expressions for , , and in terms of , , and .  If we write , find the matrix such that .  Explain why is a stochastic matrix.  Suppose that initially 40% of citizens vote for party , 30% vote for party , and 30% vote for party . Form the vector and explain why is a probability vector.  Find , the percentages who vote for the three parties in the next election. Verify that is also a probabilty vector and explain why will be a probability vector for every .     Use the matrix you found in the previous activity.  Find the eigenvalues of the matrix and explain why the eigenspace is a one-dimensional subspace of . Then verify that is a basis vector for .  As every vector in is a scalar multiple of , find a probability vector in and explain why it is the only probability vector in .  Describe what happens to after a very long time.     steady-state vector  stationary vector  If is a stochastic matrix, we say that a probability vector is a steady-state or stationary vector if .    If is a stochastic matrix and a Markov chain, does converge to a steady-state vector?     Consider the matrix .  Verify that is a stochastic matrix.  Find the eigenvalues of .  Find a steady-state vector for .  We will form the Markov chain beginning with the vector and defining . The Sage cell below constructs the first terms of the Markov chain with the command markov_chain(A, x0, N) . Define the matrix and vector and evaluate the cell to find the first 10 terms of the Markov chain.  What do you notice about the Markov chain? Does it converge to the steady-state vector for ?    Consider the matrix .  Find the eigenvalues of along with a steady-state vector for .  As before, find the first 10 terms in the Markov chain beginning with and .  What do you notice about the Markov chain? Does it converge to the steady-state vector for ?   What condition on the eigenvalues of a stochastic matrix will guarantee that a Markov chain will converge to a steady-state vector?      positive matrix  We say that a matrix is positive if either or some power has all positive entries.    Perron-Frobenius   If is a positive stochastic matrix, then the eigenvalues satisfy and for . This means that has a unique positive, steady-state vector and that every Markov chain defined by will converge to .      We will explore the meaning of the Perron-Frobenius theorem in this activity.  Consider the matrix .  Show is a positive matrix by checking powers .  Find the eigenvectors of and verify there is a unique steady-state vector.  Using the Sage cell below, construct the Markov chain with initial vector and describe what happens to as becomes large.   Construct another Markov chain with initial vector and describe what happens to as becomes large.   Consider the matrix  Compute several powers of using Sage, and determine whether is a positive matrix.   Find the eigenvalues of and then find the steady-state vectors. Is there a unique steady-state vector?  What happens to the Markov chain defined by with initial vector ?  What happens to the Markov chain with initial vector ?   Explain how the matrices and , which we have considered in previous activities, relate to the Perron-Frobenius theorem.  The P-F Theorem tells us and both converge to a unique steady-state vector.  The P-F Theorem tells us converges to a unique steady-state vector, but cannot converge to a unique steady-state vector.  The P-F Theorem tells us converges to a unique steady-state vector, but it tells us nothing about .  The P-F Theorem tells us nothing about and . Neither needs to converge to a unique steady-state vector.      Do Activity 4.5.5 and Activity 4.5.6 on Google's Page Rank Algorithm directly in Understanding Linear Algebra.  "
},
{
  "id": "ch4sec5-2",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-2",
  "type": "Activity",
  "number": "4.5.1",
  "title": "",
  "body": "  Suppose that a rental car company rents from two locations and . We find that 80% of the cars rented from location are returned to while the other 20% are returned to . For cars rented from location , 60% are returned to and 40% to .  We will use and to denote the number of cars at the two locations on day . The following day, the number of cars at equals 80% of and 40% of . This shows that  If we use the vector to represent the distribution of cars on day , find a matrix such that .  Find the eigenvalues and associated eigenvectors of .  Suppose that there are initially 1500 cars, all of which are at location . Write the vector as a linear combination of eigenvectors of .  Write the vectors as a linear combination of eigenvectors of .  What happens to the distribution of cars after a long time?   "
},
{
  "id": "ch4sec5-3",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-3",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": " probability vector  stochastic matrix  A vector whose entries are nonnegative and add to 1 is called a probability vector . A square matrix whose columns are probability vectors is called a stochastic matrix.  "
},
{
  "id": "ch4sec5-4",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-4",
  "type": "Activity",
  "number": "4.5.2",
  "title": "",
  "body": "  Suppose you live in a country with three political parties , , and . We use , , and to denote the percentage of voters voting for that party in election .   Voters will change parties from one election to the next as shown in the figure. We see that 60% of voters stay with the same party. However, 40% of those who vote for party will vote for party in the next election.    Write expressions for , , and in terms of , , and .  If we write , find the matrix such that .  Explain why is a stochastic matrix.  Suppose that initially 40% of citizens vote for party , 30% vote for party , and 30% vote for party . Form the vector and explain why is a probability vector.  Find , the percentages who vote for the three parties in the next election. Verify that is also a probabilty vector and explain why will be a probability vector for every .   "
},
{
  "id": "ch4sec5-5",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-5",
  "type": "Activity",
  "number": "4.5.3",
  "title": "",
  "body": " Use the matrix you found in the previous activity.  Find the eigenvalues of the matrix and explain why the eigenspace is a one-dimensional subspace of . Then verify that is a basis vector for .  As every vector in is a scalar multiple of , find a probability vector in and explain why it is the only probability vector in .  Describe what happens to after a very long time.   "
},
{
  "id": "ch4sec5-6",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-6",
  "type": "Definition",
  "number": "4.5.2",
  "title": "",
  "body": " steady-state vector  stationary vector  If is a stochastic matrix, we say that a probability vector is a steady-state or stationary vector if .  "
},
{
  "id": "ch4sec5-7",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-7",
  "type": "Question",
  "number": "4.5.3",
  "title": "",
  "body": " If is a stochastic matrix and a Markov chain, does converge to a steady-state vector?  "
},
{
  "id": "ch4sec5-8",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-8",
  "type": "Activity",
  "number": "4.5.4",
  "title": "",
  "body": "  Consider the matrix .  Verify that is a stochastic matrix.  Find the eigenvalues of .  Find a steady-state vector for .  We will form the Markov chain beginning with the vector and defining . The Sage cell below constructs the first terms of the Markov chain with the command markov_chain(A, x0, N) . Define the matrix and vector and evaluate the cell to find the first 10 terms of the Markov chain.  What do you notice about the Markov chain? Does it converge to the steady-state vector for ? "
},
{
  "id": "ch4sec5-9",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-9",
  "type": "Activity",
  "number": "4.5.5",
  "title": "",
  "body": "  Consider the matrix .  Find the eigenvalues of along with a steady-state vector for .  As before, find the first 10 terms in the Markov chain beginning with and .  What do you notice about the Markov chain? Does it converge to the steady-state vector for ? "
},
{
  "id": "ch4sec5-10",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-10",
  "type": "Activity",
  "number": "4.5.6",
  "title": "",
  "body": " What condition on the eigenvalues of a stochastic matrix will guarantee that a Markov chain will converge to a steady-state vector?    "
},
{
  "id": "ch4sec5-11",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-11",
  "type": "Definition",
  "number": "4.5.4",
  "title": "",
  "body": " positive matrix  We say that a matrix is positive if either or some power has all positive entries.  "
},
{
  "id": "theorem-perron",
  "level": "2",
  "url": "ch4sec5.html#theorem-perron",
  "type": "Theorem",
  "number": "4.5.5",
  "title": "Perron-Frobenius.",
  "body": " Perron-Frobenius   If is a positive stochastic matrix, then the eigenvalues satisfy and for . This means that has a unique positive, steady-state vector and that every Markov chain defined by will converge to .   "
},
{
  "id": "ch4sec5-13",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-13",
  "type": "Activity",
  "number": "4.5.7",
  "title": "",
  "body": "  We will explore the meaning of the Perron-Frobenius theorem in this activity.  Consider the matrix .  Show is a positive matrix by checking powers .  Find the eigenvectors of and verify there is a unique steady-state vector.  Using the Sage cell below, construct the Markov chain with initial vector and describe what happens to as becomes large.   Construct another Markov chain with initial vector and describe what happens to as becomes large.  "
},
{
  "id": "ch4sec5-14",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-14",
  "type": "Activity",
  "number": "4.5.8",
  "title": "",
  "body": "Consider the matrix  Compute several powers of using Sage, and determine whether is a positive matrix.   Find the eigenvalues of and then find the steady-state vectors. Is there a unique steady-state vector?  What happens to the Markov chain defined by with initial vector ?  What happens to the Markov chain with initial vector ?  "
},
{
  "id": "ch4sec5-15",
  "level": "2",
  "url": "ch4sec5.html#ch4sec5-15",
  "type": "Activity",
  "number": "4.5.9",
  "title": "",
  "body": "Explain how the matrices and , which we have considered in previous activities, relate to the Perron-Frobenius theorem.  The P-F Theorem tells us and both converge to a unique steady-state vector.  The P-F Theorem tells us converges to a unique steady-state vector, but cannot converge to a unique steady-state vector.  The P-F Theorem tells us converges to a unique steady-state vector, but it tells us nothing about .  The P-F Theorem tells us nothing about and . Neither needs to converge to a unique steady-state vector.     "
},
{
  "id": "ch6sec1",
  "level": "1",
  "url": "ch6sec1.html",
  "type": "Section",
  "number": "5.1",
  "title": "The dot product",
  "body": " The dot product  For two-dimensional vectors and , their dot product is the scalar defined to be   dot product  For -dimensional vectors and , their dot product is the scalar defined to be    Suppose that and .  Compute the dot product .  Sketch the vector . Then use the Pythagorean theorem to find the length of .  Compute the dot product . How is the dot product related to the length of ?     magnitude of a vector  The magnitude , or length, of , which we denote as , is .    We saw in the first activity that .  orthogonal  Two vectors and are perpendicular or orthogonal if .   Let and .  Find the lengths and using the dot product.  Find the dot product . Are and orthogonal?  Consider the vector . Find . Are and orthogonal?  For what value of is the vector perpendicular to ?   Suppose that   Find .  Find .  Find .   "
},
{
  "id": "ch6sec1-2",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-2",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "For two-dimensional vectors and , their dot product is the scalar defined to be "
},
{
  "id": "ch6sec1-3",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-3",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": " dot product  For -dimensional vectors and , their dot product is the scalar defined to be "
},
{
  "id": "ch6sec1-4",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-4",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose that and .  Compute the dot product .  Sketch the vector . Then use the Pythagorean theorem to find the length of .  Compute the dot product . How is the dot product related to the length of ?  "
},
{
  "id": "ch6sec1-5",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-5",
  "type": "Definition",
  "number": "5.1.3",
  "title": "",
  "body": "  magnitude of a vector  The magnitude , or length, of , which we denote as , is .   "
},
{
  "id": "ch6sec1-7",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-7",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "orthogonal  Two vectors and are perpendicular or orthogonal if . "
},
{
  "id": "ch6sec1-8",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-8",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": " Let and .  Find the lengths and using the dot product.  Find the dot product . Are and orthogonal?  Consider the vector . Find . Are and orthogonal?  For what value of is the vector perpendicular to ?  "
},
{
  "id": "ch6sec1-9",
  "level": "2",
  "url": "ch6sec1.html#ch6sec1-9",
  "type": "Activity",
  "number": "5.1.3",
  "title": "",
  "body": "Suppose that   Find .  Find .  Find .  "
},
{
  "id": "ch6sec2",
  "level": "1",
  "url": "ch6sec2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Orthogonal complements and the matrix transpose",
  "body": " Orthogonal complements and the matrix transpose    Let .  Sketch the vector and one vector that is orthogonal to it.  If a vector is orthogonal to , what do we know about the dot product ?  If we write , use the dot product to write an equation for the vectors orthogonal to in terms of and .  Use this equation to sketch the set of all vectors orthogonal to .    introduced the column space and null space of a matrix . Suppose that is a matrix and is a vector satisfying .  Does belong to or ?  Suppose that the equation is consistent. Does belong to or ?    orthogonal complement   Given a subspace of , the orthogonal complement of is the set of vectors in each of which is orthogonal to every vector in . We denote the orthogonal complement by .    The next two activities help us find a description of the orthogonal complement .    Suppose that and form a basis for , a two-dimensional subspace of .   Suppose that the vector is orthogonal to . If we write , use the fact that to write a linear equation for , , and .    Suppose that is also orthogonal to . In the same way, write a linear equation for , , and that arises from the fact that .    If is orthogonal to both and , these two equations give us a linear system for some matrix . Identify the matrix and write a parametric description of the solution space to the equation .     Suppose that and form a basis for , a two-dimensional subspace of .   Since and form a basis for the two-dimensional subspace , any vector in in can be written as a linear combination If is orthogonal to both and , use the distributive property of dot products to explain why is orthogonal to .    Give a basis for the orthogonal complement and state the dimension .    Describe , the orthogonal complement of .      transpose   The transpose of the matrix is the matrix whose rows are the columns of .    If , write the matrix .  The next activity illustrates how multiplying a vector by is related to computing dot products with the columns of . You'll develop a better understanding of this relationship if you compute the dot products and matrix products in this activity without using technology.   Suppose that    Find the dot products and .  Now write the matrix and its transpose . Find the product and describe how this product computes both dot products and .  Suppose that is a vector that is orthogonal to both and . What does this say about the dot products and ? What does this say about the product ?  Use the matrix to give a parametric description of all the vectors that are orthogonal to and .   Remember that , the null space of , is the solution set of the equation . If is a vector in , explain why must be orthogonal to both and .   Remember that , the column space of , is the set of linear combinations of the columns of . Therefore, any vector in can be written as . If is a vector in , explain why is orthogonal to every vector in .     In Sage, the transpose of a matrix A is given by A.T . Define the matrices  Evaluate and . What do you notice about the relationship between these two matrices?   What happens if you transpose a matrix twice; that is, what is ?  Find and . What do you notice about the relationship between these determinants?  Find the product and its transpose .  Is it possible to compute the product ? Explain why or why not.  Find the product and compare it to . What do you notice about the relationship between these two matrices?    What is the transpose of the identity matrix ?   If a square matrix is invertible, explain why you can guarantee that is invertible and why .     Suppose that is a -dimensional subspace of and that is a matrix whose columns form a basis for ; that is, .  What are the dimensions of ?  What is the rank of ?  What are the dimensions of ?  What is the rank of ?  What is ?  What is ?  How are the dimensions of and related?     Suppose that is a subspace of having basis   Find the dimensions and .    Find a basis for . It may be helpful to know that the Sage command A.right_kernel() produces a basis for .     Verify that each of the basis vectors you found for are orthogonal to the basis vectors for .     "
},
{
  "id": "ch6sec2-2",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-2",
  "type": "Activity",
  "number": "5.2.1",
  "title": "",
  "body": "  Let .  Sketch the vector and one vector that is orthogonal to it.  If a vector is orthogonal to , what do we know about the dot product ?  If we write , use the dot product to write an equation for the vectors orthogonal to in terms of and .  Use this equation to sketch the set of all vectors orthogonal to . "
},
{
  "id": "ch6sec2-3",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-3",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "  introduced the column space and null space of a matrix . Suppose that is a matrix and is a vector satisfying .  Does belong to or ?  Suppose that the equation is consistent. Does belong to or ?  "
},
{
  "id": "ch6sec2-4",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-4",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": " orthogonal complement   Given a subspace of , the orthogonal complement of is the set of vectors in each of which is orthogonal to every vector in . We denote the orthogonal complement by .   "
},
{
  "id": "ch6sec2-6",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-6",
  "type": "Activity",
  "number": "5.2.3",
  "title": "",
  "body": "  Suppose that and form a basis for , a two-dimensional subspace of .   Suppose that the vector is orthogonal to . If we write , use the fact that to write a linear equation for , , and .    Suppose that is also orthogonal to . In the same way, write a linear equation for , , and that arises from the fact that .    If is orthogonal to both and , these two equations give us a linear system for some matrix . Identify the matrix and write a parametric description of the solution space to the equation .  "
},
{
  "id": "ch6sec2-7",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-7",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "  Suppose that and form a basis for , a two-dimensional subspace of .   Since and form a basis for the two-dimensional subspace , any vector in in can be written as a linear combination If is orthogonal to both and , use the distributive property of dot products to explain why is orthogonal to .    Give a basis for the orthogonal complement and state the dimension .    Describe , the orthogonal complement of .    "
},
{
  "id": "ch6sec2-8",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-8",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": " transpose   The transpose of the matrix is the matrix whose rows are the columns of .   "
},
{
  "id": "ch6sec2-9",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-9",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "If , write the matrix . "
},
{
  "id": "ch6sec2-11",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-11",
  "type": "Activity",
  "number": "5.2.6",
  "title": "",
  "body": " Suppose that    Find the dot products and .  Now write the matrix and its transpose . Find the product and describe how this product computes both dot products and .  Suppose that is a vector that is orthogonal to both and . What does this say about the dot products and ? What does this say about the product ?  Use the matrix to give a parametric description of all the vectors that are orthogonal to and . "
},
{
  "id": "ch6sec2-12",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-12",
  "type": "Activity",
  "number": "5.2.7",
  "title": "",
  "body": " Remember that , the null space of , is the solution set of the equation . If is a vector in , explain why must be orthogonal to both and . "
},
{
  "id": "ch6sec2-13",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-13",
  "type": "Activity",
  "number": "5.2.8",
  "title": "",
  "body": " Remember that , the column space of , is the set of linear combinations of the columns of . Therefore, any vector in can be written as . If is a vector in , explain why is orthogonal to every vector in . "
},
{
  "id": "ch6sec2-14",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-14",
  "type": "Activity",
  "number": "5.2.9",
  "title": "",
  "body": "  In Sage, the transpose of a matrix A is given by A.T . Define the matrices  Evaluate and . What do you notice about the relationship between these two matrices?   What happens if you transpose a matrix twice; that is, what is ?  Find and . What do you notice about the relationship between these determinants?  Find the product and its transpose .  Is it possible to compute the product ? Explain why or why not.  Find the product and compare it to . What do you notice about the relationship between these two matrices?  "
},
{
  "id": "ch6sec2-15",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-15",
  "type": "Activity",
  "number": "5.2.10",
  "title": "",
  "body": " What is the transpose of the identity matrix ? "
},
{
  "id": "ch6sec2-16",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-16",
  "type": "Activity",
  "number": "5.2.11",
  "title": "",
  "body": " If a square matrix is invertible, explain why you can guarantee that is invertible and why . "
},
{
  "id": "ch6sec2-17",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-17",
  "type": "Activity",
  "number": "5.2.12",
  "title": "",
  "body": "  Suppose that is a -dimensional subspace of and that is a matrix whose columns form a basis for ; that is, .  What are the dimensions of ?  What is the rank of ?  What are the dimensions of ?  What is the rank of ?  What is ?  What is ?  How are the dimensions of and related?  "
},
{
  "id": "ch6sec2-18",
  "level": "2",
  "url": "ch6sec2.html#ch6sec2-18",
  "type": "Activity",
  "number": "5.2.13",
  "title": "",
  "body": "  Suppose that is a subspace of having basis   Find the dimensions and .    Find a basis for . It may be helpful to know that the Sage command A.right_kernel() produces a basis for .     Verify that each of the basis vectors you found for are orthogonal to the basis vectors for .    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
