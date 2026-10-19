# cs624-pe02-giridhardronamraju

# Input

The application accepts user input through the React Native TextInput
component. Users can enter the name or code of their favorite MSCS
course, such as CS624. The application also uses a predefined collection
of course names organized into core requirements, depth of study, and
capstone sections. The icon.png image is loaded from the project's
assets directory and displayed at the top of the screen.

# Process

The CoreComponents functional component is implemented using arrow
function syntax. The useState hook stores the favorite course entered
by the user. When the user types into TextInput, the onChangeText
callback updates the state. React then renders the updated favorite
course text. The View and Text components organize and display the
course sections. The map method renders the course names from arrays.
ScrollView allows the user to move through the content vertically.
StyleSheet defines the layout, spacing, colors, and text appearance.

# Output

The application displays the provided image, a favorite-course input
field, and the MSCS course sections. The core section contains eight
courses, the depth-of-study section contains two courses, and the
capstone section contains one verified course. When the user enters
a favorite course, the updated value appears on the screen. The
scrollable layout allows users to access all course information on
the same screen.