#!/bin/bash

# Check if the user provided an argument
if [ -z "$1" ]; then
  echo "Please provide a string as an argument."
  exit 1
fi

# Create a folder with the name of the string
mkdir "$1"

# Create a JSX file inside the folder and add the content with the string as the component name
cat <<EOL > "$1/$1.jsx"
import "./$1.scss";

const $1 = () => {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

export default $1;
EOL

# Create a SCSS file inside the folder
touch "$1/$1.scss"

# Provide feedback
echo "Created folder '$1' with $1.jsx and $1.scss"
