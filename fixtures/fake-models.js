if (process.argv.at(-1) !== 'models') process.exit(3);
const mode = process.env.FAKE_MODELS_MODE;
if (mode === 'empty') process.exit(0);
if (mode === 'failure') {
  process.stderr.write('synthetic-private-catalog-error\n');
  process.exit(1);
}
if (mode === 'malformed') {
  process.stdout.write('not a usable model row\n');
} else {
  const publish = () => process.stdout.write('Fetching available models...\ngemini-test-high\tGemini Test High\nclaude-test\tClaude Test\n');
  if (mode === 'slow') setTimeout(publish, 6000);
  else publish();
}
