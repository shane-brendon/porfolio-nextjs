#!/bin/bash

# Check if no arguments are provided
if [ $# -eq 0 ]; then
  echo "Please provide at least one component name as an argument."
  exit 1
fi

# Function to capitalize the first letter of a string
capitalize() {
  echo "${1^}"
}

# Loop through all arguments (component names)
for component in "$@"; do
  # Capitalize the component name
  capitalizedComponent=$(capitalize "$component")

  # Create a folder with the capitalized component name
  mkdir "$capitalizedComponent"

  # Create a JSX file inside the folder and add the content with the string as the component name
  cat <<EOL > "$capitalizedComponent/$capitalizedComponent.jsx"
import "./$component.scss";

const $capitalizedComponent = () => {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

export default $capitalizedComponent;
EOL

  # Create a SCSS file inside the folder with lowercase name
  touch "$capitalizedComponent/$component.scss"

  # Provide feedback
  echo "Created folder '$capitalizedComponent' with $capitalizedComponent.jsx and $component.scss"
done
