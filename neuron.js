/*
    Create a function named neuron, that enables your AI/bot to learn to mutate data into a more usable shape. You can see how it works from the example.

    Example
    neuron([
      'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
      'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
      'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
      'Orders: shutdown! - Response: Yes Sr!',
      'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
    ])

    // output
    {
      questions: {
        what_is_ounces: { question: 'what is ounces?', responses: [
            'Ounce, unit of weight in the avoirdupois system',
            'equal to 1/16 pound (437 1/2 grains)'
        ] },
        what_is_mud_dauber: { question: 'what is Mud dauber', responses: [
            'Mud dauber is a name commonly applied to a number of wasps'
        ] }
      },
      orders: {
        shutdown: { order: 'shutdown!', responses: ['Yes Sr!'] },
        quote_something: { order: 'Quote something!', responses: [
            'Pursue what catches your heart, not what catches your eyes.'
        ] }
      }
    }
 */

const splitArray = (tab = []) => {
    let statement = tab.slice(1).join(' ').split('-')[0].slice(0, -1);
    let response = tab
        .join(' ')
        .split('-')
        .slice(1)
        .join('-')
        .slice(1)
        .split(' ')
        .slice(1)
        .join(' ');
    return [statement, response];
}

const neuron = (tab = []) => {
    const result = {};
    tab.forEach(item => {
        let str = item.split(' ');
        if (/questions:/i.test(str[0])) {
            result['questions'] ||= {};
            let [question, response] = splitArray(str);
            let questionKey = question
                .replaceAll(' ', '_')
                .replace('?', '')
                .toLowerCase();
            result['questions'][questionKey] ||= {};
            result['questions'][questionKey]['question'] = question;
            result['questions'][questionKey]['responses'] ||= [];
            result['questions'][questionKey]['responses'].push(response);
        }
        if (/orders:/i.test(str[0])) {
            let [order, response] = splitArray(str);
            result['orders'] ||= {};
            let orderKey = order
                .replaceAll(' ', '_')
                .replace('!', '')
                .toLowerCase();
            result['orders'][orderKey] ||= {};
            result['orders'][orderKey]['order'] = order;
            result['orders'][orderKey]['responses'] ||= [];
            result['orders'][orderKey]['responses'].push(response);
        }
        if (/affirmations:/i.test(str[0])) {
            let [affirmation, response] = splitArray(str);
            result['affirmations'] ||= {};
            let affirmationKey = affirmation.replaceAll(' ', '_').toLowerCase();
            result['affirmations'][affirmationKey] ||= {};
            result['affirmations'][affirmationKey]['affirmation'] = affirmation;
            result['affirmations'][affirmationKey]['responses'] ||= [];
            result['affirmations'][affirmationKey]['responses'].push(response);
        }
    })
    return result;
}

const data = [
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'affirmations: i am fine - Response: awesome',
    'Orders: turn on the lights! - Response: done',
]

/*const pre = document.createElement('pre')
pre.style.cssText = `
    font-family: monospace;
    font-size: 20px;
`
pre.textContent = `
neuron([
      'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
      'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
      'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
      'Orders: shutdown! - Response: Yes Sr!',
      'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
    ])

    // output
    {
      questions: {
        what_is_ounces: { question: 'what is ounces?', responses: [
            'Ounce, unit of weight in the avoirdupois system',
            'equal to 1/16 pound (437 1/2 grains)'
        ] },
        what_is_mud_dauber: { question: 'what is Mud dauber', responses: [
            'Mud dauber is a name commonly applied to a number of wasps'
        ] }
      },
      orders: {
        shutdown: { order: 'shutdown!', responses: ['Yes Sr!'] },
        quote_something: { order: 'Quote something!', responses: [
            'Pursue what catches your heart, not what catches your eyes.'
        ] }
      }
    }`

document.body.appendChild(pre)*/

//console.log(neuron(data))