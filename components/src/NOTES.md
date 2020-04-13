## Steps to Duplicate An Component

1. Identiy the JSX that appears to be duplicated
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does
3. Create a new file to house this new component - it should have the same name as the component
4. Create a new component in the new file, paste the JSX into it
5. Make the new componenet configurable by using React's 'props' system

## Props

- System for passing data from a parent component to a child component
- Goal is to customize or configure a child component
- unidirectional
- props stands for properties
- ex: <CommentDetail author="Sam" />, author is name of prop, Sam is value of prop
- another ex:
  <ApprovalCard>
        <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            timeAgo="Today at 4:45PM"
            content={faker.lorem.sentences()}
          />
  </ApprovalCard>

  ## Components
  - Functional Components: Good for simple content
  - Class Components: Good for just about everything else
  - Class Components:
    - Easier code organization
    - Can use 'state' (another React system) -> easier to handle user input
    - Understands lifecycle events -> easier to do things when the app first starts
