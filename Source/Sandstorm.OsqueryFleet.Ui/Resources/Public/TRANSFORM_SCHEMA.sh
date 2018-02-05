echo "OSQUERY_SCHEMA = " > schema_for_codemirror.js
cat osquery_schema_2.11.2.json | jq 'map( { (.name): {text: .name, displayText: (.name + " - " + .description), columns: [( .columns[] | {text: .name, displayText: (.name + " (" + .type + ") - " + .description)})] } } ) | add' >> schema_for_codemirror.js
echo ";" >> schema_for_codemirror.js
