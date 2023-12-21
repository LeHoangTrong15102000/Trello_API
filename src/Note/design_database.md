# Thiết kế schema Trello bằng MongoDB

## Collection board

```ts
interface Board {
  _id: String(require)
}
```

## Collection Column

```ts
interface Column {
  _id: String(require)
}
```

## Collection Card

```ts
interface Card {
  _id: String(require)
}
```

## Collection User

```ts
interface User {
  _id: String(require)
}
```

## Collection Invitation

```ts
interface Invitation {
  _id: String(require)
}
```
