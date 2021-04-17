module.exports.prompts = [this.promptPrototype("Business", "Business tl:dr;", 20, 0.5)];






function promptPrototype(name, prompt, token_length, temperature){
  this.name = name;
  this.prompt = prompt;
  this.token_length = token_length;
  this.temperature = temperature;
}
