#!/bin/bash

# Check if no arguments are provided
if [ $# -eq 0 ]; then
  echo "Please provide at least one component name as an argument."
  exit 1
fi

# Loop through all arguments (component names)
for component in "$@"
do
  # Create a folder with the component name
  mkdir "$component"

  # Create a JSX file inside the folder and add the content with the string as the component name
  cat <<EOL > "$component/$component.jsx"
import "./$component.scss";

const $component = () => {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

export default $component;
EOL

  # Create a SCSS file inside the folder
  touch "$component/$component.scss"

  # Provide feedback
  echo "Created folder '$component' with $component.jsx and $component.scss"
done
